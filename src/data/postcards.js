import emiliaUmbraFirstMeeting from "../assets/emilia-umbra-first-meeting.png";
import waitingForTom from "../assets/waiting-for-tom.png";

export const postcardEntries = [
  {
    slug: "the-day-umbra-chose",
    title: "The Day Umbra Chose",
    mood: "Before the Choice",
    image: emiliaUmbraFirstMeeting,
    summary: "An ordinary afternoon, a small black kitten, and the quiet beginning of a bond Emilia did not know she needed.",
    story: [
      "The kitten Stod brought home was small, quiet, and far too thin for his age.",
      "After Stod left, Emilia sat at her kitchen table while Umbra settled across from her, watching with the seriousness only cats seem capable of. She wasn't sure she was ready for the responsibility. Umbra, however, appeared to have already reached a decision.",
      "Some bonds begin with grand gestures.",
      "Others begin with a silent look across a table at the end of an ordinary afternoon.",
      "By sunset, Emilia had found a companion.",
      "And Umbra had found his person.",
    ],
  },
  {
    slug: "waiting-for-tom",
    title: "Waiting for Tom",
    mood: "Childhood memory",
    image: waitingForTom,
    summary: "A little girl, an open door, and the best part of the day waiting at the threshold of Varelli Manor.",
    story: [
      "Before responsibilities, expectations, and years changed the shape of their relationship, Emilia spent many afternoons waiting by the front door of Varelli Manor for her brother to come home from school.",
      "For a little girl of five, there was no better part of the day.",
    ],
  },
];

export const postcardEntriesNewestFirst = [...postcardEntries].reverse();

export function findPostcard(slug) {
  return postcardEntries.find((entry) => entry.slug === slug);
}
