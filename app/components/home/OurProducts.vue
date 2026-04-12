<template>
  <Section>
    <div class="flex items-end justify-between gap-10">
      <div class="max-w-228">
        <h2 class="mb-3.5 text-5xl font-medium">
          <i18n-t keypath="home.our_products.header.title" tag="span" scope="global">
            <template v-slot:highlight>
            <span class="text-primary">{{ $t('home.our_products.header.highlight') }}</span>
            </template>
          </i18n-t>
        </h2>
        <p class="font-light text-gray-70">{{ $t('home.our_products.header.description') }}</p>
      </div>
      <AudienceSwitcher v-model="audience" />
    </div>
    <div class="mt-25 grid grid-cols-3 divide-x divide-gray-15">
      <div
        v-for="product in productsIndividuals"
        :key="product.key"
        class="px-12.5 py-7 text-center"
      >
        <GlowIconContainer class="mb-7.5 mx-auto">
          <component :is="product.icon" />
        </GlowIconContainer>
        <p class="mb-5 text-2xl">{{ $t(`home.our_products.individuals.${product.key}.title`) }}</p>
        <p class="text-gray-70 font-light">{{ $t(`home.our_products.individuals.${product.key}.description`) }}</p>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import BanknotesIcon from '../icons/filled/BanknotesIcon.vue';
import BriefcaseIcon from '../icons/filled/BriefcaseIcon.vue';
import DownloadBoxIcon from '../icons/filled/DownloadBoxIcon.vue';
import Section from '../layout/Section.vue';
import AudienceSwitcher, { type Audience } from '../ui/AudienceSwitcher.vue';
import GlowIconContainer from '../ui/GlowIconContainer.vue';

const audience = ref<Audience>('individuals')

const productsIndividuals = [
  {
    icon: BriefcaseIcon,
    key: 'checking_accounts',
  },
  {
    icon: DownloadBoxIcon,
    key: 'savings_accounts',
  },
  {
    icon: BanknotesIcon,
    key: 'loans_mortgages',
  },
]

const productsBbusinesses = [
  {
    icon: '',
    key: 'checking_accounts',
  }
]
</script>
