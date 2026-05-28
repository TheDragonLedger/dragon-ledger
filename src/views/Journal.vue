<template>
  <main class="page">
    <section class="page-intro">
      <p class="subtitle">Development log</p>
      <h1>Journal</h1>
      <p>
        Quiet progress notes for editing milestones, project updates, website
        changes, and creative reflections.
      </p>
    </section>

    <section class="timeline">
      <ArchiveCard
        v-for="entry in journalEntries"
        :key="entry.title"
        :title="entry.title"
        eyebrow="Current"
        :body="entry.note"
      />
    </section>
  </main>
</template>

<script setup>
import ArchiveCard from "../components/ArchiveCard.vue";
import { journalEntries } from "../data/journal";
</script>
