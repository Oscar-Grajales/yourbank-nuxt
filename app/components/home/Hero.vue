<template>
	<Section class="relative overflow-clip pt-40 lg:pt-75">
		<img
			src="~/assets/img/decorations/dot-wave.webp"
			alt=""
			aria-hidden="true"
			class="pointer-events-none select-none absolute -top-8 lg:-top-27.5 -left-8 lg:-left-17.5"
		>
		<div class="flex flex-col md:flex-row gap-x-15 gap-y-20">
			<div class="md:max-w-206 text-center md:text-left">
				<div class="mb-5 w-fit mx-auto md:mx-0 flex items-center pl-3 pr-4 py-2 md:py-2.5 bg-gray-15 rounded-full">
					<VerifiedIcon class="text-primary" />
					<p class="ml-1.5 max-md:text-xs font-light">{{ $t('home.hero.badge') }}</p>
				</div>
				<h1 class="mb-4 font-medium text-3xl md:text-5xl leading-12 md:leading-18">
					{{ $t('home.hero.title.line1') }}
					<br>
					<i18n-t keypath="home.hero.title.line2" tag="span" scope="global">
						<template v-slot:highlight>
							<span class="text-primary">{{ $t('home.hero.title.highlight') }}</span>
						</template>
					</i18n-t>
				</h1>
				<p class="mb-12 text-white-90 font-light">{{ $t('home.hero.description') }}</p>
				<NuxtLink to="/sign-up" class="btn btn-primary capitalize">{{ $t('home.hero.cta.primary') }}</NuxtLink>
			</div>
			<BankingPreview />
		</div>
	</Section>
</template>

<script setup lang="ts">
import VerifiedIcon from '../icons/filled/VerifiedIcon.vue';
import Section from '../layout/Section.vue';
import BankingPreview from '../ui/BankingPreview.vue';
</script>
