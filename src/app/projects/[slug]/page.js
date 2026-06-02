import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import FacebookShareButton from "@/app/components/FacebookShareButton";
import GalleryExperience from "@/app/components/GalleryExperience";
import {
  defaultLocale,
  getLabels,
  getProjectBySlug,
  getProjects,
  localeQuery,
  resolveLocale,
  siteContent,
} from "@/graphql/siteData";

export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params, searchParams }) {
  const { slug } = await params;
  const { lang } = (await searchParams) ?? {};
  const project = await getProjectBySlug(slug, resolveLocale(lang));

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      url: `/projects/${project.slug}`,
      siteName: siteContent.site.name.en,
      images: [project.cover],
    },
  };
}

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

function GalleryFallback({ project, labels, locale }) {
  return (
    <section className="gallery-section" aria-labelledby="gallery-fallback-title">
      <div className="gallery-heading">
        <div>
          <p className="eyebrow">{labels.allPhotos}</p>
          <h2 id="gallery-fallback-title">{project.title}</h2>
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

export default async function ProjectPage({ params, searchParams }) {
  const { slug } = await params;
  const { lang } = (await searchParams) ?? {};
  const locale = resolveLocale(lang);
  const [project, labels] = await Promise.all([
    getProjectBySlug(slug, locale),
    getLabels(locale),
  ]);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">
      <section className="project-hero">
        <figure className="project-hero__image">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="100vw"
            className="image-cover"
            loading="eager"
            fetchPriority="high"
          />
        </figure>

        <div className="project-hero__copy">
          <Link
            href={locale === defaultLocale ? "/" : { pathname: "/", query: localeQuery(locale) }}
            className="text-link"
          >
            {labels.backToProjects}
          </Link>
          <p className="eyebrow">
            {project.location} / {project.year}
          </p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <FacebookShareButton label={labels.shareToFacebook} locale={locale} />
        </div>
      </section>

      <Suspense
        fallback={
          <GalleryFallback project={project} labels={labels} locale={locale} />
        }
      >
        <GalleryExperience project={project} labels={labels} locale={locale} />
      </Suspense>
    </main>
  );
}
