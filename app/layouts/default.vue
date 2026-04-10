<template>
    <div>
        <Header />
        <slot />
    </div>
</template>

<script setup lang="ts">
import Header from '~/components/layout/Header.vue';
</script>