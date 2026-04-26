<template>
  <div class="relative capitalize px-6 lg:px-15">
    <img
      src="~/assets/img/decorations/arrows-group.webp"
      alt=""
      aria-hidden="true"
      class="absolute -top-5 lg:top-2.5 right-[-10%] md:right-[-35%] w-55 md:w-auto"
    >
    <div class="absolute -top-8 md:-top-15 -left-2 md:-left-11 z-2 w-fit px-2.5 md:px-4.5 py-2 md:py-3.5 flex items-center gap-2 rounded-[10px] bg-[#22251B]">
      <IconContainer>
        <PlusIcon class="size-3 lg:size-5" />
      </IconContainer>
      <div class="grid leading-4 md:leading-8">
        <span class="text-2xs md:text-base">+ $7,000.00</span>
        <span class="text-3xs md:text-sm font-light">{{ $t('home.hero.banking_preview.badge.text') }}</span>
      </div>
    </div>
    <div class="banking-preview relative w-auto md:w-129 p-5 lg:p-8.5">
      <div class="mb-6.5">
        <p class="mb-4.5 text-xs md:text-base font-medium">{{ $t('home.hero.banking_preview.transactions.title') }}</p>
        <div class="relative overflow-hidden -space-y-6">
          <div
            class="absolute z-10 w-full h-full bg-linear-to-b from-40% from-transparent to-gray-10"
            :style="{ zIndex: transactions.length + 1 }"
          ></div>
          <div
            v-for="(transaction, index) in transactions"
            :key="transaction.name"
            class="relative px-5 py-3.5 flex justify-between items-end gap-5 bg-gray-11 rounded-[10px] border border-gray-15"
            :style="{
              zIndex: transactions.length - index,
              transform: `scale(${1 - (index * 0.08)})`
            }"
          >
            <div class="flex items-center gap-2">
              <IconContainer>
                <ExchangeIcon />
              </IconContainer>
              <div class="grid">
                <span class="text-xs md:text-md font-light">{{ $t('home.hero.banking_preview.transactions.item_label') }}</span>
                <span>{{ transaction.name }}</span>
              </div>
            </div>
            <span class="text-sm md:text-xl font-medium">-$68.00</span>
          </div>
        </div>
      </div>
      <div>
        <p class="mb-4.5 text-xs md:text-base font-medium">{{ $t('home.hero.banking_preview.exchange.title') }}</p>
        <div class="bg-gray-11 border border-gray-15 divide-y divide-gray-15 rounded-[10px]">
          <div class="grid grid-cols-2 divide-x divide-gray-15">
            <div class="p-2.5 md:p-4.5">
              <div class="mb-2 flex items-center gap-2">
                <img src="~/assets/img/flags/mexico.png" alt="Mexico flag" class="size-5 md:size-9 rounded-full object-cover">
                <span class="text-[10px[ md:text-md">MXN</span>
              </div>
              <p class="text-3xs md:text-sm font-light">{{ $t('home.hero.banking_preview.exchange.mxn') }}</p>
            </div>
            <div class="p-2.5 md:p-4.5">
              <div class="mb-2 flex items-center gap-2">
                <img src="~/assets/img/flags/united-states.png" alt="United States flag" class="size-5 md:size-9 rounded-full object-cover">
                <span class="text-[10px[ md:text-md">USD</span>
              </div>
              <p class="text-3xs md:text-sm font-light">{{ $t('home.hero.banking_preview.exchange.usd') }}</p>
            </div>
          </div>
          <div class="grid grid-cols-2 divide-x divide-gray-15">
            <div class="px-2.5 md:px-4.5 py-4 md:py-6.5">7,000.00</div>
            <div class="px-2.5 md:px-4.5 py-4 md:py-6.5">400.00</div>
          </div>
        </div>
        <div class="mt-6.5 p-3.5 bg-[#22251B] rounded-full text-2xs md:text-base text-center text-primary">
          {{ $t('home.hero.banking_preview.exchange.button_text') }}
        </div>
      </div>
    </div>
    <div class="translate-x-6 md:translate-x-13 w-fit mt-3 ml-auto mb-4.5 p-1.5 md:p-2 flex items-center gap-2.5 bg-[#22251B] rounded-full">
      <span class="ml-3 text-2xs md:text-md">{{ $t('home.hero.banking_preview.supported_currency') }}</span>
      <div class="p-1.5 md:p-2 flex gap-1.5 bg-gray-10 rounded-full">
        <div
          v-for="currency in supportedCurrencies"
          :key="currency.key"
          class="size-5 md:size-9.5 flex justify-center items-center bg-gray-15 rounded-full text-primary"
        >
          <component :is="currency.icon" class="size-2.5 md:size-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import CurrencyBitcoinIcon from '../icons/filled/CurrencyBitcoinIcon.vue';
import CurrencyDollarIcon from '../icons/filled/CurrencyDollarIcon.vue';
import CurrencyEthereumIcon from '../icons/filled/CurrencyEthereumIcon.vue';
import CurrencyEuroIcon from '../icons/filled/CurrencyEuroIcon.vue';
import ExchangeIcon from '../icons/outlined/ExchangeIcon.vue';
import PlusIcon from '../icons/outlined/PlusIcon.vue';
import IconContainer from './IconContainer.vue';

interface Transaction {
  name: string;
  amount: string;
}

const transactions: Transaction[] = [
  {
    name: 'Joel Kenley',
    amount: '-$68.00',
  },
  {
    name: 'Mark Smith',
    amount: '-$68.00',
  },
  {
    name: 'Lenen Roy',
    amount: '-$68.00',
  },
]

interface Currency {
  key: string;
  icon: Component;
}

const supportedCurrencies: Currency[] = [
  {
    key: 'dollar',
    icon: CurrencyDollarIcon,
  },
  {
    key: 'euro',
    icon: CurrencyEuroIcon,
  },
  {
    key: 'bitcoin',
    icon: CurrencyBitcoinIcon,
  },
  {
    key: 'ethereum',
    icon: CurrencyEthereumIcon,
  },
]
</script>

<style scoped>
.banking-preview {
  border-radius: 10px;
  background: #1A1A1A;
  isolation: isolate;
}

.banking-preview::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid transparent;
  background: linear-gradient(45deg, var(--color-primary) 0%, var(--color-gray-15) 20%, var(--color-gray-15) 80%, var(--color-primary) 100%) border-box;
  mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  pointer-events: none;
}
</style>
