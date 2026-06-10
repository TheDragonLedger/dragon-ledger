<template>
  <main class="page">
    <section class="page-intro postcards-intro">
      <p class="subtitle">Fragments of a life</p>
      <h1>Emilia's Postcards</h1>
      <p>
        Small memories gathered from the years before and beyond The Dragon's
        Choice. Quiet afternoons, unexpected companions, family moments,
        ordinary days, and the countless small choices that slowly shaped the
        woman Emilia would become.
      </p>
    </section>

    <section class="postcard-shelf" aria-label="Emilia's postcards">
      <router-link
        v-for="entry in postcardEntriesNewestFirst"
        :key="entry.slug"
        class="postcard-card"
        :to="`/postcards/${entry.slug}`"
      >
        <img :src="entry.image" :alt="`${entry.title} postcard`" />
        <div>
          <p class="card-eyebrow">{{ entry.mood }}</p>
          <h2>{{ entry.title }}</h2>
        </div>
      </router-link>
    </section>
  </main>
</template>

<script setup>
import { postcardEntriesNewestFirst } from "../data/postcards";
</script>
