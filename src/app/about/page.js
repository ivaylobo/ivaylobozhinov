import { getAbout, resolveLocale } from "@/graphql/siteData";

export const metadata = {
  title: "About",
};

export default async function AboutPage({ searchParams }) {
  const { lang } = (await searchParams) ?? {};
  const about = await getAbout(resolveLocale(lang));

  return (
    <main className="page">
      <section className="content-split content-split--single">
        <div className="content-split__copy">
          <p className="eyebrow">{about.eyebrow}</p>
          <h1>{about.title}</h1>
          <p>{about.recognitionIntro}</p>
          <ul className="about-awards">
            {about.recognitions.map((recognition) => (
              <li key={recognition}>{recognition}</li>
            ))}
          </ul>
          {about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
