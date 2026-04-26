<template>
	<header class="fixed inset-0 z-50 h-fit mt-10 md:mt-12 px-4 lg:px-40">
		<div class="w-full md:max-w-400 mx-auto px-6 md:px-8.5 py-3.5 md:py-5 flex justify-between items-center gap-4 bg-gray-11 border border-gray-15 rounded-full">
			<Logo />
			<nav class="hidden md:flex items-center gap-6">
				<NuxtLinkLocale v-for="item in navigation" :key="item.to" :to="item.to"
					active-class="px-6 py-3 bg-gray-15 rounded-full">
					{{ $t(item.label) }}
				</NuxtLinkLocale>
			</nav>
			<div class="hidden md:block">
				<NuxtLinkLocale to="/sign-up" class="mr-7.5">
					{{ $t('navigation.sign_up') }}
				</NuxtLinkLocale>
				<NuxtLinkLocale to="/sign-in" class="btn btn-primary">
					{{ $t('navigation.login') }}
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