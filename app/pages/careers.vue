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
    <OurBenefits />
    <JobOpenings />
    <CTA
      title="careers.cta.title"
      highlight="careers.cta.highlight"
      description="careers.cta.description"
      ctaLabel="careers.cta.label"
      ctaLink="/careers#jobs"
    />
  </main>
</template>

<script setup lang="ts">
import Hero from '~/components/shared/Hero.vue';
import CareersHeroImg from '~/assets/img/hero/careers.webp'
import OurValues from '~/components/careers/OurValues.vue';
import OurBenefits from '~/components/careers/OurBenefits.vue';
import JobOpenings from '~/components/careers/JobOpenings.vue';
import CTA from '~/components/shared/CTA.vue';
</script>
