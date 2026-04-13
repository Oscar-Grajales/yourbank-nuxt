<template>
  <Section>
    <div class="flex items-end justify-between gap-10">
      <SectionHeader
        :description="$t('home.our_products.header.description')"
        class="max-w-228"
      >
        <template #title>
          <i18n-t keypath="home.our_products.header.title" tag="span" scope="global">
            <template v-slot:highlight>
              <span class="text-primary">{{ $t('home.our_products.header.highlight') }}</span>
            </template>
          </i18n-t>
        </template>
      </SectionHeader>
      <AudienceSwitcher v-model="audience" />
    </div>
    <div class="mt-25 grid grid-cols-3 divide-x divide-gray-15">
      <div
        v-for="product in individuals"
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
import SectionHeader from '../layout/SectionHeader.vue';
import AudienceSwitcher, { type Audience } from '../ui/AudienceSwitcher.vue';
import GlowIconContainer from '../ui/GlowIconContainer.vue';

const audience = ref<Audience>('individuals')

const individuals = [
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

const businesses = [
  {
    icon: '',
    key: 'checking_accounts',
  }
]
</script>
