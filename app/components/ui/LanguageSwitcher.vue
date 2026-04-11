<template>
  <Dropdown
    placement="bottom-end"
    :offset="40"
  >
    <template #trigger="{ isOpen }">
      <span class="uppercase">{{ locale }}</span>
      <ChevronDownIcon class="size-5 transition-all" :class="{ 'rotate-180': isOpen }" />
    </template>

    <template #default="{ close }">
      <button
        v-for="locale in locales"
        @click="selectLocale(locale.code); close()"
        class="w-full text-left px-4 py-2 hover:bg-gray-15 cursor-pointer"
      >
        {{ locale.name }}
      </button>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import ChevronDownIcon from '../icons/outlined/ChevronDownIcon.vue';
import Dropdown from './Dropdown.vue';

type Locale = 'en' | 'es'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath();

const selectLocale = (locale: Locale) => {
  return navigateTo(switchLocalePath(locale));
}
</script>