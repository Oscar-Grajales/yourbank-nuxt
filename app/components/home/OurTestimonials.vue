<template>
  <Section>
    <div class="flex items-end justify-between gap-10">
      <SectionHeader
        :description="$t('home.testimonials.header.description')"
        class="max-w-228"
      >
        <template #title>
          <i18n-t keypath="home.testimonials.header.title" tag="span" scope="global">
            <template v-slot:highlight>
              <span class="text-primary">{{ $t('home.testimonials.header.highlight') }}</span>
            </template>
          </i18n-t>
        </template>
      </SectionHeader>
      <AudienceSwitcher v-model="audience" />
    </div>
    <div class="relative h-full mt-25">
      <ClientOnly>
        <swiper-container
          ref="containerRef"
          :init="false"
          class="h-full px-20"
        >
          <swiper-slide
            v-for="testimonial in testimonials[audience]"
            :key="testimonial"
          >
            <div class="text-center px-10">
              <div class="flex items-center gap-5">
                <div class="grow h-px bg-gray-15"></div>
                <QuotesIcon />
                <div class="grow h-px bg-gray-15"></div>
              </div>
              <p class="my-12">{{ $t(`home.testimonials.${audience}.${testimonial}.text`) }}</p>
              <span class="text-primary font-medium">{{ $t(`home.testimonials.${audience}.${testimonial}.name`) }}</span>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>

      <button 
        class="slider-btn absolute z-2 top-1/2 left-0 -translate-y-1/2"
        @click="swiper.prev()"
      >
        <ArrowLeftIcon />
      </button>

      <button
        class="slider-btn absolute z-2 top-1/2 right-0 -translate-y-1/2"
        @click="swiper.next()"
      >
        <ArrowRightIcon />
      </button>

      <div class="absolute z-1 top-1/2 left-0 -translate-y-1/2 w-138 h-full ml-20 bg-linear-to-r from-gray-10 to-transparent"></div>
      <div class="absolute z-1 top-1/2 right-0 -translate-y-1/2 w-138 h-full mr-20 bg-linear-to-l from-gray-10 to-transparent"></div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import QuotesIcon from '../icons/filled/QuotesIcon.vue';
import ArrowLeftIcon from '../icons/outlined/ArrowLeftIcon.vue';
import ArrowRightIcon from '../icons/outlined/ArrowRightIcon.vue';
import Section from '../layout/Section.vue';
import SectionHeader from '../layout/SectionHeader.vue';
import AudienceSwitcher, { type Audience } from '../ui/AudienceSwitcher.vue';

const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
  centeredSlides: true,
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 1.4,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})

const audience = ref<Audience>('individuals')

const testimonials = {
  individuals: [
    "testimonial_1",
    "testimonial_2",
    "testimonial_3",
    "testimonial_4",
    "testimonial_5",
  ],
  businesses: [
    "testimonial_1",
    "testimonial_2",
    "testimonial_3",
    "testimonial_4",
    "testimonial_5",
  ]
}
</script>

<style scoped>
.slider-btn {
  padding: 14px;
  color: var(--color-primary);
  background-color: var(--color-gray-11);
  border: 1px solid var(--color-gray-15);
  border-radius: calc(infinity * 1px);
}
</style>
