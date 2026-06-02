<template>
  <main
    class="not-found-page"
    :style="{ backgroundImage: `url(${notFoundImage})` }"
  >
    <section class="not-found-actions" aria-labelledby="not-found-title">
      <h1 id="not-found-title" class="sr-only">
        404. Wrong path. Right company.
      </h1>
      <p class="sr-only">
        The page you're looking for isn't here, but we'll help you find your
        way back.
      </p>
      <router-link class="not-found-button" to="/">Take me home</router-link>
      <router-link class="not-found-link" to="/archive">
        Explore the archive
      </router-link>
    </section>
  </main>
</template>

<script setup>
import notFoundImage from "../assets/not-found-kitten-dragon.png";
</script>
