"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { A11y, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { localeQuery, resolveLocale } from "@/graphql/siteData";
import "swiper/css";
import "swiper/css/pagination";

function projectHref(project, locale, photoNumber) {
  const query = {
    ...localeQuery(locale),
    ...(photoNumber ? { photo: photoNumber } : {}),
  };

  if (Object.keys(query).length === 0) {
    return `/projects/${project.slug}`;
  }

  return {
    pathname: `/projects/${project.slug}`,
    query,
  };
}

function viewerPath(project, locale, photoNumber) {
  const params = new URLSearchParams(localeQuery(locale));
  params.set("photo", String(photoNumber));

  return `/projects/${project.slug}?${params.toString()}`;
}

function replaceViewerUrl(project, locale, photoNumber) {
  if (typeof window === "undefined") {
    return;
  }

  const nextPath = viewerPath(project, locale, photoNumber);
  const currentPath = `${window.location.pathname}${window.location.search}`;

  if (nextPath !== currentPath) {
    window.history.replaceState(window.history.state, "", nextPath);
    window.dispatchEvent(new Event("viewer:url-change"));
  }
}

function galleryThumbClassName(image) {
  return [
    "gallery-thumb",
    image.orientation === "portrait" ? "gallery-thumb--portrait" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function CarouselControls({ labels }) {
  const swiper = useSwiper();

  return (
    <>
      <button
        type="button"
        className="carousel-button carousel-button--prev"
        aria-label={labels.previous}
        onClick={() => swiper.slidePrev()}
      >
        <div className="carousel-button__arrow" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="carousel-button carousel-button--next"
        aria-label={labels.next}
        onClick={() => swiper.slideNext()}
      >
        <div className="carousel-button__arrow" aria-hidden="true" />
      </button>
    </>
  );
}

export default function GalleryExperience({
  project,
  labels,
  locale: serverLocale,
}) {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get("lang") ?? serverLocale);
  const photoParam = searchParams.get("photo");
  const requestedNumber = Number.parseInt(photoParam ?? "", 10);
  const activeIndex = project.images.findIndex(
    (image) => image.number === requestedNumber
  );
  const activeImage = activeIndex >= 0 ? project.images[activeIndex] : null;
  const [viewerState, setViewerState] = useState(() => ({
    routeIndex: activeIndex,
    currentIndex: activeIndex >= 0 ? activeIndex : 0,
  }));

  if (!activeImage) {
    return (
      <section className="gallery-section" aria-labelledby="gallery-title">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow">{labels.allPhotos}</p>
            <h2 id="gallery-title">{project.title}</h2>
          </div>
          <span>
            {project.images.length} {labels.photographs}
          </span>
        </div>

        <div className="gallery-grid">
          {project.images.map((image, index) => (
            <Link
              key={image.src}
              href={projectHref(project, locale, image.number)}
              scroll={false}
              className={galleryThumbClassName(image)}
              aria-label={`${project.title}, ${image.number}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 680px) 50vw, (max-width: 1080px) 33vw, 25vw"
                className="image-cover"
                loading={index < 4 ? "eager" : "lazy"}
              />
            </Link>
          ))}
        </div>
      </section>
    );
  }

  const currentIndex =
    viewerState.routeIndex === activeIndex
      ? viewerState.currentIndex
      : activeIndex;
  const currentImage = project.images[currentIndex] ?? activeImage;

  function handleSlideChange(swiper) {
    const nextIndex = swiper.realIndex;
    const nextImage = project.images[nextIndex];

    if (!nextImage) {
      return;
    }

    setViewerState({
      routeIndex: activeIndex,
      currentIndex: nextIndex,
    });
    replaceViewerUrl(project, locale, nextImage.number);
  }

  return (
    <section className="viewer" aria-label={currentImage.caption}>
      <div className="viewer__top">
        <Link
          href={projectHref(project, locale)}
          scroll={false}
          className="text-link"
        >
          {labels.backToGallery}
        </Link>
        <span>
          {currentIndex + 1} / {project.images.length}
        </span>
      </div>

      <div className="viewer__stage">
        <Swiper
          key={`${project.slug}-${activeImage.number}`}
          modules={[A11y, Keyboard, Pagination]}
          initialSlide={activeIndex}
          loop={project.images.length > 1}
          speed={420}
          slidesPerView={1}
          keyboard={{ enabled: true }}
          pagination={{
            bulletElement: "button",
            clickable: true,
          }}
          a11y={{
            prevSlideMessage: labels.previous,
            nextSlideMessage: labels.next,
          }}
          className="viewer__swiper"
          onSlideChange={handleSlideChange}
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={image.src} className="viewer__slide">
              <figure className="viewer__image">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  className="image-contain"
                  loading={index === activeIndex ? "eager" : "lazy"}
                  fetchPriority={index === activeIndex ? "high" : undefined}
                />
              </figure>
            </SwiperSlide>
          ))}
          <CarouselControls labels={labels} />
        </Swiper>
      </div>

      <div className="viewer__caption">
        <p>{currentImage.caption}</p>
      </div>
    </section>
  );
}
