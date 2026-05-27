<template>
  <main class="page">
    <section class="page-intro">
      <p class="subtitle">Visual atmosphere</p>
      <h1>Gallery</h1>
      <p>
        A future home for character images, moodboards, symbols, dividers,
        environments, and concept art.
      </p>
    </section>

    <section class="content-grid gallery-grid">
      <ArchiveCard
        v-for="item in galleryItems"
        :key="item"
        :title="item"
        body="Image space reserved. Add files to src/assets when ready."
      />
    </section>
  </main>
</template>

<script setup>
import ArchiveCard from "../components/ArchiveCard.vue";
import { galleryItems } from "../data/archiveData";
</script>
