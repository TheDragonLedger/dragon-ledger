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
  </main>
</template>

<script setup>
import { ref } from "vue";
import { journalEntries } from "../data/journal";

const journalEntriesNewestFirst = [...journalEntries].reverse();
const expandedEntries = ref([]);

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
</script>
