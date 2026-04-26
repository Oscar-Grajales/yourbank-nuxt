<template>
    <section class="px-4 lg:px-40 pt-20 md:pt-37">
        <div class="max-w-400 mx-auto" :class="containerClass">
            <slot />
        </div>
    </section>
</template>

<script setup lang="ts">
interface Props {
    containerClass?: string;
}

const props = defineProps<Props>()
</script>