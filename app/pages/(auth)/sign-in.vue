<template>
  <div>
    <h1 class="text-5xl text-primary font-medium">{{ $t('login.title') }}</h1>
    <p class="mt-5 text-gray-75 font-light">{{ $t('login.text') }}</p>
    <form
      action="#"
      class="mt-20 max-w-5xl mx-auto"
    >
      <div class="mb-10 grid grid-cols-2 gap-7.5">
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
      <div class="mb-10">
        <NuxtLinkLocale class="underline text-base">
          {{ $t('auth.forgot_password') }}
        </NuxtLinkLocale>
      </div>
      <div class="w-100 mx-auto flex flex-col items-center space-y-6">
        <button type="submit" class="w-full justify-center btn btn-primary">
          {{ $t('login.form.submit') }}
        </button>
        <NuxtLinkLocale to="/sign-up" class="w-full justify-center btn btn-secondary">
          {{ $t('navigation.sign_up') }}
        </NuxtLinkLocale>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import FormInput from '~/components/ui/FormInput.vue';

definePageMeta({
  layout: 'auth',
})
</script>
