<template>
  <main class="page">
    <section class="page-intro">
      <p class="subtitle">World and lore</p>
      <h1>The Archive</h1>
      <p>
        A quiet place for locations, symbols, terminology, and the fragments
        that shape the world without becoming a heavy wiki before the story
        needs one.
      </p>
    </section>

    <section class="content-grid">
      <router-link
        v-for="section in archiveSections"
        :key="section.title"
        :to="section.path"
        class="card-link"
      >
        <ArchiveCard
          :title="section.title"
          :body="section.description"
        />
      </router-link>
    </section>
  </main>
</template>

<script setup>
import ArchiveCard from "../components/ArchiveCard.vue";
import { archiveSections } from "../data/archiveData";
</script>
