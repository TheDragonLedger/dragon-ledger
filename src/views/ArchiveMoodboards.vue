<template>
  <main class="page">
    <section class="page-intro">
      <p class="subtitle">The Archive</p>
      <h1>Moodboards</h1>
      <p>
        Visual collections for character ideas, relationships, themes,
        atmosphere, and the quiet imagery that shapes The Dragon Ledger.
      </p>
    </section>

    <router-link to="/archive" class="back-link">Back to The Archive</router-link>

    <section class="content-grid archive-entry-grid">
      <ArchiveCard
        v-for="moodboard in moodboards"
        :key="moodboard.title"
        :title="moodboard.title"
        :eyebrow="moodboard.category"
        :body="moodboard.description"
        :image="moodboard.image"
        :image-alt="`${moodboard.title} moodboard`"
      />
    </section>
  </main>
</template>

<script setup>
import ArchiveCard from "../components/ArchiveCard.vue";
import { moodboards } from "../data/moodboards";
</script>
