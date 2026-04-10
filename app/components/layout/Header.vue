<template>
    <header class="fixed inset-0 z-50 mt-12.5 px-4">
        <div class="w-full max-w-400 mx-auto px-8.5 py-5 flex justify-between items-center gap-4 bg-gray-11 border border-gray-15 rounded-full">
            <img src="~/assets/img/logo.png" alt="YourBanK logo">
            <nav class="flex items-center gap-6">
                <NuxtLink
                    v-for="item in navigationItems"
                    :key="item.url"
                    :to="item.url"
                    active-class="px-6 py-3 bg-gray-15 rounded-full"
                >
                    {{ item.label }}
                </NuxtLink>
            </nav>
            <div>
                <NuxtLink to="/sign-up" class="mr-7.5">Sign Up</NuxtLink>
                <NuxtLink to="/sign-in" class="btn">Login</NuxtLink>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
type NavigationItem = {
    label: string
    url: string
}

const navigationItems: NavigationItem[] = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Careers",
        url: "/careers",
    },
    {
        label: "About",
        url: "/about",
    },
    {
        label: "Security",
        url: "/security",
    },
]
</script>