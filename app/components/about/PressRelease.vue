<template>
  <Section>
    <SectionHeader
      :description="$t('about.press_release.header.description')"
      class="max-w-7xl"
    >
      <template #title>
        <i18n-t keypath="about.press_release.header.title" tag="span" scope="global">
          <template v-slot:highlight>
            <span class="text-primary">{{ $t('about.press_release.header.highlight') }}</span>
          </template>
        </i18n-t>
      </template>
    </SectionHeader>
    <div class="mt-20 grid grid-cols-2 gap-7.5">
      <div
        v-for="pressRelease in pressReleases"
        
        class="p-7.5 bg-gray-11 border border-gray-15 rounded-4xl"
      >
        <img
          src="~/assets/img/press_release.webp"
          :alt="rt(pressRelease.title)"
          class=""
        >
        <div class="mt-12 px-7.5">
          <h3 class="text-2xl">{{ rt(pressRelease.title) }}</h3>
          <div class="mt-5 flex gap-2.5">
            <Chip>{{ $t('about.press_release.release.location') }}: {{ rt(pressRelease.location) }}</Chip>
            <Chip>{{ $t('about.press_release.release.date') }}: {{ rt(pressRelease.date) }}</Chip>
          </div>
          <p class="pt-7.5 text-gray-70 font-light">{{ rt(pressRelease.description) }}</p>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '../layout/Section.vue';
import SectionHeader from '../layout/SectionHeader.vue';
import Chip from '../ui/Chip.vue';

const { tm, rt } = useI18n()

interface PressRelease {
  title: string;
  location: string;
  date: string;
  description: string;
}

const pressReleases = computed<PressRelease[]>(() =>
  tm('about.press_release.items') as PressRelease[]
)
</script>
