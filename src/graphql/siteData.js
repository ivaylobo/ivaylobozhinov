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

function makeImages({ folder, extension, count, title, portrait = [] }) {
  const portraitNumbers = new Set(portrait);

  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;

    return {
      number,
      src: `/${folder}/${number}.${extension}`,
      alt: `${title}, photograph ${number}`,
      caption: `${title} / ${String(number).padStart(2, "0")}`,
      orientation: portraitNumbers.has(number) ? "portrait" : "landscape",
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
      en: "A personal archive of documentary and authored photographic series.",
      bg: "Личен архив от документални и авторски фотографски серии.",
    },
    shareImage: {
      url: "/bogorov/10.jpg",
      width: 1200,
      height: 800,
      alt: "The Flea Market in Dolni Bogrov, photograph 10",
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
      selectedWorks: "Series",
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
      selectedWorks: "Серии",
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
        "Photo of the Year (Canon Bulgaria) — Shortlisted, 2008",
        "Konica Minolta — Bulgaria, Shortlisted, 2003",
        "Earth and People — Bulgaria, Shortlisted, 2000",
        "Photo (France) — competition, Shortlisted, 1999",
      ],
      bg: [
        "Photo Academica — България, победител, 2026",
        "Photojournalism Prize — селектиран, 2026",
        "Photo Academica — България, победител, 2025",
        "Monovisions Awards — почетно отличие, Conceptual Series, 2025",
        "International Photography Awards (IPA) — официална селекция, 2024",
        "International Photography Awards (IPA) — почетно отличие, 2023",
        "Monovisions Awards — почетно отличие, Conceptual Series, 2022",
        "Photo of the Year (Canon Bulgaria) — селектиран, 2008",
        "Konica Minolta — България, селектиран, 2003",
        "Earth and People — България, селектиран, 2000",
        "Photo (France) — конкурс, селектиран, 1999",
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
        value: "+359 885 040 418",
        href: "tel:+359885040418",
      },
      {
        label: "Email",
        value: "ivailobo@gmail.com",
        href: "mailto:ivailobo@gmail.com",
      },
      {
        label: "Instagram",
        value: "@ivaylo_bozhinov",
        href: "https://www.instagram.com/ivaylo_bozhinov/",
      },
      {
        label: "Facebook",
        value: "Ivaylo Bozhinov",
        href: "https://www.facebook.com/ivailobo/",
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
      shareImage: {
        url: "/between_the_waters/1.jpg",
        width: 2000,
        height: 1333,
        alt: "Between the Waters, photograph 1",
      },
      summary: {
        en: "A black-and-white series about coastal rituals, bodies in water, and brief pauses between the sea and the shore.",
        bg: "Черно-бяла серия за крайбрежни ритуали, тела във вода и кратки паузи между морето и брега.",
      },
      description: {
        en: [
          "Between the sea and the mineral pool lies a place without a clear definition. Built in the 1970s, the bath remains open and free to the public, sustained today through the care of volunteers.",
          "People come here not so much to swim, but to remain — submerged, slowed, at rest.",
          "In this boundary between two waters, bodies gradually relax, and the differences between them begin to fade.",
          "Outside the water, everyone carries their own weight. Here, it temporarily dissolves.",
          "In recent years, there has been growing interest from local business interests to acquire and redevelop the site. Yet the space continues to exist through a shared resistance — a collective refusal to let it be taken.",
        ],
        bg: [
          "Между морето и минералния басейн има място без ясна дефиниция. Построена през 70-те години, банята остава отворена и безплатна за всички, поддържана днес чрез грижата на доброволци.",
          "Хората идват тук не толкова за да плуват, колкото за да останат — потопени, забавени, в покой.",
          "В тази граница между две води телата постепенно се отпускат и различията между тях започват да избледняват.",
          "Извън водата всеки носи собствената си тежест. Тук тя временно се разтваря.",
          "През последните години има нарастващ интерес от местни бизнеси да придобият и преустроят мястото. Но пространството продължава да съществува благодарение на споделена съпротива — колективен отказ да бъде отнето.",
        ],
      },
      images: makeImages({
        folder: "between_the_waters",
        extension: "jpg",
        count: 10,
        title: "Between the Waters",
        portrait: [2, 4],
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
      shareImage: {
        url: "/bogorov/1.jpg",
        width: 1200,
        height: 800,
        alt: "The Flea Market in Dolni Bogrov, photograph 1",
      },
      summary: {
        en: "A documentary look at the Sunday market near Sofia, where trade, animals, and human stories intersect.",
        bg: "Документален поглед към неделния пазар край София, където търговия, животни и човешки истории се преплитат.",
      },
      description: {
        en: [
          "Every Sunday the field by the village comes alive - a place where centuries-old tradition and today's everyday life intertwine. Once known as the largest livestock market around Sofia, today it is at once a flea market, an exhibition, and a stage for human stories. Between cages with birds and dogs, piles of carpets and lace, mirrors and tools, the market brings together people who trade not only goods, but also time, presence, and memories.",
          "This series seeks out the paradoxes - poverty and abundance, mud and commerce, laughter and weariness - to reveal the living rhythm of a place that continues to breathe on the edge of the city.",
        ],
        bg: [
          "Всяка неделя полето край селото оживява - място, където вековна традиция и днешно ежедневие се преплитат. Някога известно като най-големия животински пазар около София, днес то е едновременно битак, изложение и сцена за човешки истории. Между клетки с птици и кучета, купчини килими и дантели, огледала и инструменти, пазарът събира хора, които търгуват не само със стоки, но и с време, присъствие и спомени.",
          "Тази серия търси парадоксите - бедност и изобилие, кал и търговия, смях и умора - за да разкрие живия ритъм на място, което продължава да диша на ръба на града.",
        ],
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
      year: "2025",
      location: {
        en: "Sofia",
        bg: "София",
      },
      folder: "nevermore",
      cover: "/nevermore/1.jpg",
      shareImage: {
        url: "/nevermore/1.jpg",
        width: 800,
        height: 1200,
        alt: "Nevermore, photograph 1",
      },
      summary: {
        en: "A black-and-white series with a masked figure that turns the cityscape into a theatrical and slightly unsettling space.",
        bg: "Черно-бяла серия с маскиран персонаж, който превръща градския пейзаж в театрално и леко тревожно пространство.",
      },
      description: {
        en: [
          "Not a face, but an idea; not a body, but a shadow. The raven, that old acquaintance, has become the embodiment of the human soul - torn between light and darkness, between reality and imagination.",
          "It does not ask questions, nor does it seek answers. Instead, its presence whispers unspoken words that float in the air like restless souls. Every step is marked by the echo of \"nevermore,\" a reminder that somewhere, sometime, something was lost forever.",
          "Darkness is its home, but not because it is malicious. It is simply a bearer of memory, of something that cannot be retrieved. The raven rises above life and death, between memory and forgetfulness, between dreams and fears. Its call is silent, yet piercing, and in its presence, the weight of the inevitable is felt.",
          "\"Nevermore\" is the cry of everything we've lost along the way, echoing into eternity. In that cry lies both the pain and the beauty of human existence - a never-ending flight through the night, where we are never alone, yet always alone.",
          "And as the echo fades, something still remains - something that cannot be forgotten, something that will continue to live in the shadows of our minds, whispering its sad but inevitable truth: \"Nevermore.\"",
          "This photographic series is inspired by Edgar Allan Poe's poem \"The Raven.\"",
        ],
        bg: [
          "Не лице, а идея; не тяло, а сянка. Гарванът, този стар познайник, се превръща във въплъщение на човешката душа - разкъсана между светлина и мрак, между реалност и въображение.",
          "Той не задава въпроси и не търси отговори. Вместо това присъствието му нашепва неизречени думи, които плуват във въздуха като неспокойни души. Всяка стъпка е белязана от ехото на \"nevermore\" - напомняне, че някъде, някога, нещо е било изгубено завинаги.",
          "Мракът е негов дом, но не защото е злонамерен. Той просто носи паметта за нещо, което не може да бъде върнато. Гарванът се издига над живота и смъртта, между паметта и забравата, между сънищата и страховете. Неговият зов е безмълвен, но пронизващ, и в присъствието му се усеща тежестта на неизбежното.",
          "\"Nevermore\" е викът на всичко, което сме изгубили по пътя, отекващ във вечността. В този вик има и болката, и красотата на човешкото съществуване - безкраен полет през нощта, в който никога не сме сами, но винаги сме сами.",
          "И когато ехото заглъхне, нещо все пак остава - нещо, което не може да бъде забравено, нещо, което ще продължи да живее в сенките на съзнанието ни, нашепвайки своята тъжна, но неизбежна истина: \"Nevermore.\"",
          "Тази фотографска серия е вдъхновена от поемата \"Гарванът\" на Едгар Алън По.",
        ],
      },
      images: makeImages({
        folder: "nevermore",
        extension: "jpg",
        count: 11,
        title: "Nevermore",
        portrait: [1, 5, 11],
      }),
    },
    {
      slug: "buffer-space",
      title: {
        en: "Buffer space",
        bg: "Буферно пространство",
      },
      year: "2018",
      location: {
        en: "Sofia",
        bg: "София",
      },
      folder: "buffer_space",
      cover: "/buffer_space/1.jpg",
      shareImage: {
        url: "/buffer_space/1.jpg",
        width: 1000,
        height: 714,
        alt: "Buffer space, photograph 1",
      },
      summary: {
        en: "A photographic series about the intangible spaces that give meaning to ordinary, seemingly concrete things.",
        bg: "Фотографска серия за неуловимите пространства, които придават смисъл на обикновените, привидно конкретни неща.",
      },
      description: {
        en: [
          "People believe that essential things are concrete. They can be named, and even if they are not material, they are tangible and real. Sometimes, however, the key element that gives meaning turns out to be unfathomable. Like the pauses in the music, or the conversations about the weather with the morning coffee.",
        ],
        bg: [
          "Хората вярват, че съществените неща са конкретни. Те могат да бъдат назовани и дори когато не са материални, са осезаеми и реални. Понякога обаче ключовият елемент, който придава смисъл, се оказва неуловим. Като паузите в музиката или разговорите за времето на сутрешното кафе.",
        ],
      },
      images: makeImages({
        folder: "buffer_space",
        extension: "jpg",
        count: 10,
        title: "Buffer space",
      }),
    },
    {
      slug: "breath-out",
      title: {
        en: "Breath out",
        bg: "Издишай",
      },
      year: "2023",
      location: {
        en: "Sofia",
        bg: "София",
      },
      folder: "breath_out",
      cover: "/breath_out/1.jpg",
      shareImage: {
        url: "/breath_out/1.jpg",
        width: 1200,
        height: 800,
        alt: "Breath out, photograph 1",
      },
      summary: {
        en: "A nocturnal series about smoke, gray words, and the city air that absorbs them.",
        bg: "Нощна серия за дима, сивите думи и градския въздух, който ги поема.",
      },
      description: {
        en: [
          "Smoke drifts lightly and ethereally through the air, like a speech bubble in a comic strip beginning at my cigarette. For a moment, it looks innocent, almost beautiful.",
          "Countless empty gray bubbles gather above the rooftops and slowly fill the sky, as if someone were trying to say something.",
          "Gray words from gray everyday life rise and mingle with the breath of the chimneys.",
          "And the air takes them in.",
        ],
        bg: [
          "Димът се стели леко и ефирно във въздуха, като балонче на комикс, започващо от цигарата ми. За миг изглежда невинен, почти красив.",
          "Безброй празни, сиви балончета се събират над покривите и бавно изпълват небето, сякаш някой се опитва да каже нещо.",
          "Сиви думи от сивото ежедневие се издигат и се смесват с дъха на комините.",
          "И въздухът ги поема.",
        ],
      },
      images: makeImages({
        folder: "breath_out",
        extension: "jpg",
        count: 10,
        title: "Breath out",
      }),
    },
    {
      slug: "seaside-stories",
      title: "Seaside stories",
      year: "2025",
      location: {
        en: "Various coastlines",
        bg: "Различни крайбрежия",
      },
      folder: "seaside_stories",
      cover: "/seaside_stories/1.jpg",
      shareImage: {
        url: "/seaside_stories/1.jpg",
        width: 1200,
        height: 798,
        alt: "Seaside stories, photograph 1",
      },
      summary: {
        en: "An ongoing series exploring the quiet tensions, humor, and choreography of everyday life by the sea.",
        bg: "Продължаваща серия, която изследва тихите напрежения, хумора и хореографията на ежедневието край морето.",
      },
      description: {
        en: [
          "Seaside Stories is an ongoing series of photographs made across different coastlines and summers. Without following a fixed narrative, the work explores the quiet tensions, humor, and choreography of everyday life by the sea.",
        ],
        bg: [
          "Seaside Stories е продължаваща серия от фотографии, заснети по различни крайбрежия и през различни лета. Без да следва фиксиран разказ, работата изследва тихите напрежения, хумора и хореографията на ежедневието край морето.",
        ],
      },
      images: makeImages({
        folder: "seaside_stories",
        extension: "jpg",
        count: 11,
        title: "Seaside stories",
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
    title: text(project.title, locale),
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
