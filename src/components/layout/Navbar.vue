<template>
  <nav class="navbar">
    <div class="logo">
      <img :src="siteLogo" alt="The Dragon Ledger emblem" />
      <span>The Dragon Ledger</span>
    </div>

    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/books">Books</router-link>
      <router-link to="/characters">Characters</router-link>
      <router-link to="/archive">The Archive</router-link>
      <router-link to="/kitten-dragon">Kitten & Dragon</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/about">About the Author</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<script setup>
import siteLogo from "../../assets/dragon-ledger-logo.png";
</script>

<style scoped>

.navbar {
  position: fixed;
  top: 0;

  left: 0;
  right: 0;
  width: 100%;
  max-width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 3rem;

  z-index: 100;

  background:
    linear-gradient(90deg, rgba(127, 47, 39, 0.12), transparent 32%, rgba(44, 73, 96, 0.1)),
    rgba(10, 10, 10, 0.46);
  backdrop-filter: blur(10px);

  border-bottom: 1px solid rgba(215, 184, 147, 0.1);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  letter-spacing: 0.05rem;
  color: #fff8ef;
}

.logo img {
  width: 5rem;
  height: 5rem;
  object-fit: contain;
}

.nav-links {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 0.65rem 1rem;
}

.nav-links a {
  position: relative;

  opacity: 0.7;

  transition: 0.3s ease;
}

.nav-links a:hover {
  color: #d7b893;
  opacity: 1;
}

.nav-links a::after {
  content: "";

  position: absolute;
  left: 0;
  bottom: -6px;

  width: 0%;
  height: 1px;

  background: linear-gradient(90deg, #d7b893, rgba(127, 47, 39, 0.85));

  transition: 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.router-link-active {
  color: #d7b893;
  opacity: 1;
}

.router-link-active::after {
  width: 100%;
}

/* MOBILE */

@media (max-width: 768px) {

  .navbar {
    padding: 0.9rem 0.75rem;

    flex-direction: column;

    gap: 0.75rem;
    overflow: hidden;
  }

  .logo {
    max-width: 100%;
    font-size: clamp(1.25rem, 6.5vw, 1.65rem);
    text-align: center;
    white-space: normal;
  }

  .logo img {
    width: 3.75rem;
    height: 3.75rem;
  }

  .nav-links {
    width: min(100%, 22rem);

    justify-content: center;
    flex-wrap: wrap;

    gap: 0.55rem 0.75rem;
  }

  .nav-links a {
    font-size: 0.74rem;
  }

}

</style>
