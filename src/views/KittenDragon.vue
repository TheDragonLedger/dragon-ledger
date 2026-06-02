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
          ref="storyButtons"
          class="kitten-story-image"
          type="button"
          :aria-label="`Open ${entry.title} illustration`"
          @click="openStoryImage(entry)"
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
        <img :src="openImage.image" :alt="`${openImage.title} illustration`" />
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { nextTick, ref, watch } from "vue";
import { kittenDragonEntries } from "../data/kittenDragon";

const openImage = ref(null);
const storyButtons = ref([]);
const closeButton = ref(null);
const lastOpenedIndex = ref(null);

function openStoryImage(entry) {
  lastOpenedIndex.value = kittenDragonEntries.findIndex(
    (item) => item.title === entry.title,
  );
  openImage.value = entry;
}

function closeStoryImage() {
  openImage.value = null;
}

watch(openImage, async (entry) => {
  if (entry) {
    await nextTick();
    closeButton.value?.focus();
    return;
  }

  await nextTick();
  if (lastOpenedIndex.value !== null) {
    storyButtons.value[lastOpenedIndex.value]?.focus();
  }
});
</script>
