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
      >
        <div class="journey-card-marker">
          {{ String(index + 1).padStart(2, "0") }}
        </div>

        <div class="journey-card-content">
          <p class="card-eyebrow">{{ entry.period }}</p>
          <h2>{{ entry.title }}</h2>
          <p class="journey-motif">{{ entry.motif }}</p>
          <p>{{ entry.excerpt }}</p>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
import { journalEntries } from "../data/journal";

const journalEntriesNewestFirst = [...journalEntries].reverse();
</script>
