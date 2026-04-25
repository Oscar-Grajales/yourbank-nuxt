<template>
    <div>
        <Header />
        <main>
          <Section class="pt-50" container-class="relative max-w-7xl! p-25 bg-gray-11 border border-gray-15 rounded-[20px]">
            <div class="relative z-1 text-center">
              <slot />
              <div class="w-100 mx-auto mt-6">
                <div class="w-full mb-7.5 flex items-center gap-4">
                  <div class="grow h-px bg-gray-70"></div>
                  <span class="text-gray-70 text-sm">{{ $t('auth.or_continue_with') }}</span>
                  <div class="grow h-px bg-gray-70"></div>
                </div>
                <div class="w-fit mx-auto flex items-center gap-5">
                  <GlowIconContainer
                    v-for="social in loginSocials"
                    :key="social.key"
                  >
                    <component :is="social.icon" class="size-8" />
                  </GlowIconContainer>
                </div>
              </div>
            </div>
            <img
              src="~/assets/img/decorations/dot-mesh.webp"
              alt=""
              aria-hidden="true"
              class="absolute top-0 right-0 scale-x-[-1] h-90"
            >
          </Section>
        </main>
        <OurTestimonials />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import OurTestimonials from '~/components/home/OurTestimonials.vue';
import AppleIcon from '~/components/icons/filled/AppleIcon.vue';
import FacebookIcon from '~/components/icons/filled/FacebookIcon.vue';
import GoogleIcon from '~/components/icons/filled/GoogleIcon.vue';
import Footer from '~/components/layout/Footer.vue';
import Header from '~/components/layout/Header.vue';
import Section from '~/components/layout/Section.vue';
import GlowIconContainer from '~/components/ui/GlowIconContainer.vue';

const loginSocials = [
  {
    key: "google",
    icon: GoogleIcon,
  },
  {
    key: "facebook",
    icon: FacebookIcon,
  },
  {
    key: "apple",
    icon: AppleIcon,
  },
]
</script>