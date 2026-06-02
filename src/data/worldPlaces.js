import elariaImage from "../assets/elaria.png";
import elariaMap from "../assets/elaria-map.png";
import endlessSeaImage from "../assets/endless-sea.png";
import tharvaneImage from "../assets/tharvane.png";
import tharvaneMap from "../assets/tharvane-map.png";
import threeRealmsMap from "../assets/three-realms-map.png";
import virekhalImage from "../assets/virekhal.png";
import virekhalMap from "../assets/virekhal-map.png";

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
    category: "Country",
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
    category: "Country",
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
    category: "Country",
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
];

export const placeEntries = [...countries, ...waters];

export const worldPlaces = [worldOverview, ...placeEntries];
