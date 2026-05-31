<template>
  <main class="page">
    <section class="page-intro">
      <p class="subtitle">Author notes</p>
      <h1>Blog</h1>
      <p>
        A record of the journey behind The Dragon Ledger: updates,
        reflections, creative milestones, and the quiet moments that happen
        between stories.
      </p>
    </section>

    <section class="timeline">
      <ArchiveCard
        v-for="entry in journalEntries"
        :key="entry.title"
        class="blog-card"
        :title="entry.title"
        eyebrow="Journal"
        :body="entry.note"
      />
    </section>
  </main>
</template>

<script setup>
import ArchiveCard from "../components/ArchiveCard.vue";
import { journalEntries } from "../data/journal";
</script>
