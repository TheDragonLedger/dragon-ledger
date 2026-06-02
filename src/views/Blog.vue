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
        :eyebrow="`${entry.category} · ${formatDate(entry.date)}`"
        :body="entry.excerpt"
      />
    </section>
  </main>
</template>

<script setup>
import ArchiveCard from "../components/ArchiveCard.vue";
import { journalEntries } from "../data/journal";

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

function formatDate(date) {
  return dateFormatter.format(new Date(`${date}T00:00:00`));
}
</script>
