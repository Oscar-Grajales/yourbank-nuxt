<template>
  <div class="text-center md:text-left">
    <h2 class="mb-3.5 text-[28px] md:text-5xl font-medium">
      <slot name="title">
        {{ title }}
      </slot>
    </h2>
    <p class="font-light text-gray-70">
      <slot name="description">
        {{ description }}
      </slot>
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  description?: string;
}

const props = defineProps<Props>();
</script>