<template>
  <Section>
    <SectionHeader
      :description="$t('careers.jobs.header.description')"
      class="max-w-7xl"
    >
      <template #title>
        <i18n-t keypath="careers.jobs.header.title" tag="span" scope="global">
          <template v-slot:highlight>
            <span class="text-primary">{{ $t('careers.jobs.header.highlight') }}</span>
          </template>
        </i18n-t>
      </template>
    </SectionHeader>
    <div class="mt-20 grid grid-cols-2 gap-7.5">
      <div
        v-for="job in jobs"
        class="p-12.5 bg-gray-11 border border-gray-15 rounded-2xl"
      >
        <h3 class="text-3xl font-semibold">{{ rt(job.title) }}</h3>
        <div class="mt-4 flex flex-wrap gap-2.5">
          <Chip>{{ $t('careers.jobs.job.location') }}: {{ rt(job.location) }}</Chip>
          <Chip>{{ $t('careers.jobs.job.department') }}: {{ rt(job.department) }}</Chip>
        </div>
        <div class="mt-12.5">
          <h4 class="text-2xl font-semibold">{{ $t('careers.jobs.job.about') }}</h4>
          <p class="mt-5 text-gray-70 font-light">{{ rt(job.description) }}</p>
        </div>
        <div class="mt-12.5">
          <h4 class="text-2xl font-semibold">{{ $t('careers.jobs.job.requirements') }}</h4>
          <ul class="mt-5 ml-5 list-disc space-y-4">
            <li
              v-for="requirement in job.requirements"
              :key="rt(requirement)"
              class="text-gray-70 font-light"
            >
              {{ rt(requirement) }}
            </li>
          </ul>
        </div>
        <div class="mt-12.5">
          <button class="btn btn-primary">
            {{ $t('careers.jobs.job.cta.label') }}
          </button>
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

interface Job {
  title: string;
  location: string;
  department: string;
  description: string;
  requirements: string[];
}

const jobs = computed<Job[]>(() =>
  tm('careers.jobs.items') as Job[]
)
</script>
