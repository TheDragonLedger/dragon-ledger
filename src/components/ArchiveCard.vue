<template>
  <article class="archive-card">
    <button
      v-if="image"
      ref="imageButton"
      class="card-image-button"
      :class="{
        'card-image-button-map': imageVariant === 'map',
      }"
      type="button"
      :aria-label="`Open ${title} image`"
      @click="isImageOpen = true"
    >
      <img
        class="card-image"
        :class="{
          'card-image-cover': imageVariant === 'cover',
          'card-image-map': imageVariant === 'map',
        }"
        :src="image"
        :alt="imageAlt || title"
      />
    </button>
    <div
      v-else-if="imagePlaceholder"
      class="card-image-placeholder"
      aria-hidden="true"
    >
      <span>Image pending</span>
    </div>
    <p v-if="eyebrow" class="card-eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <div class="card-body">
      <p
        v-for="paragraph in bodyParagraphs"
        :key="paragraph"
      >
        {{ paragraph }}
      </p>
    </div>
    <slot />

    <Teleport to="body">
      <div
        v-if="isImageOpen"
        class="image-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`${title} image preview`"
        @keydown.esc="closeImage"
        @click.self="isImageOpen = false"
      >
        <button
          ref="closeButton"
          class="image-lightbox-close"
          type="button"
          aria-label="Close image preview"
          @click="closeImage"
        >
          Close
        </button>
        <img :src="image" :alt="imageAlt || title" />
      </div>
    </Teleport>
  </article>
</template>

<script setup>
import { computed, nextTick, ref, watch } from "vue";

const props = defineProps({
  eyebrow: String,
  title: {
    type: String,
    required: true,
  },
  body: {
    type: [String, Array],
    required: true,
  },
  image: String,
  imageAlt: String,
  imageVariant: String,
  imagePlaceholder: Boolean,
});

const isImageOpen = ref(false);
const imageButton = ref(null);
const closeButton = ref(null);
const bodyParagraphs = computed(() =>
  Array.isArray(props.body) ? props.body : [props.body],
);

function closeImage() {
  isImageOpen.value = false;
}

watch(isImageOpen, async (isOpen) => {
  if (isOpen) {
    await nextTick();
    closeButton.value?.focus();
    return;
  }

  await nextTick();
  imageButton.value?.focus();
});
</script>
