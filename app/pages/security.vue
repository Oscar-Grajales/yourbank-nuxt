<template>
  <main>
    <Hero
      title="security.hero.title"
      highlight="security.hero.highlight"
      description="security.hero.description"
      :image-src="SecurityHeroImg"
      image-alt="security.hero.image_alt"
    />
    <Protection />
  </main>
</template>

<script setup lang="ts">
import Hero from '~/components/shared/Hero.vue';
import SecurityHeroImg from '~/assets/img/hero/security.webp'
import Protection from '~/components/security/Protection.vue';
</script>
