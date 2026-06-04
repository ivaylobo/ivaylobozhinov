export const defaultLocale = "en";
export const supportedLocales = ["en", "bg"];

export function resolveLocale(value) {
  return supportedLocales.includes(value) ? value : defaultLocale;
}

export function localeQuery(locale) {
  return locale === defaultLocale ? {} : { lang: locale };
}

function text(value, locale) {
  if (typeof value === "string") {
    return value;
  }

  return value[locale] ?? value[defaultLocale] ?? "";
}

function textList(value, locale) {
  return value[locale] ?? value[defaultLocale] ?? [];
}

function makeImages({ folder, extension, count, title }) {
  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;

    return {
      number,
      src: `/${folder}/${number}.${extension}`,
      alt: `${title}, photograph ${number}`,
      caption: `${title} / ${String(number).padStart(2, "0")}`,
    };
  });
}

export const siteContent = {
  languages: {
    en: "EN",
    bg: "BG",
  },
  site: {
    name: {
      en: "Ivaylo Bozhinov",
      bg: "Ивайло Божинов",
    },
    url: "https://ivaylobozhinov.com",
    location: {
      en: "Sofia, Bulgaria",
      bg: "София, България",
    },
    intro: {
      en: "A personal archive of documentary and authored photographic series, arranged as clear galleries for viewing and sharing.",
      bg: "Личен архив от документални и авторски фотографски серии, подредени като ясни галерии за разглеждане и споделяне.",
    },
    footer: "© Ivaylo Bozhinov",
  },
  labels: {
    en: {
      projects: "Projects",
      openProject: "Open series",
      photographs: "photographs",
      allPhotos: "All photographs",
      backToProjects: "All projects",
      backToGallery: "Back to all photographs",
      previous: "Previous photograph",
      next: "Next photograph",
      shareToFacebook: "Share to Facebook",
      about: "About",
      contacts: "Contacts",
      selectedWorks: "Selected series",
      location: "Location",
      language: "Language",
      notFoundTitle: "Page not found",
      notFoundText: "This series or page does not exist.",
    },
    bg: {
      projects: "Проекти",
      openProject: "Отвори серията",
      photographs: "снимки",
      allPhotos: "Всички снимки",
      backToProjects: "Всички проекти",
      backToGallery: "Върни към всички снимки",
      previous: "Предишна снимка",
      next: "Следваща снимка",
      shareToFacebook: "Сподели във Facebook",
      about: "За мен",
      contacts: "Контакти",
      selectedWorks: "Избрани серии",
      location: "Локация",
      language: "Език",
      notFoundTitle: "Страницата не е намерена",
      notFoundText: "Тази серия или страница не съществува.",
    },
  },
  about: {
    title: {
      en: "About",
      bg: "За мен",
    },
    eyebrow: {
      en: "About the author",
      bg: "За автора",
    },
    portrait: "/about/BozhinovIvaylo.JPG",
    recognitionIntro: {
      en: "Selected recognitions and competition features by year:",
      bg: "Избрани отличия и участия по години:",
    },
    recognitions: {
      en: [
        "Photo Academica — Bulgaria, Winner, 2026",
        "Photojournalism Prize — Shortlisted, 2026",
        "Photo Academica — Bulgaria, Winner, 2025",
        "Monovisions Awards — Honorable Mention, Conceptual Series, 2025",
        "International Photography Awards (IPA) — Official Selection, 2024",
        "International Photography Awards (IPA) — Honorable Mention, 2023",
        "Monovisions Awards — Honorable Mention, Conceptual Series, 2022",
        "Photo of the Year (Canon Bulgaria) — 2008",
        "Konica Minolta — Bulgaria, 2003",
        "Earth and People — Bulgaria, 2000",
        "Photo (France) — competition, 1999",
      ],
      bg: [
        "Photo Academica — България, победител, 2026",
        "Photojournalism Prize — кратък списък, 2026",
        "Photo Academica — България, победител, 2025",
        "Monovisions Awards — почетно отличие, Conceptual Series, 2025",
        "International Photography Awards (IPA) — официална селекция, 2024",
        "International Photography Awards (IPA) — почетно отличие, 2023",
        "Monovisions Awards — почетно отличие, Conceptual Series, 2022",
        "Photo of the Year (Canon Bulgaria) — 2008",
        "Konica Minolta — България, 2003",
        "Earth and People — България, 2000",
        "Photo (France) — конкурс, 1999",
      ],
    },
    body: {
      en: [
        "I am a Sofia-based photographer working across documentary and authored photographic series. My projects are shaped by observation, place, and the quiet presence of people within their environments.",
        "I hold a Master's degree in Photography from the National Academy of Art, Sofia.",
        "I am also part of the team behind Phodar Biennial, the international photographic festival held in Sofia, where I have worked both as a co-organizer and as a jury member.",
      ],
      bg: [
        "Аз съм фотограф, базиран в София, и работя в полето на документалните и авторските фотографски серии. Проектите ми се изграждат около наблюдението, мястото и тихото човешко присъствие в средата.",
        "Имам магистърска степен по фотография от Националната художествена академия в София.",
        "Също така съм част от екипа на Phodar Biennial — международния фотографски фестивал, който се провежда в София, където съм работил както като съорганизатор, така и като член на жури.",
      ],
    },
  },
  contact: {
    title: {
      en: "Contacts",
      bg: "Контакти",
    },
    eyebrow: {
      en: "Get in touch",
      bg: "Контакти",
    },
    intro: {
      en: "For exhibitions, publications, prints, or conversations around the work, use the contacts below.",
      bg: "За изложби, публикации, принтове или разговор около проектите можеш да използваш контактите по-долу.",
    },
    links: [
      {
        label: "Phone",
        value: "+359 88 000 0000",
        href: "tel:+359880000000",
      },
      {
        label: "Instagram",
        value: "@ivaylobozhinov",
        href: "https://www.instagram.com/ivaylobozhinov",
      },
      {
        label: "Facebook",
        value: "Ivaylo Bozhinov",
        href: "https://www.facebook.com/ivaylobozhinov",
      },
    ],
  },
  projects: [
    {
      slug: "between-the-waters",
      title: "Between the Waters",
      year: "2026",
      location: {
        en: "Bulgarian Black Sea Coast",
        bg: "Българско Черноморие",
      },
      folder: "between_the_waters",
      cover: "/between_the_waters/1.jpg",
      summary: {
        en: "A black-and-white series about coastal rituals, bodies in water, and brief pauses between the sea and the shore.",
        bg: "Черно-бяла серия за крайбрежни ритуали, тела във вода и кратки паузи между морето и брега.",
      },
      description: {
        en: "Between the Waters follows spaces where the sea, the pool, and the human body meet. The series looks for the quiet tension between rest, observation, and transience.",
        bg: "Between the Waters проследява пространства, в които морето, басейнът и човешкото тяло се срещат. Серията търси тихото напрежение между почивка, наблюдение и преходност.",
      },
      images: makeImages({
        folder: "between_the_waters",
        extension: "jpg",
        count: 10,
        title: "Between the Waters",
      }),
    },
    {
      slug: "dolni-bogrov",
      title: "The Flea Market in Dolni Bogrov",
      year: "2026",
      location: {
        en: "Dolni Bogrov",
        bg: "Долни Богров",
      },
      folder: "bogorov",
      cover: "/bogorov/1.jpg",
      summary: {
        en: "A documentary look at the Sunday market near Sofia, where trade, animals, and human stories intersect.",
        bg: "Документален поглед към неделния пазар край София, където търговия, животни и човешки истории се преплитат.",
      },
      description: {
        en: "Every Sunday, the field near the village comes alive as a market, a stage, and a social archive. The series looks at the paradoxes of the place: poverty and abundance, mud and commerce, laughter and weariness.",
        bg: "Всяка неделя полето край селото оживява като пазар, сцена и социален архив. Серията търси парадоксите на това място: бедност и изобилие, кал и търговия, смях и умора.",
      },
      images: makeImages({
        folder: "bogorov",
        extension: "jpg",
        count: 10,
        title: "The Flea Market in Dolni Bogrov",
      }),
    },
    {
      slug: "nevermore",
      title: "Nevermore",
      year: "2026",
      location: {
        en: "Sofia",
        bg: "София",
      },
      folder: "nevermore",
      cover: "/nevermore/1.jpg",
      summary: {
        en: "A black-and-white series with a masked figure that turns the cityscape into a theatrical and slightly unsettling space.",
        bg: "Черно-бяла серия с маскиран персонаж, който превръща градския пейзаж в театрално и леко тревожно пространство.",
      },
      description: {
        en: "Nevermore uses the masked figure as a presence between document and staging. The photographs work with silence, costume, and the urban environment.",
        bg: "Nevermore използва фигурата на маскирания персонаж като присъствие между документ и постановка. Кадрите работят с тишина, костюм и градска среда.",
      },
      images: makeImages({
        folder: "nevermore",
        extension: "jpg",
        count: 11,
        title: "Nevermore",
      }),
    },
  ],
};

export const headerContent = {
  languages: siteContent.languages,
  siteName: siteContent.site.name,
  navigation: {
    en: [
      { label: siteContent.labels.en.projects, href: "/" },
      { label: siteContent.labels.en.about, href: "/about" },
      { label: siteContent.labels.en.contacts, href: "/contact" },
    ],
    bg: [
      { label: siteContent.labels.bg.projects, href: "/" },
      { label: siteContent.labels.bg.about, href: "/about" },
      { label: siteContent.labels.bg.contacts, href: "/contact" },
    ],
  },
};

function localizeProject(project, locale) {
  return {
    ...project,
    location: text(project.location, locale),
    summary: text(project.summary, locale),
    description: text(project.description, locale),
  };
}

export async function getSite(locale = defaultLocale) {
  return {
    ...siteContent.site,
    name: text(siteContent.site.name, locale),
    location: text(siteContent.site.location, locale),
    intro: text(siteContent.site.intro, locale),
  };
}

export async function getLabels(locale = defaultLocale) {
  return siteContent.labels[locale] ?? siteContent.labels[defaultLocale];
}

export async function getNavigation(locale = defaultLocale) {
  return headerContent.navigation[locale] ?? headerContent.navigation[defaultLocale];
}

export async function getProjects(locale = defaultLocale) {
  return siteContent.projects.map((project) => localizeProject(project, locale));
}

export async function getProjectBySlug(slug, locale = defaultLocale) {
  const project = siteContent.projects.find((item) => item.slug === slug);

  return project ? localizeProject(project, locale) : null;
}

export async function getAbout(locale = defaultLocale) {
  return {
    ...siteContent.about,
    title: text(siteContent.about.title, locale),
    eyebrow: text(siteContent.about.eyebrow, locale),
    recognitionIntro: text(siteContent.about.recognitionIntro, locale),
    recognitions: textList(siteContent.about.recognitions, locale),
    body: textList(siteContent.about.body, locale),
  };
}

export async function getContact(locale = defaultLocale) {
  return {
    ...siteContent.contact,
    title: text(siteContent.contact.title, locale),
    eyebrow: text(siteContent.contact.eyebrow, locale),
    intro: text(siteContent.contact.intro, locale),
  };
}
