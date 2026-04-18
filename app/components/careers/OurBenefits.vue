<template>
  <Section>
    <SectionHeader
      :description="$t('careers.our_benefits.header.description')"
      class="max-w-7xl"
    >
      <template #title>
        <i18n-t keypath="careers.our_benefits.header.title" tag="span" scope="global">
          <template v-slot:highlight>
            <span class="text-primary">{{ $t('careers.our_benefits.header.highlight') }}</span>
          </template>
        </i18n-t>
      </template>
    </SectionHeader>
    <div class="mt-20 grid grid-cols-2 gap-20">
      <div
        v-for="(benefit, index) in benefits"
        :key="benefit.key"
        class="p-12.5 bg-gray-11 border border-gray-15 rounded-[20px]"
        :class="{
          'rounded-tl-[50px] rounded-br-[50px]': index % 4 == 0 || index % 4 == 3,
          'rounded-tr-[50px] rounded-bl-[50px]': index % 4 == 1 || index % 4 == 2,
        }"
      >
        <div class="flex items-center gap-5">
          <GlowIconContainer>
            <component :is="benefit.icon" />
          </GlowIconContainer>
          <h3 class="text-2xl">{{ $t(`careers.our_benefits.benefits.${benefit.key}.title`) }}</h3>
        </div>
        <p class="mt-7 text-gray-70 font-light">{{ $t(`careers.our_benefits.benefits.${benefit.key}.description`) }}</p>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import BriefcaseIcon from '../icons/filled/BriefcaseIcon.vue';
import InboxStackIcon from '../icons/filled/InboxStackIcon.vue';
import LightBulbIcon from '../icons/filled/LightBulbIcon.vue';
import PresentationChartBarIcon from '../icons/filled/PresentationChartBarIcon.vue';
import Section from '../layout/Section.vue';
import SectionHeader from '../layout/SectionHeader.vue';
import GlowIconContainer from '../ui/GlowIconContainer.vue';

const benefits = [
  {
    key: "competitive_compensation",
    icon: PresentationChartBarIcon,
  },
  {
    key: "health_wellness",
    icon: LightBulbIcon,
  },
  {
    key: "retirement_planning",
    icon: BriefcaseIcon,
  },
  {
    key: "worklife_balance",
    icon: InboxStackIcon,
  },
]
</script>
