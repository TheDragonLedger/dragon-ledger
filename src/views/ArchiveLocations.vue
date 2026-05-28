<template>
  <main class="page">
    <section class="page-intro">
      <p class="subtitle">The Archive</p>
      <h1>Locations</h1>
      <p>
        Places that carry memory, devotion, history, and the emotional
        geography at the heart of The Dragon Ledger.
      </p>
    </section>

    <router-link to="/archive" class="back-link">Back to The Archive</router-link>

    <section class="content-grid archive-entry-grid">
      <ArchiveCard
        v-for="location in archiveLocations"
        :key="location.title"
        :title="location.title"
        :eyebrow="location.category"
        :body="location.description"
        :image="location.image"
        :image-alt="`${location.title} location`"
      />
    </section>
  </main>
</template>

<script setup>
import ArchiveCard from "../components/ArchiveCard.vue";
import { archiveLocations } from "../data/locations";
</script>
