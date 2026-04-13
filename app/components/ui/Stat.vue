<template>
  <div class="px-4 text-center">
    <p class="text-6xl leading-20 text-primary font-medium">{{ value }}</p>
    <p class="mt-1 text-gray-70 font-light">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  value: string;
  label: string;
}

const props = defineProps<Props>()
</script>