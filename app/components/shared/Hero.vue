<template>
  <Section
    class="pt-50"
    container-class="relative p-12.5 bg-gray-11 rounded-[20px]"
  >
    <img
      src="~/assets/img/decorations/dot-mesh.webp"
      alt=""
      aria-hidden="true"
      class="absolute top-0 right-0 scale-x-[-1] h-100"
    >
    <div class="relative z-1 h-full">
      <div class="absolute z-2 w-198 p-20 bg-gray-10 rounded-l-[20px] rounded-br-[80px]">
        <span
          v-if="overline"
          class="inline-block mb-2 text-xl"
        >
          {{ $t(overline) }}
        </span>
        <h1 class="text-6xl leading-18 font-medium">
          <i18n-t :keypath="title" tag="span" scope="global">
            <template v-slot:highlight>
            <span class="text-primary">{{ $t(highlight) }}</span>
            </template>
          </i18n-t>
        </h1>
        <p class="mt-6 text-gray-70 font-light">{{ $t(description) }}</p>
      </div>
      <img
        :src="imageSrc"
        :alt="$t(imageAlt)"
        class="ml-auto"
      >
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '../layout/Section.vue';

interface Props {
  title: string;
  highlight: string;
  description: string;
  overline?: string;
  imageSrc: string;
  imageAlt: string;
}

const props = defineProps<Props>()
</script>
