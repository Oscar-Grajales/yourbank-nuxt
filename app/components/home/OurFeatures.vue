<template>
  <Section>
    <SectionHeader :description="$t('home.our_features.header.description')" class="max-w-310">
      <template #title>
        <i18n-t keypath="home.our_features.header.title" tag="span" scope="global">
          <template v-slot:highlight>
            <span class="text-primary">{{ $t('home.our_features.header.highlight') }}</span>
          </template>
        </i18n-t>
      </template>
    </SectionHeader>
    <div class="mt-12.5 md:mt-20 flex flex-col md:flex-row gap-7.5">
      <div class="shrink-0 md:w-fit h-fit p-7.5 md:p-12.5 bg-gray-11 rounded-xl flex flex-col space-y-6">
        <button
          v-for="groupKey in groupKeys"
          :key="groupKey"
          class="btn btn-secondary"
          :class="{ 'text-primary': selectedGroup === groupKey }"
          @click="selectGroup(groupKey)"
        >
          {{ $t(`home.our_features.groups.${groupKey}.label`) }}
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-7.5">
        <FeatureCard
          v-for="feature in groups[selectedGroup].features"
          :key="`${selectedGroup}-${feature}`"
          :title="$t(`home.our_features.groups.${selectedGroup}.features.${feature}.title`)"
          :description="$t(`home.our_features.groups.${selectedGroup}.features.${feature}.description`)"
        />
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '../layout/Section.vue';
import SectionHeader from '../layout/SectionHeader.vue';
import FeatureCard from '../ui/FeatureCard.vue';

const groups = {
  online_banking: {
    features: [
      'account_access',
      'banking_app',
      'secure_transactions',
      'transfers',
    ],
  },
  financial_tools: {
    features: [],
  },
  customer_support: {
    features: [],
  }
}

type GroupKey = keyof typeof groups

const groupKeys = Object.keys(groups) as GroupKey[]

const selectedGroup = ref<GroupKey>('online_banking')

const selectGroup = (group: GroupKey) => {
  selectedGroup.value = group
}
</script>
