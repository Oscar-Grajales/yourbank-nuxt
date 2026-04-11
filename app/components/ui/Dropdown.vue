<template>
  <div class="inline-block">
    <button
      ref="triggerRef"
      class="flex items-center gap-2 cursor-pointer"
      @click.stop="toggle"
    >
      <slot name="trigger" :is-open="isOpen" />
    </button>

    <div
      ref="menuRef"
      :style="floatingStyles"
    >
      <transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="isOpen"
          class="z-50 w-48 overflow-hidden bg-gray-11 rounded-xl shadow-lg"
        >
          <slot :close="close" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '#imports'
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  type Placement,
} from '@floating-ui/vue'

interface Props {
  placement: Placement;
  offset: number;
}

const props = withDefaults(defineProps<Props>(), {
  placement: 'bottom-start',
  offset: 8,
});

const isOpen = ref<boolean>(false)

const triggerRef = ref<HTMLElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)

const { floatingStyles } = useFloating(triggerRef, menuRef, {
  placement: props.placement,
  middleware: [
    offset(props.offset),
    flip(),
    shift({ padding: 8 }),
  ],
  whileElementsMounted: autoUpdate,
})

const toggle = () => (isOpen.value = !isOpen.value)
const close = () => (isOpen.value = false)

onClickOutside(menuRef, (event: PointerEvent) => {
  // Prevent closing when clicking the trigger
  if (triggerRef.value?.contains(event.target as Node)) return

  close()
})
</script>