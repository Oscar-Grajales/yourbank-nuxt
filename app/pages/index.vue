<template>
    <main>
        <Hero />
        <OurProducts />
        <UseCases />
        <OurFeatures />
        <Faq />
    </main>
</template>

<script setup lang="ts">
import Faq from '~/components/home/Faq.vue';
import Hero from '~/components/home/Hero.vue';
import OurFeatures from '~/components/home/OurFeatures.vue';
import OurProducts from '~/components/home/OurProducts.vue';
import UseCases from '~/components/home/UseCases.vue';
</script>