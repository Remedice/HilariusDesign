// src/router/projectsData.js
// Productteksten per project. Vul description en body in per taal.
// Gebruik backticks (template literals) voor tekst met meerdere regels:
//
//   description: `Eerste regel.
// Tweede regel.
//
// Nieuwe alinea.`,
//
// Key = pad naar cover image (relatief aan public/images/).

const projectOverridesBase = {
  // ═══════════════════════════════════════════════════════════════
  // TRANSPORT
  // ═══════════════════════════════════════════════════════════════

  "transport/bedrijfsautos/bedrijfsautos2.webp": {
    i18n: {
      nl: {
        title: "Bedrijfsauto's",
        description: `De bedrijfsauto van karton is meer dan een verpakking. Het is een rijdend uithangbord voor uw merk.`,
        body: `Volledig bedrukt in uw huisstijl maakt deze wagen direct indruk op het bureau van uw relaties. Vul hem met snoep, chocolade of een kleine verrassing en geef een cadeau dat opvalt en bijblijft.

Leverbaar in diverse uitvoeringen en volledig aan te passen aan uw wensen.`
      },
      en: {
        title: "Company cars",
        description: `The cardboard company car is more than packaging. It is a moving billboard for your brand.`,
        body: `Printed in your full corporate identity, this car makes an immediate impression on your clients' desks. Fill it with sweets, chocolate or a small surprise, and give a gift that people keep on their desk.

Available in various configurations and fully customizable to your requirements.`
      },
      de: {
        title: "Firmenwagen",
        description: `Das Firmenauto aus Karton ist mehr als eine Verpackung. Es ist ein fahrendes Aushängeschild für Ihre Marke.`,
        body: `Vollständig in Ihrem Corporate Design bedruckt, macht dieser Wagen auf dem Schreibtisch Ihrer Geschäftspartner sofort Eindruck. Füllen Sie ihn mit Süßigkeiten, Schokolade oder einer kleinen Überraschung und schenken Sie etwas, das auffällt und in Erinnerung bleibt.

Erhältlich in verschiedenen Ausführungen und vollständig nach Ihren Wünschen anpassbar.`
      }
    }
  },

  "transport/bierwagen/IMG_0548Biertransport.webp": {
    i18n: {
      nl: {
        title: "Bierwagen",
        description: `Een originele kartonnen bierwagen om uw fles bier op een feestelijke en onvergetelijke manier te presenteren.`,
        body: `Volledig bedrukt in uw huisstijl wordt deze bierwagen een echte blikvanger op elk bureau. Perfect als relatiegeschenk voor de horeca, brouwerijen of evenementen waarbij uw merk centraal staat.`
      },
      en: {
        title: "Beer wagon",
        description: `An original cardboard beer wagon to present your bottle of beer in a festive way.`,
        body: `Fully printed in your corporate identity, this beer wagon becomes a true eye-catcher on any desk. Perfect as a corporate gift for the hospitality sector, breweries or events where your brand takes center stage.`
      },
      de: {
        title: "Bierwagen",
        description: `Ein origineller Bierwagen aus Karton, der Ihre Bierflasche auf festliche und unvergessliche Weise präsentiert.`,
        body: `Vollständig in Ihrem Corporate Design bedruckt, wird dieser Bierwagen auf jedem Schreibtisch zum echten Blickfang. Ideal als Werbegeschenk für die Gastronomie, Brauereien oder Veranstaltungen, bei denen Ihre Marke im Mittelpunkt steht.`
      }
    }
  },

  "transport/containers/IMG_0562ContainerRoodHL.webp": {
    i18n: {
      nl: {
        title: "Containers",
        description: `Kartonnen containers als originele verpakking voor uw relatiegeschenk. Robuust, indrukwekkend en volledig in uw huisstijl.`,
        body: `Deze containers van karton combineren een stoere uitstraling met praktisch gebruik. Vul ze met uw cadeau en geef uw relaties een geschenk dat letterlijk blijft staan.`
      },
      en: {
        title: "Containers",
        description: `Cardboard containers as an original packaging for your corporate gift. Robust, impressive and fully in your corporate identity.`,
        body: `These cardboard containers combine a bold appearance with practical use. Fill them with your gift and give your clients a present that stands out on the desk.`
      },
      de: {
        title: "Container",
        description: `Kartoncontainer als originelle Verpackung für Ihr Werbegeschenk. Robust, eindrucksvoll und vollständig in Ihrem Corporate Design.`,
        body: `Diese Kartoncontainer verbinden eine markante Optik mit praktischer Nutzung. Füllen Sie sie mit Ihrem Geschenk und hinterlassen Sie bei Ihren Geschäftspartnern einen bleibenden Eindruck.`
      }
    }
  },

  "transport/diepladers/dieplader2.webp": {
    i18n: {
      nl: {
        title: "Diepladers",
        description: `De kartonnen dieplader: een zwaargewicht in miniformaat. Origineel relatiegeschenk voor logistiek en transport.`,
        body: `Volledig bedrukt in uw huisstijl maakt deze dieplader direct indruk. Een ideaal geschenk voor partners in de transport- en logistiekwereld die weten hoe ze zwaar gewicht moeten waarderen.`
      },
      en: {
        title: "Low loaders",
        description: `The cardboard low loader: a heavy-weight in miniature. An original corporate gift for logistics and transport.`,
        body: `Fully printed in your corporate identity, this low loader makes an immediate impression. An ideal gift for partners in the transport and logistics sector who know how to appreciate heavy-duty quality.`
      },
      de: {
        title: "Tieflader",
        description: `Der Tieflader aus Karton: ein Schwergewicht im Miniaturformat. Originelles Werbegeschenk für Logistik und Transport.`,
        body: `Vollständig in Ihrem Corporate Design bedruckt, macht dieser Tieflader sofort Eindruck. Ein ideales Geschenk für Partner in der Transport- und Logistikbranche.`
      }
    }
  },

  "transport/tankauto/tankauto2.webp": {
    i18n: {
      nl: {
        title: "Tankauto",
        description: `Een kartonnen tankauto als opvallend relatiegeschenk. Perfect voor bedrijven in de energie- of transportsector.`,
        body: `Volledig bedrukt in uw huisstijl staat deze tankauto als een echte blikvanger op het bureau. Origineel, duurzaam en herkenbaar: een geschenk dat uw merk in beweging houdt.`
      },
      en: {
        title: "Tanker truck",
        description: `A cardboard tanker truck as a striking corporate gift. Perfect for companies in the energy or transport sector.`,
        body: `Fully printed in your corporate identity, this tanker truck stands out on any desk. Original, sustainable and recognizable: a gift that keeps your brand moving.`
      },
      de: {
        title: "Tankwagen",
        description: `Ein Tankwagen aus Karton als auffälliges Werbegeschenk. Perfekt für Unternehmen in der Energie- oder Transportbranche.`,
        body: `Vollständig in Ihrem Corporate Design bedruckt, ist dieser Tankwagen ein echter Blickfang auf jedem Schreibtisch. Originell, nachhaltig und unverwechselbar.`
      }
    }
  },

  "transport/treinen/treinen2.webp": {
    i18n: {
      nl: {
        title: "Treinen",
        description: `Een kartonnen trein als origineel relatiegeschenk voor partners in de railwereld en daarbuiten.`,
        body: `Volledig op maat bedrukt in uw huisstijl rijdt deze trein rechtstreeks naar de harten van uw relaties. Origineel, herkenbaar en duurzaam: een geschenk dat de verbinding versterkt.`
      },
      en: {
        title: "Trains",
        description: `A cardboard train as an original corporate gift for partners in the rail sector and beyond.`,
        body: `Fully printed to order in your corporate identity, this train goes straight to the hearts of your clients. Original, recognizable and sustainable: a gift that strengthens the connection.`
      },
      de: {
        title: "Züge",
        description: `Ein Zug aus Karton als originelles Werbegeschenk für Partner im Bahnbereich und darüber hinaus.`,
        body: `Vollständig auf Maß in Ihrem Corporate Design bedruckt, fährt dieser Zug direkt in die Herzen Ihrer Geschäftspartner. Originell, wiedererkennbar und nachhaltig.`
      }
    }
  },

  "transport/vliegtuigen/vliegtuigen2.webp": {
    i18n: {
      nl: {
        title: "Vliegtuigen",
        description: `Zorg voor een vliegende start met uw nieuwe relaties. Kartonnen vliegtuigen als origineel relatiegeschenk.`,
        body: `Deze vliegtuigen van karton worden volledig bedrukt in uw huisstijl en zijn perfect te vullen met snoep, chocolade of een kleine verrassing. Een geschenk dat de aandacht trekt en de verbeelding prikkelt.

De sky is the limit!`
      },
      en: {
        title: "Aircraft",
        description: `Give your new business relationships a flying start. Cardboard aircraft as an original corporate gift.`,
        body: `These cardboard aircraft are fully printed in your corporate identity and perfect to fill with sweets, chocolate or a small surprise. A gift that draws attention and sparks the imagination.

The sky is the limit!`
      },
      de: {
        title: "Flugzeuge",
        description: `Sorgen Sie für einen fliegenden Start mit Ihren neuen Geschäftspartnern. Kartonflugzeuge als unverwechselbares Werbegeschenk.`,
        body: `Diese Kartonflugzeuge werden vollständig in Ihrem Corporate Design bedruckt und lassen sich perfekt mit Süßigkeiten, Schokolade oder einer kleinen Überraschung befüllen.

The sky is the limit!`
      }
    }
  },

  "transport/vrachtwagens/vrachtwagens2-2.webp": {
    i18n: {
      nl: {
        title: "Vrachtwagens",
        description: `Ik ben de koning van de weg. Vrachtwagens van karton, perfect om een fles wijn, bier of snoep op een originele manier te verpakken.`,
        body: `Met onze vrachtwagens is dat nog betaalbaar ook. Deze wagens worden bedrukt in uw huisstijl, zodat uw geschenk een aandachttrekker blijft op het bureau van uw relaties.

Afmetingen: 348 x 86 x 114 mm (l x b x h).

Heeft u interesse in andere voertuigen van karton? Neem dan een kijkje op hilariusdesign.nl of wenst u een ander ontwerp, dan denken wij graag met u mee. De sky is the limit!`
      },
      en: {
        title: "Trucks",
        description: `King of the road. Cardboard trucks, perfect for presenting a bottle of wine, beer or sweets in a truly original way.`,
        body: `And at a price that keeps your budget on track. These trucks are printed in your corporate identity, ensuring your gift remains a conversation piece on your clients' desks.

Dimensions: 348 x 86 x 114 mm (l x w x h).

Interested in other cardboard vehicles? Visit hilariusdesign.nl or get in touch. We are happy to develop a custom design. The sky is the limit!`
      },
      de: {
        title: "LKW",
        description: `König der Straße. LKW aus Karton, ideal um eine Flasche Wein, Bier oder Süßigkeiten auf originelle Weise zu verpacken.`,
        body: `Und das zu einem Preis, der Ihr Budget im Griff behält. Diese Fahrzeuge werden in Ihrem Corporate Design bedruckt und bleiben als echter Blickfang auf dem Schreibtisch Ihrer Geschäftspartner.

Maße: 348 x 86 x 114 mm (L x B x H).

Interesse an anderen Kartonfahrzeugen? Besuchen Sie hilariusdesign.nl oder nehmen Sie Kontakt auf. Wir entwickeln gerne ein individuelles Design. The sky is the limit!`
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // BUREAU ACCESSOIRES
  // ═══════════════════════════════════════════════════════════════

  "bureau-accessoires/bureaukalenders/bureaukalenders3.webp": {
    i18n: {
      nl: {
        title: "Bureaukalenders",
        description: `Elke dag een nieuwe kans. Compacte, driekantige bureaukalenders van gerecycled karton die het hele jaar door staan als een blok.`,
        body: `Dankzij de bekroonde 'click, ready'-sluiting zet u hem in een handomdraai op. Elke zijde biedt een duidelijk vier- of zesmaandelijks overzicht met weeknummers. Personaliseer hem met uw logo, boodschap of nieuwjaarsgroet.

Formaat bureaukalender: 210 x 75 x 70 mm (l x b x h). De kalenders worden vlakliggend geleverd.

Ook leverbaar als wandkalender in het formaat 420 x 297 mm of 297 x 420 mm.

Duurzaam, herkenbaar en praktisch: het relatiegeschenk dat blijft staan.`
      },
      en: {
        title: "Desk calendars",
        description: `A new opportunity every day. Compact, triangular desk calendars made from recycled cardboard that stand firm all year long.`,
        body: `Thanks to the award-winning 'click, ready' closure, it assembles in seconds. Each side offers a clear four- or six-month overview with week numbers. Personalise it with your logo, message or New Year's greeting.

Desk calendar dimensions: 210 x 75 x 70 mm (l x w x h). Calendars are delivered flat.

Also available as a wall calendar in 420 x 297 mm or 297 x 420 mm.

Sustainable, recognizable and practical: the corporate gift that keeps standing.`
      },
      de: {
        title: "Schreibtischkalender",
        description: `Jeden Tag eine neue Chance. Kompakte, dreieckige Schreibtischkalender aus recyceltem Karton, die das ganze Jahr über stabil stehen.`,
        body: `Dank des preisgekrönten 'click, ready'-Verschlusses ist er in Sekunden aufgebaut. Jede Seite bietet eine übersichtliche Vier- oder Sechsmonatsübersicht mit Kalenderwochen. Personalisieren Sie ihn mit Ihrem Logo, einer Botschaft oder einem Neujahrsgruß.

Maße Schreibtischkalender: 210 x 75 x 70 mm (L x B x H). Die Kalender werden flach geliefert.

Auch als Wandkalender im Format 420 x 297 mm oder 297 x 420 mm erhältlich.

Nachhaltig, unverwechselbar und praktisch: das Werbegeschenk, das stehen bleibt.`
      }
    }
  },

  "bureau-accessoires/fotolijstjes/fotolijstjes2.webp": {
    i18n: {
      nl: {
        title: "Fotolijstjes",
        description: `Elegante fotolijstjes van karton die een persoonlijke noot geven aan uw bureau of kantoor.`,
        body: `Ontworpen met oog voor detail combineren deze fotolijstjes een stijlvolle uitstraling met duurzame materialen. Met uw logo of boodschap worden ze een relatiegeschenk dat persoonlijk en functioneel tegelijk is.`
      },
      en: {
        title: "Photo frames",
        description: `Elegant cardboard photo frames that add a personal touch to any desk or office.`,
        body: `Designed with attention to detail, these photo frames combine a stylish appearance with sustainable materials. With your logo or message, they become a corporate gift that is both personal and functional.`
      },
      de: {
        title: "Fotorahmen",
        description: `Elegante Karton-Fotorahmen, die jedem Schreibtisch oder Büro eine persönliche Note verleihen.`,
        body: `Mit viel Liebe zum Detail entworfen, verbinden diese Fotorahmen eine stilvolle Optik mit nachhaltigen Materialien. Mit Ihrem Logo oder einer Botschaft werden sie zu einem Werbegeschenk, das persönlich und funktional zugleich ist.`
      }
    }
  },

  "bureau-accessoires/klokken/klokken2.webp": {
    i18n: {
      nl: {
        title: "Klokken",
        description: `De tijd in karton: het is eens wat anders. Wandklokken van massiefkarton of golfkarton als bijzonder relatiegeschenk.`,
        body: `Deze wandklokken zijn ontworpen door Hilarius Design en combineren functionaliteit met een eigen uiterlijk. Leverbaar in diverse uitvoeringen, volledig op maat te maken naar uw wensen en huisstijl.`
      },
      en: {
        title: "Clocks",
        description: `Time in cardboard: quite something else. Wall clocks made from solid cardboard or corrugated board as a special corporate gift.`,
        body: `These wall clocks are designed by Hilarius Design and combine functionality with a clear look of their own. Available in various configurations and fully customizable to your requirements and corporate identity.`
      },
      de: {
        title: "Uhren",
        description: `Zeit in Karton: das ist mal was anderes. Wanduhren aus Massivkarton oder Wellpappe als besonderes Werbegeschenk.`,
        body: `Diese Wanduhren wurden von Hilarius Design entworfen und verbinden Funktionalität mit einer unverwechselbaren Optik. In verschiedenen Ausführungen erhältlich und vollständig nach Ihren Wünschen und Ihrem Corporate Design anpassbar.`
      }
    }
  },

  "bureau-accessoires/memobakjes/memobakjes2.webp": {
    i18n: {
      nl: {
        title: "Memobakjes",
        description: `Praktische memobakjes van karton voor op het bureau. Functioneel, stijlvol en volledig in uw huisstijl.`,
        body: `Deze memobakjes zijn meer dan een opbergoplossing. Ze zijn een dagelijkse herinnering aan uw merk. Volledig bedrukt in uw huisstijl blijven ze aanwezig op het bureau van uw relaties.`
      },
      en: {
        title: "Memo trays",
        description: `Practical cardboard memo trays for the desk. Functional, stylish and fully in your corporate identity.`,
        body: `These memo trays are more than a storage solution. They are a daily reminder of your brand. Fully printed in your corporate identity, they remain a constant presence on your clients' desks.`
      },
      de: {
        title: "Memo-Ablagen",
        description: `Praktische Memo-Ablagen aus Karton für den Schreibtisch. Funktional, stilvoll und vollständig in Ihrem Corporate Design.`,
        body: `Diese Memo-Ablagen sind mehr als eine Aufbewahrungslösung. Sie erinnern täglich an Ihre Marke. Vollständig in Ihrem Corporate Design bedruckt, bleiben sie dauerhaft auf dem Schreibtisch Ihrer Geschäftspartner präsent.`
      }
    }
  },

  "bureau-accessoires/onderzetters/onderzetters2.webp": {
    i18n: {
      nl: {
        title: "Onderzetters",
        description: `Stijlvolle kartonnen onderzetters die elke kop koffie of thee vergezellen met uw merk.`,
        body: `Deze onderzetters van karton zijn volledig personaliseerbaar met uw logo en huisstijl. Functioneel, duurzaam en een subtiele manier om uw merk top of mind te houden bij uw relaties.`
      },
      en: {
        title: "Coasters",
        description: `Stylish cardboard coasters that accompany every cup of coffee or tea with your brand.`,
        body: `These cardboard coasters are fully personalisable with your logo and corporate identity. Functional, sustainable and a subtle way to keep your brand top of mind with your clients.`
      },
      de: {
        title: "Untersetzer",
        description: `Stilvolle Karton-Untersetzer, die jede Tasse Kaffee oder Tee mit Ihrer Marke begleiten.`,
        body: `Diese Karton-Untersetzer sind vollständig mit Ihrem Logo und Corporate Design personalisierbar. Funktional, nachhaltig und eine subtile Art, Ihre Marke bei Ihren Geschäftspartnern im Gedächtnis zu halten.`
      }
    }
  },

  "bureau-accessoires/pop-up/popup2.webp": {
    i18n: {
      nl: {
        title: "Pop-up",
        description: `Pop-up constructies van karton die verrassen en opvallen. Perfect als promotioneel middel of relatiegeschenk.`,
        body: `Hilarius Design ontwerpt en produceert pop-up constructies die bij het openen direct de aandacht trekken. Een spectaculaire manier om uw boodschap te presenteren, volledig in uw huisstijl.`
      },
      en: {
        title: "Pop-up",
        description: `Cardboard pop-up constructions that surprise and stand out. Perfect as a promotional tool or corporate gift.`,
        body: `Hilarius Design designs and produces pop-up constructions that immediately capture attention upon opening. A spectacular way to present your message, fully in your corporate identity.`
      },
      de: {
        title: "Pop-up",
        description: `Pop-up-Konstruktionen aus Karton, die überraschen und auffallen. Perfekt als Werbemittel oder Werbegeschenk.`,
        body: `Hilarius Design entwirft und produziert Pop-up-Konstruktionen, die beim Öffnen sofort die Aufmerksamkeit auf sich ziehen. Eine spektakuläre Art, Ihre Botschaft vollständig in Ihrem Corporate Design zu präsentieren.`
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // VERPAKKINGEN
  // ═══════════════════════════════════════════════════════════════

  "verpakkingen/bloemenverpakking/bloemendozen2.webp": {
    i18n: {
      nl: {
        title: "Bloemenverpakking",
        description: `Originele bloemenverpakkingen van karton die een bos bloemen presenteren als een echt cadeau.`,
        body: `Hilarius Design ontwerpt bloemenverpakkingen die de bloemen optimaal presenteren en beschermen. Volledig in uw huisstijl zijn ze een stijlvolle aanvulling bij elke gelegenheid.`
      },
      en: {
        title: "Flower packaging",
        description: `Original cardboard flower packaging that presents a bouquet as a true gift.`,
        body: `Hilarius Design creates flower packaging that presents and protects the flowers well. Fully in your corporate identity, they add a stylish touch to any occasion.`
      },
      de: {
        title: "Blumenverpackung",
        description: `Originelle Karton-Blumenverpackungen, die einen Blumenstrauß als echtes Geschenk präsentieren.`,
        body: `Hilarius Design entwirft Blumenverpackungen, die die Blumen optimal in Szene setzen und schützen. Vollständig in Ihrem Corporate Design sind sie eine stilvolle Ergänzung für jeden Anlass.`
      }
    }
  },

  "verpakkingen/cd-verpakking/cdverpakking2.webp": {
    i18n: {
      nl: {
        title: "CD-verpakking",
        description: `Bijzondere CD-verpakkingen van karton die uw muziek of presentatie een professionele uitstraling geven.`,
        body: `Deze op maat gemaakte CD-verpakkingen van karton geven uw product een eigen presentatie. Volledig in uw huisstijl, van eenvoudig tot luxe afgewerkt.`
      },
      en: {
        title: "CD packaging",
        description: `Cardboard CD packaging that gives your music or presentation a professional appearance.`,
        body: `These bespoke cardboard CD cases give your product its own presentation. Fully in your corporate identity, ranging from simple to premium finish.`
      },
      de: {
        title: "CD-Verpackung",
        description: `Besondere CD-Verpackungen aus Karton, die Ihrer Musik oder Präsentation ein professionelles Erscheinungsbild verleihen.`,
        body: `Diese maßgefertigten CD-Verpackungen aus Karton sind eine unverwechselbare Art, Ihr Produkt zu präsentieren. Vollständig in Ihrem Corporate Design, von schlicht bis edel veredelt.`
      }
    }
  },

  "verpakkingen/chocoladedoosje/twee_chocoladedoosjes.webp": {
    i18n: {
      nl: {
        title: "Chocoladedoosje",
        description: `Luxe chocoladedoosjes van karton als smakelijk relatiegeschenk in een stijlvolle verpakking.`,
        body: `Hilarius Design ontwerpt chocoladedoosjes die indruk maken nog voor de eerste bonbon. Volledig personaliseerbaar in uw huisstijl, van formaat tot bedrukking.`
      },
      en: {
        title: "Chocolate box",
        description: `Luxury cardboard chocolate boxes as a delicious corporate gift in a stylish package.`,
        body: `Hilarius Design creates chocolate boxes that make an impression even before the first bonbon. Fully personalisable in your corporate identity, from size to print.`
      },
      de: {
        title: "Schokoladendöschen",
        description: `Luxuriöse Schokoladenschachteln aus Karton als köstliches Werbegeschenk in stilvoller Verpackung.`,
        body: `Hilarius Design entwirft Schokoladenschachteln, die schon vor der ersten Praline beeindrucken. Vollständig in Ihrem Corporate Design personalisierbar, von der Größe bis zum Druck.`
      }
    }
  },

  "verpakkingen/handtasjes/IMG_1012.webp": {
    i18n: {
      nl: {
        title: "Handtasjes",
        description: `Cadeau in stijl. Luxe kartonnen handtassen die van elk geschenk een stijlvolle beleving maken.`,
        body: `Perfect voor het verrassen van relaties, het bedanken van medewerkers of het versterken van uw merk tijdens speciale momenten. Uitermate geschikt voor champagne, wijn, delicatessen, lingerie, mode en cosmetica.

Dankzij de hoogwaardige afwerking en het stevige golfkarton combineren ze een luxe uitstraling met praktische duurzaamheid. Verkrijgbaar in wit, zwart of bruin karton en volledig te personaliseren naar uw huisstijl.

Prijs op aanvraag vanaf 250 stuks. Inclusief artwork en één correctieronde, exclusief 21% btw.`
      },
      en: {
        title: "Handbags",
        description: `Gift in style. Luxury cardboard handbags that turn any present into a stylish experience.`,
        body: `Perfect for surprising clients, thanking staff or reinforcing your brand during special occasions. Ideal for champagne, wine, delicacies, lingerie, fashion and cosmetics.

Thanks to the high-quality finish and sturdy corrugated board, they combine a luxurious look with practical durability. Available in white, black or brown cardboard and fully customizable to your corporate identity.

Price on request from 250 units. Including artwork and one revision round, excluding 21% VAT.`
      },
      de: {
        title: "Handtaschen",
        description: `Geschenk mit Stil. Luxuriöse Karton-Handtaschen, die jedes Geschenk zu einem stilvollen Erlebnis machen.`,
        body: `Perfekt zum Überraschen von Geschäftspartnern, zum Bedanken bei Mitarbeitern oder zur Stärkung Ihrer Marke bei besonderen Anlässen. Ideal für Champagner, Wein, Delikatessen, Lingerie, Mode und Kosmetik.

Dank der hochwertigen Verarbeitung und der robusten Wellpappe verbinden sie ein luxuriöses Erscheinungsbild mit praktischer Langlebigkeit. Erhältlich in Weiß, Schwarz oder Braun und vollständig in Ihrem Corporate Design personalisierbar.

Preis auf Anfrage ab 250 Stück. Inklusive Artwork und einer Korrekturr­unde, exklusive 21% MwSt.`
      }
    }
  },

  "verpakkingen/magic-packaging/magictubes2.webp": {
    i18n: {
      nl: {
        title: "Magic Packaging",
        description: `De meest originele champagne- of wijnverpakking ter wereld. Met een simpele tik op de bovenkant valt de doos als een bloem open.`,
        body: `Ontdek de magic packaging van Hilarius Design: met een simpele tik valt de doos open als een bloem en presenteert de fles zich prachtig. Verkrijgbaar in opvallend roze en andere kleuren op aanvraag.

Wij ontwikkelen originele verpakkingen op maat, perfect afgestemd op uw wensen.`
      },
      en: {
        title: "Magic Packaging",
        description: `The world's most original champagne or wine packaging. With a simple tap on the top, the box opens like a flower.`,
        body: `Discover the magic packaging by Hilarius Design: with a single tap the box unfolds like a flower, presenting the bottle beautifully. Available in striking pink and other colors on request.

We develop original custom packaging tailored to your wishes.`
      },
      de: {
        title: "Magic Packaging",
        description: `Die originellste Champagner- oder Weinverpackung der Welt. Mit einem einfachen Klick auf die Oberseite öffnet sich die Box wie eine Blume.`,
        body: `Entdecken Sie das Magic Packaging von Hilarius Design: Mit einem einzigen Klick öffnet sich die Box wie eine Blume und präsentiert die Flasche auf wunderschöne Weise. Erhältlich in auffallendem Rosa und weiteren Farben auf Anfrage.

Wir entwickeln originelle Maßverpackungen, perfekt auf Ihre Wünsche abgestimmt.`
      }
    }
  },

  "verpakkingen/ontspiegelde-showcase/luxar2.webp": {
    i18n: {
      nl: {
        title: "Ontspiegelde showcase",
        description: `Ontspiegelde showcases voor een optimale presentatie zonder storende reflecties.`,
        body: `Deze showcases zijn ontworpen voor een kristalheldere presentatie van uw product. Met de ontspiegelde uitvoering valt de focus volledig op de inhoud. Perfect voor tentoonstellingen, winkels en bedrijfspresentaties.`
      },
      en: {
        title: "Anti-reflective showcase",
        description: `Anti-reflective showcases for an optimal presentation without distracting glare.`,
        body: `These showcases are designed for a clear presentation of your product. With the anti-reflective finish, the focus is entirely on the contents. Perfect for exhibitions, retail environments and corporate presentations.`
      },
      de: {
        title: "Entspiegelte Vitrine",
        description: `Entspiegelte Vitrinen für eine optimale Präsentation ohne störende Reflexionen.`,
        body: `Diese Vitrinen sind für eine kristallklare Präsentation Ihres Produkts konzipiert. Durch die entspiegelte Ausführung liegt der Fokus vollständig auf dem Inhalt. Ideal für Ausstellungen, Geschäfte und Unternehmenspräsentationen.`
      }
    }
  },

  "verpakkingen/schockproof-wijnverpakking/viko_shockproof2.webp": {
    i18n: {
      nl: {
        title: "Shockproof wijnverpakking",
        description: `Shockproof wijnverpakking van karton die uw fles optimaal beschermt tijdens transport.`,
        body: `Deze robuuste kartonnen wijnverpakking is ontwikkeld om uw fles te beschermen tegen stoten en schokken. Stijlvol, duurzaam en volledig te personaliseren in uw huisstijl. Veilig en representatief tegelijk.`
      },
      en: {
        title: "Shockproof wine packaging",
        description: `Shockproof cardboard wine packaging that protects your bottle during transport.`,
        body: `This strong cardboard wine packaging is developed to protect your bottle against bumps and shocks. Stylish, sustainable and fully personalisable in your corporate identity. Safe and representative at the same time.`
      },
      de: {
        title: "Stoßfeste Weinverpackung",
        description: `Stoßfeste Weinverpackung aus Karton, die Ihre Flasche beim Transport optimal schützt.`,
        body: `Diese stabile Karton-Weinverpackung wurde entwickelt, um Ihre Flasche vor Stößen und Erschütterungen zu schützen. Stilvoll, nachhaltig und vollständig in Ihrem Corporate Design personalisierbar. Sicher und repräsentativ zugleich.`
      }
    }
  },

  "verpakkingen/uitklapdoos/metopdoos2.webp": {
    i18n: {
      nl: {
        title: "Uitklapdoos",
        description: `Een uitklapdoos die bij het openen verrast en de inhoud spectaculair presenteert.`,
        body: `De uitklapdoos van Hilarius Design combineert functionaliteit met een verrassend openingsmoment. Volledig in uw huisstijl gemaakt, is deze doos het ideale relatiegeschenk voor bijzondere gelegenheden.`
      },
      en: {
        title: "Fold-out box",
        description: `A fold-out box that surprises upon opening and presents its contents spectacularly.`,
        body: `The fold-out box by Hilarius Design combines functionality with a surprising opening moment. Made fully in your corporate identity, this box is the ideal corporate gift for special occasions.`
      },
      de: {
        title: "Aufklappbox",
        description: `Eine Aufklappbox, die beim Öffnen überrascht und den Inhalt spektakulär präsentiert.`,
        body: `Die Aufklappbox von Hilarius Design verbindet Funktionalität mit einem überraschenden Öffnungsmoment. Vollständig in Ihrem Corporate Design gefertigt, ist diese Box das ideale Werbegeschenk für besondere Anlässe.`
      }
    }
  },

  "verpakkingen/viko-kokers/vikokoker2.webp": {
    i18n: {
      nl: {
        title: "Viko kokers",
        description: `Originele Viko kokers van karton: een elegante en beschermende verpakking voor rollen en documenten.`,
        body: `De Viko kokers zijn ontwikkeld voor een stijlvolle presentatie en veilig transport van posters, documenten en andere rolvormige producten. Volledig bedrukt in uw huisstijl.`
      },
      en: {
        title: "Viko tubes",
        description: `Original Viko cardboard tubes: an elegant and protective packaging for rolls and documents.`,
        body: `Viko tubes are developed for stylish presentation and safe transport of posters, documents and other roll-shaped products. Fully printed in your corporate identity.`
      },
      de: {
        title: "Viko-Hülsen",
        description: `Originelle Viko-Hülsen aus Karton: eine elegante und schützende Verpackung für Rollen und Dokumente.`,
        body: `Die Viko-Hülsen wurden für eine stilvolle Präsentation und den sicheren Transport von Postern, Dokumenten und anderen rollenförmigen Produkten entwickelt. Vollständig in Ihrem Corporate Design bedruckt.`
      }
    }
  },

  "verpakkingen/wijnverpakkingen/IMG_0579_3vakswijndoos.webp": {
    i18n: {
      nl: {
        title: "Wijnverpakkingen",
        description: `Duurzame wijndozen voor 1, 2 of 3 flessen. Lichtgewicht, milieuvriendelijk en een stijlvol alternatief voor houten kistjes.`,
        body: `Deze wijndozen van karton zijn verkrijgbaar voor 1, 2 of 3 flessen en combineren een stijlvolle uitstraling met praktisch gemak. Lichtgewicht, milieuvriendelijk en perfect als verpakking en presentatie.

Volledig te personaliseren in uw huisstijl.`
      },
      en: {
        title: "Wine packaging",
        description: `Sustainable wine boxes for 1, 2 or 3 bottles. Lightweight, eco-friendly and a stylish alternative to wooden crates.`,
        body: `These cardboard wine boxes are available for 1, 2 or 3 bottles and combine a stylish appearance with practical convenience. Lightweight, eco-friendly and perfect for packaging and presentation.

Fully personalisable in your corporate identity.`
      },
      de: {
        title: "Weinverpackungen",
        description: `Nachhaltige Weinboxen für 1, 2 oder 3 Flaschen. Leicht, umweltfreundlich und eine stilvolle Alternative zu Holzkisten.`,
        body: `Diese Karton-Weinboxen sind für 1, 2 oder 3 Flaschen erhältlich und verbinden ein stilvolles Erscheinungsbild mit praktischer Handhabung. Leicht, umweltfreundlich und ideal für Verpackung und Präsentation.

Vollständig in Ihrem Corporate Design personalisierbar.`
      }
    }
  },

  "verpakkingen/zakken/zakkengroot.webp": {
    i18n: {
      nl: {
        title: "Zakken",
        description: `Kartonnen zakken en draagassen als stijlvolle verpakking voor uw producten en relatiegeschenken.`,
        body: `Hilarius Design ontwerpt en produceert kartonnen zakken in diverse formaten en uitvoeringen. Volledig bedrukt in uw huisstijl zijn ze een visitekaartje voor uw merk bij elke gelegenheid.`
      },
      en: {
        title: "Bags",
        description: `Cardboard bags and carriers as stylish packaging for your products and corporate gifts.`,
        body: `Hilarius Design designs and produces cardboard bags in a variety of sizes and configurations. Fully printed in your corporate identity, they are a calling card for your brand on every occasion.`
      },
      de: {
        title: "Taschen",
        description: `Karton-Tragetaschen als stilvolle Verpackung für Ihre Produkte und Werbegeschenke.`,
        body: `Hilarius Design entwirft und produziert Karton-Tragetaschen in verschiedenen Größen und Ausführungen. Vollständig in Ihrem Corporate Design bedruckt, sind sie bei jedem Anlass eine Visitenkarte für Ihre Marke.`
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // BOEKEN & MAPPEN
  // ═══════════════════════════════════════════════════════════════

  "boeken-mappen/boekverpakkingen/libris2.webp": {
    i18n: {
      nl: {
        title: "Boekverpakkingen",
        description: `De presentatie maakt het verschil. Op maat gemaakte cassettes voor bijzondere boeken, zoals bij de uitreiking van de Libris-prijs.`,
        body: `Een boek biedt uren, dagen en soms zelfs jaren leesplezier en is daarmee het perfecte relatiegeschenk. Maar de presentatie maakt het verschil. Kiest u voor standaard cadeaupapier of voor een duurzame, op maat gemaakte cassette?

De afgebeelde boekverpakking werd gebruikt bij de uitreiking van de Libris-prijs, waarbij prijswinnaars hun boek in deze exclusieve uitvoering mee naar huis namen.`
      },
      en: {
        title: "Book packaging",
        description: `Presentation makes the difference. Bespoke slipcases for special books, as used at the Libris Prize ceremony.`,
        body: `A book offers hours, days and sometimes even years of reading pleasure, making it the perfect corporate gift. But presentation makes the difference. Do you go for standard gift wrap or a durable, bespoke slipcase?

The book packaging shown here was used at the Libris Prize ceremony, where award winners took their book home in this exclusive presentation.`
      },
      de: {
        title: "Buchverpackungen",
        description: `Die Präsentation macht den Unterschied. Maßgefertigte Schuber für besondere Bücher, wie bei der Verleihung des Libris-Preises.`,
        body: `Ein Buch bietet stunden-, tage- und manchmal jahrelanges Lesevergnügen und ist damit das perfekte Werbegeschenk. Aber die Präsentation macht den Unterschied. Entscheiden Sie sich für normales Geschenkpapier oder für einen nachhaltigen, maßgefertigten Schuber?

Die abgebildete Buchverpackung wurde bei der Verleihung des Libris-Preises verwendet, bei der Preisträger ihr Buch in dieser exklusiven Ausführung mit nach Hause nehmen durften.`
      }
    }
  },

  "boeken-mappen/euromap/euromap2.webp": {
    i18n: {
      nl: {
        title: "Euromap",
        description: `Uitgegeven bij de introductie van de Euro in 2002. Alle munten van de twaalf aangesloten landen passen erin.`,
        body: `Deze unieke mappen werden uitgegeven bij de introductie van de Euro in 2002. Alle munten van de twaalf, toen aangesloten landen, passen erin. Een historisch hebbeding dat de komst van een nieuw tijdperk vastlegt.`
      },
      en: {
        title: "Euromap folder",
        description: `Issued at the introduction of the Euro in 2002. All coins from the twelve participating countries fit inside.`,
        body: `These unique folders were issued at the introduction of the Euro in 2002. All coins from the twelve member countries at the time fit inside. A historic keepsake from the arrival of a new era.`
      },
      de: {
        title: "Euromap-Mappe",
        description: `Anlässlich der Euro-Einführung 2002 herausgegeben. Alle Münzen der zwölf Mitgliedsländer haben darin Platz.`,
        body: `Diese einzigartigen Mappen wurden anlässlich der Euro-Einführung im Jahr 2002 herausgegeben. Alle Münzen der damals zwölf Mitgliedsländer haben darin Platz. Ein historisches Sammlerstück, das den Beginn einer neuen Ära festhält.`
      }
    }
  },

  "boeken-mappen/golfrecords/golfrecords2.webp": {
    i18n: {
      nl: {
        title: "Golf records",
        description: `Unieke uitgave voor golfliefhebbers met bijzondere records en inspirerende anekdotes over beroemde golfers.`,
        body: `Wat dit boekje echt onderscheidt, is de complete beleving. Hilarius Design heeft de golfbal, tee en marker een eigen plek gegeven. Alle onderdelen kunnen worden gepersonaliseerd met uw logo.

Het boekje is beschikbaar in het Nederlands, Engels en Duits. Ideaal voor een internationaal publiek.`
      },
      en: {
        title: "Golf records book",
        description: `A unique publication for golf enthusiasts featuring remarkable records and inspiring anecdotes about famous golfers.`,
        body: `What sets this booklet apart is the complete experience. Hilarius Design has given the golf ball, tee and marker their own dedicated place. All components can be personalized with your logo.

Available in Dutch, English and German. Ideal for an international audience.`
      },
      de: {
        title: "Golfrekorde-Buch",
        description: `Eine einzigartige Publikation für Golfbegeisterte mit besonderen Rekorden und inspirierenden Anekdoten über berühmte Golfer.`,
        body: `Was dieses Heft wirklich auszeichnet, ist das vollständige Erlebnis. Hilarius Design hat dem Golfball, dem Tee und dem Marker einen eigenen Platz eingeräumt. Alle Komponenten können mit Ihrem Logo personalisiert werden.

Erhältlich auf Niederländisch, Englisch und Deutsch. Ideal für ein internationales Publikum.`
      }
    }
  },

  "boeken-mappen/grafiekmappen/grafiekmappen2-1.webp": {
    i18n: {
      nl: {
        title: "Grafiekmappen",
        description: `Elf losse sumi-tekeningen van Peter Schenk gebundeld door stalen pinnen, verrijkt met een gedicht van Theo Olthuis.`,
        body: `In deze bijzondere ordner worden elf losse sumi-tekeningen van Peter Schenk door stalen pinnen gebundeld. De map is verrijkt met een gedicht van Theo Olthuis. Zo ontstaat een kunstzinnige uitgave waarin inhoud en vorm samenkomen.`
      },
      en: {
        title: "Graphic folders",
        description: `Eleven individual sumi drawings by Peter Schenk, bound by steel pins and enriched with a poem by Theo Olthuis.`,
        body: `In this special binder, eleven individual sumi drawings by Peter Schenk are held together by steel pins. The folder is enriched with a poem by Theo Olthuis. Together they form an artistic publication where content and form meet.`
      },
      de: {
        title: "Grafikmappe",
        description: `Elf lose Sumi-Zeichnungen von Peter Schenk, durch Stahlstifte gebunden und mit einem Gedicht von Theo Olthuis bereichert.`,
        body: `In diesem besonderen Ordner werden elf lose Sumi-Zeichnungen von Peter Schenk durch Stahlstifte zusammengehalten. Die Mappe ist mit einem Gedicht von Theo Olthuis bereichert. So entsteht eine künstlerische Publikation, die Inhalt und Form verbindet.`
      }
    }
  },

  "boeken-mappen/herdenkingsboek/herdenkingsboek2.webp": {
    i18n: {
      nl: {
        title: "Herdenkingsboek",
        description: `Een herdenkingsboek dat herinneringen voor altijd vastlegt. Professioneel ontworpen en vervaardigd met oog voor detail.`,
        body: `Hilarius Design ontwerpt en produceert herdenkingsboeken die een bijzondere gebeurtenis of persoon recht doen. Van de omslag tot de binnenpagina's: elk detail draagt bij aan de waardigheid en uitstraling van dit bijzondere document.`
      },
      en: {
        title: "Memorial book",
        description: `A memorial book that preserves memories for ever. Professionally designed and crafted with attention to detail.`,
        body: `Hilarius Design designs and produces memorial books that do justice to a special event or person. From cover to inner pages: every detail contributes to the dignity and appearance of this exceptional document.`
      },
      de: {
        title: "Gedenkbuch",
        description: `Ein Gedenkbuch, das Erinnerungen für immer festhält. Professionell gestaltet und mit Liebe zum Detail gefertigt.`,
        body: `Hilarius Design entwirft und produziert Gedenkbücher, die einem besonderen Ereignis oder einer Person gerecht werden. Vom Umschlag bis zu den Innenseiten: Jedes Detail trägt zur Würde und Ausstrahlung dieses besonderen Dokuments bei.`
      }
    }
  },

  "boeken-mappen/informatiemap/informatiemap2.webp": {
    i18n: {
      nl: {
        title: "Informatiemap",
        description: `Informatieve mappen die uw documentatie professioneel en stijlvol presenteren.`,
        body: `Hilarius Design ontwerpt informatieve mappen volledig in uw huisstijl. Robuust, overzichtelijk en ontworpen om indruk te maken bij uw klanten en relaties.`
      },
      en: {
        title: "Information folder",
        description: `Information folders that present your documentation in a professional and stylish way.`,
        body: `Hilarius Design designs information folders fully in your corporate identity. Robust, clear and crafted to make an impression on your clients and contacts.`
      },
      de: {
        title: "Informationsmappe",
        description: `Informationsmappen, die Ihre Dokumentation professionell und stilvoll präsentieren.`,
        body: `Hilarius Design entwirft Informationsmappen vollständig in Ihrem Corporate Design. Robust, übersichtlich und darauf ausgelegt, bei Ihren Kunden und Geschäftspartnern Eindruck zu hinterlassen.`
      }
    }
  },

  "boeken-mappen/kunstmappen/kunstmappen2.webp": {
    i18n: {
      nl: {
        title: "Kunstmappen",
        description: `Kunstmappen van hoge kwaliteit voor het presenteren en bewaren van kunstwerken en grafiek.`,
        body: `Deze mappen zijn ontworpen voor kunstenaars, galerieën en verzamelaars die hun werk optimaal willen presenteren en beschermen. Volledig op maat gemaakt, met een oog voor esthetiek die het kunstwerk ten goede komt.`
      },
      en: {
        title: "Art folders",
        description: `High-quality art folders for presenting and storing works of art and graphic prints.`,
        body: `These folders are designed for artists, galleries and collectors who want to present and protect their work well. Made entirely to measure, with an eye for aesthetics that serves the artwork.`
      },
      de: {
        title: "Kunstmappe",
        description: `Hochwertige Kunstmappen zur Präsentation und Aufbewahrung von Kunstwerken und Grafiken.`,
        body: `Diese Mappen sind für Künstler, Galerien und Sammler konzipiert, die ihre Werke optimal präsentieren und schützen möchten. Vollständig maßgefertigt, mit einem Sinn für Ästhetik, der dem Kunstwerk zugute kommt.`
      }
    }
  },

  "boeken-mappen/zelfsluitende-mappen/mappen3.webp": {
    i18n: {
      nl: {
        title: "Zelfsluitende mappen",
        description: `Geef uw documenten de presentatie die ze verdienen. Zelfsluitende mappen van karton, volledig in uw huisstijl.`,
        body: `Of het nu gaat om een boek, projectinformatie of een serie folders: met een zelfsluitende map van karton blijven ze beschermd en stijlvol.

Hilarius Design ontwerpt mappen volledig in uw huisstijl, waarbij uw logo, projectnaam of vignet wordt verwerkt. Robuust, duurzaam en ontworpen om indruk te maken.`
      },
      en: {
        title: "Self-closing folders",
        description: `Give your documents the presentation they deserve. Self-closing cardboard folders, fully in your corporate identity.`,
        body: `Whether it concerns a book, project information or a series of brochures: with a self-closing cardboard folder they stay protected and presentable.

Hilarius Design designs folders fully in your corporate identity, incorporating your logo, project name or vignette. Robust, durable and designed to impress.`
      },
      de: {
        title: "Selbstschließende Mappen",
        description: `Geben Sie Ihren Dokumenten die Präsentation, die sie verdienen. Selbstschließende Mappen aus Karton, vollständig in Ihrem Corporate Design.`,
        body: `Ob Buch, Projektinformationen oder eine Reihe von Broschüren: Mit einer selbstschließenden Kartonmappe bleiben sie geschützt und stilvoll.

Hilarius Design entwirft Mappen vollständig in Ihrem Corporate Design, mit Ihrem Logo, Projektnamen oder Signet. Robust, langlebig und darauf ausgelegt, Eindruck zu hinterlassen.`
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // SPELLEN
  // ═══════════════════════════════════════════════════════════════

  "spellen/bordspellen/bordspellen2.webp": {
    i18n: {
      nl: {
        title: "Bordspellen",
        description: `Het driedimensionale 'Hogerop spel', volledig personaliseerbaar met vragen over uw organisatie.`,
        body: `Maak van teambuilding of relatiebeheer een echte belevenis. Dit driedimensionale bordspel is volledig aan te passen aan uw organisatie en doelstellingen. Een originele manier om uw merk te verbinden aan een positieve, gezamenlijke ervaring.`
      },
      en: {
        title: "Board games",
        description: `The three-dimensional 'Hogerop game', fully customizable with questions about your organization.`,
        body: `Turn team building or client entertainment into a real experience. This three-dimensional board game is fully adaptable to your organization and objectives. It is an original way to connect your brand to a positive, shared experience.`
      },
      de: {
        title: "Brettspiele",
        description: `Das dreidimensionale 'Hogerop-Spiel', vollständig personalisierbar mit Fragen zu Ihrer Organisation.`,
        body: `Machen Sie aus Teambuilding oder Kundenpflege ein echtes Erlebnis. Dieses dreidimensionale Brettspiel lässt sich vollständig an Ihre Organisation und Ziele anpassen. So verbinden Sie Ihre Marke mit einem positiven, gemeinsamen Erlebnis.`
      }
    }
  },

  "spellen/poulebal/poulebal2.webp": {
    i18n: {
      nl: {
        title: "Poulebal",
        description: `Het Poulebal spel: een uitdagend en vermakelijk spel voor groepen, perfect als relatiegeschenk.`,
        body: `Speel, daag uit en lach samen. Het Poulebal spel van Hilarius Design is een uitstekend middel voor teamactiviteiten en is volledig te personaliseren voor uw organisatie.`
      },
      en: {
        title: "Poule ball game",
        description: `The Poule ball game: a challenging and entertaining group game, perfect as a corporate gift.`,
        body: `Play, challenge and laugh together. The Hilarius Design Poule ball game works well for team activities and is fully customizable for your organization.`
      },
      de: {
        title: "Poule-Spiel",
        description: `Das Poule-Kugelspiel: ein herausforderndes und unterhaltsames Gruppenspiel, ideal als Werbegeschenk.`,
        body: `Spielen, herausfordern und gemeinsam lachen. Das Poule-Spiel von Hilarius Design ist ein hervorragendes Mittel für Teamaktivitäten und vollständig für Ihre Organisation personalisierbar.`
      }
    }
  },

  "spellen/puzzel/puzzel2.webp": {
    i18n: {
      nl: {
        title: "Puzzel",
        description: `Hoe maak je van acht stukjes een ruit? Of van tien een cirkel? Onze exclusieve puzzels dagen uit en ontspannen tegelijk.`,
        body: `Deze bijzondere puzzels van Hilarius Design zijn niet alleen een leuke bezigheid, maar ook een origineel relatiegeschenk dat opvalt en bijblijft. Volledig te personaliseren met uw logo of boodschap.`
      },
      en: {
        title: "Puzzle",
        description: `How do you make a diamond from eight pieces? Or a circle from ten? Our exclusive puzzles challenge and relax in equal measure.`,
        body: `These puzzles by Hilarius Design are an enjoyable pastime and an original corporate gift. Fully customizable with your logo or message.`
      },
      de: {
        title: "Puzzle",
        description: `Wie formt man aus acht Teilen eine Raute? Oder aus zehn einen Kreis? Unsere exklusiven Puzzles fordern heraus und entspannen zugleich.`,
        body: `Diese besonderen Puzzles von Hilarius Design sind nicht nur ein tolles Freizeitvergnügen, sondern auch ein unverwechselbares Werbegeschenk, das auffällt und in Erinnerung bleibt. Vollständig mit Ihrem Logo oder einer Botschaft personalisierbar.`
      }
    }
  },

  "spellen/schaakspel/schaakspel2.webp": {
    i18n: {
      nl: {
        title: "Schaakspel",
        description: `Fraaie schaakspellen leverbaar in diverse kleuren en maten. Een potje schaken tussen de bedrijven door.`,
        body: `Onze schaakspellen van karton zijn zowel functioneel als decoratief. Ze combineren klassiek spel met het unieke materiaal karton. Een origineel relatiegeschenk voor liefhebbers van het schaakspel dat ook als designobject opvalt.`
      },
      en: {
        title: "Chess set",
        description: `Beautiful chess sets available in various colors and sizes. A game of chess between meetings.`,
        body: `Our cardboard chess sets are both functional and decorative. They combine a classic game with the unique material of cardboard. An original corporate gift for chess enthusiasts that also stands out as a design object.`
      },
      de: {
        title: "Schachspiel",
        description: `Schöne Schachspiele in verschiedenen Farben und Größen erhältlich. Eine Partie Schach zwischendurch.`,
        body: `Unsere Schachspiele aus Karton sind sowohl funktional als auch dekorativ. Sie verbinden ein klassisches Spiel mit dem einzigartigen Material Karton. Ein originelles Werbegeschenk für Schachliebhaber, das auch als Designobjekt auffällt.`
      }
    }
  },

  "spellen/werpspel/werpspel2.webp": {
    i18n: {
      nl: {
        title: "Werpspel",
        description: `Een uitdagend werpspel van karton, perfect als relatiegeschenk voor teambuilding en borrels.`,
        body: `Dit werpspel van Hilarius Design combineert eenvoudige regels met verrassend veel plezier. Volledig te personaliseren in uw huisstijl en gemaakt om mensen samen te brengen.`
      },
      en: {
        title: "Throwing game",
        description: `A challenging cardboard throwing game, perfect as a corporate gift for team building and receptions.`,
        body: `This throwing game by Hilarius Design combines simple rules with surprisingly great fun. Fully personalisable in your corporate identity and made to bring people together.`
      },
      de: {
        title: "Wurfspiel",
        description: `Ein herausforderndes Wurfspiel aus Karton, ideal als Werbegeschenk für Teambuilding und Empfänge.`,
        body: `Dieses Wurfspiel von Hilarius Design verbindet einfache Regeln mit überraschend viel Spaß. Vollständig in Ihrem Corporate Design personalisierbar und gemacht, um Menschen zusammenzubringen.`
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // THE ART OF BOARD
  // ═══════════════════════════════════════════════════════════════

  "the-art-of-board/eiffeltoren/eiffeltoren1.webp": {
    i18n: {
      nl: {
        title: "Eiffeltoren",
        description: `De Eiffeltoren tot in detail nagebouwd van karton, in samenwerking met Fred Zwart.`,
        body: `Met oog voor vorm, verhoudingen en verfijning is dit wereldberoemde bouwwerk vertaald naar een verrassend toegankelijk en tastbaar kartonnen ontwerp. Tot stand gekomen in samenwerking met Fred Zwart.

Een ander gebouw in gedachten? Dat maken we graag op maat.`
      },
      en: {
        title: "Eiffel Tower",
        description: `The Eiffel Tower recreated in cardboard down to the last detail, in collaboration with Fred Zwart.`,
        body: `With attention to shape, proportions and refinement, this world-famous landmark has been translated into a surprisingly accessible and tangible cardboard design. Created in collaboration with Fred Zwart.

Have a different building in mind? We are happy to make it to order.`
      },
      de: {
        title: "Eiffelturm",
        description: `Der Eiffelturm bis ins Detail aus Karton nachgebaut, in Zusammenarbeit mit Fred Zwart.`,
        body: `Mit Blick auf Form, Proportionen und Detailtreue wurde dieses weltberühmte Bauwerk in ein überraschend zugängliches und greifbares Karton-Design übertragen. Entstanden in Zusammenarbeit mit Fred Zwart.

Haben Sie ein anderes Gebäude im Sinn? Das fertigen wir gerne nach Maß.`
      }
    }
  },

  "the-art-of-board/golfkartonnen-stoel/stoelkarton-Hilariusdesign.webp": {
    i18n: {
      nl: {
        title: "Golfkartonnen stoel",
        description: `Volledig gemaakt van golfkarton, laag voor laag verlijmd tot een verrassend sterk ontwerp.`,
        body: `Aan de zijkant zit het detail dat hem afmaakt: in de verschillende lagen golfkarton is de letter O uitgesneden. Een subtiele verwijzing naar Oscar, voor wie deze stoel is ontwikkeld.

Ontworpen en gemaakt door Hilarius Design, waar karton karakter krijgt en design een persoonlijk verhaal vertelt.`
      },
      en: {
        title: "Corrugated cardboard chair",
        description: `Made entirely from corrugated cardboard, layer upon layer glued into a surprisingly strong design.`,
        body: `On the side sits the detail that completes it: the letter O cut out from the various layers of corrugated board. A subtle reference to Oscar, for whom this chair was developed.

Designed and made by Hilarius Design, where cardboard gains character and design tells a personal story.`
      },
      de: {
        title: "Wellpappenstuhl",
        description: `Vollständig aus Wellpappe gefertigt, Schicht für Schicht verleimt zu einem überraschend stabilen Design.`,
        body: `An der Seite befindet sich das Detail, das ihn vervollständigt: der Buchstabe O, der aus den verschiedenen Lagen Wellpappe ausgeschnitten wurde. Eine subtile Anspielung auf Oscar, für den dieser Stuhl entwickelt wurde.

Entworfen und gefertigt von Hilarius Design, wo Karton Charakter bekommt und Design eine persönliche Geschichte erzählt.`
      }
    }
  },

  "the-art-of-board/tezeras/tezeras.webp": {
    i18n: {
      nl: {
        title: "Tezeras",
        description: `Geïnspireerd op mediterrane mozaïekstukjes en Thaise reclamepanelen. Een krachtige visuele compositie op golfkarton.`,
        body: `Voor deze Tezeras liet Paolo Sistilli zich inspireren door twee werelden: de verfijning van kleine mediterrane mozaïekstukjes en de rauwe esthetiek van grote Thaise reclamepanelen. Deze fragmenten zijn samengebracht tot een krachtig geheel op vierkante doosjes van golfkarton.

Verbonden door stroken karton, alsof ze letterlijk aan elkaar zijn geregen. Een subtiel detail dat het geheel versterkt.`
      },
      en: {
        title: "Tezeras",
        description: `Inspired by Mediterranean mosaic fragments and Thai advertising panels. A strong visual composition on corrugated cardboard.`,
        body: `For these Tezeras, Paolo Sistilli drew inspiration from two worlds: the refinement of small Mediterranean mosaic pieces and the raw aesthetics of large Thai advertising panels. These fragments have been brought together on square corrugated cardboard boxes.

Connected by strips of cardboard, as if literally threaded together. A subtle detail that strengthens the whole.`
      },
      de: {
        title: "Tezeras",
        description: `Inspiriert von mediterranen Mosaikstücken und thailändischen Werbetafeln. Eine kraftvolle visuelle Komposition auf Wellpappe.`,
        body: `Für diese Tezeras ließ sich Paolo Sistilli von zwei Welten inspirieren: der Verfeinerung kleiner mediterraner Mosaikstücke und der rohen Ästhetik großer thailändischer Werbepanele. Diese Fragmente wurden auf quadratischen Wellpapp-Schachteln zu einem kraftvollen Ganzen zusammengeführt.

Verbunden durch Kartonstreifen, als wären sie buchstäblich aneinandergereiht. Ein subtiles Detail, das das Ganze stärkt.`
      }
    }
  },

  "the-art-of-board/westminster-abbey/westminster-abbey1.webp": {
    i18n: {
      nl: {
        title: "Westminster Abbey",
        description: `Gedetailleerde maquette van de Westminster Abbey van karton, in samenwerking met Fred Zwart.`,
        body: `Met oog voor vorm, verhoudingen en verfijning zijn 's werelds bekendste gebouwen vertaald naar een verrassend toegankelijk en tastbaar ontwerp. De Westminster Abbey en de Eiffeltoren zijn tot stand gekomen in samenwerking met Fred Zwart.

Een ander gebouw in gedachten? Dat maken we graag op maat.`
      },
      en: {
        title: "Westminster Abbey",
        description: `Detailed cardboard model of Westminster Abbey, created in collaboration with Fred Zwart.`,
        body: `With attention to shape, proportions and refinement, some of the world's most famous buildings have been translated into surprisingly accessible and tangible designs. Westminster Abbey and the Eiffel Tower were both created in collaboration with Fred Zwart.

Have a different building in mind? We are happy to make it to order.`
      },
      de: {
        title: "Westminster Abbey",
        description: `Detailliertes Kartonmodell der Westminster Abbey, entstanden in Zusammenarbeit mit Fred Zwart.`,
        body: `Mit Blick auf Form, Proportionen und Detailtreue wurden einige der bekanntesten Gebäude der Welt in überraschend zugängliche und greifbare Designs übertragen. Westminster Abbey und der Eiffelturm entstanden beide in Zusammenarbeit mit Fred Zwart.

Haben Sie ein anderes Gebäude im Sinn? Das fertigen wir gerne nach Maß.`
      }
    }
  },

  "the-art-of-board/wild-flowers/klaproos.webp": {
    i18n: {
      nl: {
        title: "Wild Flowers",
        description: `Bloemmotieven geïnspireerd op wilde bloemen zoals de klaproos, korenbloem en bosanemoon. Geprint op karton of dibond.`,
        body: `Deze bloemmotieven worden in verschillende hoogtes geprint op karton of dibond. Het wordt heel mooi als het in verschillende lagen gekleurd karton wordt geplot, zoals de details van de bosanemoon.

U kunt ook uw eigen bloem aangeven. Wij komen graag met een voorstel.`
      },
      en: {
        title: "Wild Flowers",
        description: `Floral motifs inspired by wild flowers such as the poppy, cornflower and wood anemone. Printed on cardboard or dibond.`,
        body: `These floral motifs are printed at various heights on cardboard or dibond. The result is particularly beautiful when plotted in multiple layers of coloured cardboard, as with the details of the wood anemone.

You can also suggest your own flower. We are happy to develop a proposal.`
      },
      de: {
        title: "Wildblumen",
        description: `Blumenmotive, inspiriert von Wildblumen wie Mohn, Kornblume und Buschwindröschen. Gedruckt auf Karton oder Dibond.`,
        body: `Diese Blumenmotive werden in verschiedenen Höhen auf Karton oder Dibond gedruckt. Besonders schön wirkt es, wenn es in verschiedenen Lagen farbigen Kartons geplottet wird, wie bei den Details des Buschwindröschens.

Sie können auch Ihre eigene Blume vorschlagen. Wir erstellen gerne einen Entwurf.`
      }
    }
  },

  "interieur-exterieur/apothekerskast/apothekerskast2.webp": {
    i18n: {
      nl: {
        title: "Apothekerskast",
        description: `Een apothekerskast van karton: een functioneel en decoratief object met nostalgie en uitstraling.`,
        body: `Deze apothekerskast is ontworpen als een bijzonder interieurobject dat functionaliteit en esthetiek combineert. Volledig uit karton vervaardigd door Hilarius Design, waar karton zijn grens verlegt.`
      },
      en: {
        title: "Pharmacist's cabinet",
        description: `A cardboard pharmacist's cabinet: a functional and decorative object with nostalgia and character.`,
        body: `This pharmacist's cabinet is designed as a special interior object that combines functionality with aesthetics. Made entirely from cardboard by Hilarius Design, where cardboard pushes its limits.`
      },
      de: {
        title: "Apothekerschrank",
        description: `Ein Apothekerschrank aus Karton: ein funktionales und dekoratives Objekt mit Nostalgie und Ausstrahlung.`,
        body: `Dieser Apothekerschrank wurde als besonderes Interieur-Objekt entworfen, das Funktionalität und Ästhetik verbindet. Vollständig aus Karton gefertigt von Hilarius Design, wo Karton seine Grenzen auslotet.`
      }
    }
  },

  "interieur-exterieur/enorme-displays/oogwereld2.webp": {
    i18n: {
      nl: {
        title: "Enorme displays",
        description: `Enorme displays van karton die uw merk of product op grote schaal presenteren.`,
        body: `Hilarius Design ontwerpt en produceert grote kartonnen displays voor evenementen, winkels en tentoonstellingen. Opvallend, effectief en volledig in uw huisstijl. Een indrukwekkende aanwezigheid op elke locatie.`
      },
      en: {
        title: "Huge displays",
        description: `Enormous cardboard displays that present your brand or product on a grand scale.`,
        body: `Hilarius Design designs and produces large cardboard displays for events, shops and exhibitions. Eye-catching, effective and fully in your corporate identity. An impressive presence at any location.`
      },
      de: {
        title: "Riesendisplays",
        description: `Riesige Displays aus Karton, die Ihre Marke oder Ihr Produkt in großem Maßstab präsentieren.`,
        body: `Hilarius Design entwirft und produziert große Karton-Displays für Veranstaltungen, Geschäfte und Ausstellungen. Auffällig, wirkungsvoll und vollständig in Ihrem Corporate Design. Eine beeindruckende Präsenz an jedem Standort.`
      }
    }
  },

  "interieur-exterieur/gebouwen/villavna.webp": {
    i18n: {
      nl: {
        title: "Gebouwen",
        description: `Gedetailleerde kartonnen gebouwen als architectuurmodel of decoratief object.`,
        body: `Van villa tot fabriekshal: Hilarius Design vertaalt architectuur naar nauwkeurige kartonnen modellen. Perfect voor presentaties, tentoonstellingen of als uniek relatiegeschenk voor de bouwwereld.`
      },
      en: {
        title: "Buildings",
        description: `Detailed cardboard buildings as architectural models or decorative objects.`,
        body: `From villa to factory hall: Hilarius Design translates architecture into accurate cardboard models. Perfect for presentations, exhibitions or as a unique corporate gift for the construction sector.`
      },
      de: {
        title: "Gebäude",
        description: `Detaillierte Kartongebäude als Architekturmodell oder Dekorationsobjekt.`,
        body: `Von der Villa bis zur Fabrikhalle: Hilarius Design übersetzt Architektur in präzise Kartonmodelle. Perfekt für Präsentationen, Ausstellungen oder als einzigartiges Werbegeschenk für die Baubranche.`
      }
    }
  },

  "interieur-exterieur/maquette/maquette2-1.webp": {
    i18n: {
      nl: {
        title: "Maquette",
        description: `Nauwkeurige kartonnen maquettes voor architectuur, stedenbouw en presentaties.`,
        body: `Hilarius Design ontwerpt en produceert kartonnen maquettes die vorm en schaal precies weergeven. Een onmisbaar hulpmiddel bij presentaties en een indrukwekkend visitekaartje voor uw project.`
      },
      en: {
        title: "Scale model",
        description: `Accurate cardboard scale models for architecture, urban planning and presentations.`,
        body: `Hilarius Design designs and produces cardboard scale models that accurately represent form and scale. An indispensable tool for presentations and an impressive showcase for your project.`
      },
      de: {
        title: "Modell",
        description: `Präzise Kartonmodelle für Architektur, Städtebau und Präsentationen.`,
        body: `Hilarius Design entwirft und produziert Kartonmodelle, die Form und Maßstab präzise wiedergeben. Ein unverzichtbares Hilfsmittel bei Präsentationen und eine beeindruckende Visitenkarte für Ihr Projekt.`
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // EINDEJAARSGESCHENKEN
  // ═══════════════════════════════════════════════════════════════

  "eindejaarsgeschenken/compilatie/compilatie-1.webp": {
    i18n: {
      nl: {
        title: "Compilatie",
        description: `Originele kartonnen eindejaarsgeschenken die originaliteit combineren met duurzaamheid.`,
        body: `Verras uw relaties en waardeer uw medewerkers met een geschenk dat blijft hangen. Onze kartonnen eindejaarsgeschenken zijn perfect afgestemd op uw merk en de ontvanger.

Bij Hilarius Design krijgt oud papier en karton een nieuw leven als een uniek duurzaam relatiegeschenk. Door te kiezen voor karton draagt u bij aan de vermindering van de afvalberg, de besparing van grondstoffen en de verlaging van de CO2-uitstoot.

Het is een investering in waardering en langdurige relaties.`
      },
      en: {
        title: "Compilation",
        description: `Original cardboard year-end gifts that combine originality with sustainability.`,
        body: `Surprise your clients and show appreciation to your staff with a gift that leaves a lasting impression. Our cardboard year-end gifts are tailored to your brand and the recipient.

At Hilarius Design, old paper and cardboard gain a new life as a sustainable corporate gift. By choosing cardboard, you contribute to reducing waste, conserving raw materials and lowering CO2 emissions.

It is an investment in appreciation and long-lasting relationships.`
      },
      de: {
        title: "Zusammenstellung",
        description: `Originelle Karton-Jahresendgeschenke, die Originalität mit Nachhaltigkeit verbinden.`,
        body: `Überraschen Sie Ihre Geschäftspartner und würdigen Sie Ihre Mitarbeiter mit einem Geschenk, das in Erinnerung bleibt. Unsere Karton-Jahresendgeschenke sind perfekt auf Ihre Marke und den Empfänger abgestimmt.

Bei Hilarius Design bekommt altes Papier und Karton ein neues Leben als einzigartiges nachhaltiges Werbegeschenk. Mit der Wahl von Karton tragen Sie zur Reduzierung von Abfall, zur Schonung von Rohstoffen und zur Senkung des CO2-Ausstoßes bei.

Es ist eine Investition in Wertschätzung und langfristige Beziehungen.`
      }
    }
  },

  "eindejaarsgeschenken/kerst/kerstversiering2.webp": {
    i18n: {
      nl: {
        title: "Kerstversiering",
        description: `Bijzondere kerstversiering van karton die de feestdagen een unieke uitstraling geeft.`,
        body: `Hilarius Design ontwerpt en produceert kerstversiering die niet alleen mooi is, maar ook duurzaam. Van sierlijke ornamenten tot opvallende decoraties, volledig personaliseerbaar in uw huisstijl voor een feestelijke eindejaarsperiode.`
      },
      en: {
        title: "Christmas decorations",
        description: `Special cardboard Christmas decorations that give the festive season a unique look.`,
        body: `Hilarius Design designs and produces Christmas decorations that are beautiful and sustainable. From elegant ornaments to striking decorations, fully customizable in your corporate identity for a festive year-end period.`
      },
      de: {
        title: "Weihnachtsdekoration",
        description: `Besondere Weihnachtsdekoration aus Karton, die den Festtagen eine einzigartige Ausstrahlung verleiht.`,
        body: `Hilarius Design entwirft und produziert Weihnachtsdekoration, die nicht nur schön, sondern auch nachhaltig ist. Von eleganten Ornamenten bis hin zu auffälligen Dekorationen, vollständig in Ihrem Corporate Design personalisierbar für eine festliche Jahresendzeit.`
      }
    }
  }
};

const translatedProject = (frTitle, frDescription, frBody, esTitle, esDescription, esBody) => ({
  i18n: {
    fr: { title: frTitle, description: frDescription, body: frBody },
    es: { title: esTitle, description: esDescription, body: esBody }
  }
});

const projectI18nAdditions = {
  "transport/bedrijfsautos/bedrijfsautos2.webp": translatedProject(
    "Voitures d'entreprise",
    `La voiture d'entreprise en carton est plus qu'un emballage. C'est une enseigne mobile pour votre marque.`,
    `Imprimée entièrement à votre identité visuelle, cette voiture marque immédiatement les esprits sur le bureau de vos relations. Remplissez-la de bonbons, de chocolat ou d'une petite surprise et offrez un cadeau qui reste visible.

Disponible en plusieurs versions et entièrement adaptable à vos souhaits.`,
    "Vehículos de empresa",
    `El vehículo de empresa de cartón es más que un embalaje. Es un escaparate móvil para su marca.`,
    `Impreso completamente con su identidad visual, este vehículo causa una impresión inmediata en el escritorio de sus relaciones. Llénelo con caramelos, chocolate o una pequeña sorpresa y entregue un regalo que destaca y permanece.

Disponible en varias versiones y totalmente adaptable a sus deseos.`
  ),
  "transport/bierwagen/IMG_0548Biertransport.webp": translatedProject(
    "Wagon à bière",
    `Un wagon à bière original en carton pour présenter votre bouteille de bière de manière festive.`,
    `Entièrement imprimé à votre identité visuelle, ce wagon à bière devient un vrai point d'attention sur chaque bureau. Parfait comme cadeau d'affaires pour l'horeca, les brasseries ou les événements où votre marque est centrale.`,
    "Carro de cerveza",
    `Un carro de cerveza original de cartón para presentar su botella de cerveza de forma festiva.`,
    `Totalmente impreso con su identidad visual, este carro de cerveza se convierte en un verdadero punto de atención en cualquier escritorio. Perfecto como regalo corporativo para hostelería, cervecerías o eventos en los que su marca es protagonista.`
  ),
  "transport/containers/IMG_0562ContainerRoodHL.webp": translatedProject(
    "Conteneurs",
    `Des conteneurs en carton comme emballage original pour votre cadeau d'affaires. Robustes, impressionnants et entièrement à votre image.`,
    `Ces conteneurs en carton associent une allure solide à un usage pratique. Remplissez-les avec votre cadeau et offrez à vos relations un objet qui garde littéralement sa place.`,
    "Contenedores",
    `Contenedores de cartón como embalaje original para su regalo corporativo. Robustos, impactantes y totalmente con su identidad visual.`,
    `Estos contenedores de cartón combinan una apariencia fuerte con un uso práctico. Llénenlos con su regalo y entregue a sus relaciones un detalle que permanece en el escritorio.`
  ),
  "transport/diepladers/dieplader2.webp": translatedProject(
    "Porte-engins",
    `Le porte-engins en carton : un poids lourd en format miniature. Un cadeau d'affaires original pour la logistique et le transport.`,
    `Entièrement imprimé à votre identité visuelle, ce porte-engins fait immédiatement impression. Un cadeau idéal pour les partenaires du transport et de la logistique qui savent apprécier la qualité robuste.`,
    "Góndolas",
    `La góndola de cartón: un peso pesado en miniatura. Un regalo corporativo original para logística y transporte.`,
    `Totalmente impresa con su identidad visual, esta góndola causa una impresión inmediata. Un regalo ideal para socios del mundo del transporte y la logística que aprecian la calidad robusta.`
  ),
  "transport/tankauto/tankauto2.webp": translatedProject(
    "Camion-citerne",
    `Un camion-citerne en carton comme cadeau d'affaires remarquable. Parfait pour les entreprises de l'énergie ou du transport.`,
    `Entièrement imprimé à votre identité visuelle, ce camion-citerne attire le regard sur chaque bureau. Original, durable et reconnaissable : un cadeau qui garde votre marque en mouvement.`,
    "Camión cisterna",
    `Un camión cisterna de cartón como regalo corporativo llamativo. Perfecto para empresas del sector energético o del transporte.`,
    `Totalmente impreso con su identidad visual, este camión cisterna destaca en cualquier escritorio. Original, sostenible y reconocible: un regalo que mantiene su marca en movimiento.`
  ),
  "transport/treinen/treinen2.webp": translatedProject(
    "Trains",
    `Un train en carton comme cadeau d'affaires original pour les partenaires du secteur ferroviaire et au-delà.`,
    `Imprimé entièrement sur mesure à votre identité visuelle, ce train va droit au cœur de vos relations. Original, reconnaissable et durable : un cadeau qui renforce le lien.`,
    "Trenes",
    `Un tren de cartón como regalo corporativo original para socios del mundo ferroviario y más allá.`,
    `Impreso completamente a medida con su identidad visual, este tren llega directamente al corazón de sus relaciones. Original, reconocible y sostenible: un regalo que refuerza la conexión.`
  ),
  "transport/vliegtuigen/vliegtuigen2.webp": translatedProject(
    "Avions",
    `Donnez un départ en fanfare à vos nouvelles relations. Des avions en carton comme cadeau d'affaires original.`,
    `Ces avions en carton sont entièrement imprimés à votre identité visuelle et peuvent être remplis de bonbons, de chocolat ou d'une petite surprise. Un cadeau qui attire l'attention et stimule l'imagination.

The sky is the limit!`,
    "Aviones",
    `Dé a sus nuevas relaciones un despegue brillante. Aviones de cartón como regalo corporativo original.`,
    `Estos aviones de cartón se imprimen completamente con su identidad visual y son perfectos para llenar con caramelos, chocolate o una pequeña sorpresa. Un regalo que llama la atención y despierta la imaginación.

The sky is the limit!`
  ),
  "transport/vrachtwagens/vrachtwagens2-2.webp": translatedProject(
    "Camions",
    `Le roi de la route. Des camions en carton, parfaits pour emballer une bouteille de vin, de bière ou des friandises de manière originale.`,
    `Avec nos camions, cela reste aussi abordable. Ces véhicules sont imprimés à votre identité visuelle, afin que votre cadeau reste un point d'attention sur le bureau de vos relations.

Dimensions : 348 x 86 x 114 mm (L x l x h).

Vous souhaitez d'autres véhicules en carton ? Consultez hilariusdesign.nl ou contactez-nous pour un design sur mesure. The sky is the limit!`,
    "Camiones",
    `El rey de la carretera. Camiones de cartón, perfectos para embalar una botella de vino, cerveza o dulces de forma original.`,
    `Con nuestros camiones, además, sigue siendo asequible. Estos vehículos se imprimen con su identidad visual, para que su regalo siga llamando la atención en el escritorio de sus relaciones.

Dimensiones: 348 x 86 x 114 mm (l x a x h).

¿Le interesan otros vehículos de cartón? Visite hilariusdesign.nl o contáctenos para un diseño a medida. The sky is the limit!`
  ),
  "bureau-accessoires/bureaukalenders/bureaukalenders3.webp": translatedProject(
    "Calendriers de bureau",
    `Chaque jour une nouvelle occasion. Des calendriers triangulaires compacts en carton recyclé, stables toute l'année.`,
    `Grâce à la fermeture primée 'click, ready', le calendrier se monte en quelques secondes. Chaque face offre un aperçu clair de quatre ou six mois avec les numéros de semaine. Personnalisez-le avec votre logo, message ou vœux de nouvel an.

Format calendrier de bureau : 210 x 75 x 70 mm (L x l x h). Les calendriers sont livres a plat.

Également disponible comme calendrier mural en 420 x 297 mm ou 297 x 420 mm.

Durable, reconnaissable et pratique : le cadeau d'affaires qui reste debout.`,
    "Calendarios de escritorio",
    `Cada día una nueva oportunidad. Calendarios triangulares compactos de cartón reciclado que se mantienen firmes todo el año.`,
    `Gracias al cierre premiado 'click, ready', se monta en segundos. Cada cara ofrece una vista clara de cuatro o seis meses con números de semana. Personalícelo con su logotipo, mensaje o felicitación de año nuevo.

Formato calendario de escritorio: 210 x 75 x 70 mm (l x a x h). Los calendarios se entregan planos.

También disponible como calendario de pared en 420 x 297 mm o 297 x 420 mm.

Sostenible, reconocible y práctico: el regalo corporativo que permanece.`
  ),
  "bureau-accessoires/fotolijstjes/fotolijstjes2.webp": translatedProject(
    "Cadres photo",
    `Des cadres photo élégants en carton qui apportent une touche personnelle au bureau.`,
    `Conçus avec soin, ces cadres photo associent une apparence soignée à des matériaux durables. Avec votre logo ou message, ils deviennent un cadeau d'affaires à la fois personnel et fonctionnel.`,
    "Marcos de fotos",
    `Elegantes marcos de fotos de cartón que aportan un toque personal al escritorio u oficina.`,
    `Diseñados con atención al detalle, estos marcos combinan una apariencia cuidada con materiales sostenibles. Con su logotipo o mensaje, se convierten en un regalo corporativo personal y funcional.`
  ),
  "bureau-accessoires/klokken/klokken2.webp": translatedProject(
    "Horloges",
    `Le temps en carton : une approche différente. Horloges murales en carton compact ou ondulé comme cadeau d'affaires particulier.`,
    `Ces horloges murales sont conçues par Hilarius Design et associent fonctionnalité et identité visuelle propre. Disponibles en plusieurs versions et entièrement adaptables à vos souhaits et à votre charte.`,
    "Relojes",
    `El tiempo en cartón: algo diferente. Relojes de pared de cartón compacto o corrugado como regalo corporativo especial.`,
    `Estos relojes de pared han sido diseñados por Hilarius Design y combinan funcionalidad con una imagen propia. Disponibles en varias versiones y totalmente adaptables a sus deseos e identidad visual.`
  ),
  "bureau-accessoires/memobakjes/memobakjes2.webp": translatedProject(
    "Bacs mémo",
    `Des bacs mémo pratiques en carton pour le bureau. Fonctionnels, élégants et entièrement à votre image.`,
    `Ces bacs mémo sont plus qu'une solution de rangement. Ils rappellent votre marque au quotidien. Entièrement imprimés à votre identité visuelle, ils restent présents sur le bureau de vos relations.`,
    "Bandejas mémo",
    `Prácticas bandejas mémo de cartón para el escritorio. Funcionales, elegantes y totalmente con su identidad visual.`,
    `Estas bandejas mémo son más que una solución de almacenamiento. Son un recordatorio diario de su marca. Totalmente impresas con su identidad visual, permanecen presentes en el escritorio de sus relaciones.`
  ),
  "bureau-accessoires/onderzetters/onderzetters2.webp": translatedProject(
    "Sous-verres",
    `Des sous-verres élégants en carton qui accompagnent chaque tasse de café ou de thé avec votre marque.`,
    `Ces sous-verres en carton sont entièrement personnalisables avec votre logo et votre identité visuelle. Fonctionnels, durables et subtils pour garder votre marque en tête.`,
    "Posavasos",
    `Elegantes posavasos de cartón que acompañan cada taza de café o té con su marca.`,
    `Estos posavasos de cartón son totalmente personalizables con su logotipo e identidad visual. Funcionales, sostenibles y una forma sutil de mantener su marca presente.`
  ),
  "bureau-accessoires/pop-up/popup2.webp": translatedProject(
    "Pop-up",
    `Des constructions pop-up en carton qui surprennent et se remarquent. Parfaites comme outil promotionnel ou cadeau d'affaires.`,
    `Hilarius Design conçoit et produit des constructions pop-up qui attirent immédiatement l'attention à l'ouverture. Une manière spectaculaire de présenter votre message, entièrement à votre image.`,
    "Pop-up",
    `Construcciones pop-up de cartón que sorprenden y destacan. Perfectas como herramienta promocional o regalo corporativo.`,
    `Hilarius Design diseña y produce construcciones pop-up que captan la atención al abrirse. Una forma espectacular de presentar su mensaje, completamente con su identidad visual.`
  ),
  "verpakkingen/bloemenverpakking/bloemendozen2.webp": translatedProject(
    "Emballage pour fleurs",
    `Des emballages floraux originaux en carton qui présentent un bouquet comme un vrai cadeau.`,
    `Hilarius Design conçoit des emballages pour fleurs qui présentent et protègent le bouquet de manière optimale. Entièrement à votre image, ils ajoutent une touche élégante à chaque occasion.`,
    "Embalaje para flores",
    `Embalajes florales originales de cartón que presentan un ramo como un verdadero regalo.`,
    `Hilarius Design diseña embalajes para flores que presentan y protegen el ramo de forma óptima. Totalmente con su identidad visual, son un complemento elegante para cualquier ocasión.`
  ),
  "verpakkingen/cd-verpakking/cdverpakking2.webp": translatedProject(
    "Emballage CD",
    `Des emballages CD particuliers en carton qui donnent à votre musique ou présentation une allure professionnelle.`,
    `Ces emballages CD sur mesure en carton donnent à votre produit une présentation propre. Entièrement à votre identité visuelle, d'une finition simple à une finition haut de gamme.`,
    "Embalaje para CD",
    `Embalajes especiales de cartón para CD que dan a su música o presentación una apariencia profesional.`,
    `Estos embalajes para CD hechos a medida dan a su producto una presentación propia. Totalmente con su identidad visual, desde un acabado sencillo hasta uno premium.`
  ),
  "verpakkingen/chocoladedoosje/twee_chocoladedoosjes.webp": translatedProject(
    "Boîte à chocolats",
    `Des boîtes à chocolats luxueuses en carton comme cadeau d'affaires savoureux dans un emballage élégant.`,
    `Hilarius Design conçoit des boîtes à chocolats qui impressionnent avant même la première bouchée. Entièrement personnalisables à votre identité visuelle, du format à l'impression.`,
    "Caja de chocolates",
    `Lujosas cajas de cartón para chocolates como regalo corporativo sabroso en un embalaje elegante.`,
    `Hilarius Design diseña cajas de chocolates que impresionan incluso antes del primer bombón. Totalmente personalizables con su identidad visual, desde el formato hasta la impresión.`
  ),
  "verpakkingen/handtasjes/IMG_1012.webp": translatedProject(
    "Sacs à main",
    `Offrir avec style. Des sacs à main luxueux en carton qui transforment chaque cadeau en expérience élégante.`,
    `Parfaits pour surprendre vos relations, remercier vos collaborateurs ou renforcer votre marque lors de moments spéciaux. Très adaptés au champagne, au vin, aux délicatesses, à la lingerie, à la mode et aux cosmétiques.

Grâce à la finition de qualité et au carton ondulé robuste, ils associent une allure luxueuse à une durabilité pratique. Disponibles en carton blanc, noir ou brun et entièrement personnalisables.

Prix sur demande à partir de 250 pièces. Artwork et une correction inclus, hors 21% de TVA.`,
    "Bolsos",
    `Regalar con estilo. Bolsos de cartón de lujo que convierten cualquier regalo en una experiencia elegante.`,
    `Perfectos para sorprender a sus relaciones, agradecer al personal o reforzar su marca en momentos especiales. Muy adecuados para champán, vino, delicatessen, lencería, moda y cosmética.

Gracias al acabado de alta calidad y al cartón corrugado resistente, combinan una imagen lujosa con durabilidad práctica. Disponibles en cartón blanco, negro o marrón y totalmente personalizables.

Precio bajo solicitud desde 250 unidades. Incluye artwork y una ronda de corrección, excluido el 21% de IVA.`
  ),
  "verpakkingen/magic-packaging/magictubes2.webp": translatedProject(
    "Magic Packaging",
    `L'emballage pour champagne ou vin le plus original au monde. D'un simple coup sur le dessus, la boîte s'ouvre comme une fleur.`,
    `Découvrez le magic packaging de Hilarius Design : d'un simple coup, la boîte s'ouvre comme une fleur et présente magnifiquement la bouteille. Disponible en rose vif et dans d'autres couleurs sur demande.

Nous développons des emballages originaux sur mesure, parfaitement adaptés à vos souhaits.`,
    "Magic Packaging",
    `El embalaje para champán o vino más original del mundo. Con un simple toque en la parte superior, la caja se abre como una flor.`,
    `Descubra el magic packaging de Hilarius Design: con un solo toque la caja se abre como una flor y presenta la botella de forma espectacular. Disponible en rosa llamativo y otros colores bajo solicitud.

Desarrollamos embalajes originales a medida, perfectamente adaptados a sus deseos.`
  ),
  "verpakkingen/ontspiegelde-showcase/luxar2.webp": translatedProject(
    "Vitrine antireflet",
    `Des vitrines antireflet pour une présentation optimale sans reflets gênants.`,
    `Ces vitrines sont conçues pour présenter votre produit avec une clarté maximale. Grâce à la finition antireflet, toute l'attention va au contenu. Parfait pour expositions, magasins et présentations d'entreprise.`,
    "Vitrina antirreflejos",
    `Vitrinas antirreflejos para una presentación óptima sin reflejos molestos.`,
    `Estas vitrinas están diseñadas para una presentación nítida de su producto. Con el acabado antirreflejos, toda la atención se centra en el contenido. Perfectas para exposiciones, tiendas y presentaciones corporativas.`
  ),
  "verpakkingen/schockproof-wijnverpakking/viko_shockproof2.webp": translatedProject(
    "Emballage vin antichoc",
    `Un emballage vin antichoc en carton qui protège parfaitement votre bouteille pendant le transport.`,
    `Cet emballage vin robuste en carton est développé pour protéger votre bouteille contre les coups et les chocs. Élégant, durable et entièrement personnalisable à votre identité visuelle. À la fois sûr et représentatif.`,
    "Embalaje antichoque para vino",
    `Embalaje de cartón antichoque para vino que protege su botella durante el transporte.`,
    `Este embalaje robusto de cartón para vino se ha desarrollado para proteger la botella contra golpes e impactos. Elegante, sostenible y totalmente personalizable con su identidad visual. Seguro y representativo a la vez.`
  ),
  "verpakkingen/uitklapdoos/metopdoos2.webp": translatedProject(
    "Boîte dépliable",
    `Une boîte dépliable qui surprend à l'ouverture et présente son contenu de manière spectaculaire.`,
    `La boîte dépliable de Hilarius Design associe fonctionnalité et moment d'ouverture surprenant. Entièrement réalisée à votre identité visuelle, elle est le cadeau d'affaires idéal pour les occasions spéciales.`,
    "Caja desplegable",
    `Una caja desplegable que sorprende al abrirse y presenta el contenido de forma espectacular.`,
    `La caja desplegable de Hilarius Design combina funcionalidad con un momento de apertura sorprendente. Fabricada completamente con su identidad visual, es el regalo corporativo ideal para ocasiones especiales.`
  ),
  "verpakkingen/viko-kokers/vikokoker2.webp": translatedProject(
    "Tubes Viko",
    `Des tubes Viko originaux en carton : un emballage élégant et protecteur pour rouleaux et documents.`,
    `Les tubes Viko sont développés pour une présentation élégante et un transport sûr de posters, documents et autres produits enroulés. Entièrement imprimés à votre identité visuelle.`,
    "Tubos Viko",
    `Tubos Viko originales de cartón: un embalaje elegante y protector para rollos y documentos.`,
    `Los tubos Viko se han desarrollado para una presentación elegante y un transporte seguro de posters, documentos y otros productos enrollados. Totalmente impresos con su identidad visual.`
  ),
  "verpakkingen/wijnverpakkingen/IMG_0579_3vakswijndoos.webp": translatedProject(
    "Emballages pour vin",
    `Boîtes à vin durables pour 1, 2 ou 3 bouteilles. Légères, écologiques et une alternative élégante aux caisses en bois.`,
    `Ces boîtes à vin en carton sont disponibles pour 1, 2 ou 3 bouteilles et associent une apparence élégante à un usage pratique. Légères, écologiques et parfaites pour l'emballage et la présentation.

Entièrement personnalisables à votre identité visuelle.`,
    "Embalajes para vino",
    `Cajas de vino sostenibles para 1, 2 o 3 botellas. Ligeras, ecológicas y una alternativa elegante a las cajas de madera.`,
    `Estas cajas de vino de cartón están disponibles para 1, 2 o 3 botellas y combinan una apariencia elegante con comodidad práctica. Ligeras, ecológicas y perfectas para embalaje y presentación.

Totalmente personalizables con su identidad visual.`
  ),
  "verpakkingen/zakken/zakkengroot.webp": translatedProject(
    "Sacs",
    `Des sacs et cabas en carton comme emballage élégant pour vos produits et cadeaux d'affaires.`,
    `Hilarius Design conçoit et produit des sacs en carton en divers formats et versions. Entièrement imprimés à votre identité visuelle, ils deviennent une carte de visite pour votre marque à chaque occasion.`,
    "Bolsas",
    `Bolsas y asas de cartón como embalaje elegante para sus productos y regalos corporativos.`,
    `Hilarius Design diseña y produce bolsas de cartón en diversos formatos y versiones. Totalmente impresas con su identidad visual, son una tarjeta de presentación para su marca en cada ocasión.`
  ),
  "boeken-mappen/boekverpakkingen/libris2.webp": translatedProject(
    "Emballages pour livres",
    `La présentation fait la différence. Des étuis sur mesure pour des livres particuliers, comme lors de la remise du prix Libris.`,
    `Un livre offre des heures, des jours et parfois des années de plaisir de lecture, ce qui en fait un cadeau d'affaires idéal. Mais la présentation fait la différence. Choisissez-vous un papier cadeau standard ou un étui durable réalisé sur mesure ?

L'emballage présenté ici a été utilisé lors de la remise du prix Libris, où les lauréats ont emporté leur livre dans cette présentation exclusive.`,
    "Embalajes para libros",
    `La presentación marca la diferencia. Estuches a medida para libros especiales, como en la entrega del Premio Libris.`,
    `Un libro ofrece horas, días e incluso años de placer de lectura, por lo que es un regalo corporativo perfecto. Pero la presentación marca la diferencia. ¿Elige papel de regalo estándar o un estuche sostenible hecho a medida?

El embalaje mostrado se utilizó en la entrega del Premio Libris, donde los ganadores se llevaron su libro en esta presentación exclusiva.`
  ),
  "boeken-mappen/euromap/euromap2.webp": translatedProject(
    "Dossier Euromap",
    `Édité lors de l'introduction de l'euro en 2002. Toutes les pièces des douze pays participants y trouvent leur place.`,
    `Ces dossiers uniques ont été édités lors de l'introduction de l'euro en 2002. Toutes les pièces des douze pays membres de l'époque y trouvent leur place. Un objet historique qui marque l'arrivée d'une nouvelle ère.`,
    "Carpeta Euromap",
    `Editada con la introducción del euro en 2002. Todas las monedas de los doce países participantes caben en su interior.`,
    `Estas carpetas únicas se editaron con la introducción del euro en 2002. Todas las monedas de los doce países miembros de entonces caben en su interior. Un recuerdo histórico de la llegada de una nueva era.`
  ),
  "boeken-mappen/golfrecords/golfrecords2.webp": translatedProject(
    "Livre des records de golf",
    `Une édition unique pour les passionnés de golf, avec des records remarquables et des anecdotes inspirantes sur des golfeurs célèbres.`,
    `Ce qui distingue vraiment ce livret, c'est l'expérience complète. Hilarius Design a donné une place propre à la balle de golf, au tee et au marqueur. Tous les éléments peuvent être personnalisés avec votre logo.

Le livret est disponible en néerlandais, anglais et allemand. Idéal pour un public international.`,
    "Libro de récords de golf",
    `Una edición única para amantes del golf, con récords especiales y anécdotas inspiradoras sobre golfistas famosos.`,
    `Lo que realmente distingue este folleto es la experiencia completa. Hilarius Design ha dado un lugar propio a la pelota de golf, el tee y el marcador. Todos los componentes pueden personalizarse con su logotipo.

El folleto está disponible en neerlandés, inglés y alemán. Ideal para un público internacional.`
  ),
  "boeken-mappen/grafiekmappen/grafiekmappen2-1.webp": translatedProject(
    "Dossiers graphiques",
    `Onze dessins sumi séparés de Peter Schenk, reliés par des tiges en acier et enrichis d'un poème de Theo Olthuis.`,
    `Dans ce classeur particulier, onze dessins sumi séparés de Peter Schenk sont reliés par des tiges en acier. Le dossier est enrichi d'un poème de Theo Olthuis. Il en résulte une édition artistique où contenu et forme se rejoignent.`,
    "Carpetas gráficas",
    `Once dibujos sumi sueltos de Peter Schenk, unidos por pasadores de acero y enriquecidos con un poema de Theo Olthuis.`,
    `En esta carpeta especial, once dibujos sumi sueltos de Peter Schenk se mantienen unidos mediante pasadores de acero. La carpeta se enriquece con un poema de Theo Olthuis. Así surge una publicación artística donde contenido y forma se unen.`
  ),
  "boeken-mappen/herdenkingsboek/herdenkingsboek2.webp": translatedProject(
    "Livre commémoratif",
    `Un livre commémoratif qui préserve les souvenirs pour toujours. Conçu et fabriqué professionnellement avec attention aux détails.`,
    `Hilarius Design conçoit et produit des livres commémoratifs qui rendent justice à un événement ou à une personne particulière. De la couverture aux pages intérieures, chaque détail contribue à la dignité et à l'allure de ce document exceptionnel.`,
    "Libro conmemorativo",
    `Un libro conmemorativo que conserva recuerdos para siempre. Diseñado y fabricado profesionalmente con atención al detalle.`,
    `Hilarius Design diseña y produce libros conmemorativos que hacen justicia a un acontecimiento o persona especial. Desde la cubierta hasta las páginas interiores, cada detalle contribuye a la dignidad y presencia de este documento excepcional.`
  ),
  "boeken-mappen/informatiemap/informatiemap2.webp": translatedProject(
    "Dossier d'information",
    `Des dossiers informatifs qui présentent votre documentation de manière professionnelle et élégante.`,
    `Hilarius Design conçoit des dossiers d'information entièrement à votre identité visuelle. Robustes, clairs et conçus pour impressionner vos clients et relations.`,
    "Carpeta informativa",
    `Carpetas informativas que presentan su documentación de forma profesional y elegante.`,
    `Hilarius Design diseña carpetas informativas totalmente con su identidad visual. Robustas, claras y creadas para causar impresión en sus clientes y relaciones.`
  ),
  "boeken-mappen/kunstmappen/kunstmappen2.webp": translatedProject(
    "Dossiers d'art",
    `Des dossiers d'art de haute qualité pour présenter et conserver œuvres et estampes.`,
    `Ces dossiers sont conçus pour les artistes, galeries et collectionneurs qui souhaitent présenter et protéger leur travail de manière optimale. Entièrement réalisés sur mesure, avec une attention à l'esthétique qui sert l'œuvre.`,
    "Carpetas de arte",
    `Carpetas de arte de alta calidad para presentar y conservar obras y gráficas.`,
    `Estas carpetas están diseñadas para artistas, galerías y coleccionistas que desean presentar y proteger su obra de forma óptima. Totalmente hechas a medida, con una atención estética que favorece la obra.`
  ),
  "boeken-mappen/zelfsluitende-mappen/mappen3.webp": translatedProject(
    "Dossiers autofermants",
    `Donnez à vos documents la présentation qu'ils méritent. Des dossiers autofermants en carton, entièrement à votre image.`,
    `Qu'il s'agisse d'un livre, d'informations de projet ou d'une série de brochures : avec un dossier autofermant en carton, ils restent protégés et présentés avec style.

Hilarius Design conçoit des dossiers entièrement à votre identité visuelle, avec votre logo, nom de projet ou vignette. Robustes, durables et conçus pour impressionner.`,
    "Carpetas autocierre",
    `Dé a sus documentos la presentación que merecen. Carpetas autocierre de cartón, totalmente con su identidad visual.`,
    `Ya sea un libro, información de proyecto o una serie de folletos: con una carpeta autocierre de cartón permanecen protegidos y presentables.

Hilarius Design diseña carpetas completamente con su identidad visual, incorporando su logotipo, nombre de proyecto o distintivo. Robustas, sostenibles y creadas para impresionar.`
  ),
  "spellen/bordspellen/bordspellen2.webp": translatedProject(
    "Jeux de plateau",
    `Le jeu tridimensionnel 'Hogerop', entièrement personnalisable avec des questions sur votre organisation.`,
    `Transformez le team building ou la relation client en vraie expérience. Ce jeu de plateau tridimensionnel s'adapte entièrement à votre organisation et à vos objectifs. Une manière originale d'associer votre marque à une expérience positive et partagée.`,
    "Juegos de mesa",
    `El juego tridimensional 'Hogerop', totalmente personalizable con preguntas sobre su organización.`,
    `Convierta el team building o la gestión de relaciones en una verdadera experiencia. Este juego de mesa tridimensional se adapta completamente a su organización y objetivos. Una forma original de vincular su marca a una experiencia positiva y compartida.`
  ),
  "spellen/poulebal/poulebal2.webp": translatedProject(
    "Jeu Poulebal",
    `Le jeu Poulebal : un jeu stimulant et amusant pour les groupes, parfait comme cadeau d'affaires.`,
    `Jouez, défiez-vous et riez ensemble. Le jeu Poulebal de Hilarius Design est un excellent outil pour les activités d'équipe et peut être entièrement personnalisé pour votre organisation.`,
    "Juego Poulebal",
    `El juego Poulebal: un juego desafiante y entretenido para grupos, perfecto como regalo corporativo.`,
    `Jugar, retar y reír juntos. El juego Poulebal de Hilarius Design es una excelente herramienta para actividades de equipo y puede personalizarse completamente para su organización.`
  ),
  "spellen/puzzel/puzzel2.webp": translatedProject(
    "Puzzle",
    `Comment faire un losange avec huit pièces ? Ou un cercle avec dix ? Nos puzzles exclusifs stimulent et détendent à la fois.`,
    `Ces puzzles particuliers de Hilarius Design ne sont pas seulement un passe-temps agréable, mais aussi un cadeau d'affaires original qui se remarque et reste en mémoire. Entièrement personnalisables avec votre logo ou message.`,
    "Puzzle",
    `¿Cómo hacer un rombo con ocho piezas? ¿O un círculo con diez? Nuestros puzzles exclusivos retan y relajan al mismo tiempo.`,
    `Estos puzzles especiales de Hilarius Design no solo son una actividad divertida, sino también un regalo corporativo original que destaca y se recuerda. Totalmente personalizables con su logotipo o mensaje.`
  ),
  "spellen/schaakspel/schaakspel2.webp": translatedProject(
    "Jeu d'échecs",
    `De beaux jeux d'échecs disponibles en plusieurs couleurs et formats. Une partie d'échecs entre deux rendez-vous.`,
    `Nos jeux d'échecs en carton sont à la fois fonctionnels et décoratifs. Ils associent le jeu classique au matériau unique qu'est le carton. Un cadeau d'affaires original pour amateurs d'échecs, qui se distingue aussi comme objet design.`,
    "Ajedrez",
    `Bonitos juegos de ajedrez disponibles en varios colores y tamaños. Una partida de ajedrez entre reuniones.`,
    `Nuestros juegos de ajedrez de cartón son funcionales y decorativos. Combinan el juego clásico con el material único del cartón. Un regalo corporativo original para amantes del ajedrez que también destaca como objeto de diseño.`
  ),
  "spellen/werpspel/werpspel2.webp": translatedProject(
    "Jeu de lancer",
    `Un jeu de lancer stimulant en carton, parfait comme cadeau d'affaires pour team building et réceptions.`,
    `Ce jeu de lancer de Hilarius Design associe des règles simples à beaucoup de plaisir. Entièrement personnalisable à votre identité visuelle et conçu pour réunir les gens.`,
    "Juego de lanzamiento",
    `Un desafiante juego de lanzamiento de cartón, perfecto como regalo corporativo para team building y encuentros.`,
    `Este juego de lanzamiento de Hilarius Design combina reglas sencillas con mucha diversión. Totalmente personalizable con su identidad visual y creado para reunir a las personas.`
  ),
  "the-art-of-board/eiffeltoren/eiffeltoren1.webp": translatedProject(
    "Tour Eiffel",
    `La tour Eiffel reproduite en carton jusque dans les détails, en collaboration avec Fred Zwart.`,
    `Avec attention à la forme, aux proportions et à la finesse, ce monument mondialement connu a été traduit en un design en carton surprenant, accessible et tangible. Réalisé en collaboration avec Fred Zwart.

Vous avez un autre bâtiment en tête ? Nous le réalisons volontiers sur mesure.`,
    "Torre Eiffel",
    `La Torre Eiffel reproducida en cartón hasta el último detalle, en colaboración con Fred Zwart.`,
    `Con atención a la forma, las proporciones y el refinamiento, este monumento mundialmente famoso se ha traducido a un diseño de cartón sorprendentemente accesible y tangible. Realizado en colaboración con Fred Zwart.

¿Tiene otro edificio en mente? Lo realizamos con gusto a medida.`
  ),
  "the-art-of-board/golfkartonnen-stoel/stoelkarton-Hilariusdesign.webp": translatedProject(
    "Chaise en carton ondulé",
    `Entièrement fabriquée en carton ondulé, couche après couche collée pour former un design étonnamment solide.`,
    `Sur le côté se trouve le détail qui la complète : la lettre O découpée dans les différentes couches de carton ondulé. Une référence subtile à Oscar, pour qui cette chaise a été développée.

Conçue et fabriquée par Hilarius Design, où le carton prend du caractère et le design raconte une histoire personnelle.`,
    "Silla de cartón corrugado",
    `Hecha completamente de cartón corrugado, capa tras capa encolada hasta formar un diseño sorprendentemente resistente.`,
    `En el lateral está el detalle que la completa: la letra O recortada en las distintas capas de cartón corrugado. Una referencia sutil a Oscar, para quien se desarrolló esta silla.

Diseñada y fabricada por Hilarius Design, donde el cartón adquiere carácter y el diseño cuenta una historia personal.`
  ),
  "the-art-of-board/tezeras/tezeras.webp": translatedProject(
    "Tezeras",
    `Inspiré par des fragments de mosaïque méditerranéenne et des panneaux publicitaires thaïlandais. Une composition visuelle forte sur carton ondulé.`,
    `Pour ces Tezeras, Paolo Sistilli s'est inspiré de deux mondes : la finesse de petits fragments de mosaïque méditerranéenne et l'esthétique brute de grands panneaux publicitaires thaïlandais. Ces fragments sont réunis sur des boîtes carrées en carton ondulé.

Reliés par des bandes de carton, comme s'ils étaient littéralement enfilés. Un détail subtil qui renforce l'ensemble.`,
    "Tezeras",
    `Inspirado en fragmentos de mosaico mediterráneo y paneles publicitarios tailandeses. Una composición visual potente sobre cartón corrugado.`,
    `Para estas Tezeras, Paolo Sistilli se inspiró en dos mundos: la delicadeza de pequeños fragmentos de mosaico mediterráneo y la estética cruda de grandes paneles publicitarios tailandeses. Estos fragmentos se unen sobre cajas cuadradas de cartón corrugado.

Conectados por tiras de cartón, como si estuvieran literalmente ensartados. Un detalle sutil que refuerza el conjunto.`
  ),
  "the-art-of-board/westminster-abbey/westminster-abbey1.webp": translatedProject(
    "Westminster Abbey",
    `Maquette détaillée de Westminster Abbey en carton, réalisée en collaboration avec Fred Zwart.`,
    `Avec attention à la forme, aux proportions et à la finesse, certains des bâtiments les plus connus au monde ont été traduits en designs accessibles et tangibles. Westminster Abbey et la tour Eiffel ont toutes deux été réalisées en collaboration avec Fred Zwart.

Vous avez un autre bâtiment en tête ? Nous le réalisons volontiers sur mesure.`,
    "Westminster Abbey",
    `Maqueta detallada de Westminster Abbey en cartón, realizada en colaboración con Fred Zwart.`,
    `Con atención a la forma, las proporciones y el refinamiento, algunos de los edificios más conocidos del mundo se han traducido a diseños accesibles y tangibles. Westminster Abbey y la Torre Eiffel se realizaron en colaboración con Fred Zwart.

¿Tiene otro edificio en mente? Lo realizamos con gusto a medida.`
  ),
  "the-art-of-board/wild-flowers/klaproos.webp": translatedProject(
    "Wild Flowers",
    `Motifs floraux inspirés de fleurs sauvages comme le coquelicot, le bleuet et l'anémone des bois. Imprimés sur carton ou dibond.`,
    `Ces motifs floraux sont imprimés à différentes hauteurs sur carton ou dibond. Le résultat devient particulièrement beau lorsqu'il est tracé en plusieurs couches de carton coloré, comme les détails de l'anémone des bois.

Vous pouvez aussi proposer votre propre fleur. Nous vous préparons volontiers une proposition.`,
    "Wild Flowers",
    `Motivos florales inspirados en flores silvestres como la amapola, el aciano y la anémona de bosque. Impresos en cartón o dibond.`,
    `Estos motivos florales se imprimen a distintas alturas en cartón o dibond. El resultado es especialmente bonito cuando se traza en varias capas de cartón de color, como los detalles de la anémona de bosque.

También puede proponer su propia flor. Con gusto prepararemos una propuesta.`
  ),
  "interieur-exterieur/apothekerskast/apothekerskast2.webp": translatedProject(
    "Armoire d'apothicaire",
    `Une armoire d'apothicaire en carton : un objet fonctionnel et décoratif avec nostalgie et caractère.`,
    `Cette armoire d'apothicaire est conçue comme un objet d'intérieur particulier qui associe fonctionnalité et esthétique. Entièrement fabriquée en carton par Hilarius Design, où le carton repousse ses limites.`,
    "Armario de farmacia",
    `Un armario de farmacia de cartón: un objeto funcional y decorativo con nostalgia y carácter.`,
    `Este armario de farmacia está diseñado como un objeto de interior especial que combina funcionalidad y estética. Fabricado completamente en cartón por Hilarius Design, donde el cartón supera sus límites.`
  ),
  "interieur-exterieur/enorme-displays/oogwereld2.webp": translatedProject(
    "Grands displays",
    `De grands displays en carton qui présentent votre marque ou produit à grande échelle.`,
    `Hilarius Design conçoit et produit de grands displays en carton pour événements, magasins et expositions. Remarquables, efficaces et entièrement à votre identité visuelle. Une présence impressionnante sur chaque lieu.`,
    "Displays enormes",
    `Displays enormes de cartón que presentan su marca o producto a gran escala.`,
    `Hilarius Design diseña y produce grandes displays de cartón para eventos, tiendas y exposiciones. Llamativos, eficaces y totalmente con su identidad visual. Una presencia impresionante en cualquier lugar.`
  ),
  "interieur-exterieur/gebouwen/villavna.webp": translatedProject(
    "Bâtiments",
    `Des bâtiments en carton détaillés comme maquettes architecturales ou objets décoratifs.`,
    `De la villa au hall industriel : Hilarius Design traduit l'architecture en modèles en carton précis. Parfait pour présentations, expositions ou comme cadeau d'affaires unique pour le secteur de la construction.`,
    "Edificios",
    `Edificios detallados de cartón como modelos arquitectónicos u objetos decorativos.`,
    `Desde una villa hasta una nave industrial: Hilarius Design traduce la arquitectura en modelos precisos de cartón. Perfectos para presentaciones, exposiciones o como regalo corporativo único para el sector de la construcción.`
  ),
  "interieur-exterieur/maquette/maquette2-1.webp": translatedProject(
    "Maquette",
    `Des maquettes précises en carton pour l'architecture, l'urbanisme et les présentations.`,
    `Hilarius Design conçoit et produit des maquettes en carton qui restituent précisément forme et échelle. Un outil indispensable pour les présentations et une carte de visite impressionnante pour votre projet.`,
    "Maqueta",
    `Maquetas precisas de cartón para arquitectura, urbanismo y presentaciones.`,
    `Hilarius Design diseña y produce maquetas de cartón que representan con precisión forma y escala. Una herramienta indispensable para presentaciones y una carta de presentación impactante para su proyecto.`
  ),
  "eindejaarsgeschenken/compilatie/compilatie-1.webp": translatedProject(
    "Compilation",
    `Des cadeaux de fin d'année originaux en carton qui associent originalité et durabilité.`,
    `Surprenez vos relations et valorisez vos collaborateurs avec un cadeau qui reste en mémoire. Nos cadeaux de fin d'année en carton sont parfaitement adaptés à votre marque et au destinataire.

Chez Hilarius Design, le vieux papier et le carton retrouvent une nouvelle vie sous forme de cadeau d'affaires durable et unique. En choisissant le carton, vous contribuez à réduire les déchets, à économiser les matières premières et à diminuer les émissions de CO2.

C'est un investissement dans l'appréciation et les relations durables.`,
    "Compilación",
    `Regalos originales de fin de año en cartón que combinan originalidad y sostenibilidad.`,
    `Sorprenda a sus relaciones y valore a sus colaboradores con un regalo que permanece en la memoria. Nuestros regalos de fin de año de cartón se adaptan perfectamente a su marca y al destinatario.

En Hilarius Design, el papel usado y el cartón reciben una nueva vida como regalo corporativo sostenible y único. Al elegir cartón, contribuye a reducir residuos, ahorrar materias primas y disminuir las emisiones de CO2.

Es una inversión en reconocimiento y relaciones duraderas.`
  ),
  "eindejaarsgeschenken/kerst/kerstversiering2.webp": translatedProject(
    "Décorations de Noël",
    `Des décorations de Noël particulières en carton qui donnent aux fêtes une allure unique.`,
    `Hilarius Design conçoit et produit des décorations de Noël belles et durables. Des ornements élégants aux décorations remarquables, entièrement personnalisables à votre identité visuelle pour une fin d'année festive.`,
    "Decoración navideña",
    `Decoración navideña especial de cartón que da a las fiestas una apariencia única.`,
    `Hilarius Design diseña y produce decoración navideña que es bonita y sostenible. Desde ornamentos elegantes hasta decoraciones llamativas, totalmente personalizables con su identidad visual para un período festivo de fin de año.`
  )
};

const mergeProjectI18n = (base, additions) =>
  Object.fromEntries(
    Object.entries(base).map(([key, value]) => [
      key,
      {
        ...value,
        i18n: {
          ...value.i18n,
          ...additions[key]?.i18n
        }
      }
    ])
  );

export const projectOverrides = mergeProjectI18n(projectOverridesBase, projectI18nAdditions);

// Volgorde in categorie-overzichten.
// Producten die hier staan komen eerst, de rest volgt alfabetisch.
export const projectOrder = {
  transport: [
    "transport/vrachtwagens/vrachtwagens2-2.webp",
    "transport/bedrijfsautos/bedrijfsautos2.webp"
  ],
  "bureau-accessoires": [
    "bureau-accessoires/klokken/klokken2.webp"
  ],
  verpakkingen: [
    "verpakkingen/viko-kokers/vikokoker2.webp",
    "verpakkingen/magic-packaging/magictubes2.webp"
  ],
  spellen: [
    "spellen/schaakspel/schaakspel2.webp"
  ]
};
