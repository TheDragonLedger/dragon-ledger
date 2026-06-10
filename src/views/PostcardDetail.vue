<template>
  <main class="page">
    <router-link class="back-link" to="/postcards">
      Back to Emilia's Postcards
    </router-link>

    <article v-if="postcard" class="postcard-detail">
      <button
        ref="postcardButton"
        class="postcard-detail-image"
        type="button"
        :aria-label="`Open ${postcard.title} postcard image`"
        @click="openPostcardImage"
      >
        <img :src="postcard.image" :alt="`${postcard.title} postcard`" />
      </button>

      <div class="postcard-detail-text">
        <p class="card-eyebrow">{{ postcard.mood }}</p>
        <h1>{{ postcard.title }}</h1>
        <p v-for="paragraph in postcard.story" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </article>

    <section v-else class="archive-card">
      <p class="card-eyebrow">Missing page</p>
      <h1>Postcard not found</h1>
      <p class="card-body">
        This memory is not in the archive yet.
      </p>
    </section>

    <Teleport to="body">
      <div
        v-if="openImage && postcard"
        class="image-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`${postcard.title} image preview`"
        @keydown.esc="closePostcardImage"
        @click.self="closePostcardImage"
      >
        <button
          ref="closeButton"
          class="image-lightbox-close"
          type="button"
          aria-label="Close image preview"
          @click="closePostcardImage"
        >
          Close
        </button>
        <img :src="postcard.image" :alt="`${postcard.title} postcard`" />
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { computed, nextTick, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { findPostcard } from "../data/postcards";

const route = useRoute();
const postcard = computed(() => findPostcard(route.params.slug));
const openImage = ref(false);
const postcardButton = ref(null);
const closeButton = ref(null);

function openPostcardImage() {
  openImage.value = true;
}

function closePostcardImage() {
  openImage.value = false;
}

watch(openImage, async (isOpen) => {
  await nextTick();

  if (isOpen) {
    closeButton.value?.focus();
    return;
  }

  postcardButton.value?.focus();
});
</script>
