<template>
  <Section>
    <SectionHeader
      :description="$t('careers.our_values.header.description')"
      class="max-w-7xl"
    >
      <template #title>
        <i18n-t keypath="careers.our_values.header.title" tag="span" scope="global">
          <template v-slot:highlight>
            <span class="text-primary">{{ $t('careers.our_values.header.highlight') }}</span>
          </template>
        </i18n-t>
      </template>
    </SectionHeader>
    <div class="mt-20 grid grid-cols-2 gap-20">
      <div
        v-for="value in values"
        :key="value"
        class="pl-7.5 border-l border-primary"
      >
        <h3 class="text-gray-30 text-6xl font-medium">{{ $t(`careers.our_values.values.${value}.title`) }}</h3>
        <p class="mt-7 text-gray-70 font-light">{{ $t(`careers.our_values.values.${value}.description`) }}</p>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '../layout/Section.vue';
import SectionHeader from '../layout/SectionHeader.vue';

const values = [
  "integrity",
  "customer",
  "collaboration",
  "innovation",
]
</script>
