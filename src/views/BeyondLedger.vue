<template>
  <main class="page beyond-page">
    <section class="page-intro beyond-intro">
      <p class="subtitle">Elsewhere</p>
      <h1>Beyond the Ledger</h1>
      <p class="beyond-lede">The stories wander beyond these pages.</p>
      <p>
        Follow The Dragon Ledger for new stories, worldbuilding, art,
        behind-the-scenes creations, and the occasional adventures of Kitten &
        Dragon.
      </p>
    </section>

    <section
      v-for="section in visibleSections"
      :key="section.title"
      class="social-section"
      :aria-labelledby="sectionTitleId(section.title)"
    >
      <div class="social-section-header">
        <h2 :id="sectionTitleId(section.title)">{{ section.title }}</h2>
        <p>{{ section.description }}</p>
      </div>

      <div class="social-grid">
        <a
          v-for="link in activeLinks(section.links)"
          :key="link.platform"
          class="social-card social-card-link"
          :href="link.url"
          target="_blank"
          rel="noreferrer"
          :aria-label="`${link.platform}: ${link.name}, ${link.handle}`"
        >
          <span class="social-card-top">
            <span class="social-icon" aria-hidden="true">{{ link.initials }}</span>
            <span class="social-status">Open</span>
          </span>
          <span class="social-platform">{{ link.platform }}</span>
          <span class="social-name">{{ link.name }}</span>
          <span class="social-handle">{{ link.handle }}</span>
          <span class="social-description">{{ link.description }}</span>
        </a>

        <article
          v-for="link in pendingLinks(section.links)"
          :key="link.platform"
          class="social-card social-card-pending"
          :aria-label="`${link.platform}: ${link.name}, ${link.status}`"
        >
          <span class="social-card-top">
            <span class="social-icon" aria-hidden="true">{{ link.initials }}</span>
            <span class="social-status">{{ link.status }}</span>
          </span>
          <span class="social-platform">{{ link.platform }}</span>
          <span class="social-name">{{ link.name }}</span>
          <span class="social-handle">{{ link.handle }}</span>
          <span class="social-description">{{ link.description }}</span>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { socialSections } from "../data/socialLinks";

const visibleSections = computed(() =>
  socialSections.filter((section) => !section.hidden),
);

function sectionTitleId(title) {
  return `social-${title.toLowerCase().replaceAll(" ", "-")}`;
}

function activeLinks(links) {
  return links.filter((link) => link.url);
}

function pendingLinks(links) {
  return links.filter((link) => !link.url);
}
</script>
