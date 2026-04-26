<template>
  <div class="p-3 md:p-3.5 flex shrink-0 bg-gray-11 border border-gray-15 rounded-full capitalize">
    <button
      v-for="option in options"
      :key="option.key"
      class="btn px-6 py-3.5 capitalize cursor-pointer"
      :class="{ 'btn-primary': modelValue === option.value }"
      @click="select(option.value)"
    >
      {{ $t(option.key) }}
    </button>
  </div>
</template>

<script setup lang="ts">
export type Audience = 'individuals' | 'businesses'

interface Props {
  modelValue: Audience
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Audience): void
}>()

interface Option {
  key: string;
  value: Audience;
}

const options: Option[] = [
  { key: 'audience.individuals', value: 'individuals' },
  { key: 'audience.businesses', value: 'businesses' },
]

const select = (value: Audience) => {
  if (value !== props.modelValue) {
    emit('update:modelValue', value)
  }
}
</script>