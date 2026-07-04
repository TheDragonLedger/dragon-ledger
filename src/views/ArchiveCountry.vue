<template>
  <main class="page">
    <section class="page-intro">
      <p class="subtitle">Places of the World</p>
      <h1>{{ place?.title || "Place not found" }}</h1>
      <p v-if="place">
        {{ place.category }} of The Dragon Ledger.
      </p>
      <p v-else>
        This place is not yet recorded in the archive.
      </p>
    </section>

    <router-link to="/archive/places-of-the-world" class="back-link">
      Back to Places of the World
    </router-link>

    <section
      v-if="place"
      class="country-feature-grid"
    >
      <ArchiveCard
        :title="place.title"
        :eyebrow="place.category"
        :body="place.description"
        :image="place.image"
        :image-alt="`${place.title} landscape`"
      />

      <ArchiveCard
        v-if="place.map"
        :title="`${place.title} Map`"
        eyebrow="Country map"
        body="A closer view of the realm's cities, landmarks, roads, and surrounding waters."
        :image="place.map"
        :image-alt="`${place.title} map`"
      />
    </section>

    <template v-if="place">
      <section
        v-for="section in countryAtlasSections"
        :key="section.title"
      >
        <div class="section-heading">
          <p class="subtitle">{{ section.category }}</p>
          <h2>{{ section.title }}</h2>
        </div>

        <div class="content-grid archive-entry-grid">
          <ArchiveCard
            v-for="entry in section.entries"
            :key="entry.title"
            :title="entry.title"
            :eyebrow="entry.category"
            :body="entry.description"
            :image="entry.image"
            :image-alt="`${entry.title} atlas entry`"
            :image-placeholder="!entry.image"
          />
        </div>
      </section>
    </template>

    <section
      v-else
      class="content-grid"
    >
      <ArchiveCard
        title="Entry not found"
        body="This country or region is not available yet. Return to Places of the World to continue exploring."
      />
    </section>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import ArchiveCard from "../components/ArchiveCard.vue";
import { getCountryAtlasSections, placeEntries } from "../data/worldPlaces";

const route = useRoute();
const place = computed(() =>
  placeEntries.find((entry) => entry.slug === route.params.slug),
);
const countryAtlasSections = computed(() =>
  place.value ? getCountryAtlasSections(place.value.slug) : [],
);
</script>
