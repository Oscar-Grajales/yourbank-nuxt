<template>
  <main>
    <Hero
      title="careers.hero.title"
      highlight="careers.hero.highlight"
      description="careers.hero.description"
      :image-src="CareersHeroImg"
      image-alt="careers.hero.image_alt"
    />
    <OurValues />
  </main>
</template>

<script setup lang="ts">
import Hero from '~/components/shared/Hero.vue';
import CareersHeroImg from '~/assets/img/hero/careers.webp'
import OurValues from '~/components/careers/OurValues.vue';
</script>
