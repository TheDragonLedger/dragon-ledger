<template>
  <main class="page">
    <section class="page-intro">
      <p class="subtitle">Emotional constellations</p>
      <h1>Characters</h1>
      <p>
        Portraits of the people behind the stories: their bonds, their scars,
        the lives they build, and the choices that slowly change them forever.
      </p>
    </section>

    <section class="content-grid character-grid">
      <ArchiveCard
        v-for="character in characters"
        :key="character.name"
        :title="character.name"
        :body="character.description"
        :image="character.portrait"
        :image-alt="`${character.name} portrait`"
      >
        <div class="keyword-row">
          <span v-for="keyword in character.keywords" :key="keyword">
            {{ keyword }}
          </span>
        </div>
        <blockquote>{{ character.quote }}</blockquote>
      </ArchiveCard>
    </section>

    <section class="section-heading">
      <p class="subtitle">Emilia's circle</p>
      <h2>Friends and Anchors</h2>
    </section>

    <section class="content-grid character-grid supporting-grid">
      <ArchiveCard
        v-for="character in emiliaCircle"
        :key="character.name"
        :title="character.name"
        :body="character.description"
        :image="character.portrait"
        :image-alt="`${character.name} portrait`"
      >
        <div class="keyword-row">
          <span v-for="keyword in character.keywords" :key="keyword">
            {{ keyword }}
          </span>
        </div>
        <blockquote>{{ character.quote }}</blockquote>
      </ArchiveCard>
    </section>

    <section class="section-heading">
      <p class="subtitle">Supporting characters</p>
      <h2>The Varelli Family</h2>
    </section>

    <section class="content-grid character-grid supporting-grid">
      <ArchiveCard
        v-for="character in supportingCharacters"
        :key="character.name"
        :title="character.name"
        :body="character.description"
        :image="character.portrait"
        :image-alt="`${character.name} portrait`"
      >
        <div class="keyword-row">
          <span v-for="keyword in character.keywords" :key="keyword">
            {{ keyword }}
          </span>
        </div>
        <blockquote>{{ character.quote }}</blockquote>
      </ArchiveCard>
    </section>

    <section class="section-heading">
      <p class="subtitle">Ash's family</p>
      <h2>The Valen Family</h2>
    </section>

    <section class="content-grid character-grid supporting-grid">
      <ArchiveCard
        v-for="character in valenFamily"
        :key="character.name"
        :title="character.name"
        :body="character.description"
        :image="character.portrait"
        :image-alt="`${character.name} portrait`"
      >
        <div class="keyword-row">
          <span v-for="keyword in character.keywords" :key="keyword">
            {{ keyword }}
          </span>
        </div>
        <blockquote>{{ character.quote }}</blockquote>
      </ArchiveCard>
    </section>

    <section class="section-heading">
      <p class="subtitle">Organization</p>
      <h2>Confluence</h2>
    </section>

    <section class="content-grid character-grid supporting-grid">
      <ArchiveCard
        v-for="character in confluenceMembers"
        :key="character.name"
        :title="character.name"
        :body="character.description"
        :image="character.portrait"
        :image-alt="`${character.name} portrait`"
      >
        <div class="keyword-row">
          <span v-for="keyword in character.keywords" :key="keyword">
            {{ keyword }}
          </span>
        </div>
        <blockquote>{{ character.quote }}</blockquote>
      </ArchiveCard>
    </section>
  </main>
</template>

<script setup>
import ArchiveCard from "../components/ArchiveCard.vue";
import {
  characters,
  confluenceMembers,
  emiliaCircle,
  supportingCharacters,
  valenFamily,
} from "../data/characters";
</script>
