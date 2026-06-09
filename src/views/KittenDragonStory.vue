<template>
  <main class="page">
    <router-link class="back-link" to="/kitten-dragon">
      Back to Kitten & Dragon
    </router-link>

    <article v-if="story" class="kitten-story kitten-story-detail">
      <button
        ref="storyButton"
        class="kitten-story-image"
        type="button"
        :aria-label="`Open ${story.title} illustration`"
        @click="openStoryImage"
      >
        <img :src="story.image" :alt="`${story.title} illustration`" />
      </button>

      <div class="kitten-story-text">
        <p class="card-eyebrow">{{ story.mood }}</p>
        <h1>{{ story.title }}</h1>
        <p
          v-for="paragraph in story.story"
          :key="paragraph"
          :class="{ 'story-note': isNoteParagraph(paragraph) }"
        >
          {{ paragraph }}
        </p>
      </div>
    </article>

    <section v-else class="archive-card">
      <p class="card-eyebrow">Missing page</p>
      <h1>Story not found</h1>
      <p class="card-body">
        This Kitten & Dragon story is not in the archive yet.
      </p>
    </section>

    <Teleport to="body">
      <div
        v-if="openImage && story"
        class="image-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`${story.title} image preview`"
        @keydown.esc="closeStoryImage"
        @click.self="closeStoryImage"
      >
        <button
          ref="closeButton"
          class="image-lightbox-close"
          type="button"
          aria-label="Close image preview"
          @click="closeStoryImage"
        >
          Close
        </button>
        <img :src="story.image" :alt="`${story.title} illustration`" />
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { computed, nextTick, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { findKittenDragonStory } from "../data/kittenDragon";

const route = useRoute();
const story = computed(() => findKittenDragonStory(route.params.slug));
const openImage = ref(false);
const storyButton = ref(null);
const closeButton = ref(null);

function openStoryImage() {
  openImage.value = true;
}

function closeStoryImage() {
  openImage.value = false;
}

function isNoteParagraph(paragraph) {
  return paragraph.includes("\n");
}

watch(openImage, async (isOpen) => {
  await nextTick();

  if (isOpen) {
    closeButton.value?.focus();
    return;
  }

  storyButton.value?.focus();
});
</script>
