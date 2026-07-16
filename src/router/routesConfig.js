import { texts } from "./texts";
import { projectOverrides, projectOrder } from "./projectsData";
import { getImage, getImagesInDir } from "./images";

const titleFromFile = (file) => {
  const base = file.split("/").pop().replace(/\.[^/.]+$/, "");
  return base
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
};

const mergeDeep = (base, patch) => {
  if (!patch) return base;
  const out = Array.isArray(base) ? [...base] : { ...base };
  for (const [k, v] of Object.entries(patch)) {
    if (v && typeof v === "object" && !Array.isArray(v) && typeof out[k] === "object") {
      out[k] = mergeDeep(out[k], v);
    } else {
      out[k] = v;
    }
  }
  return out;
};

const defaultProjectI18n = (file, categoryDefaults = {}) => {
  const t = titleFromFile(file);

  return {
    nl: {
      title: t,
      description:
        "Ontwerp en productie in gerecycled karton. Strak, functioneel en volledig te personaliseren in uw huisstijl.",
      body:
        "Hilarius Design ontwerpt en produceert dit kartonnen product op maat voor relatiegeschenken, presentaties of merkactivaties. Het ontwerp wordt afgestemd op toepassing, formaat, bedrukking en gewenste uitstraling.\n\nGerecycled karton is licht, sterk en goed te bedrukken. Daardoor ontstaat een product dat praktisch is in productie en tegelijk herkenbaar blijft voor uw merk.",
      type: categoryDefaults?.nl?.type ?? "Relatiegeschenk / Karton",
      year: categoryDefaults?.nl?.year ?? "",
      materials: "Gerecycled karton"
    },
    en: {
      title: t,
      description:
        "Design and production in recycled board. Clean, functional and fully tailored to your brand.",
      body:
        "Hilarius Design designs and produces this cardboard product to order for corporate gifts, presentations or brand activations. The design is tailored to the use case, size, print and desired appearance.\n\nRecycled board is light, strong and easy to print. This creates a product that works well in production and remains recognizable for your brand.",
      type: categoryDefaults?.en?.type ?? "Corporate gift / Board",
      year: categoryDefaults?.en?.year ?? "",
      materials: "Recycled board"
    },
    de: {
      title: t,
      description:
        "Design und Produktion aus recycelter Pappe. Klar, funktional und vollständig an Ihre Marke anpassbar.",
      body:
        "Hilarius Design entwirft und produziert dieses Kartonprodukt nach Maß für Werbegeschenke, Präsentationen oder Markenaktionen. Das Design wird auf Einsatz, Format, Druck und gewünschte Wirkung abgestimmt.\n\nRecycelte Pappe ist leicht, stabil und gut bedruckbar. So entsteht ein Produkt, das in der Produktion praktisch ist und für Ihre Marke erkennbar bleibt.",
      type: categoryDefaults?.de?.type ?? "Werbegeschenk / Pappe",
      year: categoryDefaults?.de?.year ?? "",
      materials: "Recycelte Pappe"
    },
    fr: {
      title: t,
      description:
        "Conception et production en carton recyclé. Sobre, fonctionnel et entièrement adaptable à votre marque.",
      body:
        "Hilarius Design conçoit et produit ce produit en carton sur mesure pour des cadeaux d'affaires, des présentations ou des actions de marque. Le design est adapté à l'usage, au format, à l'impression et au rendu souhaité.\n\nLe carton recyclé est léger, solide et facile à imprimer. Il permet de créer un produit pratique à produire et clairement reconnaissable pour votre marque.",
      type: categoryDefaults?.fr?.type ?? "Cadeau d'affaires / Carton",
      year: categoryDefaults?.fr?.year ?? "",
      materials: "Carton recyclé"
    },
    es: {
      title: t,
      description:
        "Diseño y producción en cartón reciclado. Limpio, funcional y totalmente adaptable a su marca.",
      body:
        "Hilarius Design diseña y produce este producto de cartón a medida para regalos corporativos, presentaciones o activaciones de marca. El diseño se adapta al uso, formato, impresión y aspecto deseado.\n\nEl cartón reciclado es ligero, resistente y fácil de imprimir. Así se crea un producto práctico de producir y claramente reconocible para su marca.",
      type: categoryDefaults?.es?.type ?? "Regalo corporativo / Cartón",
      year: categoryDefaults?.es?.year ?? "",
      materials: "Cartón reciclado"
    }
  };
};

const makeProject = ({ id, category, file, i18n }) => {
  const cover = getImage(file);

  const parts = file.split("/").filter(Boolean);
  let images = [cover].filter(Boolean);

  if (parts.length >= 3) {
    const dir = parts.slice(0, 2).join("/") + "/";
    const fromDir = getImagesInDir(dir);
    if (fromDir.length) images = fromDir;
  }

  return {
    id,
    category,
    cover,
    images,
    i18n
  };
};

const slugify = (value) =>
  String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " en ")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const makeId = (file, i18n) => {
  const title = i18n?.nl?.title;
  const fromTitle = title ? slugify(title) : "";
  if (fromTitle) return fromTitle;

  return slugify(file.split("/").pop().replace(/\.[^/.]+$/, ""));
};

const buildCategoryProjects = (categorySlug, files, categoryDefaults) => {
  const ordered = projectOrder?.[categorySlug];
  const fileSet = new Set(files);

  const finalFiles = [];

  if (Array.isArray(ordered)) {
    for (const f of ordered) {
      if (fileSet.has(f)) finalFiles.push(f);
    }
  }

  const remaining = files
    .filter((f) => !finalFiles.includes(f))
    .sort((a, b) => a.localeCompare(b, "nl"));

  finalFiles.push(...remaining);

  const usedIds = new Map();

  return finalFiles.map((file) => {
    const baseI18n = defaultProjectI18n(file, categoryDefaults);
    const override = projectOverrides[file];

    const mergedI18n = mergeDeep(baseI18n, override?.i18n);
    const baseId = override?.id ?? makeId(file, mergedI18n);
    const count = usedIds.get(baseId) ?? 0;
    usedIds.set(baseId, count + 1);

    return makeProject({
      id: count === 0 ? baseId : `${baseId}-${count + 1}`,
      category: categorySlug,
      file,
      i18n: mergedI18n
    });
  });
};

const categoryContent = {
  transport: {
    nl: {
      intro: "Kartonnen transportmodellen maken van een fles, snoepverpakking of kleine attentie een herkenbaar merkobject. Hilarius Design ontwerpt vrachtwagens, auto's, treinen en vliegtuigen in gerecycled karton, bedrukt in uw huisstijl en geschikt als relatiegeschenk voor transport, logistiek en evenementen.",
      seoDescription: "Kartonnen transportmodellen zoals vrachtwagens, auto's, treinen en vliegtuigen als origineel relatiegeschenk in gerecycled karton.",
      imageAlt: "Kartonnen transportmodel als relatiegeschenk van Hilarius Design"
    },
    en: {
      intro: "Cardboard transport models turn a bottle, sweets package or small gift into a recognizable brand object. Hilarius Design designs trucks, cars, trains and aircraft in recycled board, printed in your corporate identity and made for logistics, transport and event gifts.",
      seoDescription: "Cardboard transport models such as trucks, cars, trains and aircraft as original corporate gifts in recycled board.",
      imageAlt: "Cardboard transport model corporate gift by Hilarius Design"
    },
    de: {
      intro: "Transportmodelle aus Karton machen aus einer Flasche, einer Süßigkeitenverpackung oder einer kleinen Aufmerksamkeit ein erkennbares Markenobjekt. Hilarius Design entwirft LKW, Autos, Züge und Flugzeuge aus recycelter Pappe, bedruckt in Ihrem Corporate Design.",
      seoDescription: "Transportmodelle aus Karton wie LKW, Autos, Züge und Flugzeuge als originelle Werbegeschenke aus recycelter Pappe.",
      imageAlt: "Transportmodell aus Karton als Werbegeschenk von Hilarius Design"
    },
    fr: {
      intro: "Les modèles de transport en carton transforment une bouteille, un emballage de friandises ou une petite attention en objet de marque reconnaissable. Hilarius Design conçoit camions, voitures, trains et avions en carton recyclé, imprimés à votre identité visuelle.",
      seoDescription: "Modèles de transport en carton, dont camions, voitures, trains et avions, comme cadeaux d'affaires en carton recyclé.",
      imageAlt: "Modèle de transport en carton comme cadeau d'affaires par Hilarius Design"
    },
    es: {
      intro: "Los modelos de transporte de cartón convierten una botella, un envase de dulces o un pequeño detalle en un objeto de marca reconocible. Hilarius Design diseña camiones, coches, trenes y aviones en cartón reciclado, impresos con su identidad visual.",
      seoDescription: "Modelos de transporte de cartón, como camiones, coches, trenes y aviones, para regalos corporativos en cartón reciclado.",
      imageAlt: "Modelo de transporte de cartón como regalo corporativo de Hilarius Design"
    }
  },
  "bureau-accessoires": {
    nl: {
      intro: "Bureau-accessoires van karton blijven zichtbaar op de werkplek. Kalenders, klokken, memobakjes en onderzetters zijn licht, stevig en volledig bedrukt, zodat uw merk dagelijks aanwezig is.",
      seoDescription: "Bureau-accessoires van gerecycled karton, waaronder kalenders, klokken, memobakjes en onderzetters op maat.",
      imageAlt: "Bureau-accessoire van gerecycled karton door Hilarius Design"
    },
    en: {
      intro: "Cardboard desk accessories stay visible in the workplace. Calendars, clocks, memo trays and coasters are lightweight, sturdy and fully printed, keeping your brand present every day.",
      seoDescription: "Desk accessories in recycled board, including custom calendars, clocks, memo trays and coasters.",
      imageAlt: "Recycled board desk accessory by Hilarius Design"
    },
    de: {
      intro: "Schreibtisch-Accessoires aus Karton bleiben am Arbeitsplatz sichtbar. Kalender, Uhren, Memo-Ablagen und Untersetzer sind leicht, stabil und vollständig bedruckt, sodass Ihre Marke jeden Tag präsent bleibt.",
      seoDescription: "Schreibtisch-Accessoires aus recycelter Pappe, darunter Kalender, Uhren, Memo-Ablagen und Untersetzer nach Maß.",
      imageAlt: "Schreibtisch-Accessoire aus recycelter Pappe von Hilarius Design"
    },
    fr: {
      intro: "Les accessoires de bureau en carton restent visibles sur le lieu de travail. Calendriers, horloges, bacs mémo et sous-verres sont légers, solides et entièrement imprimés, pour garder votre marque présente au quotidien.",
      seoDescription: "Accessoires de bureau en carton recyclé, dont calendriers, horloges, bacs mémo et sous-verres sur mesure.",
      imageAlt: "Accessoire de bureau en carton recyclé par Hilarius Design"
    },
    es: {
      intro: "Los accesorios de escritorio de cartón permanecen visibles en el lugar de trabajo. Calendarios, relojes, bandejas para notas y posavasos son ligeros, resistentes y están totalmente impresos, para mantener su marca presente cada día.",
      seoDescription: "Accesorios de escritorio en cartón reciclado, como calendarios, relojes, bandejas memo y posavasos a medida.",
      imageAlt: "Accesorio de escritorio en cartón reciclado de Hilarius Design"
    }
  },
  verpakkingen: {
    nl: {
      intro: "Verpakkingen van karton beschermen, presenteren en versterken uw merk tegelijk. Van wijnverpakkingen en kokers tot displays en verrassende uitklapdozen: elk ontwerp wordt afgestemd op product, oplage, bedrukking en gewenste ervaring.",
      seoDescription: "Luxe verpakkingen van gerecycled karton, waaronder wijnverpakkingen, kokers, displays en cadeauverpakkingen op maat.",
      imageAlt: "Verpakking van gerecycled karton door Hilarius Design"
    },
    en: {
      intro: "Cardboard packaging protects, presents and strengthens your brand at the same time. From wine packaging and tubes to displays and surprising fold-out boxes, each design is tailored to product, quantity, print and desired experience.",
      seoDescription: "Premium recycled board packaging, including wine packaging, tubes, displays and custom gift packaging.",
      imageAlt: "Recycled board packaging by Hilarius Design"
    },
    de: {
      intro: "Verpackungen aus Karton schützen, präsentieren und stärken Ihre Marke zugleich. Von Weinverpackungen und Hülsen bis zu Displays und überraschenden Aufklappboxen wird jedes Design auf Produkt, Auflage, Druck und Wirkung abgestimmt.",
      seoDescription: "Premium-Verpackungen aus recycelter Pappe, darunter Weinverpackungen, Hülsen, Displays und Geschenkverpackungen nach Maß.",
      imageAlt: "Verpackung aus recycelter Pappe von Hilarius Design"
    },
    fr: {
      intro: "Les emballages en carton protègent, présentent et renforcent votre marque à la fois. Des emballages pour le vin et tubes aux displays et boîtes dépliantes, chaque design est adapté au produit, à la quantité, à l'impression et à l'expérience souhaitée.",
      seoDescription: "Emballages haut de gamme en carton recyclé, dont emballages pour le vin, tubes, displays et emballages cadeaux sur mesure.",
      imageAlt: "Emballage en carton recyclé par Hilarius Design"
    },
    es: {
      intro: "Los embalajes de cartón protegen, presentan y refuerzan su marca al mismo tiempo. Desde embalajes para vino y tubos hasta displays y cajas desplegables, cada diseño se adapta al producto, tirada, impresión y experiencia deseada.",
      seoDescription: "Embalajes premium en cartón reciclado, incluidos embalajes para vino, tubos, displays y embalajes de regalo a medida.",
      imageAlt: "Embalaje en cartón reciclado de Hilarius Design"
    }
  },
  "boeken-mappen": {
    nl: {
      intro: "Boeken, mappen en cassettes vragen om een presentatie die de inhoud serieus neemt. Hilarius Design maakt kartonnen mappen, boekverpakkingen en uitgaven op maat voor documentatie, kunst, prijzen en bijzondere publicaties.",
      seoDescription: "Boekverpakkingen, mappen en cassettes van gerecycled karton voor documentatie, kunst en bijzondere publicaties.",
      imageAlt: "Boekverpakking of map van gerecycled karton door Hilarius Design"
    },
    en: {
      intro: "Books, folders and slipcases need a presentation that respects the content. Hilarius Design creates custom cardboard folders, book packaging and editions for documentation, art, awards and special publications.",
      seoDescription: "Book packaging, folders and slipcases in recycled board for documentation, art and special publications.",
      imageAlt: "Recycled board book packaging or folder by Hilarius Design"
    },
    de: {
      intro: "Bücher, Mappen und Schuber brauchen eine Präsentation, die dem Inhalt gerecht wird. Hilarius Design fertigt Kartonmappen, Buchverpackungen und Ausgaben nach Maß für Dokumentation, Kunst, Preise und besondere Publikationen.",
      seoDescription: "Buchverpackungen, Mappen und Schuber aus recycelter Pappe für Dokumentation, Kunst und besondere Publikationen.",
      imageAlt: "Buchverpackung oder Mappe aus recycelter Pappe von Hilarius Design"
    },
    fr: {
      intro: "Livres, dossiers et étuis demandent une présentation qui respecte le contenu. Hilarius Design crée des dossiers, emballages de livres et éditions en carton sur mesure pour documentation, art, prix et publications particulières.",
      seoDescription: "Emballages de livres, dossiers et étuis en carton recyclé pour documentation, art et publications particulières.",
      imageAlt: "Emballage de livre ou dossier en carton recyclé par Hilarius Design"
    },
    es: {
      intro: "Libros, carpetas y estuches necesitan una presentación que respete el contenido. Hilarius Design crea carpetas, embalajes para libros y ediciones de cartón a medida para documentación, arte, premios y publicaciones especiales.",
      seoDescription: "Embalajes para libros, carpetas y estuches en cartón reciclado para documentación, arte y publicaciones especiales.",
      imageAlt: "Embalaje para libro o carpeta en cartón reciclado de Hilarius Design"
    }
  },
  spellen: {
    nl: {
      intro: "Spellen van karton maken merkbeleving actief. Bordspellen, puzzels, werpspellen en schaakspellen worden op maat gemaakt voor teams, events en relatiegeschenken waarbij mensen samen iets doen.",
      seoDescription: "Spellen van gerecycled karton, zoals bordspellen, puzzels, werpspellen en schaakspellen als origineel relatiegeschenk.",
      imageAlt: "Spel van gerecycled karton door Hilarius Design"
    },
    en: {
      intro: "Cardboard games make brand experience active. Board games, puzzles, throwing games and chess sets are made to order for teams, events and corporate gifts where people do something together.",
      seoDescription: "Games in recycled board, such as board games, puzzles, throwing games and chess sets as original corporate gifts.",
      imageAlt: "Recycled board game by Hilarius Design"
    },
    de: {
      intro: "Spiele aus Karton machen Markenerlebnis aktiv. Brettspiele, Puzzles, Wurfspiele und Schachspiele entstehen nach Maß für Teams, Events und Werbegeschenke, bei denen Menschen gemeinsam etwas tun.",
      seoDescription: "Spiele aus recycelter Pappe, darunter Brettspiele, Puzzles, Wurfspiele und Schachspiele als originelle Werbegeschenke.",
      imageAlt: "Spiel aus recycelter Pappe von Hilarius Design"
    },
    fr: {
      intro: "Les jeux en carton rendent l'expérience de marque active. Jeux de plateau, puzzles, jeux de lancer et jeux d'échecs sont réalisés sur mesure pour équipes, événements et cadeaux d'affaires où les personnes agissent ensemble.",
      seoDescription: "Jeux en carton recyclé, dont jeux de plateau, puzzles, jeux de lancer et jeux d'échecs comme cadeaux d'affaires.",
      imageAlt: "Jeu en carton recyclé par Hilarius Design"
    },
    es: {
      intro: "Los juegos de cartón hacen activa la experiencia de marca. Juegos de mesa, puzzles, juegos de lanzamiento y ajedrez se realizan a medida para equipos, eventos y regalos corporativos donde las personas participan juntas.",
      seoDescription: "Juegos en cartón reciclado, como juegos de mesa, puzzles, juegos de lanzamiento y ajedrez para regalos corporativos.",
      imageAlt: "Juego en cartón reciclado de Hilarius Design"
    }
  },
  "the-art-of-board": {
    nl: {
      intro: "The Art Of Board laat zien hoe ver karton kan gaan als constructief en beeldend materiaal. Van monumenten en stoelen tot gelaagde bloemen en kunstobjecten: elk werk onderzoekt vorm, sterkte en verbeelding in gerecycled karton.",
      seoDescription: "Kunstobjecten en ruimtelijke ontwerpen in gerecycled karton, van maquettes tot stoelen en gelaagde bloemen.",
      imageAlt: "Kunstobject in gerecycled karton door Hilarius Design"
    },
    en: {
      intro: "The Art Of Board shows how far cardboard can go as a structural and visual material. From monuments and chairs to layered flowers and art objects, each work explores form, strength and imagination in recycled board.",
      seoDescription: "Art objects and spatial designs in recycled board, from scale models to chairs and layered flowers.",
      imageAlt: "Recycled board art object by Hilarius Design"
    },
    de: {
      intro: "The Art Of Board zeigt, wie weit Karton als konstruktives und bildnerisches Material gehen kann. Von Monumenten und Stühlen bis zu geschichteten Blumen und Kunstobjekten untersucht jedes Werk Form, Stärke und Vorstellungskraft.",
      seoDescription: "Kunstobjekte und räumliche Entwürfe aus recycelter Pappe, von Modellen bis zu Stühlen und geschichteten Blumen.",
      imageAlt: "Kunstobjekt aus recycelter Pappe von Hilarius Design"
    },
    fr: {
      intro: "The Art Of Board montre jusqu'où le carton peut aller comme matériau constructif et visuel. Des monuments et chaises aux fleurs en couches et objets d'art, chaque œuvre explore la forme, la solidité et l'imagination.",
      seoDescription: "Objets d'art et créations spatiales en carton recyclé, des maquettes aux chaises et fleurs en couches.",
      imageAlt: "Objet d'art en carton recyclé par Hilarius Design"
    },
    es: {
      intro: "The Art Of Board muestra hasta dónde puede llegar el cartón como material constructivo y visual. Desde monumentos y sillas hasta flores por capas y objetos artísticos, cada obra explora forma, resistencia e imaginación.",
      seoDescription: "Objetos artísticos y diseños espaciales en cartón reciclado, desde maquetas hasta sillas y flores por capas.",
      imageAlt: "Objeto artístico en cartón reciclado de Hilarius Design"
    }
  },
  "interieur-exterieur": {
    nl: {
      intro: "Interieur- en exterieurprojecten van karton maken ruimte tastbaar. Hilarius Design ontwerpt displays, maquettes, meubels en ruimtelijke presentaties die licht zijn in materiaal, maar groot in effect.",
      seoDescription: "Interieur- en exterieurprojecten van gerecycled karton, waaronder displays, maquettes, meubels en presentaties.",
      imageAlt: "Ruimtelijk ontwerp van gerecycled karton door Hilarius Design"
    },
    en: {
      intro: "Interior and exterior cardboard projects make space tangible. Hilarius Design designs displays, scale models, furniture and spatial presentations that are light in material and strong in effect.",
      seoDescription: "Interior and exterior projects in recycled board, including displays, scale models, furniture and presentations.",
      imageAlt: "Spatial design in recycled board by Hilarius Design"
    },
    de: {
      intro: "Innen- und Außenprojekte aus Karton machen Raum greifbar. Hilarius Design entwirft Displays, Modelle, Möbel und räumliche Präsentationen, die im Material leicht und in der Wirkung stark sind.",
      seoDescription: "Innen- und Außenprojekte aus recycelter Pappe, darunter Displays, Modelle, Möbel und Präsentationen.",
      imageAlt: "Räumliches Design aus recycelter Pappe von Hilarius Design"
    },
    fr: {
      intro: "Les projets d'intérieur et d'extérieur en carton rendent l'espace tangible. Hilarius Design conçoit displays, maquettes, meubles et présentations spatiales, légers par le matériau et forts par l'effet.",
      seoDescription: "Projets d'intérieur et d'extérieur en carton recyclé, dont displays, maquettes, meubles et présentations.",
      imageAlt: "Création spatiale en carton recyclé par Hilarius Design"
    },
    es: {
      intro: "Los proyectos de interior y exterior en cartón hacen tangible el espacio. Hilarius Design diseña displays, maquetas, muebles y presentaciones espaciales, ligeros por material y fuertes por efecto.",
      seoDescription: "Proyectos de interior y exterior en cartón reciclado, incluidos displays, maquetas, muebles y presentaciones.",
      imageAlt: "Diseño espacial en cartón reciclado de Hilarius Design"
    }
  },
  eindejaarsgeschenken: {
    nl: {
      intro: "Eindejaarsgeschenken van karton combineren waardering, originaliteit en duurzaamheid. Hilarius Design maakt feestelijke producten die passen bij uw merk en bij het moment waarop u relaties of medewerkers wilt bedanken.",
      seoDescription: "Eindejaarsgeschenken en kerstdecoraties van gerecycled karton, volledig afgestemd op merk en ontvanger.",
      imageAlt: "Eindejaarsgeschenk van gerecycled karton door Hilarius Design"
    },
    en: {
      intro: "Cardboard year-end gifts combine appreciation, originality and sustainability. Hilarius Design creates festive products that fit your brand and the moment when you want to thank clients or staff.",
      seoDescription: "Year-end gifts and Christmas decorations in recycled board, fully tailored to brand and recipient.",
      imageAlt: "Recycled board year-end gift by Hilarius Design"
    },
    de: {
      intro: "Jahresendgeschenke aus Karton verbinden Wertschätzung, Originalität und Nachhaltigkeit. Hilarius Design gestaltet festliche Produkte, die zu Ihrer Marke und zum Moment des Dankes passen.",
      seoDescription: "Jahresendgeschenke und Weihnachtsdekoration aus recycelter Pappe, vollständig auf Marke und Empfänger abgestimmt.",
      imageAlt: "Jahresendgeschenk aus recycelter Pappe von Hilarius Design"
    },
    fr: {
      intro: "Les cadeaux de fin d'année en carton associent appréciation, originalité et durabilité. Hilarius Design crée des produits festifs adaptés à votre marque et au moment où vous souhaitez remercier clients ou collaborateurs.",
      seoDescription: "Cadeaux de fin d'année et décorations de Noël en carton recyclé, adaptés à la marque et au destinataire.",
      imageAlt: "Cadeau de fin d'année en carton recyclé par Hilarius Design"
    },
    es: {
      intro: "Los regalos de fin de año de cartón combinan reconocimiento, originalidad y sostenibilidad. Hilarius Design crea productos festivos adaptados a su marca y al momento de agradecer a clientes o colaboradores.",
      seoDescription: "Regalos de fin de año y decoración navideña en cartón reciclado, adaptados a la marca y al destinatario.",
      imageAlt: "Regalo de fin de año en cartón reciclado de Hilarius Design"
    }
  }
};

const withCategoryContent = (categories) =>
  categories.map((category) => {
    const extra = categoryContent[category.slug];
    if (!extra) return category;
    return mergeDeep(category, { i18n: extra });
  });

export const routesConfig = {
  i18n: {
    default: "nl",
    supported: ["nl", "en", "de", "fr", "es"],
    fallback: "nl"
  },

  copy: {
    nav: {
      i18n: {
        nl: { home: "Home", menu: "Menu", portfolio: "Portfolio" },
        en: { home: "Home", menu: "Menu", portfolio: "Portfolio" },
        de: { home: "Start", menu: "Menü", portfolio: "Portfolio" },
        fr: { home: "Accueil", menu: "Menu", portfolio: "Portfolio" },
        es: { home: "Inicio", menu: "Menú", portfolio: "Portfolio" }
      }
    },
    common: {
      i18n: {
        nl: { notFound: "Niet gevonden", backHome: "Terug naar Home" },
        en: { notFound: "Not found", backHome: "Back to Home" },
        de: { notFound: "Nicht gefunden", backHome: "Zur Startseite" },
        fr: { notFound: "Introuvable", backHome: "Retour à l'accueil" },
        es: { notFound: "No encontrado", backHome: "Volver al inicio" }
      }
    },
    home: texts.home,
    category: {
      i18n: {
        nl: { colProject: "Product", colType: "Type", colYear: "Jaar", scrollHint: "Scroll voor producten" },
        en: { colProject: "Project", colType: "Type", colYear: "Year", scrollHint: "Scroll for products" },
        de: { colProject: "Projekt", colType: "Typ", colYear: "Jahr", scrollHint: "Scroll für Produkte" },
        fr: { colProject: "Produit", colType: "Type", colYear: "Année", scrollHint: "Faites défiler les produits" },
        es: { colProject: "Producto", colType: "Tipo", colYear: "Año", scrollHint: "Desplácese para ver productos" }
      }
    },
    project: {
      i18n: {
        nl: { prev: "Vorig project", next: "Volgend project", year: "Jaar", type: "Type", materials: "Materiaal" },
        en: { prev: "Previous", next: "Next", year: "Year", type: "Type", materials: "Materials" },
        de: { prev: "Vorheriges", next: "Nächstes", year: "Jahr", type: "Typ", materials: "Material" },
        fr: { prev: "Précédent", next: "Suivant", year: "Année", type: "Type", materials: "Matériau" },
        es: { prev: "Anterior", next: "Siguiente", year: "Año", type: "Tipo", materials: "Material" }
      }
    }
  },

  nav: [
    {
      path: "/about",
      i18n: {
        nl: { label: "Over Hilarius Design", labelMobile: "Over HD" },
        en: { label: "About Hilarius Design", labelMobile: "About HD" },
        de: { label: "Über Hilarius Design", labelMobile: "Über HD" },
        fr: { label: "À propos de Hilarius Design", labelMobile: "À propos HD" },
        es: { label: "Sobre Hilarius Design", labelMobile: "Sobre HD" }
      }
    },
    { path: "/faq", i18n: { nl: { label: "FAQ" }, en: { label: "FAQ" }, de: { label: "FAQ" }, fr: { label: "FAQ" }, es: { label: "FAQ" } } },
    { path: "/contact", i18n: { nl: { label: "Contact" }, en: { label: "Contact" }, de: { label: "Kontakt" }, fr: { label: "Contact" }, es: { label: "Contacto" } } }
  ],

  categories: withCategoryContent([
    {
      slug: "transport",
      i18n: {
        nl: { title: "Transport", subtitle: "Vrachtwagens, auto's, vliegtuigen en treinen.", titleLine1: "Transport", titleLine2: "", titleLine3: "" },
        en: { title: "Transport", subtitle: "Trucks, cars, aircraft and trains.", titleLine1: "Transport", titleLine2: "", titleLine3: "" },
        de: { title: "Transport", subtitle: "LKW, Autos, Flugzeuge und Züge.", titleLine1: "Transport", titleLine2: "", titleLine3: "" },
        fr: { title: "Transport", subtitle: "Camions, voitures, avions et trains.", titleLine1: "Transport", titleLine2: "", titleLine3: "" },
        es: { title: "Transporte", subtitle: "Camiones, coches, aviones y trenes.", titleLine1: "Transporte", titleLine2: "", titleLine3: "" }
      }
    },
    {
      slug: "bureau-accessoires",
      i18n: {
        nl: { title: "Bureau accessoires", subtitle: "Bureaukalenders, (wand)klokken en meer.", titleLine1: "Bureau", titleLine2: "accessoires", titleLine3: "" },
        en: { title: "Desk accessories", subtitle: "Desk calendars, (wall) clocks and more.", titleLine1: "Desk", titleLine2: "accessories", titleLine3: "" },
        de: { title: "Schreibtisch", subtitle: "Schreibtischkalender, (Wand-)Uhren und mehr.", titleLine1: "Schreibtisch", titleLine2: "Zubehör", titleLine3: "" },
        fr: { title: "Accessoires de bureau", subtitle: "Calendriers de bureau, horloges murales et plus.", titleLine1: "Accessoires", titleLine2: "de bureau", titleLine3: "" },
        es: { title: "Accesorios de escritorio", subtitle: "Calendarios de escritorio, relojes de pared y más.", titleLine1: "Accesorios", titleLine2: "de escritorio", titleLine3: "" }
      }
    },
    {
      slug: "verpakkingen",
      i18n: {
        nl: { title: "Verpakkingen", subtitle: "Luxe verpakkingen, kokers en displays.", titleLine1: "Verpakkingen", titleLine2: "", titleLine3: "" },
        en: { title: "Packaging", subtitle: "Premium packaging, tubes and displays.", titleLine1: "Packaging", titleLine2: "", titleLine3: "" },
        de: { title: "Verpackungen", subtitle: "Premium-Verpackungen, Hülsen und Displays.", titleLine1: "Verpackungen", titleLine2: "", titleLine3: "" },
        fr: { title: "Emballages", subtitle: "Emballages haut de gamme, tubes et displays.", titleLine1: "Emballages", titleLine2: "", titleLine3: "" },
        es: { title: "Embalajes", subtitle: "Embalajes premium, tubos y displays.", titleLine1: "Embalajes", titleLine2: "", titleLine3: "" }
      }
    },
    {
      slug: "boeken-mappen",
      i18n: {
        nl: { title: "Boeken & Mappen", subtitle: "Mappen, boekverpakkingen en bijzondere uitgaven.", titleLine1: "Boeken", titleLine2: "& mappen", titleLine3: "" },
        en: { title: "Books & Folders", subtitle: "Folders, book packaging and special editions.", titleLine1: "Books", titleLine2: "& folders", titleLine3: "" },
        de: { title: "Bücher & Mappen", subtitle: "Mappen, Buchverpackungen und besondere Ausgaben.", titleLine1: "Bücher", titleLine2: "& Mappen", titleLine3: "" },
        fr: { title: "Livres & Dossiers", subtitle: "Dossiers, emballages de livres et éditions spéciales.", titleLine1: "Livres", titleLine2: "& dossiers", titleLine3: "" },
        es: { title: "Libros & Carpetas", subtitle: "Carpetas, embalajes para libros y ediciones especiales.", titleLine1: "Libros", titleLine2: "& carpetas", titleLine3: "" }
      }
    },
    {
      slug: "spellen",
      i18n: {
        nl: { title: "Spellen", subtitle: "Bord- en werpspellen, puzzels en meer.", titleLine1: "Spellen", titleLine2: "", titleLine3: "" },
        en: { title: "Games", subtitle: "Board games, throwing games, puzzles and more.", titleLine1: "Games", titleLine2: "", titleLine3: "" },
        de: { title: "Spiele", subtitle: "Brettspiele, Wurfspiele, Puzzles und mehr.", titleLine1: "Spiele", titleLine2: "", titleLine3: "" },
        fr: { title: "Jeux", subtitle: "Jeux de plateau, jeux de lancer, puzzles et plus.", titleLine1: "Jeux", titleLine2: "", titleLine3: "" },
        es: { title: "Juegos", subtitle: "Juegos de mesa, juegos de lanzamiento, puzzles y más.", titleLine1: "Juegos", titleLine2: "", titleLine3: "" }
      }
    },
    {
      slug: "the-art-of-board",
      i18n: {
        nl: { title: "The Art Of Board", subtitle: "Ideeën van karton.", titleLine1: "The Art", titleLine2: "Of Board", titleLine3: "" },
        en: { title: "The Art Of Board", subtitle: "Ideas made of board.", titleLine1: "The Art", titleLine2: "Of Board", titleLine3: "" },
        de: { title: "The Art Of Board", subtitle: "Ideen aus Karton.", titleLine1: "The Art", titleLine2: "Of Board", titleLine3: "" },
        fr: { title: "The Art Of Board", subtitle: "Idées en carton.", titleLine1: "The Art", titleLine2: "Of Board", titleLine3: "" },
        es: { title: "The Art Of Board", subtitle: "Ideas hechas de cartón.", titleLine1: "The Art", titleLine2: "Of Board", titleLine3: "" }
      }
    },
    {
      slug: "interieur-exterieur",
      i18n: {
        nl: { title: "Interieur & Exterieur", subtitle: "Displays, maquettes en ruimtelijke presentaties.", titleLine1: "Interieur", titleLine2: "& exterieur", titleLine3: "" },
        en: { title: "Interior & Exterior", subtitle: "Displays, scale models and spatial presentations.", titleLine1: "Interior", titleLine2: "& exterior", titleLine3: "" },
        de: { title: "Innen & Außen", subtitle: "Displays, Modelle und räumliche Präsentationen.", titleLine1: "Innen", titleLine2: "& außen", titleLine3: "" },
        fr: { title: "Intérieur & Extérieur", subtitle: "Displays, maquettes et présentations spatiales.", titleLine1: "Intérieur", titleLine2: "& extérieur", titleLine3: "" },
        es: { title: "Interior & Exterior", subtitle: "Displays, maquetas y presentaciones espaciales.", titleLine1: "Interior", titleLine2: "& exterior", titleLine3: "" }
      }
    },
    {
      slug: "eindejaarsgeschenken",
      i18n: {
        nl: { title: "Eindejaarsgeschenken", subtitle: "Sfeervolle producten voor het einde van het jaar.", titleLine1: "Eindejaars-", titleLine2: "geschenken", titleLine3: "" },
        en: { title: "Year-end Gifts", subtitle: "Festive products for the end of the year.", titleLine1: "Year-end", titleLine2: "gifts", titleLine3: "" },
        de: { title: "Jahresendgeschenke", subtitle: "Stimmungsvolle Produkte für das Jahresende.", titleLine1: "Jahresend-", titleLine2: "geschenke", titleLine3: "" },
        fr: { title: "Cadeaux de fin d'année", subtitle: "Produits festifs pour la fin de l'année.", titleLine1: "Cadeaux", titleLine2: "de fin d'année", titleLine3: "" },
        es: { title: "Regalos de fin de año", subtitle: "Productos festivos para el final del año.", titleLine1: "Regalos", titleLine2: "de fin de año", titleLine3: "" }
      }
    }
  ]),

  homeCovers: {
    transport: "transport/vrachtwagens/vrachtwagens2-2.webp",
    "bureau-accessoires": "bureau-accessoires/klokken/klokken2.webp",
    verpakkingen: "verpakkingen/magic-packaging/magictubes2.webp",
    "boeken-mappen": "boeken-mappen/grafiekmappen/grafiekmappen2-1.webp",
    spellen: "spellen/schaakspel/schaakspel2.webp",
    "the-art-of-board": "the-art-of-board/eiffeltoren/eiffeltoren1.webp",
    "interieur-exterieur": "interieur-exterieur/maquette/maquette2-1.webp",
    eindejaarsgeschenken: "eindejaarsgeschenken/kerst/kerstversiering2.webp"
  },

  homeHero: {
    items: [
      {
        key: "clock",
        image: "the-art-of-board/eiffeltoren/eiffeltoren1.webp",
        depth: 0.65,
        shiftX: -0.8,
        shiftY: -0.45,
        sizes: "(max-width: 860px) 29vw, 11vw",
        priority: true
      },
      {
        key: "folder",
        image: "the-art-of-board/wild-flowers/klaproos.webp",
        depth: 1.05,
        shiftX: 0.75,
        shiftY: -0.55,
        sizes: "(max-width: 860px) 42vw, 17vw",
        priority: true
      },
      {
        key: "model",
        image: "the-art-of-board/tezeras/tezeras.webp",
        depth: 1.3,
        shiftX: -1,
        shiftY: 0,
        sizes: "10vw",
        hideOnMobile: true
      },
      {
        key: "packaging",
        image: "the-art-of-board/westminster-abbey/westminster-abbey1.webp",
        depth: 0.85,
        shiftX: 1,
        shiftY: 0.05,
        sizes: "10vw",
        hideOnMobile: true
      },
      {
        key: "transport",
        image: "the-art-of-board/golfkartonnen-stoel/stoelkarton-Hilariusdesign.webp",
        depth: 1.15,
        shiftX: -0.7,
        shiftY: 0.7,
        sizes: "(max-width: 860px) 42vw, 16vw"
      },
      {
        key: "game",
        image: "the-art-of-board/wild-flowers/IMG_7269.webp",
        depth: 0.75,
        shiftX: 0.8,
        shiftY: 0.65,
        sizes: "(max-width: 860px) 49vw, 19vw",
        priority: true
      }
    ]
  },

  pages: texts.pages,

  linkedin: "https://www.linkedin.com/in/wim-hilarius-529817228/",

  contact: {
    email: "info@hilariusdesign.nl",
    phone: "+31 6 24 67 36 20",
    location: "Koog a/d Zaan",
    address: "Rozeboom 68\n1541 RK Koog a/d Zaan"
  },

  projects: [
    ...buildCategoryProjects(
      "transport",
      [
        "transport/bedrijfsautos/bedrijfsautos2.webp",
        "transport/bierwagen/IMG_0548Biertransport.webp",
        "transport/containers/IMG_0562ContainerRoodHL.webp",
        "transport/diepladers/dieplader2.webp",
        "transport/tankauto/tankauto2.webp",
        "transport/treinen/treinen2.webp",
        "transport/vliegtuigen/vliegtuigen2.webp",
        "transport/vrachtwagens/vrachtwagens2-2.webp"
      ],
      {
        nl: { type: "Transportmodel / Relatiegeschenk" },
        en: { type: "Transport model / Gift" },
        de: { type: "Transportmodell / Geschenk" },
        fr: { type: "Modèle de transport / Cadeau" },
        es: { type: "Modelo de transporte / Regalo" }
      }
    ),

    ...buildCategoryProjects(
      "bureau-accessoires",
      [
        "bureau-accessoires/bureaukalenders/bureaukalenders3.webp",
        "bureau-accessoires/fotolijstjes/fotolijstjes2.webp",
        "bureau-accessoires/klokken/klokken2.webp",
        "bureau-accessoires/memobakjes/memobakjes2.webp",
        "bureau-accessoires/onderzetters/onderzetters2.webp",
        "bureau-accessoires/pop-up/popup2.webp"
      ],
      {
        nl: { type: "Bureau-accessoire" },
        en: { type: "Desk accessory" },
        de: { type: "Schreibtisch-Accessoire" },
        fr: { type: "Accessoire de bureau" },
        es: { type: "Accesorio de escritorio" }
      }
    ),

    ...buildCategoryProjects(
      "verpakkingen",
      [
        "verpakkingen/bloemenverpakking/bloemendozen2.webp",
        "verpakkingen/cd-verpakking/cdverpakking2.webp",
        "verpakkingen/chocoladedoosje/twee_chocoladedoosjes.webp",
        "verpakkingen/handtasjes/IMG_1012.webp",
        "verpakkingen/magic-packaging/magictubes2.webp",
        "verpakkingen/ontspiegelde-showcase/luxar2.webp",
        "verpakkingen/schockproof-wijnverpakking/viko_shockproof2.webp",
        "verpakkingen/uitklapdoos/metopdoos2.webp",
        "verpakkingen/viko-kokers/vikokoker2.webp",
        "verpakkingen/wijnverpakkingen/IMG_0579_3vakswijndoos.webp",
        "verpakkingen/zakken/zakkengroot.webp"
      ],
      {
        nl: { type: "Verpakking / Display" },
        en: { type: "Packaging / Display" },
        de: { type: "Verpackung / Display" },
        fr: { type: "Emballage / Display" },
        es: { type: "Embalaje / Display" }
      }
    ),

    ...buildCategoryProjects(
      "boeken-mappen",
      [
        "boeken-mappen/boekverpakkingen/libris2.webp",
        "boeken-mappen/euromap/euromap2.webp",
        "boeken-mappen/golfrecords/golfrecords2.webp",
        "boeken-mappen/grafiekmappen/grafiekmappen2-1.webp",
        "boeken-mappen/herdenkingsboek/herdenkingsboek2.webp",
        "boeken-mappen/informatiemap/informatiemap2.webp",
        "boeken-mappen/kunstmappen/kunstmappen2.webp",
        "boeken-mappen/zelfsluitende-mappen/mappen3.webp"
      ],
      {
        nl: { type: "Boek / Map" },
        en: { type: "Book / Folder" },
        de: { type: "Buch / Mappe" },
        fr: { type: "Livre / Dossier" },
        es: { type: "Libro / Carpeta" }
      }
    ),

    ...buildCategoryProjects(
      "spellen",
      [
        "spellen/bordspellen/bordspellen2.webp",
        "spellen/poulebal/poulebal2.webp",
        "spellen/puzzel/puzzel2.webp",
        "spellen/schaakspel/schaakspel2.webp",
        "spellen/werpspel/werpspel2.webp"
      ],
      {
        nl: { type: "Spel / Give-away" },
        en: { type: "Game / Give-away" },
        de: { type: "Spiel / Give-away" },
        fr: { type: "Jeu / Give-away" },
        es: { type: "Juego / Give-away" }
      }
    ),

    ...buildCategoryProjects(
      "the-art-of-board",
      [
        "the-art-of-board/eiffeltoren/eiffeltoren1.webp",
        "the-art-of-board/golfkartonnen-stoel/stoelkarton-Hilariusdesign.webp",
        "the-art-of-board/tezeras/tezeras.webp",
        "the-art-of-board/westminster-abbey/westminster-abbey1.webp",
        "the-art-of-board/wild-flowers/klaproos.webp"
      ],
      {
        nl: { type: "Kunstwerk / Karton" },
        en: { type: "Art piece / Board" },
        de: { type: "Kunstwerk / Pappe" },
        fr: { type: "Œuvre / Carton" },
        es: { type: "Obra / Cartón" }
      }
    ),

    ...buildCategoryProjects(
      "interieur-exterieur",
      [
        "interieur-exterieur/apothekerskast/apothekerskast2.webp",
        "interieur-exterieur/enorme-displays/oogwereld2.webp",
        "interieur-exterieur/gebouwen/villavna.webp",
        "interieur-exterieur/maquette/maquette2-1.webp"
      ],
      {
        nl: { type: "Interieur / Exterieur" },
        en: { type: "Interior / Exterior" },
        de: { type: "Innen / Außen" },
        fr: { type: "Intérieur / Extérieur" },
        es: { type: "Interior / Exterior" }
      }
    ),

    ...buildCategoryProjects(
      "eindejaarsgeschenken",
      [
        "eindejaarsgeschenken/compilatie/compilatie-1.webp",
        "eindejaarsgeschenken/kerst/kerstversiering2.webp"
      ],
      {
        nl: { type: "Eindejaarsgeschenk" },
        en: { type: "Year-end gift" },
        de: { type: "Jahresendgeschenk" },
        fr: { type: "Cadeau de fin d'année" },
        es: { type: "Regalo de fin de año" }
      }
    )
  ]
};
