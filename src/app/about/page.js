import Image from "next/image";
import { getAbout, resolveLocale } from "@/graphql/siteData";

export const metadata = {
  title: "About",
};

export default async function AboutPage({ searchParams }) {
  const { lang } = (await searchParams) ?? {};
  const about = await getAbout(resolveLocale(lang));

  return (
    <main className="page">
      <section className="content-split">
        <div className="content-split__copy">
          <p className="eyebrow">{about.eyebrow}</p>
          <h1>{about.title}</h1>
          {about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <figure className="content-split__image">
          <Image
            src={about.portrait}
            alt="Ивайло Божинов"
            fill
            sizes="(max-width: 820px) 100vw, 42vw"
            className="image-cover"
          />
        </figure>
      </section>
    </main>
  );
}
