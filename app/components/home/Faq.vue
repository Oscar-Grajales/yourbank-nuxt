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
    <div class="mt-12.5 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-7.5">
      <div
        v-for="item in items"
        :key="item"
        class="p-7.5 md:p-12.5 border border-gray-15 rounded-xl space-y-5 md:space-y-7.5"
      >
        <h4 class="text-base md:text-xl font-medium">{{ $t(`home.faq.items.${item}.question`) }}</h4>
        <hr class="text-gray-15">
        <p class="text-gray-70 font-light">{{ $t(`home.faq.items.${item}.answer`) }}</p>
      </div>
    </div>
    <div class="relative flex justify-center">
      <button class="z-1 btn btn-secondary">
        {{ $t('home.faq.load_all') }}
      </button>

      <div class="absolute bottom-0 w-full h-100 bg-linear-to-b from-transparent to-gray-10"></div> 
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
