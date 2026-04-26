<template>
	<footer class="mt-20 md:mt-37 px-4 lg:px-40 pt-12.5 md:pt-25 pb-7.5 md:pb-12.5 bg-gray-11">
		<div class="max-w-400 mx-auto flex flex-col justify-center items-center space-y-7.5 md:space-y-12.5">
			<Logo class="h-8.5" />
			<nav class="flex items-center gap-7">
				<NuxtLinkLocale v-for="item in navigation" :key="item.to" :to="item.to">
					{{ $t(item.label) }}
				</NuxtLinkLocale>
			</nav>
			<hr class="w-full text-gray-15">
			<div class="flex flex-wrap justify-center items-center gap-5">
				<a v-for="contact in contacts" :key="contact.key" :href="contact.href"
					:target="contact?.openInNewTab ? '_blank' : '_self'" class="inline-flex items-center gap-1.5">
					<component :is="contact.icon" class="text-primary" />
					{{ contact.label }}
				</a>
			</div>
			<hr class="w-full text-gray-15">
			<div
				class="w-full p-6 md:p-4 flex flex-col md:flex-row justify-between items-center gap-5 bg-gray-10 border border-gray-15 rounded-xl md:rounded-full text-gray-70 font-light">
				<div class="flex gap-3.5">
					<IconContainer v-for="social in socialLinks" :key="social.url" class="size-14">
						<component :is="social.icon" class="size-6" />
					</IconContainer>
				</div>
				<span>YourBanK. All Rights Reserved</span>
				<div class="mr-3">
					<NuxtLink>Privacy Policy</NuxtLink>
					<span class="mx-3 border-r border-gray-70"></span>
					<NuxtLink>Terms of Service</NuxtLink>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import EnvelopeIcon from '../icons/filled/EnvelopeIcon.vue';
import FacebookIcon from '../icons/filled/FacebookIcon.vue';
import LinkedInIcon from '../icons/filled/LinkedInIcon.vue';
import MapMarkerIcon from '../icons/filled/MapMarkerIcon.vue';
import PhoneIcon from '../icons/filled/PhoneIcon.vue';
import XIcon from '../icons/filled/XIcon.vue';
import IconContainer from '../ui/IconContainer.vue';
import Logo from '../ui/Logo.vue';
import { navigation } from '~/constants/navigation'

const contacts = [
	{
		key: 'email',
		label: 'hello@yourbank.com',
		href: 'mailto:hello@yourbank.com',
		icon: EnvelopeIcon,
	},
	{
		key: 'phone',
		label: '+52 33313 23 2309',
		href: 'tel:+52 33313 23 2309',
		icon: PhoneIcon,
	},
	{
		key: 'location',
		label: 'Somewhere in the World',
		href: 'https://maps.app.goo.gl/KSH9VzXwBqQ2FMnV8',
		icon: MapMarkerIcon,
		openInNewTab: true,
	},
]

const socialLinks = [
	{
		url: 'https://www.facebook.com/',
		icon: FacebookIcon,
	},
	{
		url: 'https://x.com/',
		icon: XIcon,
	},
	{
		url: 'https://www.linkedin.com/',
		icon: LinkedInIcon,
	},
]
</script>
