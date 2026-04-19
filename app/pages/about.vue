<template>
  <main>
    <Hero
      overline="about.hero.overline"
      title="about.hero.title"
      highlight="about.hero.highlight"
      description="about.hero.description"
      :image-src="AboutHeroImg"
      image-alt="about.hero.image_alt"
    />
  </main>
</template>

<script setup lang="ts">
import Hero from '~/components/shared/Hero.vue';
import AboutHeroImg from '~/assets/img/hero/about.webp'
</script>
