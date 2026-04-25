<template>
  <input
    :type="type"
    class="p-6 bg-gray-10 border border-gray-15 rounded-full placeholder:font-light placeholder:text-gray-30 outline-none focus:ring-1 focus:ring-primary"
  >
</template>

<script setup lang="ts">
interface Props {
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})
</script>