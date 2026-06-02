import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <section className="empty-state">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>This series or page does not exist.</p>
        <Link href="/" className="text-link">
          All projects
        </Link>
      </section>
    </main>
  );
}
