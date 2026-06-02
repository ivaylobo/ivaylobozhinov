import { getContact, resolveLocale } from "@/graphql/siteData";

export const metadata = {
  title: "Contacts",
};

export default async function ContactPage({ searchParams }) {
  const { lang } = (await searchParams) ?? {};
  const contact = await getContact(resolveLocale(lang));

  return (
    <main className="page">
      <section className="contact-page">
        <div className="section-heading section-heading--wide">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h1>{contact.title}</h1>
          <p>{contact.intro}</p>
        </div>

        <div className="contact-list">
          {contact.links.map((link) => (
            <a
              key={link.label}
              className="contact-item"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
