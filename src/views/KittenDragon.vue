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

    <section class="kitten-story-list">
      <article
        v-for="entry in kittenDragonEntries"
        :key="entry.title"
        class="kitten-story"
      >
        <button
          class="kitten-story-image"
          type="button"
          :aria-label="`Open ${entry.title} illustration`"
          @click="openImage = entry"
        >
          <img :src="entry.image" :alt="`${entry.title} illustration`" />
        </button>

        <div class="kitten-story-text">
          <p class="card-eyebrow">{{ entry.mood }}</p>
          <h2>{{ entry.title }}</h2>
          <p
            v-for="paragraph in entry.story"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>
      </article>
    </section>

    <Teleport to="body">
      <div
        v-if="openImage"
        class="image-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`${openImage.title} image preview`"
        @click.self="openImage = null"
      >
        <button
          class="image-lightbox-close"
          type="button"
          aria-label="Close image preview"
          @click="openImage = null"
        >
          Close
        </button>
        <img :src="openImage.image" :alt="`${openImage.title} illustration`" />
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { kittenDragonEntries } from "../data/archiveData";

const openImage = ref(null);
</script>
