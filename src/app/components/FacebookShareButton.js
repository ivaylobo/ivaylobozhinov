"use client";

import { defaultLocale } from "@/graphql/siteData";

export default function FacebookShareButton({ label, locale = defaultLocale }) {
  function handleShare() {
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = "";

    if (locale !== defaultLocale) {
      url.searchParams.set("lang", locale);
    }

    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url.toString()
      )}`,
      "_blank",
      "noopener,noreferrer,width=720,height=520"
    );
  }

  return (
    <button type="button" className="share-button" onClick={handleShare}>
      {label}
    </button>
  );
}
