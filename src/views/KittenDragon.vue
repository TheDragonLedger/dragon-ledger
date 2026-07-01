<template>
  <main class="page">
    <section class="page-intro">
      <p class="subtitle">Soft little stories</p>
      <h1>Kitten & Dragon</h1>
      <p>
        A soft little corner of illustrated stories, quiet adventures, warm
        coffee, and the everyday magic shared between Kitten and Dragon.
      </p>
    </section>

    <section class="kitten-beginning" aria-labelledby="kitten-beginning-title">
      <button
        ref="beginningButton"
        class="kitten-beginning-poster"
        type="button"
        :aria-label="`Open ${kittenDragonBeginning.title} poster`"
        @click="openBeginningImage"
      >
        <img
          :src="kittenDragonBeginning.image"
          :alt="`${kittenDragonBeginning.title} poster`"
          width="1024"
          height="1536"
          fetchpriority="high"
        />
      </button>

      <div class="kitten-beginning-text">
        <p class="card-eyebrow">The beginning</p>
        <h2 id="kitten-beginning-title">
          {{ kittenDragonBeginning.title }}
        </h2>
        <p>
          In a noisy world, a tiny kitten found peace in the arms of a dragon.
          Different in every way, yet perfectly matched, they built a life out
          of warm coffee, late nights, soft kisses, and the kind of love that
          feels like coming home. Some loves arrive like storms. Theirs arrived
          quietly, and felt like home.
        </p>
      </div>
    </section>

    <section class="section-heading kitten-stories-heading">
      <p class="subtitle">Stories</p>
      <h2>Little Pages</h2>
    </section>

    <section class="kitten-story-shelf" aria-label="Kitten and Dragon stories">
      <router-link
        v-for="entry in kittenDragonStoriesNewestFirst"
        :key="entry.slug"
        class="kitten-story-card"
        :to="`/kitten-dragon/${entry.slug}`"
      >
        <img :src="entry.image" :alt="`${entry.title} illustration`" />
        <div>
          <p class="card-eyebrow">{{ entry.mood }}</p>
          <h2>{{ entry.title }}</h2>
          <p>{{ entry.summary }}</p>
        </div>
      </router-link>
    </section>

    <Teleport to="body">
      <div
        v-if="openImage"
        class="image-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`${kittenDragonBeginning.title} poster preview`"
        @keydown.esc="closeBeginningImage"
        @click.self="closeBeginningImage"
      >
        <button
          ref="closeButton"
          class="image-lightbox-close"
          type="button"
          aria-label="Close poster preview"
          @click="closeBeginningImage"
        >
          Close
        </button>
        <img
          :src="kittenDragonBeginning.image"
          :alt="`${kittenDragonBeginning.title} poster`"
        />
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { nextTick, ref, watch } from "vue";
import {
  kittenDragonBeginning,
  kittenDragonStoriesNewestFirst,
} from "../data/kittenDragon";

const openImage = ref(false);
const beginningButton = ref(null);
const closeButton = ref(null);

function openBeginningImage() {
  openImage.value = true;
}

function closeBeginningImage() {
  openImage.value = false;
}

watch(openImage, async (isOpen) => {
  await nextTick();

  if (isOpen) {
    closeButton.value?.focus();
    return;
  }

  beginningButton.value?.focus();
});
</script>
