<template>
  <Navbar />
  <router-view class="app-view" />
  <button
    v-if="showBackToTop"
    class="back-to-top"
    type="button"
    aria-label="Back to top"
    @click="scrollToTop"
  >
    ↑ Top
  </button>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <p>
        © 2026 Emilia Murphy. The Dragon Ledger, The Dragon's Choice,
        characters, locations, and related original material are owned by Emilia
        Murphy. All rights reserved.
      </p>
      <div class="site-footer-links">
        <router-link to="/beyond-the-ledger">
          More from The Dragon Ledger →
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Navbar from "./components/layout/Navbar.vue";

const showBackToTop = ref(false);

function updateBackToTop() {
  showBackToTop.value = window.scrollY > 520;
}

function scrollToTop() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

onMounted(() => {
  updateBackToTop();
  window.addEventListener("scroll", updateBackToTop, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateBackToTop);
});
</script>

<style>
</style>
