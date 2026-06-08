"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import {
  defaultLocale,
  headerContent,
  resolveLocale,
} from "@/graphql/siteData";

function withLocale(href, locale) {
  if (locale === defaultLocale) {
    return href;
  }

  return {
    pathname: href,
    query: { lang: locale },
  };
}

function currentPathWithLocale(pathname, search, locale) {
  const params = new URLSearchParams(search);

  if (locale === defaultLocale) {
    params.delete("lang");
  } else {
    params.set("lang", locale);
  }

  const query = params.toString();

  return query ? `${pathname}?${query}` : pathname;
}

function isActiveNavigationItem(pathname, href) {
  if (href === "/") {
    return pathname === "/" || pathname.startsWith("/projects");
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const resolvedSearch = searchParams.toString();
  const resolvedParams = new URLSearchParams(resolvedSearch);
  const locale = resolveLocale(resolvedParams.get("lang"));
  const navigation = headerContent.navigation[locale];
  const siteName = headerContent.siteName[locale];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          className="site-brand"
          href={withLocale("/", locale)}
          aria-label={siteName}
        >
          <span className="site-brand__mark" aria-hidden="true">
            <Image src="/brand-mark.svg" alt="" width={42} height={42} />
          </span>
          <span className="site-brand__text">
            <span>{siteName}</span>
          </span>
        </Link>

        <div className="site-header__controls">
          <nav className="site-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={withLocale(item.href, locale)}
                className={`site-nav__link ${
                  isActiveNavigationItem(pathname, item.href)
                    ? "site-nav__link--active"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="language-nav" aria-label="Language">
            {Object.entries(headerContent.languages).map(([code, label]) => (
              <Link
                key={code}
                href={currentPathWithLocale(pathname, resolvedSearch, code)}
                className={`language-nav__link ${
                  locale === code ? "language-nav__link--active" : ""
                }`}
                aria-current={locale === code ? "true" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
