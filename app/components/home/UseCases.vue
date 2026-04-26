<template>
  <Section>
    <SectionHeader :description="$t('home.use_cases.header.description')">
      <template #title>
        <span class="text-primary">{{ $t('home.use_cases.header.title') }}</span>
      </template>
    </SectionHeader>
    <div class="mt-15 md:mt-20 grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-25 gap-y-15">
      <div class="relative p-5 md:p-12.5 grid grid-cols-2 gap-5 bg-gray-11 rounded-[20px]">
        <img
          src="~/assets/img/decorations/dot-mesh.webp"
          alt=""
          aria-hidden="true"
          class="absolute top-0 left-0 w-30 md:w-auto"
        >
        <UseCaseCard
          v-for="useCase in individuals.cases"
          :key="useCase.key"
          :label="$t(`home.use_cases.individuals.cases.${useCase.key}`)"
          :icon="useCase.icon"
        />
      </div>
      <div class="text-center md:text-left">
        <h3 class="mb-3.5 text-xl md:text-3xl font-medium">{{ $t('home.use_cases.individuals.title') }}</h3>
        <p class="text-gray-70 font-light">{{ $t('home.use_cases.individuals.description') }}</p>
        <div class="py-12.5 md:py-15.5 grid grid-cols-1 md:grid-cols-3 divide-x divide-gray-15">
          <Stat
            v-for="(stat, index) in individuals.stats"
            :key="stat.key"
            :value="$t(`home.use_cases.individuals.stats.${stat.key}.value`)"
            :label="$t(`home.use_cases.individuals.stats.${stat.key}.label`)"
          />
        </div>
        <NuxtLink class="btn btn-secondary">{{ $t('home.use_cases.cta_label') }}</NuxtLink>
      </div>
    </div>
    <div class="mt-20 grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-25 gap-y-15">
      <div class="text-center md:text-left">
        <h3 class="mb-3.5 text-xl md:text-3xl font-medium">{{ $t('home.use_cases.businesses.title') }}</h3>
        <p class="text-gray-70 font-light">{{ $t('home.use_cases.businesses.description') }}</p>
        <div class="px-12 md:px-0 py-12.5 md:py-15.5 grid grid-cols-1 md:grid-cols-3 max-md:divide-y md:divide-x divide-gray-15">
          <Stat
            v-for="(stat, index) in businesses.stats"
            :key="stat.key"
            :value="$t(`home.use_cases.businesses.stats.${stat.key}.value`)"
            :label="$t(`home.use_cases.businesses.stats.${stat.key}.label`)"
          />
        </div>
        <NuxtLink class="btn btn-secondary">{{ $t('home.use_cases.cta_label') }}</NuxtLink>
      </div>
      <div class="relative p-12.5 grid grid-cols-2 gap-5 bg-gray-11 rounded-[20px]">
        <img
          src="~/assets/img/decorations/dot-mesh.webp"
          alt=""
          aria-hidden="true"
          class="absolute top-0 right-0 scale-x-[-1]"
        >
        <UseCaseCard
          v-for="useCase in businesses.cases"
          :key="useCase.key"
          :label="$t(`home.use_cases.businesses.cases.${useCase.key}`)"
          :icon="useCase.icon"
        />
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import BankIcon from '../icons/filled/BankIcon.vue';
import BanknotesIcon from '../icons/filled/BanknotesIcon.vue';
import BuildingsIcon from '../icons/filled/BuildingsIcon.vue';
import CurrencyDollarCircleIcon from '../icons/filled/CurrencyDollarCircleIcon.vue';
import HandMoneyBagIcon from '../icons/filled/HandMoneyBagIcon.vue';
import OpenBookIcon from '../icons/filled/OpenBookIcon.vue';
import PresentationChartBarIcon from '../icons/filled/PresentationChartBarIcon.vue';
import SupportMoneyIcon from '../icons/filled/SupportMoneyIcon.vue';
import Section from '../layout/Section.vue';
import SectionHeader from '../layout/SectionHeader.vue';
import Stat from '../ui/Stat.vue';
import UseCaseCard from '../ui/UseCaseCard.vue';

const individuals = {
  stats: [
    {
      key: 'retirement',
    },
    {
      key: 'debt',
    },
    {
      key: 'burden',
    },
  ],
  cases: [
    {
      key: "managing_personal_finances",
      icon: HandMoneyBagIcon,
    },
    {
      key: "saving_for_future",
      icon: SupportMoneyIcon,
    },
    {
      key: "homeownership",
      icon: BankIcon,
    },
    {
      key: "education_funding",
      icon: OpenBookIcon,
    },
  ]
}

const businesses = {
  stats: [
    {
      key: 'cash_flow',
    },
    {
      key: 'expansion',
    },
    {
      key: 'payroll',
    },
  ],
  cases: [
    {
      key: "startups_entrepreneurs",
      icon: BuildingsIcon,
    },
    {
      key: "cash_flow",
      icon: BanknotesIcon,
    },
    {
      key: "expansion",
      icon: PresentationChartBarIcon,
    },
    {
      key: "payment_solutions",
      icon: CurrencyDollarCircleIcon,
    },
  ]
}
</script>
