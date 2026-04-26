<template>
  <div class="p-7.5 md:p-12.5 bg-gray-11 border border-gray-15 rounded-xl">
    <div class="mb-5 md:mb-12 flex justify-between items-center gap-5">
      <h3 class="text-base md:text-[22px]">{{ title }}</h3>
      <NuxtLink to="/" class="text-primary">
        <ArrowUpRightIcon class="size-6 md:size-8.5" />
      </NuxtLink>
    </div>
    <p class="text-gray-70 font-light">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import ArrowUpRightIcon from '../icons/outlined/ArrowUpRightIcon.vue';

interface Props {
  title: string;
  description: string;
}

const props = defineProps<Props>()
</script>
