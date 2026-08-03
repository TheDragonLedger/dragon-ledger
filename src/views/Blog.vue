<template>
  <main class="page journey-page">
    <section class="page-intro journey-intro">
      <p class="subtitle">Story journey</p>
      <h1>The Journey</h1>
      <p>
        Fragments from the long road that carried The Dragon's Choice from a
        persistent spark to a living archive: false starts, discoveries,
        voices found, doors opened, and letters sent into the world.
      </p>
    </section>

    <section class="journey-timeline" aria-label="The Dragon's Choice journey">
      <article
        v-for="(entry, index) in journalEntriesNewestFirst"
        :key="entry.title"
        class="journey-card"
        :class="{ 'is-expanded': isExpanded(entry) }"
      >
        <button
          class="journey-card-toggle"
          type="button"
          :aria-expanded="isExpanded(entry)"
          :aria-controls="getDetailId(entry)"
          @click="toggleEntry(entry)"
        >
          <span class="journey-card-marker">
            {{ getJourneyNumber(index) }}
          </span>

          <span class="journey-card-content">
            <span class="card-eyebrow">{{ entry.period }}</span>
            <span class="journey-card-title">{{ entry.title }}</span>
            <span class="journey-motif">{{ entry.motif }}</span>
            <span class="journey-excerpt">{{ entry.excerpt }}</span>
            <span v-if="entry.details" class="journey-read-more">
              {{ isExpanded(entry) ? "Close entry" : "Read the full fragment" }}
            </span>
          </span>
        </button>

        <div
          v-if="entry.details && isExpanded(entry)"
          :id="getDetailId(entry)"
          class="journey-card-detail"
        >
          <button
            v-if="entry.image"
            :ref="(element) => setImageButton(entry, element)"
            class="journey-entry-image"
            type="button"
            :aria-label="`Open ${entry.title} illustration`"
            @click="openEntryImage(entry)"
          >
            <img
              :src="getEntryImage(entry.image)"
              :alt="entry.imageAlt"
              width="1402"
              height="1122"
            />
          </button>
          <p
            v-for="detail in entry.details"
            :key="detail.text"
            :class="{ 'journey-detail-emphasis': detail.emphasis }"
          >
            {{ detail.text }}
          </p>
        </div>
      </article>
    </section>

    <Teleport to="body">
      <div
        v-if="openImageEntry"
        class="image-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`${openImageEntry.title} illustration preview`"
        @keydown.esc="closeEntryImage"
        @click.self="closeEntryImage"
      >
        <button
          ref="closeButton"
          class="image-lightbox-close"
          type="button"
          aria-label="Close illustration preview"
          @click="closeEntryImage"
        >
          Close
        </button>
        <img
          :src="getEntryImage(openImageEntry.image)"
          :alt="openImageEntry.imageAlt"
        />
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { nextTick, ref, watch } from "vue";
import { journalEntries } from "../data/journal";

const journalEntriesNewestFirst = [...journalEntries].reverse();
const expandedEntries = ref([]);
const openImageEntry = ref(null);
const closeButton = ref(null);
const imageButtons = new Map();

const entryImages = import.meta.glob("../assets/*", {
  eager: true,
  import: "default",
  query: "?url",
});

function getJourneyNumber(index) {
  return String(journalEntries.length - index).padStart(2, "0");
}

function getDetailId(entry) {
  return `journey-detail-${entry.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function isExpanded(entry) {
  return expandedEntries.value.includes(entry.title);
}

function toggleEntry(entry) {
  if (!entry.details) return;

  expandedEntries.value = isExpanded(entry)
    ? expandedEntries.value.filter((title) => title !== entry.title)
    : [...expandedEntries.value, entry.title];
}

function getEntryImage(filename) {
  return entryImages[`../assets/${filename}`];
}

function setImageButton(entry, element) {
  if (element) imageButtons.set(entry.title, element);
}

function openEntryImage(entry) {
  openImageEntry.value = entry;
}

function closeEntryImage() {
  openImageEntry.value = null;
}

watch(openImageEntry, async (entry, previousEntry) => {
  await nextTick();

  if (entry) {
    closeButton.value?.focus();
    return;
  }

  if (previousEntry) imageButtons.get(previousEntry.title)?.focus();
});
</script>
