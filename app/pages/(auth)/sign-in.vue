<template>
  <main>
    <Section class="pt-50" container-class="relative max-w-7xl! p-25 bg-gray-11 border border-gray-15 rounded-[20px]">
      <div class="relative z-1 text-center">
        <h1 class="text-5xl text-primary font-medium">{{ $t('login.title') }}</h1>
        <p class="mt-5 text-gray-75 font-light">{{ $t('login.text') }}</p>
        <form
          action="#"
          class="mt-20 max-w-5xl mx-auto"
        >
          <div class="grid grid-cols-2 gap-7.5">
            <FormInput
              type="email"
              name="email"
              :placeholder="$t('login.form.email.placeholder')"
            />
            <FormInput
              type="password"
              name="password"
              :placeholder="$t('login.form.password.placeholder')"
            />
          </div>
          <div class="my-10">
            <NuxtLinkLocale class="underline text-base">
              {{ $t('auth.forgot_password') }}
            </NuxtLinkLocale>
          </div>
          <div class="w-100 mx-auto flex flex-col items-center space-y-6">
            <button type="submit" class="w-full justify-center btn btn-primary">
              {{ $t('login.form.submit') }}
            </button>
            <NuxtLinkLocale to="/sign_up" class="w-full justify-center btn btn-secondary">
              {{ $t('navigation.sign_up') }}
            </NuxtLinkLocale>
            <div class="w-full flex items-center gap-4">
              <div class="grow h-px bg-gray-70"></div>
              <span class="text-gray-70 text-sm">{{ $t('auth.or_continue_with') }}</span>
              <div class="grow h-px bg-gray-70"></div>
            </div>
            <div class="flex items-center gap-5">
              <GlowIconContainer
                v-for="social in loginSocials"
                :key="social.key"
              >
                <component :is="social.icon" class="size-8" />
              </GlowIconContainer>
            </div>
          </div>
        </form>
      </div>
      <img
        src="~/assets/img/decorations/dot-mesh.webp"
        alt=""
        aria-hidden="true"
        class="absolute top-0 right-0 scale-x-[-1] h-90"
      >
    </Section>
    <OurTestimonials />
  </main>
</template>

<script setup lang="ts">
import OurTestimonials from '~/components/home/OurTestimonials.vue';
import AppleIcon from '~/components/icons/filled/AppleIcon.vue';
import FacebookIcon from '~/components/icons/filled/FacebookIcon.vue';
import GoogleIcon from '~/components/icons/filled/GoogleIcon.vue';
import Section from '~/components/layout/Section.vue';
import FormInput from '~/components/ui/FormInput.vue';
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
