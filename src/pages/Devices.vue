<template>
  <div class="container">
    <div>
      <SearchBar :onVariantChange="handleVariantChange" />
    </div>
    <main class="content">
      <div v-if="variant === 'block'" class="devices">
        <DeviceCardBlock v-for="device in devices" :key="device" />
      </div>

      <div v-if="variant === 'list'" class="devices">
        <DeviceCardList v-for="device in devices" :key="device" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DeviceCardBlock from '@/components/DeviceCardBlock.vue';
import DeviceCardList from '@/components/DeviceCardList.vue';
import SearchBar from '@/components/SearchBar.vue';

const variant = ref('list');
const devices = Array(1, 2, 3, 4, 5);

function handleVariantChange(value: string) {
  variant.value = value;
}
</script>

<style scoped>
.devices {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
</style>
