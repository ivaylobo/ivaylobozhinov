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
      <section className="intro">
        <div className="intro__copy">
          <p className="eyebrow">{labels.selectedWorks}</p>
          <h1>{site.name}</h1>
          <p>{site.intro}</p>
        </div>
        <dl className="intro__meta" aria-label="Portfolio details">
          <div>
            <dt>{labels.selectedWorks}</dt>
            <dd>{projects.length}</dd>
          </div>
          <div>
            <dt>{labels.location}</dt>
            <dd>{site.location}</dd>
          </div>
        </dl>
      </section>

      <section className="project-index" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="eyebrow">{labels.projects}</p>
          <h2 id="projects-title">{labels.selectedWorks}</h2>
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
