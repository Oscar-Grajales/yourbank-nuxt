<template>
  <div class="z-1 px-3.5 py-5 md:p-7.5 bg-gray-10 border border-gray-15 rounded-2xl">
    <GlowIconContainer class="mb-3 md:mb-6 mx-auto">
      <component :is="icon" />
    </GlowIconContainer>
    <p class="text-sm md:text-xl text-center">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
import GlowIconContainer from './GlowIconContainer.vue';

interface Props {
  label: string;
  icon: Component;
}

const props = defineProps<Props>()
</script>