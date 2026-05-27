<template>
  <article class="archive-card">
    <button
      v-if="image"
      class="card-image-button"
      type="button"
      :aria-label="`Open ${title} image`"
      @click="isImageOpen = true"
    >
      <img
        class="card-image"
        :class="{ 'card-image-cover': imageVariant === 'cover' }"
        :src="image"
        :alt="imageAlt || title"
      />
    </button>
    <p v-if="eyebrow" class="card-eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p class="card-body">{{ body }}</p>
    <slot />

    <Teleport to="body">
      <div
        v-if="isImageOpen"
        class="image-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`${title} image preview`"
        @click.self="isImageOpen = false"
      >
        <button
          class="image-lightbox-close"
          type="button"
          aria-label="Close image preview"
          @click="isImageOpen = false"
        >
          Close
        </button>
        <img :src="image" :alt="imageAlt || title" />
      </div>
    </Teleport>
  </article>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  eyebrow: String,
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: String,
  imageAlt: String,
  imageVariant: String,
});

const isImageOpen = ref(false);
</script>
