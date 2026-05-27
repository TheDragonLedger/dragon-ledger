<template>
  <main class="page">
    <section class="page-intro">
      <p class="subtitle">Author notes</p>
      <h1>Blog</h1>
      <p>
        Project updates, development notes, reflections, and little records of
        the work as The Dragon Ledger grows.
      </p>
    </section>

    <section class="timeline">
      <ArchiveCard
        v-for="entry in journalEntries"
        :key="entry.title"
        :title="entry.title"
        eyebrow="Journal"
        :body="entry.note"
      />
    </section>
  </main>
</template>

<script setup>
import ArchiveCard from "../components/ArchiveCard.vue";
import { journalEntries } from "../data/archiveData";
</script>
