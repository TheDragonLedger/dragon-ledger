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
        </div>
      </router-link>
    </section>
  </main>
</template>

<script setup>
import { kittenDragonStoriesNewestFirst } from "../data/kittenDragon";
</script>
