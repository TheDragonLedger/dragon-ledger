<template>
  <main class="page">
    <section class="page-intro">
      <p class="subtitle">The Archive</p>
      <h1>Places of the World</h1>
      <p>
        Countries, cities, regions, and the wider geography shaping the world
        of The Dragon Ledger.
      </p>
    </section>

    <router-link to="/archive" class="back-link">Back to The Archive</router-link>

    <section class="world-overview">
      <article class="archive-card world-map-card">
        <div class="world-map-wrap">
          <button
            ref="mapButton"
            class="world-map-image-button"
            type="button"
            :aria-label="`Open ${worldOverview.title} map preview`"
            @click="openMap"
          >
            <img
              class="world-map-image"
              :src="worldOverview.image"
              :alt="`${worldOverview.title} map`"
              width="1414"
              height="1112"
              fetchpriority="high"
              decoding="async"
            />
          </button>
          <router-link
            v-for="realm in worldOverview.realms"
            :key="realm.title"
            class="world-map-button"
            :class="{ 'world-map-button-disabled': !hasCountry(realm.title) }"
            :style="realm.position"
            :to="hasCountry(realm.title) ? realm.path : '/archive/places-of-the-world'"
            :aria-label="`Open ${realm.title}`"
            :title="realm.title"
          >
            <span class="sr-only">{{ realm.title }}</span>
          </router-link>
        </div>

        <p class="card-eyebrow">{{ worldOverview.category }}</p>
        <h2>{{ worldOverview.title }}</h2>
        <div class="card-body">
          <p
            v-for="paragraph in worldOverview.description"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>
      </article>
    </section>

    <Teleport to="body">
      <div
        v-if="isMapOpen"
        class="image-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`${worldOverview.title} map preview`"
        @keydown.esc="closeMap"
        @click.self="closeMap"
      >
        <button
          ref="closeButton"
          class="image-lightbox-close"
          type="button"
          aria-label="Close map preview"
          @click="closeMap"
        >
          Close
        </button>
        <img :src="worldOverview.image" :alt="`${worldOverview.title} map`" />
      </div>
    </Teleport>

    <section class="section-heading">
      <p class="subtitle">Countries / Realms</p>
      <h2>The Three Realms</h2>
    </section>

    <section class="content-grid archive-entry-grid">
      <router-link
        v-for="country in countries"
        :key="country.title"
        :to="`/archive/places-of-the-world/${country.slug}`"
        class="card-link"
      >
        <ArchiveCard
          :title="country.title"
          :eyebrow="country.category"
          :body="country.description"
          :image="country.image"
          :image-alt="`${country.title} landscape`"
        />
      </router-link>
    </section>

    <section class="section-heading">
      <p class="subtitle">Waters Between Realms</p>
      <h2>The Seas</h2>
    </section>

    <section class="content-grid archive-entry-grid">
      <router-link
        v-for="sea in waters"
        :key="sea.title"
        :to="`/archive/places-of-the-world/${sea.slug}`"
        class="card-link"
      >
        <ArchiveCard
          :title="sea.title"
          :eyebrow="sea.category"
          :body="sea.description"
          :image="sea.image"
          :image-alt="`${sea.title} seascape`"
        />
      </router-link>
    </section>

  </main>
</template>

<script setup>
import { nextTick, ref, watch } from "vue";
import ArchiveCard from "../components/ArchiveCard.vue";
import {
  countries,
  waters,
  worldOverview,
} from "../data/worldPlaces";

const isMapOpen = ref(false);
const mapButton = ref(null);
const closeButton = ref(null);

function hasCountry(title) {
  return countries.some((country) => country.title === title);
}

function openMap() {
  isMapOpen.value = true;
}

function closeMap() {
  isMapOpen.value = false;
}

watch(isMapOpen, async (isOpen) => {
  await nextTick();

  if (isOpen) {
    closeButton.value?.focus();
    return;
  }

  mapButton.value?.focus();
});
</script>
