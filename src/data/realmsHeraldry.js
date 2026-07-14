import elariaImage from "../assets/elaria.webp";
import elariaArmyHeraldic from "../assets/elaria-army-heraldic.webp";
import elariaHeraldic from "../assets/elaria-heraldic.webp";
import elariaHouseCorvaneHeraldic from "../assets/elaria-house-corvane-heraldic.webp";
import elariaHouseMirelleHeraldic from "../assets/elaria-house-mirelle-heraldic.webp";
import elariaHouseSerenHeraldic from "../assets/elaria-house-seren-heraldic.webp";
import elariaHouseThornwellHeraldic from "../assets/elaria-house-thornwell-heraldic.webp";
import elariaHouseValenHeraldic from "../assets/elaria-house-valen-heraldic.webp";
import elariaMap from "../assets/elaria-map.webp";
import elariaSeal from "../assets/elaria-seal.webp";
import elariaShield from "../assets/elaria-shield.webp";
import elariaSymbolGreatTree from "../assets/elaria-symbol-great-tree.webp";
import elariaSymbolGuidingStar from "../assets/elaria-symbol-guiding-star.webp";
import elariaSymbolRiverRoads from "../assets/elaria-symbol-river-roads.webp";
import elariaSymbolStags from "../assets/elaria-symbol-stags.webp";
import houseAsterynShield from "../assets/house-asteryn-shield.webp";
import malricShield from "../assets/malric-shield.webp";
import tharvaneArmyHeraldic from "../assets/tharvane-army-heraldic.webp";
import tharvaneHeraldic from "../assets/tharvane-heraldic.webp";
import tharvaneImage from "../assets/tharvane.webp";
import tharvaneMap from "../assets/tharvane-map.webp";
import tharvaneRoyalGuardShield from "../assets/tharvane-royal-guard-shield.webp";
import tharvaneShield from "../assets/tharvane-shield.webp";
import tharvaneSymbolCrownOfWinter from "../assets/tharvane-symbol-crown-of-winter.webp";
import tharvaneSymbolSnowflake from "../assets/tharvane-symbol-snowflake.webp";
import tharvaneSymbolWhiteWolf from "../assets/tharvane-symbol-white-wolf.webp";
import tharvaneSymbolWinterStar from "../assets/tharvane-symbol-winter-star.webp";
import varynBranchShield from "../assets/varyn-branch-shield.webp";
import virekhalArmyHeraldic from "../assets/virekhal-army-heraldic.webp";
import virekhalHeraldic from "../assets/virekhal-heraldic.webp";
import virekhalImage from "../assets/virekhal.webp";
import virekhalMap from "../assets/virekhal-map.webp";
import virekhalPresidentSeal from "../assets/virekhal-president-seal.webp";
import virekhalSeal from "../assets/virekhal-seal.webp";
import virekhalSymbolDesertHawk from "../assets/virekhal-symbol-desert-hawk.webp";
import virekhalSymbolForgedBlade from "../assets/virekhal-symbol-forged-blade.webp";
import virekhalSymbolRedstone from "../assets/virekhal-symbol-redstone.webp";
import virekhalSymbolSunburst from "../assets/virekhal-symbol-sunburst.webp";

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
    litany: {
      label: "Cultural memory",
      title: "The Hearth Litany",
      introduction: [
        "The Litany of Belonging, commonly known as The Hearth Litany, is taught to Elarian children from an early age. It reflects the belief that growth is not achieved alone, but through the support of family, friends, and community. Recited in homes, schools, guild halls, and military academies, it reminds Elarians that while every person walks their own path, no one is expected to walk it alone.",
      ],
      verses: [
        ["The road is before me.", "I do not walk it alone.", "My people walk beside me."],
        ["I will learn and grow.", "I will help others grow."],
        ["Together we are strong.", "Together we become more."],
      ],
      motto: {
        original: "Aelora Varen.",
        translation: "Together, We Flourish.",
      },
    },
    government: {
      label: "Council of Five Families",
      title: "Stewardship through contribution and responsibility",
      body: [
        "Elaria is ruled by a council of five families, each carrying a different responsibility within the realm. Their power is meant to come from service, stewardship, and the work that keeps Elaria alive.",
        "Influence in Elaria is measured less by noble privilege than by contribution: industry, culture, diplomacy, food, water, defense, logistics, and the public trust that allows the realm to flourish.",
        "Through responsibility, inspiration, connection, sustenance, and protection, Elaria lives its motto: Aelora Varen.",
      ],
      table: [
        {
          house: "Valen",
          representative: "Matt Valen",
          heir: "Ash Valen",
          seat: "Valmere",
          sphere: "Industry & Technology",
          value: "Responsibility",
        },
        {
          house: "Mirelle",
          representative: "Cassian Mirelle",
          heir: "Maia Mirelle",
          seat: "Mirel",
          sphere: "Arts & Education",
          value: "Inspiration",
        },
        {
          house: "Corvane",
          representative: "Seraphine Corvane",
          heir: "Tea Corvane",
          seat: "Caelis",
          sphere: "Diplomacy",
          value: "Connection",
        },
        {
          house: "Seren",
          representative: "Rowan Seren",
          heir: "Lyanna Seren",
          seat: "Caelis",
          sphere: "Agriculture & Waterways",
          value: "Sustenance",
        },
        {
          house: "Thornwell",
          representative: "Marcus Thornwell",
          heir: "Elric Thornwell",
          seat: "Caelis",
          sphere: "Defense & Security",
          value: "Protection",
        },
      ],
      entries: [
        {
          name: "House Valen",
          heraldic: elariaHouseValenHeraldic,
          representative: "Matt Valen",
          heir: "Ash Valen",
          seat: "Valmere",
          sphere: "Industry, infrastructure, technology, and engineering",
          value: "Responsibility",
          description:
            "House Valen represents the builders of Elaria. Roads, factories, communications networks, public works, and technological innovation all fall within their sphere. Their duty is to ensure that the foundations of the realm remain strong.",
        },
        {
          name: "House Mirelle",
          heraldic: elariaHouseMirelleHeraldic,
          representative: "Lord Cassian Mirelle",
          heir: "Maia Mirelle",
          seat: "Mirel",
          sphere: "Arts, culture, and education",
          value: "Inspiration",
          description:
            "House Mirelle preserves the stories, traditions, and creative spirit of Elaria. They believe a realm must nourish the mind and soul as carefully as it nurtures its economy.",
        },
        {
          name: "House Corvane",
          heraldic: elariaHouseCorvaneHeraldic,
          representative: "Lady Seraphine Corvane",
          heir: "Tea Corvane",
          seat: "Caelis",
          sphere: "Diplomacy, foreign affairs, and international relations",
          value: "Connection",
          description:
            "House Corvane serves as Elaria's voice beyond its borders, building relationships with neighboring realms and maintaining the bridges that keep peace alive.",
        },
        {
          name: "House Seren",
          heraldic: elariaHouseSerenHeraldic,
          representative: "Lord Rowan Seren",
          heir: "Lyanna Seren",
          seat: "Caelis",
          sphere: "Agriculture, waterways, and resource management",
          value: "Sustenance",
          description:
            "House Seren oversees the resources that allow Elaria to flourish, ensuring that communities remain fed, connected, and supported.",
        },
        {
          name: "House Thornwell",
          heraldic: elariaHouseThornwellHeraldic,
          representative: "General Marcus Thornwell",
          heir: "Elric Thornwell",
          seat: "Caelis",
          sphere: "Defense, logistics, and security",
          value: "Protection",
          description:
            "House Thornwell safeguards the realm from threats both external and internal, maintaining the structures that allow Elarians to live in safety.",
        },
      ],
    },
    heraldry: {
      title: "Trees, rivers, stars, and stag antlers",
      body: [
        "Elarian heraldry often returns to trees, rivers, stars, and stag antlers. These symbols speak of growth, shared shelter, guidance, and the belief that a realm survives through the bonds between its people.",
        "Unlike many nations whose heraldry celebrates conquest or military strength, Elarian symbolism focuses on belonging, stewardship, and the enduring connections that unite communities across generations.",
      ],
      records: [
        {
          title: "The Great Tree",
          label: "Living Root",
          image: elariaSymbolGreatTree,
          description:
            "A symbol of community, growth, and shared heritage. Its roots and branches remind Elarians that many lives can grow from the same foundation.",
        },
        {
          title: "River Roads",
          label: "Shared Paths",
          image: elariaSymbolRiverRoads,
          description:
            "The rivers that connect the realm. They represent cooperation, trade, and the bonds that unite distant communities.",
        },
        {
          title: "The Guiding Star",
          label: "Hope and Direction",
          image: elariaSymbolGuidingStar,
          description:
            "A symbol of hope and guidance. It reminds Elarians to look beyond themselves and follow the ideals that strengthen the realm.",
        },
        {
          title: "The Stags",
          label: "Forest Guardians",
          image: elariaSymbolStags,
          description:
            "Guardians of the forests and valleys. They symbolize stewardship, renewal, and strength used to protect rather than dominate.",
        },
      ],
      motifs: ["The Great Tree", "River Roads", "The Guiding Star", "The Stags"],
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
    litany: {
      label: "Cultural memory",
      title: "The Traveler's Litany",
      introduction: [
        "The Litany of Tomorrow, often called The Traveler's Litany, is taught to Virekhali children from an early age. Originally created as a reminder that the future belongs to those willing to prepare for it, the litany reflects the values of learning, adaptability, and perseverance that helped shape the nation. It is recited by students, explorers, merchants, soldiers, and innovators alike before journeys, challenges, and new beginnings, serving as a reminder that while tomorrow cannot be predicted, it can be met with courage and readiness.",
      ],
      verses: [
        ["Tomorrow is unknown.", "Tomorrow is coming.", "I will meet it."],
        ["I will learn.", "I will adapt.", "I will move forward."],
      ],
      motto: {
        original: "Toran Navir.",
        translation: "Ready for Tomorrow.",
      },
    },
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
      title: "Sun, stone, and the open horizon",
      body: [
        "Virekhali heraldry draws inspiration from the lands that shaped its people: the blazing sun, the red stone of the Ashen Wastes, the hawks that patrol the skies, and the blades carried in defense of the realm. Together, these symbols reflect resilience, vigilance, and the belief that tomorrow is worth preparing for.",
      ],
      records: [
        {
          title: "The Sunburst",
          label: "Hope, Opportunity, Tomorrow",
          image: virekhalSymbolSunburst,
          description:
            "The Sunburst is the most recognizable symbol of Virekhal. Rising above the horizon, it represents the belief that every new day brings new possibilities and that the future is worth preparing for.",
        },
        {
          title: "Redstone",
          label: "Resilience, Endurance, Determination",
          image: virekhalSymbolRedstone,
          description:
            "Named for the red stone formations scattered throughout the Ashen Wastes, Redstone symbolizes the strength to withstand hardship without breaking. Like the stone itself, the people of Virekhal endure wind, heat, and time.",
        },
        {
          title: "The Desert Hawk",
          label: "Freedom, Vigilance, Vision",
          image: virekhalSymbolDesertHawk,
          description:
            "The Desert Hawk watches from above, seeing dangers and opportunities long before others. It represents the independence of the Virekhali people and their commitment to protecting both liberty and the realm.",
        },
        {
          title: "The Forged Blade",
          label: "Readiness, Duty, Sacrifice",
          image: virekhalSymbolForgedBlade,
          description:
            "Unlike ceremonial weapons, the Forged Blade symbolizes practical strength. It reflects the belief that peace is preserved through preparedness and that every citizen shares responsibility for the realm's future.",
        },
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
    litany: {
      label: "Cultural memory",
      title: "The Winter Litany",
      introduction: [
        "The Litany of Endurance, often called The Winter Litany, is taught to Tharvanian children from an early age. Originally created as a reminder that duty and perseverance sustain the kingdom through the harsh winters, it is recited by children, soldiers, laborers, nobles, and even members of the royal family during times of hardship.",
      ],
      verses: [
        ["The storm may come.", "The cold may follow.", "Yet I remain."],
        ["I will stand.", "I will serve.", "I will endure."],
        ["For the Realm.", "For the Crown.", "For those who come after me."],
      ],
      motto: {
        original: "Norys Veth.",
        translation: "Through Obedience We Survive.",
      },
    },
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
      title: "Crown, snow, and the enduring wolf",
      body: [
        "The symbols of Tharvane reflect the values that have sustained the realm through generations of hardship. From the Crown of Winter that unites the kingdom to the White Wolf that guards its people, each emblem speaks of duty, loyalty, and the strength to endure even the harshest storm.",
      ],
      records: [
        {
          title: "The Snowflake",
          label: "Order, Discipline, Endurance",
          image: tharvaneSymbolSnowflake,
          description:
            "The most recognized symbol of Tharvane. Its perfect form reflects the order, discipline, and endurance required to survive in a harsh land.",
        },
        {
          title: "The Crown of Winter",
          label: "Authority, Stability, Continuity",
          image: tharvaneSymbolCrownOfWinter,
          description:
            "More than a royal emblem, the Crown represents the continuity of the realm itself. Kings may come and go, but the Crown endures.",
        },
        {
          title: "The White Wolf",
          label: "Loyalty, Protection, Duty",
          image: tharvaneSymbolWhiteWolf,
          description:
            "A symbol of loyalty and protection. Like a wolf pack, the people of Tharvane survive through duty to one another.",
        },
        {
          title: "The Winter Star",
          label: "Guidance, Perseverance, Hope",
          image: tharvaneSymbolWinterStar,
          description:
            "A guiding light through the longest nights. The Winter Star reminds Tharvanians to persevere even when the path ahead is difficult to see.",
        },
      ],
      motifs: [
        "The Snowflake",
        "The Crown of Winter",
        "The White Wolf",
        "The Winter Star",
      ],
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
