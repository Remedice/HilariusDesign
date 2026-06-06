// Static image paths served from /public/images/

export function getImage(path) {
  if (!path) return "";
  return `/images/${path}`;
}

const imageSizes = {
  "/images/boeken-mappen/boekverpakkingen/libris2.webp": { width: 1200, height: 801 },
  "/images/boeken-mappen/boekverpakkingen/stalenboek2.webp": { width: 1200, height: 801 },
  "/images/boeken-mappen/euromap/euromap2.webp": { width: 1200, height: 801 },
  "/images/boeken-mappen/golfrecords/golfrecords2.webp": { width: 1200, height: 801 },
  "/images/boeken-mappen/grafiekmappen/grafiekmappen2-1.webp": { width: 1200, height: 801 },
  "/images/boeken-mappen/herdenkingsboek/herdenkingsboek2.webp": { width: 1200, height: 801 },
  "/images/boeken-mappen/informatiemap/informatiemap2.webp": { width: 1200, height: 801 },
  "/images/boeken-mappen/kunstmappen/kunstmappen2.webp": { width: 1200, height: 801 },
  "/images/boeken-mappen/zelfsluitende-mappen/mappen3.webp": { width: 1200, height: 801 },
  "/images/bureau-accessoires/bureaukalenders/bureaukalenders3.webp": { width: 1200, height: 801 },
  "/images/bureau-accessoires/fotolijstjes/fotolijstjes2.webp": { width: 1200, height: 801 },
  "/images/bureau-accessoires/klokken/klokken2.webp": { width: 1200, height: 801 },
  "/images/bureau-accessoires/memobakjes/memobakjes2.webp": { width: 1200, height: 801 },
  "/images/bureau-accessoires/onderzetters/onderzetters2.webp": { width: 1200, height: 801 },
  "/images/bureau-accessoires/pop-up/popup2.webp": { width: 1200, height: 801 },
  "/images/eindejaarsgeschenken/compilatie/compilatie-1.webp": { width: 1200, height: 927 },
  "/images/eindejaarsgeschenken/kerst/kerstversiering2.webp": { width: 1200, height: 801 },
  "/images/interieur-exterieur/apothekerskast/apothekerskast2.webp": { width: 1200, height: 801 },
  "/images/interieur-exterieur/enorme-displays/oogwereld2.webp": { width: 1200, height: 800 },
  "/images/interieur-exterieur/gebouwen/villavna.webp": { width: 1200, height: 801 },
  "/images/interieur-exterieur/maquette/maquette2-1.webp": { width: 1200, height: 801 },
  "/images/spellen/bordspellen/bordspellen2.webp": { width: 1200, height: 801 },
  "/images/spellen/poulebal/poulebal2.webp": { width: 1200, height: 801 },
  "/images/spellen/puzzel/puzzel2.webp": { width: 1200, height: 801 },
  "/images/spellen/schaakspel/schaakspel2.webp": { width: 1200, height: 801 },
  "/images/spellen/werpspel/werpspel2.webp": { width: 1200, height: 801 },
  "/images/the-art-of-board/eiffeltoren/eiffeltoren1.webp": { width: 1400, height: 1750 },
  "/images/the-art-of-board/eiffeltoren/eiffeltoren2.webp": { width: 1638, height: 2048 },
  "/images/the-art-of-board/golfkartonnen-stoel/stoelkarton-Hilariusdesign.webp": { width: 2666, height: 2770 },
  "/images/the-art-of-board/tezeras/tezeras.webp": { width: 1600, height: 2400 },
  "/images/the-art-of-board/westminster-abbey/westminster-abbey-2.webp": { width: 1365, height: 2048 },
  "/images/the-art-of-board/westminster-abbey/westminster-abbey1.webp": { width: 1365, height: 2048 },
  "/images/the-art-of-board/westminster-abbey/westminster-abbey3.webp": { width: 1638, height: 2048 },
  "/images/the-art-of-board/wild-flowers/IMG_7269.webp": { width: 2048, height: 1365 },
  "/images/the-art-of-board/wild-flowers/klaproos.webp": { width: 1084, height: 800 },
  "/images/transport/bedrijfsautos/bedrijfsautos2.webp": { width: 1200, height: 801 },
  "/images/transport/bierwagen/IMG_0548Biertransport.webp": { width: 1200, height: 801 },
  "/images/transport/containers/IMG_0562ContainerRoodHL.webp": { width: 1200, height: 801 },
  "/images/transport/diepladers/dieplader2.webp": { width: 1200, height: 400 },
  "/images/transport/tankauto/tankauto2.webp": { width: 1200, height: 801 },
  "/images/transport/treinen/treinen2.webp": { width: 1200, height: 801 },
  "/images/transport/vliegtuigen/vliegtuigen2.webp": { width: 1200, height: 801 },
  "/images/transport/vrachtwagens/IMG_0568Verpakking_wijntransport.webp": { width: 1200, height: 591 },
  "/images/transport/vrachtwagens/IMG_0993 2.webp": { width: 2048, height: 1365 },
  "/images/transport/vrachtwagens/IMG_6711.webp": { width: 2048, height: 1365 },
  "/images/transport/vrachtwagens/vrachtwagens2-2.webp": { width: 1200, height: 801 },
  "/images/verpakkingen/bloemenverpakking/bloemendozen2.webp": { width: 1200, height: 801 },
  "/images/verpakkingen/cd-verpakking/cdverpakking2.webp": { width: 1200, height: 801 },
  "/images/verpakkingen/chocoladedoosje/twee_chocoladedoosjes.webp": { width: 1200, height: 800 },
  "/images/verpakkingen/handtasjes/IMG_1012.webp": { width: 1365, height: 2048 },
  "/images/verpakkingen/handtasjes/luxe_verpakking.webp": { width: 1200, height: 594 },
  "/images/verpakkingen/magic-packaging/IMG_0989.webp": { width: 1366, height: 2048 },
  "/images/verpakkingen/magic-packaging/IMG_6195.webp": { width: 1365, height: 2048 },
  "/images/verpakkingen/magic-packaging/magictubes2.webp": { width: 1200, height: 801 },
  "/images/verpakkingen/magic-packaging/uitklapverpakking2.webp": { width: 1710, height: 1159 },
  "/images/verpakkingen/magic-packaging/uitklapverpakking3.webp": { width: 1200, height: 801 },
  "/images/verpakkingen/ontspiegelde-showcase/luxar2.webp": { width: 1200, height: 801 },
  "/images/verpakkingen/schockproof-wijnverpakking/viko_shockproof2.webp": { width: 1200, height: 801 },
  "/images/verpakkingen/uitklapdoos/metopdoos2.webp": { width: 1200, height: 801 },
  "/images/verpakkingen/viko-kokers/vikokoker2.webp": { width: 1200, height: 801 },
  "/images/verpakkingen/wijnverpakkingen/IMG_0579_3vakswijndoos.webp": { width: 1200, height: 1112 },
  "/images/verpakkingen/wijnverpakkingen/IMG_0580_banderol.webp": { width: 1200, height: 588 },
  "/images/verpakkingen/wijnverpakkingen/wijnvogelhuisje2.webp": { width: 1200, height: 801 },
  "/images/verpakkingen/zakken/zakkengroot.webp": { width: 1200, height: 801 }
};

export function getImageSize(src) {
  return imageSizes[src] ?? { width: 1200, height: 801 };
}

// Static registry of all images per product directory.
// Keys = directory path relative to public/images/, values = filenames.
const imagesByDir = {
  // ─── Transport ────────────────────────────────────────────────
  "transport/bedrijfsautos": ["bedrijfsautos2.webp"],
  "transport/bierwagen": ["IMG_0548Biertransport.webp"],
  "transport/containers": ["IMG_0562ContainerRoodHL.webp"],
  "transport/diepladers": ["dieplader2.webp"],
  "transport/tankauto": ["tankauto2.webp"],
  "transport/treinen": ["treinen2.webp"],
  "transport/vliegtuigen": ["vliegtuigen2.webp"],
  "transport/vrachtwagens": [
    "vrachtwagens2-2.webp",
    "IMG_0568Verpakking_wijntransport.webp",
    "IMG_0993 2.webp",
    "IMG_6711.webp"
  ],

  // ─── Bureau accessoires ───────────────────────────────────────
  "bureau-accessoires/bureaukalenders": ["bureaukalenders3.webp"],
  "bureau-accessoires/fotolijstjes": ["fotolijstjes2.webp"],
  "bureau-accessoires/klokken": ["klokken2.webp"],
  "bureau-accessoires/memobakjes": ["memobakjes2.webp"],
  "bureau-accessoires/onderzetters": ["onderzetters2.webp"],
  "bureau-accessoires/pop-up": ["popup2.webp"],

  // ─── Verpakkingen ─────────────────────────────────────────────
  "verpakkingen/bloemenverpakking": ["bloemendozen2.webp"],
  "verpakkingen/cd-verpakking": ["cdverpakking2.webp"],
  "verpakkingen/chocoladedoosje": ["twee_chocoladedoosjes.webp"],
  "verpakkingen/handtasjes": ["IMG_1012.webp", "luxe_verpakking.webp"],
  "verpakkingen/magic-packaging": [
    "magictubes2.webp",
    "uitklapverpakking2.webp",
    "uitklapverpakking3.webp",
    "IMG_0989.webp",
    "IMG_6195.webp"
  ],
  "verpakkingen/ontspiegelde-showcase": ["luxar2.webp"],
  "verpakkingen/schockproof-wijnverpakking": ["viko_shockproof2.webp"],
  "verpakkingen/uitklapdoos": ["metopdoos2.webp"],
  "verpakkingen/viko-kokers": ["vikokoker2.webp"],
  "verpakkingen/wijnverpakkingen": [
    "IMG_0579_3vakswijndoos.webp",
    "IMG_0580_banderol.webp",
    "wijnvogelhuisje2.webp"
  ],
  "verpakkingen/zakken": ["zakkengroot.webp"],

  // ─── Boeken & Mappen ──────────────────────────────────────────
  "boeken-mappen/boekverpakkingen": ["libris2.webp", "stalenboek2.webp"],
  "boeken-mappen/euromap": ["euromap2.webp"],
  "boeken-mappen/golfrecords": ["golfrecords2.webp"],
  "boeken-mappen/grafiekmappen": ["grafiekmappen2-1.webp"],
  "boeken-mappen/herdenkingsboek": ["herdenkingsboek2.webp"],
  "boeken-mappen/informatiemap": ["informatiemap2.webp"],
  "boeken-mappen/kunstmappen": ["kunstmappen2.webp"],
  "boeken-mappen/zelfsluitende-mappen": ["mappen3.webp"],

  // ─── Spellen ──────────────────────────────────────────────────
  "spellen/bordspellen": ["bordspellen2.webp"],
  "spellen/poulebal": ["poulebal2.webp"],
  "spellen/puzzel": ["puzzel2.webp"],
  "spellen/schaakspel": ["schaakspel2.webp"],
  "spellen/werpspel": ["werpspel2.webp"],

  // ─── The Art Of Board ─────────────────────────────────────────
  "the-art-of-board/eiffeltoren": ["eiffeltoren1.webp", "eiffeltoren2.webp"],
  "the-art-of-board/golfkartonnen-stoel": ["stoelkarton-Hilariusdesign.webp"],
  "the-art-of-board/tezeras": ["tezeras.webp"],
  "the-art-of-board/westminster-abbey": [
    "westminster-abbey1.webp",
    "westminster-abbey-2.webp",
    "westminster-abbey3.webp"
  ],
  "the-art-of-board/wild-flowers": ["klaproos.webp", "IMG_7269.webp"],
  "interieur-exterieur/apothekerskast": ["apothekerskast2.webp"],
  "interieur-exterieur/enorme-displays": ["oogwereld2.webp"],
  "interieur-exterieur/gebouwen": ["villavna.webp"],
  "interieur-exterieur/maquette": ["maquette2-1.webp"],

  // ─── Eindejaarsgeschenken ─────────────────────────────────────
  "eindejaarsgeschenken/compilatie": ["compilatie-1.webp"],
  "eindejaarsgeschenken/kerst": ["kerstversiering2.webp"]
};

export function getImagesInDir(dir) {
  const key = dir.replace(/\/$/, "");
  const files = imagesByDir[key];
  if (!files || !files.length) return [];
  return files.map((f) => `/images/${key}/${f}`);
}
