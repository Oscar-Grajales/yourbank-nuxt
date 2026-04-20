<template>
  <Section>
    <SectionHeader
      :description="$t('security.protection.header.description')"
      class="max-w-7xl"
    >
      <template #title>
        <i18n-t keypath="security.protection.header.title" tag="span" scope="global">
          <template v-slot:highlight>
            <span class="text-primary">{{ $t('security.protection.header.highlight') }}</span>
          </template>
        </i18n-t>
      </template>
    </SectionHeader>
    <div class="mt-25 grid grid-cols-2 gap-7.5">
      <div
        v-for="feature in features"
        :key="feature.key"
        class="p-12.5 bg-gray-11 border border-gray-15 rounded-[20px]"
      >
        <div class="mb-6 flex items-center gap-5">
          <GlowIconContainer>
            <component :is="feature.icon" />
          </GlowIconContainer>
          <h3 class="text-2xl">{{ $t(`security.protection.features.${feature.key}.title`) }}</h3>
        </div>
        <p class="text-gray-70 font-light">{{ $t(`security.protection.features.${feature.key}.description`) }}</p>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import CurrencyDollarCircleIcon from '../icons/filled/CurrencyDollarCircleIcon.vue';
import SparklesIcon from '../icons/filled/SparklesIcon.vue';
import Square3StackIcon from '../icons/filled/Square3StackIcon.vue';
import SquaresPlusIcon from '../icons/filled/SquaresPlusIcon.vue';
import Section from '../layout/Section.vue';
import SectionHeader from '../layout/SectionHeader.vue';
import GlowIconContainer from '../ui/GlowIconContainer.vue';

const features = [
  {
    key: 'secure_platform',
    icon: SquaresPlusIcon,
  },
  {
    key: 'mfa',
    icon: Square3StackIcon,
  },
  {
    key: 'fraud_monitoring',
    icon: SparklesIcon,
  },
  {
    key: 'secure_app',
    icon: CurrencyDollarCircleIcon,
  },
]
</script>
