<template>
  <div>
    <h1 class="text-5xl text-primary font-medium">{{ $t('register.title') }}</h1>
        <p class="mt-5 text-gray-75 font-light">{{ $t('register.text') }}</p>
        <form
          action="#"
          class="mt-20 max-w-5xl mx-auto"
        >
          <div class="mb-10 grid grid-cols-2 gap-7.5">
            <FormInput
              name="first_name"
              :placeholder="$t('register.form.first_name.placeholder')"
            />
            <FormInput
              name="last_name"
              :placeholder="$t('register.form.last_name.placeholder')"
            />
            <FormInput
              type="email"
              name="email"
              :placeholder="$t('register.form.email.placeholder')"
            />
            <FormInput
              type="password"
              name="password"
              :placeholder="$t('register.form.password.placeholder')"
            />
          </div>
          <div class="w-100 mx-auto flex flex-col items-center space-y-6">
            <button type="submit" class="w-full justify-center btn btn-primary">
              {{ $t('register.form.submit') }}
            </button>
            <NuxtLinkLocale to="/sign-in" class="w-full justify-center btn btn-secondary">
              {{ $t('navigation.login') }}
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
