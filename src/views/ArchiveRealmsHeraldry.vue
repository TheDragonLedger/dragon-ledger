<template>
  <main class="page">
    <section class="page-intro">
      <p class="subtitle">Realms and heraldry</p>
      <h1>Realms & Heraldry</h1>
      <p>
        The public faces of Elaria, Virekhal, and Tharvane: their governments,
        mottos, symbols, and the traditions that shape how each realm understands
        power, duty, and belonging.
      </p>
    </section>

    <router-link class="back-link" to="/archive">Back to The Archive</router-link>

    <section class="realm-overview-grid" aria-label="Realm heraldry entries">
      <router-link
        v-for="realm in realmsHeraldry"
        :key="realm.slug"
        class="card-link realm-card-link"
        :to="`/archive/realms-heraldry/${realm.slug}`"
      >
        <article class="archive-card">
          <img
            class="realm-card-image"
            :src="realm.image"
            :alt="`${realm.name} landscape`"
          />
          <p class="card-eyebrow">{{ realm.subtitle }}</p>
          <h2>{{ realm.name }}</h2>
          <div class="realm-motto-pair">
            <span class="realm-motto-original">{{ realm.motto.original }}</span>
            <span class="realm-motto-translation">{{ realm.motto.translation }}</span>
          </div>
          <div class="card-body">
            <p>{{ realm.introduction[0] }}</p>
          </div>
          <div class="realm-card-footer" aria-hidden="true">
            Enter the realm
          </div>
        </article>
      </router-link>
    </section>
  </main>
</template>

<script setup>
import { realmsHeraldry } from "../data/realmsHeraldry";
</script>
