<template>
  <Section>
    <SectionHeader
      :description="$t('about.mission_vision.header.description')"
      class="max-w-7xl"
    >
      <template #title>
        <i18n-t keypath="about.mission_vision.header.title" tag="span" scope="global">
          <template v-slot:highlight>
            <span class="text-primary">{{ $t('about.mission_vision.header.highlight') }}</span>
          </template>
        </i18n-t>
      </template>
    </SectionHeader>
    <div class="mt-20 -space-y-25">
      <div class="flex items-center">
        <img
          src="~/assets/img/about/mission.webp"
          :alt="$t('about.mission_vision.mission.image_alt')"
        >
        <div class="pl-12.5 border-l border-primary">
          <h3 class="text-4xl font-medium">{{ $t('about.mission_vision.mission.title') }}</h3>
          <p class="mt-4 text-gray-70 font-light">{{ $t('about.mission_vision.mission.description') }}</p>
        </div>
      </div>
      <div class="flex items-center">
        <div class="pr-12.5 border-r border-primary">
          <h3 class="text-4xl font-medium">{{ $t('about.mission_vision.vision.title') }}</h3>
          <p class="mt-4 text-gray-70 font-light">{{ $t('about.mission_vision.vision.description') }}</p>
        </div>
        <img
          src="~/assets/img/about/vision.webp"
          :alt="$t('about.mission_vision.vision.image_alt')"
        >
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '../layout/Section.vue';
import SectionHeader from '../layout/SectionHeader.vue';
</script>