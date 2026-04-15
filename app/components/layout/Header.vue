<template>
    <header class="fixed inset-0 z-50 h-fit mt-12 px-40">
        <div class="w-full max-w-400 mx-auto px-8.5 py-5 flex justify-between items-center gap-4 bg-gray-11 border border-gray-15 rounded-full">
            <Logo />
            <nav class="flex items-center gap-6">
                <NuxtLinkLocale
                    v-for="item in navigation"
                    :key="item.to"
                    :to="item.to"
                    active-class="px-6 py-3 bg-gray-15 rounded-full"
                >
                    {{ $t(item.label) }}
                </NuxtLinkLocale>
            </nav>
            <div>
                <NuxtLinkLocale
                    to="/sign-up"
                    class="mr-7.5"
                >
                    {{ $t('sign_up') }}
                </NuxtLinkLocale>
                <NuxtLinkLocale
                    to="/sign-in"
                    class="btn btn-primary"
                >
                    {{ $t('login') }}
                </NuxtLinkLocale>
                <LanguageSwitcher class="ml-4" />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import LanguageSwitcher from '../ui/LanguageSwitcher.vue'
import Logo from '../ui/Logo.vue'
import { navigation } from '~/constants/navigation'
</script>