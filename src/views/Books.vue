<template>
  <main class="page">
    <section class="page-intro">
      <p class="subtitle">Book archive</p>
      <h1>The Books</h1>
      <p>
        Stories born from quiet moments, difficult choices, soft dragons, and
        the belief that healing is sometimes found in the people who choose to
        stay.
      </p>
    </section>

    <section class="book-list">
      <article
        v-for="book in books"
        :key="book.title"
        class="book-feature"
      >
        <div class="book-cover-wrap">
          <img :src="book.cover" :alt="`${book.title} cover`" />
        </div>

        <div class="book-details">
          <p class="card-eyebrow">{{ book.status }}</p>
          <h2>{{ book.title }}</h2>
          <p
            v-for="paragraph in book.blurb"
            :key="paragraph"
            :class="{ 'book-callout': paragraph.includes('\n') }"
          >
            {{ paragraph }}
          </p>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
import { books } from "../data/books";
</script>
