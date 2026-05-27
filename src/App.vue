<template>
  <Navbar />
  <router-view class="app-view" />
  <footer class="site-footer">
    <div class="site-footer-inner">
      <p>
        © 2026 Emilia Murphy. The Dragon Ledger, The Dragon's Choice,
        characters, locations, and related original material are owned by Emilia
        Murphy. All rights reserved.
      </p>
      <a href="mailto:thedragonledger@gmail.com">thedragonledger@gmail.com</a>
    </div>
  </footer>
</template>

<script setup>
import Navbar from "./components/layout/Navbar.vue";
</script>

<style>
</style>
