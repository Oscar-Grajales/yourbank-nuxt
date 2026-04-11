<template>
    <Section class="relative">
        <img
            src="~/assets/img/decorations/dot-wave.webp"
            alt=""
            aria-hidden="true"
            class="pointer-events-none select-none absolute -top-27.5 -left-17.5"
        >
        <div>
            <div class="max-w-206">
                <div class="mb-5 w-fit flex items-center pl-3 pr-4 py-2.5 bg-gray-15 rounded-full">
                    <VerifiedIcon class="text-primary" />
                    <p class="ml-1.5 font-light">No LLC Required, No Credit Check.</p>
                </div>
                <h1 class="mb-4 font-medium text-5xl">
                    Welcome to YourBanK Empowering Your <span class="text-primary">Financial Journey</span>
                </h1>
                <p class="mb-12 font-light">
                    At YourBanK, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
                </p>
                <NuxtLink to="/sign-up" class="btn">Open Account</NuxtLink>
            </div>
        </div>
    </Section>
</template>

<script setup lang="ts">
import VerifiedIcon from '../icons/filled/VerifiedIcon.vue';
import Section from '../layout/Section.vue';
</script>