import ashenWastesImage from "../assets/ashen-wastes.webp";
import caelisImage from "../assets/caelis.webp";
import cinderholdImage from "../assets/cinderhold.webp";
import crownwatchImage from "../assets/crownwatch.webp";
import dravethImage from "../assets/draveth.webp";
import elariaImage from "../assets/elaria.webp";
import elariaMap from "../assets/elaria-map.webp";
import endlessSeaImage from "../assets/endless-sea.webp";
import frostwardPeaksImage from "../assets/frostward-peaks.webp";
import harborwatchImage from "../assets/harborwatch.webp";
import ironwatchImage from "../assets/ironwatch.webp";
import kelvarisImage from "../assets/kelvaris.webp";
import khazeremImage from "../assets/khazerem.webp";
import korvathImage from "../assets/korvath.webp";
import mirelImage from "../assets/mirel.webp";
import qiranImage from "../assets/qiran.webp";
import sandseaImage from "../assets/sandsea.webp";
import shatteredSeaImage from "../assets/shattered-sea.webp";
import silverShoresImage from "../assets/silver-shores.webp";
import tharvaneImage from "../assets/tharvane.webp";
import tharvaneMap from "../assets/tharvane-map.webp";
import theHollowImage from "../assets/the-hollow.webp";
import threeRealmsMap from "../assets/three-realms-map.webp";
import valmereImage from "../assets/valmere.webp";
import virekhalImage from "../assets/virekhal.webp";
import virekhalMap from "../assets/virekhal-map.webp";
import voranashImage from "../assets/voranash.webp";
import whiteholdImage from "../assets/whitehold.webp";

export const worldOverview = {
  title: "The Three Realms",
  category: "World map",
  image: threeRealmsMap,
  description: [
    "Separated by distance, connected by the Endless Sea, the realms of Elaria, Virekhal, and Tharvane have shaped generations through their climates, traditions, and histories.",
    "From the green valleys of Elaria to the sun-scorched deserts of Virekhal and the frozen shores of Tharvane, each realm offers a different vision of home, strength, and belonging.",
    "Together, they form the world where the stories of The Dragon Ledger unfold.",
  ],
  realms: [
    {
      title: "Elaria",
      path: "/archive/places-of-the-world/elaria",
      position: {
        left: "25%",
        top: "48%",
      },
    },
    {
      title: "Virekhal",
      path: "/archive/places-of-the-world/virekhal",
      position: {
        left: "69%",
        top: "35%",
      },
    },
    {
      title: "Tharvane",
      path: "/archive/places-of-the-world/tharvane",
      position: {
        left: "72%",
        top: "68%",
      },
    },
  ],
};

export const countries = [
  {
    title: "Elaria",
    slug: "elaria",
    category: "Country / Realm",
    image: elariaImage,
    map: elariaMap,
    description: [
      "A land of forests, rivers, mountain ranges, and sunlit shores.",
      "Life flourishes here in countless forms, from bustling cities to quiet towns nestled between fields and woodlands. Its people are known for their warmth, their celebrations, and their love of family, friendship, and community.",
      "Elaria values connection, comfort, and the simple joys that turn a house into a home.",
    ],
  },
  {
    title: "Virekhal",
    slug: "virekhal",
    category: "Country / Realm",
    image: virekhalImage,
    map: virekhalMap,
    description: [
      "A realm forged beneath an unforgiving sun.",
      "Deserts stretch across much of the land, broken by fertile oases, coastal settlements, and pockets of resilient greenery. Generations of hardship, conflict, and survival have shaped a people who value discipline, loyalty, and perseverance above all else.",
      "In Virekhal, strength is not measured by conquest, but by the ability to endure.",
    ],
  },
  {
    title: "Tharvane",
    slug: "tharvane",
    category: "Country / Realm",
    image: tharvaneImage,
    map: tharvaneMap,
    description: [
      "A northern realm of snow-covered mountains, frozen shores, and long winters.",
      "Its beauty is stark and breathtaking, shaped by ice, stone, and silence. Life in Tharvane demands patience and self-control, and its people are often seen as reserved, formal, and difficult to read.",
      "Yet beneath that distant exterior lies a culture built on resilience, tradition, and bonds that run deeper than words.",
    ],
  },
];

export const waters = [
  {
    title: "The Endless Sea",
    slug: "endless-sea",
    category: "Sea",
    image: endlessSeaImage,
    description: [
      "Between the three realms lies the Endless Sea, the great crossroads of trade, diplomacy, and travel.",
      "Ships carry goods, stories, ambitions, and secrets from one shore to another, ensuring that no realm remains untouched by the others.",
      "Some journeys begin on these waters.",
    ],
  },
  {
    title: "The Shattered Sea",
    slug: "shattered-sea",
    category: "Sea",
    image: shatteredSeaImage,
    description: [
      "Between Virekhal and Tharvane lies the Shattered Sea, a cold and difficult stretch of water marked by distance, trade, and guarded crossings.",
      "Its routes carry travelers, military movements, old tensions, and the quiet understanding that no realm stands entirely alone.",
    ],
  },
];

export const citiesAndSettlements = [
  {
    title: "Caelis",
    realm: "elaria",
    category: "Capital city",
    image: caelisImage,
    description:
      "The capital of Elaria. A future entry for courtly power, old streets, public life, and the green realm's political heart.",
  },
  {
    title: "Valmere",
    realm: "elaria",
    category: "Major city",
    image: valmereImage,
    description:
      "A central Elarian city marked on the realm map. Its fuller history, atmosphere, and role in the wider world will be recorded later.",
  },
  {
    title: "Mirel",
    realm: "elaria",
    category: "Major city",
    image: mirelImage,
    description:
      "An Elarian city waiting for its fuller record: streets, customs, nearby roads, and the people who pass through.",
  },
  {
    title: "Draveth",
    realm: "virekhal",
    category: "Capital city",
    image: dravethImage,
    description:
      "The capital of Virekhal. A city shaped by heat, endurance, law, and the long memory of a realm forged beneath an unforgiving sun.",
  },
  {
    title: "Kelvaris",
    realm: "virekhal",
    category: "Major city",
    image: kelvarisImage,
    description:
      "A Virekhal city shaped by heat, endurance, and the routes that cross a difficult land. Details will be expanded as the realm opens.",
  },
  {
    title: "Korvath",
    realm: "virekhal",
    category: "Major city",
    image: korvathImage,
    description:
      "A Virekhal city held for future atlas notes on trade, survival, loyalties, and the hard beauty of desert roads.",
  },
  {
    title: "Khazerem",
    realm: "tharvane",
    category: "Capital city",
    image: khazeremImage,
    description:
      "The capital of Tharvane. A northern seat of power where ice, tradition, and restraint shape the architecture of daily life.",
  },
  {
    title: "Voranash",
    realm: "tharvane",
    category: "Major city",
    image: voranashImage,
    description:
      "A Tharvane city waiting for its record of frozen roads, old customs, guarded warmth, and northern resilience.",
  },
  {
    title: "Qiran",
    realm: "tharvane",
    category: "Major city",
    image: qiranImage,
    description:
      "A Tharvane city held in reserve for future notes on sea ice, distance, silence, and the bonds that survive cold places.",
  },
];

export const regionsAndLandmarks = [
  {
    title: "Frostward Peaks",
    realm: "elaria",
    category: "Mountain range",
    image: frostwardPeaksImage,
    description:
      "A vast northern mountain region in Elaria, where snow, forests, and old roads shape the edge of the green realm.",
  },
  {
    title: "Silver Shores",
    realm: "elaria",
    category: "Coastal region",
    image: silverShoresImage,
    description:
      "Elaria's bright sea-facing coast, reserved for future notes on ports, shoreline towns, trade, and salt-warm horizons.",
  },
  {
    title: "The Ashen Wastes",
    realm: "virekhal",
    category: "Desert region",
    image: ashenWastesImage,
    description:
      "A severe expanse in Virekhal, shaped by heat, distance, and the kind of survival that leaves stories in the sand.",
  },
  {
    title: "The Sandsea",
    realm: "tharvane",
    category: "Frozen coastal region",
    image: sandseaImage,
    description:
      "A stark Tharvane region whose full nature will be defined later: shore, ice, silence, and the difficulty of passage.",
  },
  ...waters,
];

export const institutionsAndLandmarks = [
  {
    title: "Whitehold",
    realm: "elaria",
    category: "Prison",
    image: whiteholdImage,
    description:
      "Elaria's prison entry, waiting for its full record: walls, purpose, history, and the lives shaped by confinement.",
  },
  {
    title: "The Harborwatch",
    realm: "elaria",
    category: "Military base",
    image: harborwatchImage,
    description:
      "An Elarian military base tied to watchfulness, routes, ports, and the guarded edges of the realm.",
  },
  {
    title: "Cinderhold",
    realm: "virekhal",
    category: "Prison",
    image: cinderholdImage,
    description:
      "Virekhal's prison entry, held for future notes on discipline, punishment, endurance, and the heat of unforgiving walls.",
  },
  {
    title: "The Ironwatch",
    realm: "virekhal",
    category: "Military base",
    image: ironwatchImage,
    description:
      "A Virekhal military base marked by vigilance, harsh terrain, and the realm's old instinct to endure.",
  },
  {
    title: "The Hollow",
    realm: "tharvane",
    category: "Prison",
    image: theHollowImage,
    description:
      "Tharvane's prison entry, waiting for its full record of cold stone, silence, restraint, and the names carried inside.",
  },
  {
    title: "The Crownwatch",
    realm: "tharvane",
    category: "Military base",
    image: crownwatchImage,
    description:
      "A Tharvane military base shaped by duty, winter, tradition, and the watchful protection of a northern realm.",
  },
];

export function getCountryAtlasSections(countrySlug) {
  const sections = [
    {
      title: "Cities & Settlements",
      category: "Marked on the Atlas",
      entries: citiesAndSettlements,
    },
    {
      title: "Geography",
      category: "Regions and Natural Landmarks",
      entries: regionsAndLandmarks,
    },
    {
      title: "Prisons",
      category: "Institutions",
      entries: institutionsAndLandmarks.filter(
        (entry) => entry.category === "Prison",
      ),
    },
    {
      title: "Military Bases",
      category: "Institutions",
      entries: institutionsAndLandmarks.filter(
        (entry) => entry.category === "Military base",
      ),
    },
  ];

  return sections
    .map((section) => ({
      ...section,
      entries: section.entries.filter((entry) => entry.realm === countrySlug),
    }))
    .filter((section) => section.entries.length > 0);
}

export const placeEntries = [...countries, ...waters];

export const worldPlaces = [worldOverview, ...placeEntries];
