<template>
  <div class="p-12.5 bg-gray-11 border border-gray-15 rounded-xl">
    <div class="mb-12 flex justify-between items-center gap-5">
      <h3 class="text-[22px]">{{ title }}</h3>
      <NuxtLink to="/" class="text-primary">
        <ArrowUpRightIcon />
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
