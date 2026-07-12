import elariaImage from "../assets/elaria.webp";
import elariaArmyHeraldic from "../assets/elaria-army-heraldic.webp";
import elariaHeraldic from "../assets/elaria-heraldic.webp";
import elariaMap from "../assets/elaria-map.webp";
import elariaSeal from "../assets/elaria-seal.webp";
import elariaShield from "../assets/elaria-shield.webp";
import houseAsterynShield from "../assets/house-asteryn-shield.webp";
import malricShield from "../assets/malric-shield.webp";
import tharvaneArmyHeraldic from "../assets/tharvane-army-heraldic.webp";
import tharvaneHeraldic from "../assets/tharvane-heraldic.webp";
import tharvaneImage from "../assets/tharvane.webp";
import tharvaneMap from "../assets/tharvane-map.webp";
import tharvaneRoyalGuardShield from "../assets/tharvane-royal-guard-shield.webp";
import tharvaneShield from "../assets/tharvane-shield.webp";
import varynBranchShield from "../assets/varyn-branch-shield.webp";
import virekhalArmyHeraldic from "../assets/virekhal-army-heraldic.webp";
import virekhalHeraldic from "../assets/virekhal-heraldic.webp";
import virekhalImage from "../assets/virekhal.webp";
import virekhalMap from "../assets/virekhal-map.webp";
import virekhalPresidentSeal from "../assets/virekhal-president-seal.webp";
import virekhalSeal from "../assets/virekhal-seal.webp";

export const realmsHeraldry = [
  {
    slug: "elaria",
    name: "Elaria",
    subtitle: "The Realm of Living Roots",
    motto: {
      original: "AELORA VAREN",
      translation: "Together, We Flourish",
    },
    image: elariaImage,
    map: elariaMap,
    introduction: [
      "A land of forests, rivers, mountain ranges, and sunlit shores, Elaria is shaped by connection, comfort, and the simple joys that turn a house into a home.",
      "Its public life is rooted in stewardship, family networks, civic duty, and the belief that prosperity matters most when it is shared.",
    ],
    soul: [
      "Elaria values warmth, celebration, friendship, and belonging. Its cities and towns often gather around gardens, river roads, local festivals, and the quiet rituals of family life.",
      "Even its most powerful families are expected to remember that influence is meant to shelter the realm, not stand above it.",
    ],
    government: {
      label: "Council of Five Families",
      title: "Stewardship through contribution and responsibility",
      body: [
        "Elaria is ruled by a council of five families, each carrying a different responsibility within the realm. Their power is meant to come from service, stewardship, and the work that keeps Elaria alive.",
        "Influence in Elaria is measured less by noble privilege than by contribution: industry, culture, diplomacy, food, water, defense, logistics, and the public trust that allows the realm to flourish.",
      ],
      entries: [
        {
          name: "House Valen",
          description:
            "Seat: Valmere. Industry, infrastructure, commerce, and technology. House Valen's factories, logistics networks, businesses, and innovations touch nearly every corner of Elaria. Symbolic value: Building.",
        },
        {
          name: "House Mirelle",
          description:
            "Seat: Mirel. Culture, arts, education, and historical preservation. The Mirelles safeguard Elaria's artistic soul, supporting artists, musicians, writers, scholars, and cultural institutions. Heir: Maia Mirelle. Symbolic value: Inspiration.",
        },
        {
          name: "House Corvane",
          description:
            "Seat: Caelis. Diplomacy and foreign relations. House Corvane has represented Elaria abroad for generations through diplomats, negotiators, and ambassadors. Heir: Tea Corvane. Symbolic value: Understanding.",
        },
        {
          name: "House Seren",
          description:
            "Seat: Caelis. Agriculture, waterways, and resource management. The Seren family oversees many of the systems that keep Elaria fed, from rivers and irrigation to agricultural regions. Symbolic value: Stewardship.",
        },
        {
          name: "House Thornwell",
          description:
            "Seat: Caelis. Defense, logistics, and national security. The Thornwells coordinate defensive systems including Whitehold, Harborwatch, emergency planning, and national logistics. Symbolic value: Guardianship.",
        },
      ],
    },
    heraldry: {
      title: "Roots, rivers, and the living tree",
      body: [
        "Elarian heraldry often returns to trees, rivers, gold leaves, and open hands. These symbols speak of growth, shared shelter, and the belief that a realm survives through its bonds.",
        "The Great Tree is the most enduring emblem: a reminder that branches may reach in different directions while still belonging to the same living root.",
      ],
      motifs: ["The Great Tree", "Gold leaves", "River roads", "Open hands"],
    },
    symbols: [
      {
        title: "Elaria Heraldic",
        label: "Realm Heraldic",
        image: elariaHeraldic,
        description:
          "A public emblem of Elaria, associated with living roots, shared stewardship, and the realm's identity.",
      },
      {
        title: "Elaria Seal",
        label: "Official Seal",
        image: elariaSeal,
        description:
          "The official seal of Elaria, reserved for civic records, formal identity, and symbols of shared governance.",
      },
      {
        title: "Elaria Shield",
        label: "Realm Shield",
        image: elariaShield,
        description:
          "A shield tied to Elaria's protective identity, carrying the values of shelter, continuity, and belonging.",
      },
      {
        title: "Elarian Army Heraldic",
        label: "Army Heraldic",
        image: elariaArmyHeraldic,
        description:
          "A military heraldic mark connected to service, protection, and the defense of Elaria's people and borders.",
      },
    ],
    language: [
      "Aelora - life, home, or living root",
      "Varen - together, joined, held in common",
      "Aelora Varen - Together, We Flourish",
    ],
    placesPath: "/archive/places-of-the-world/elaria",
    places: [
      "Caelis",
      "Valmere",
      "Mirel",
      "The Frostward Peaks",
      "The Silver Shores",
      "Whitehold",
      "Harborwatch",
    ],
  },
  {
    slug: "virekhal",
    name: "Virekhal",
    subtitle: "The Realm of Endless Horizons",
    motto: {
      original: "TORAN NAVIR",
      translation: "Ready for Tomorrow",
    },
    image: virekhalImage,
    map: virekhalMap,
    introduction: [
      "A realm forged beneath an unforgiving sun, Virekhal is shaped by deserts, oases, coastal settlements, and generations of survival.",
      "Its people value discipline, loyalty, perseverance, and the courage to endure without surrendering their freedom.",
    ],
    soul: [
      "Virekhal does not measure strength only through conquest. Strength is endurance, readiness, restraint, and the ability to protect life in a place that rarely offers comfort freely.",
      "The desert leaves little room for pretense. Bonds are earned, promises matter, and pride can be both armor and burden.",
    ],
    government: {
      label: "President and First Minister",
      title: "A modern government built on vigilance",
      body: [
        "Virekhal is led through elected civil authority and a strong ministerial structure. Public duty is tied closely to security, resource management, diplomacy, and survival.",
        "The presidency represents the realm's voice and dignity, while the first minister carries much of the daily weight of policy, governance, and coordination.",
      ],
      entries: [
        {
          name: "President Elara Voss",
          description:
            "A public figure associated with diplomacy, resilience, and the image of Virekhal as a realm that refuses to bow.",
        },
        {
          name: "First Minister Kael Drenor",
          description:
            "The head of government, responsible for policy, stability, and the practical machinery that keeps the realm moving.",
        },
        {
          name: "The Ironwatch",
          description:
            "A military institution connected to readiness, discipline, and the protection of vulnerable routes and borders.",
        },
      ],
    },
    heraldry: {
      title: "Sun, stone, hawk, and blade",
      body: [
        "Virekhali heraldry favors sunbursts, red stone, desert gold, sharp silhouettes, and birds of prey. Its symbols carry heat, clarity, freedom, and alertness.",
        "The hawk is often used as a mark of watchfulness: a creature that survives by seeing far, moving quickly, and trusting the open sky.",
      ],
      motifs: ["Sunburst", "Red stone", "Desert hawk", "Forged blade"],
    },
    symbols: [
      {
        title: "Virekhal Heraldic",
        label: "Realm Heraldic",
        image: virekhalHeraldic,
        description:
          "A formal emblem of Virekhal, tied to endurance, pride, and the realm's public identity.",
      },
      {
        title: "Virekhal Seal",
        label: "Official Seal",
        image: virekhalSeal,
        description:
          "The official seal of Virekhal, used for civic records, formal documents, and state authority.",
      },
      {
        title: "Virekhal Army Heraldic",
        label: "Army Heraldic",
        image: virekhalArmyHeraldic,
        description:
          "A military heraldic mark connected to discipline, loyalty, and readiness beneath the desert sun.",
      },
      {
        title: "President Seal",
        label: "Presidential Seal",
        image: virekhalPresidentSeal,
        description:
          "The seal of Virekhal's presidency, representing civil leadership, continuity, and public duty.",
      },
    ],
    language: [
      "Toran Navir - Ready for Tomorrow",
      "Valor is forged, not given.",
      "The sun may burn, but it also reveals.",
      "Between sand and stone, loyalty is tested.",
    ],
    placesPath: "/archive/places-of-the-world/virekhal",
    places: [
      "Draveth",
      "Kelvaris",
      "Korvath",
      "The Ashen Wastes",
      "Cinderhold",
      "Ironwatch",
    ],
  },
  {
    slug: "tharvane",
    name: "Tharvane",
    subtitle: "The Realm of Winter, Duty, and Endurance",
    motto: {
      original: "NORYS VETH",
      translation: "Through Obedience We Survive",
    },
    image: tharvaneImage,
    map: tharvaneMap,
    introduction: [
      "A northern realm of snow-covered mountains, frozen shores, and long winters, Tharvane is shaped by ice, stone, silence, and tradition.",
      "Its people are often seen as reserved and difficult to read, yet beneath that distance lies a culture built on resilience and bonds that run deeper than words.",
    ],
    soul: [
      "Tharvane values discipline, memory, composure, and duty. Affection is rarely performed loudly, but loyalty can become immovable once given.",
      "Winter is not only weather here. It is a language of restraint, preparation, and survival.",
    ],
    government: {
      label: "House Asteryn",
      title: "A crown bound to realm and people",
      body: [
        "Tharvane is ruled by the Asteryn crown, where authority is understood as obligation before privilege. The public order rests on the relationship between crown, realm, and people.",
        "The monarchy carries an old ceremonial weight, but the realm also faces the pressure of changing times and the question of what duty should become next.",
      ],
      entries: [
        {
          name: "King Kaelen Asteryn",
          description:
            "The reigning king of Tharvane, associated with endurance, restraint, and the long memory of the crown.",
        },
        {
          name: "Prince Evander Asteryn",
          description:
            "The heir to the throne, disciplined and careful, with a quiet awareness that tradition must still survive the future.",
        },
        {
          name: "The Crownwatch",
          description:
            "A military institution tied to royal protection, northern defense, and the preservation of order in a harsh realm.",
        },
      ],
    },
    heraldry: {
      title: "Winter blue, silver, and the mountain crown",
      body: [
        "Tharvanian heraldry favors deep blue, silver, snow, wolves, mountain peaks, and crown forms. Its symbols are formal, severe, and built to outlast fashion.",
        "The Crown of Winter is less a decoration than a promise: the realm may bend beneath storms, but it does not vanish.",
      ],
      motifs: ["Winter crown", "Silver mountain", "Snowflake", "Wolf standard"],
    },
    symbols: [
      {
        title: "Tharvane Heraldic",
        label: "Realm Heraldic",
        image: tharvaneHeraldic,
        description:
          "A formal emblem of Tharvane, tied to winter, duty, endurance, and the public identity of the northern realm.",
      },
      {
        title: "Tharvane Shield",
        label: "Realm Shield",
        image: tharvaneShield,
        description:
          "The shield of Tharvane, carrying the severe elegance of a realm shaped by obedience, memory, and survival.",
      },
      {
        title: "House Asteryn Shield",
        label: "Royal House",
        image: houseAsterynShield,
        description:
          "The mark of House Asteryn, the royal line bound to crown, realm, and the old weight of Tharvanian duty.",
      },
      {
        title: "Varyn's Branch Shield",
        label: "Royal Branch",
        image: varynBranchShield,
        description:
          "A branch shield connected to Varyn's line, carrying its own place within the wider Asteryn legacy.",
      },
      {
        title: "Malric Shield",
        label: "Noble House",
        image: malricShield,
        description:
          "A house shield connected to Malric, reserved for the colder politics and inherited loyalties of Tharvane.",
      },
      {
        title: "Royal Guard Shield",
        label: "Royal Guard",
        image: tharvaneRoyalGuardShield,
        description:
          "The shield of the royal guard, tied to protection, obedience, and the defense of the crown.",
      },
      {
        title: "Tharvane Army Heraldic",
        label: "Army Heraldic",
        image: tharvaneArmyHeraldic,
        description:
          "A military heraldic mark for Tharvane's armed forces, shaped by discipline, endurance, and northern vigilance.",
      },
    ],
    language: [
      "Norys Veth - Through Obedience We Survive",
      "We endure the cold.",
      "We honor the bond.",
      "We carry the names of those who came before.",
    ],
    placesPath: "/archive/places-of-the-world/tharvane",
    places: [
      "Khazerem",
      "Voranash",
      "Qiran",
      "The Sandsea",
      "The Hollow",
      "Crownwatch",
    ],
  },
];

export function getRealmHeraldry(slug) {
  return realmsHeraldry.find((realm) => realm.slug === slug);
}
