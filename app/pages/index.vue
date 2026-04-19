<template>
    <main>
        <Hero />
        <OurProducts />
        <UseCases />
        <OurFeatures />
        <Faq />
        <OurTestimonials />
        <CTA
          title="home.cta.title"
          highlight="home.cta.highlight"
          description="home.cta.description"
          ctaLabel="home.cta.label"
          ctaLink="/sign-up"
        />
    </main>
</template>

<script setup lang="ts">
import Faq from '~/components/home/Faq.vue';
import Hero from '~/components/home/Hero.vue';
import OurFeatures from '~/components/home/OurFeatures.vue';
import OurProducts from '~/components/home/OurProducts.vue';
import OurTestimonials from '~/components/home/OurTestimonials.vue';
import UseCases from '~/components/home/UseCases.vue';
import CTA from '~/components/shared/CTA.vue';
</script>