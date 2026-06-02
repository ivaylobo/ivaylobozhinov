"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { localeQuery, resolveLocale } from "@/graphql/siteData";

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
              className="gallery-thumb"
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

  const previousImage =
    project.images[
      (activeIndex - 1 + project.images.length) % project.images.length
    ];
  const nextImage = project.images[(activeIndex + 1) % project.images.length];

  return (
    <section className="viewer" aria-label={activeImage.caption}>
      <div className="viewer__top">
        <Link
          href={projectHref(project, locale)}
          scroll={false}
          className="text-link"
        >
          {labels.backToGallery}
        </Link>
        <span>
          {activeIndex + 1} / {project.images.length}
        </span>
      </div>

      <div className="viewer__stage">
        <Link
          href={projectHref(project, locale, previousImage.number)}
          scroll={false}
          className="carousel-button carousel-button--prev"
          aria-label={labels.previous}
        >
          &lt;
        </Link>

        <figure className="viewer__image">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="100vw"
            className="image-contain"
            loading="eager"
            fetchPriority="high"
          />
        </figure>

        <Link
          href={projectHref(project, locale, nextImage.number)}
          scroll={false}
          className="carousel-button carousel-button--next"
          aria-label={labels.next}
        >
          &gt;
        </Link>
      </div>

      <div className="viewer__caption">
        <p>{activeImage.caption}</p>
        <div className="viewer__strip" aria-label={labels.allPhotos}>
          {project.images.map((image) => (
            <Link
              key={image.src}
              href={projectHref(project, locale, image.number)}
              scroll={false}
              className={`viewer__dot ${
                image.number === activeImage.number ? "viewer__dot--active" : ""
              }`}
              aria-label={`${project.title}, ${image.number}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
