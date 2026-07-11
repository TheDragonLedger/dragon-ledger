<template>
  <main class="page realm-detail-page">
    <section v-if="realm" class="page-intro">
      <p class="subtitle">Realms and heraldry</p>
      <h1>{{ realm.name }}</h1>
      <p>{{ realm.subtitle }}</p>
      <div class="realm-motto realm-motto-pair">
        <span class="realm-motto-original">{{ realm.motto.original }}</span>
        <span class="realm-motto-translation">{{ realm.motto.translation }}</span>
      </div>
    </section>

    <section v-else class="page-intro">
      <p class="subtitle">Realms and heraldry</p>
      <h1>Realm not found</h1>
      <p>This record has not been added to the archive yet.</p>
    </section>

    <router-link class="back-link" to="/archive/realms-heraldry">
      Back to Realms & Heraldry
    </router-link>

    <template v-if="realm">
      <section class="realm-detail-hero" aria-label="Realm overview">
        <ArchiveCard
          eyebrow="Realm overview"
          :title="realm.name"
          :body="realm.introduction"
          :image="realm.image"
          :image-alt="`${realm.name} landscape`"
        />

        <ArchiveCard
          eyebrow="Atlas reference"
          title="Realm Map"
          :body="[
            `A closer view of ${realm.name}'s cities, roads, coastlines, and surrounding geography.`,
          ]"
          :image="realm.map"
          :image-alt="`${realm.name} map`"
          image-variant="map"
        />
      </section>

      <section class="realm-detail-grid" aria-label="Realm details">
        <ArchiveCard
          eyebrow="Inner character"
          title="The Soul of the Realm"
          :body="realm.soul"
        />

        <ArchiveCard
          :eyebrow="realm.government.label"
          :title="realm.government.title"
          :body="realm.government.body"
        >
          <ul class="realm-entry-list">
            <li v-for="entry in realm.government.entries" :key="entry.name">
              <strong>{{ entry.name }}</strong>
              <span>{{ entry.description }}</span>
            </li>
          </ul>
        </ArchiveCard>

        <ArchiveCard
          eyebrow="Heraldry and symbols"
          :title="realm.heraldry.title"
          :body="realm.heraldry.body"
        >
          <div class="realm-chip-row" aria-label="Heraldic motifs">
            <span v-for="motif in realm.heraldry.motifs" :key="motif">
              {{ motif }}
            </span>
          </div>
        </ArchiveCard>

        <ArchiveCard
          v-if="realm.symbols?.length"
          eyebrow="Symbol pieces"
          title="Realm Emblems"
          :body="[
            'Heraldic pieces, formal marks, and visual symbols connected to the realm. These notes can grow as the archive becomes more complete.',
          ]"
        >
          <div class="realm-symbol-grid" aria-label="Realm emblems">
            <article
              v-for="symbol in realm.symbols"
              :key="symbol.title"
              class="realm-symbol-card"
            >
              <button
                class="realm-symbol-image-button"
                type="button"
                :aria-label="`Open ${symbol.title} image`"
                @click="openSymbol(symbol, $event)"
              >
                <img
                  :src="symbol.image"
                  :alt="symbol.title"
                  class="realm-symbol-image"
                  loading="lazy"
                />
              </button>
              <p class="card-eyebrow">{{ symbol.label }}</p>
              <h3>{{ symbol.title }}</h3>
              <p>{{ symbol.description }}</p>
            </article>
          </div>
        </ArchiveCard>

        <ArchiveCard
          eyebrow="Mottos and language"
          title="Words the Realm Remembers"
          :body="[
            'Small phrases, public sayings, and symbolic language connected to the realm and its identity.',
          ]"
        >
          <ul class="realm-entry-list">
            <li v-for="phrase in realm.language" :key="phrase">
              <span>{{ phrase }}</span>
            </li>
          </ul>
        </ArchiveCard>

        <ArchiveCard
          eyebrow="Connected atlas entries"
          title="Places Within the Realm"
          :body="[
            'Cities, geography, institutions, and landmarks that belong to the wider atlas side of the world.',
          ]"
        >
          <div class="realm-place-links">
            <router-link
              v-for="place in realm.places"
              :key="place"
              :to="realm.placesPath"
            >
              {{ place }}
            </router-link>
          </div>
        </ArchiveCard>
      </section>

      <Teleport to="body">
        <div
          v-if="activeSymbol"
          class="image-lightbox"
          role="dialog"
          aria-modal="true"
          :aria-label="`${activeSymbol.title} image preview`"
          @keydown.esc="closeSymbol"
          @click.self="closeSymbol"
        >
          <button
            ref="closeButton"
            class="image-lightbox-close"
            type="button"
            aria-label="Close image preview"
            @click="closeSymbol"
          >
            Close
          </button>
          <img :src="activeSymbol.image" :alt="activeSymbol.title" />
        </div>
      </Teleport>
    </template>
  </main>
</template>

<script setup>
import { computed, nextTick, ref } from "vue";
import { useRoute } from "vue-router";

import ArchiveCard from "../components/ArchiveCard.vue";
import { getRealmHeraldry } from "../data/realmsHeraldry";

const route = useRoute();
const realm = computed(() => getRealmHeraldry(route.params.slug));
const activeSymbol = ref(null);
const closeButton = ref(null);
const symbolTrigger = ref(null);

async function openSymbol(symbol, event) {
  symbolTrigger.value = event.currentTarget;
  activeSymbol.value = symbol;
  await nextTick();
  closeButton.value?.focus();
}

async function closeSymbol() {
  activeSymbol.value = null;
  await nextTick();
  symbolTrigger.value?.focus();
}
</script>
