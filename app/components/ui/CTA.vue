<template>
  <Section>
    <div class="cta relative flex items-center gap-37 p-20">
      <img
        src="~/assets/img/decorations/dot-mesh.webp"
        alt=""
        aria-hidden="true"
        class="absolute top-0 left-0"
      >
      <div class="z-1">
        <h2 class="text-[40px] leading-14">
          <i18n-t keypath="home.cta.title" tag="span" scope="global">
            <template v-slot:highlight>
              <span class="text-primary">{{ $t('home.cta.highlight') }}</span>
            </template>
          </i18n-t>
        </h2>
        <p class="mt-3 text-gray-70 font-light">{{ $t('home.cta.description') }}</p>
      </div>
      <NuxtLinkLocale
        to="/sign-up"
        class="btn btn-primary shrink-0 capitalize"
      >
        {{ $t('home.cta.label') }}
      </NuxtLinkLocale>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '../layout/Section.vue';
</script>

<style scoped>
.cta {
  border-radius: 20px;
  background: var(--color-gray-11);
  isolation: isolate;
}

.cta::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid transparent;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-gray-15) 15%) border-box;
  mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  pointer-events: none;
}
</style>
