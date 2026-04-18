<template>
  <Section>
    <SectionHeader :description="$t('home.faq.header.description')">
      <template #title>
        <i18n-t keypath="home.faq.header.title" tag="span" scope="global">
          <template v-slot:highlight>
            <span class="text-primary">{{ $t('home.faq.header.highlight') }}</span>
          </template>
        </i18n-t>
      </template>
    </SectionHeader>
    <div class="mt-20 grid grid-cols-2 gap-7.5">
      <div
        v-for="item in items"
        :key="item"
        class="p-12.5 border border-gray-15 rounded-xl space-y-7.5"
      >
        <h4 class="text-xl font-medium">{{ $t(`home.faq.items.${item}.question`) }}</h4>
        <hr class="text-gray-15">
        <p class="text-gray-70 font-light">{{ $t(`home.faq.items.${item}.answer`) }}</p>
      </div>
    </div>
    <div class="flex justify-center">
      <button class="btn btn-secondary">
        {{ $t('home.faq.load_all') }}
      </button>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '../layout/Section.vue';
import SectionHeader from '../layout/SectionHeader.vue';

const items = [
  "open_account",
  "documents_for_loan",
  "online_access",
  "security",
]
</script>
