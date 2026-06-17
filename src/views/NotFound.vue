<template>
  <main
    class="not-found-page"
    :style="{ backgroundImage: `url(${notFoundImage})` }"
  >
    <section class="not-found-content" aria-labelledby="not-found-title">
      <p class="not-found-code">404</p>
      <h1 id="not-found-title">Wrong path.</h1>
      <p class="not-found-script">Right company.</p>
      <p class="not-found-copy">
        The page you're looking for isn't here, but we'll help you find your
        way back.
      </p>
      <div class="not-found-actions" aria-label="404 navigation">
        <button class="not-found-button" type="button" @click="goHome">
          Take me home
        </button>
        <button class="not-found-link" type="button" @click="goArchive">
          Explore the archive
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";
import notFoundImage from "../assets/not-found-kitten-dragon.png";

const router = useRouter();

function goHome() {
  router.push("/");
}

function goArchive() {
  router.push("/archive");
}
</script>
