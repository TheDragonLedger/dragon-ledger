import kittenDragonStart from "../assets/kitten-dragon-start.png";
import kittenDragonBreakfast from "../assets/kitten-daydreaming-dragon-breakfast.png";
import kittenCold from "../assets/kitten-cold.png";

export const kittenDragonEntries = [
  {
    slug: "two-hearts-one-quiet-little-world",
    title: "Two Hearts, One Quiet Little World",
    mood: "The beginning",
    image: kittenDragonStart,
    summary: "The first quiet beginning of Kitten and Dragon's little world.",
    story: [
      "In a noisy world, a tiny kitten found peace in the arms of a dragon.",
      "Different in every way, yet perfectly matched, they built a life out of warm coffee, late nights, soft kisses, and the kind of love that feels like coming home.",
      "They met by accident, but chose each other again and again, even when the road ahead felt uncertain. Side by side, they learned to build something gentle, lasting, and real.",
      "This is the story of their journey, their adventures, and the hearts they touched along the way.",
      "Some loves arrive like storms. Theirs arrived quietly, and felt like home.",
    ],
  },
  {
    slug: "a-wish-for-wings",
    title: "A Wish for Wings",
    mood: "Morning warmth",
    image: kittenDragonBreakfast,
    summary: "A soft morning of sky dreams, pancakes, and being loved exactly as you are.",
    story: [
      "The morning sun spilled through the kitchen windows while Kitten sat quietly beside them, watching the endless blue sky above the trees.",
      "Sometimes, she imagined what it would feel like to fly. In her dreams, she had wings strong enough to follow Dragon through the clouds and see the world beside him.",
      "\"Hey, Kitten,\" Dragon asked softly, gently patting her head. \"Why do you look so sad?\"",
      "Kitten lowered her ears a little. \"Sometimes... I wish I had wings.\"",
      "Dragon smiled warmly. \"You're perfect exactly as you are, love.\"",
      "\"But if I could fly,\" she whispered, \"I could understand why you love the sky so much.\"",
      "\"You always surprise me.\" Dragon chuckled softly before turning back toward the stove. \"Come on. I made your favorite pancakes.\"",
      "Kitten's ears perked up immediately.",
      "\"Chocolate chip pancakes with cream butter?\"",
      "\"Yep. And there's a big mug of sweet black coffee waiting for you too.\"",
      "\"Thank you, love,\" Kitten purred, smiling at her dragon.",
      "Kitten hurried to the table, where warm pancakes, sweet coffee, and fresh cherries were already waiting for her.",
      "And for a little while, the world felt warm, quiet, and safe.",
    ],
  },
  {
    slug: "everything-can-wait-until-tomorrow",
    title: "Everything Can Wait Until Tomorrow",
    mood: "Rainy quiet",
    image: kittenCold,
    summary: "A cold evening, warm coffee, and the comfort of being cared for even from afar.",
    story: [
      "As the sky outside grew darker and colder, rain tapped softly against the windows. The house was quiet, and for once, Kitten didn't mind the silence.",
      "Wrapped in her favorite blanket, she curled up on the couch and sipped her coffee.",
      "For once, there was nothing she needed to do. No work, no questions, no errands waiting for her attention. She could simply enjoy her cookies, read her favorite book, and lose herself in stories of distant kingdoms and dark heroes rescuing ladies in distress.",
      "Everything else could wait until tomorrow.",
      "\"What should I have for dinner?\" Kitten wondered aloud.",
      "As she looked around, she spotted a small note resting on the coffee table.",
      "Dear Love,\nI'll be back tomorrow afternoon. I left lunch and dinner ready for you in the fridge.\nBe safe.\nYour Dragon.",
      "A soft purr escaped her.",
      "Smiling, Kitten tucked the note inside her journal before returning to her book, her coffee, and the warmth of the evening.",
      "Outside, the rain continued to fall. Inside, everything felt just right.",
    ],
  },
];

export const kittenDragonStoriesNewestFirst = [...kittenDragonEntries].reverse();

export function findKittenDragonStory(slug) {
  return kittenDragonEntries.find((entry) => entry.slug === slug);
}
