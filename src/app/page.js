import Image from "next/image";
import Link from "next/link";
import {
  defaultLocale,
  getLabels,
  getProjects,
  getSite,
  localeQuery,
  resolveLocale,
} from "@/graphql/siteData";

export default async function Home({ searchParams }) {
  const { lang } = (await searchParams) ?? {};
  const locale = resolveLocale(lang);
  const [site, labels, projects] = await Promise.all([
    getSite(locale),
    getLabels(locale),
    getProjects(locale),
  ]);
  const query = localeQuery(locale);

  return (
    <main className="page">
      <section className="intro intro--solo">
        <div className="intro__copy">
          <p>{site.intro}</p>
        </div>
      </section>

      <section className="project-index" aria-labelledby="projects-title">
        <div className="section-heading">
          <h1 id="projects-title" className="project-index__title">
            {labels.selectedWorks}
          </h1>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={
                locale === defaultLocale
                  ? `/projects/${project.slug}`
                  : {
                      pathname: `/projects/${project.slug}`,
                      query,
                    }
              }
              className="project-card"
              aria-label={`${labels.openProject}: ${project.title}`}
            >
              <figure className="project-card__image">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                  className="image-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              </figure>
              <div className="project-card__body">
                <div>
                  <p className="project-card__meta">
                    {project.location} / {project.year}
                  </p>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.summary}</p>
                <span className="project-card__count">
                  {project.images.length} {labels.photographs}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
