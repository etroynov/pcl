<template>
  <div class="container">
    <div>
      <SearchBar />
    </div>
    <main class="content">
      <div class="devices">
        <DeviceCard v-for="device in devices" :key="device" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import DeviceCard from '@/components/DeviceCard.vue';
import SearchBar from '@/components/SearchBar.vue';

const devices = Array(1, 2, 3, 4, 5);
</script>

<style scoped>
.devices {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
</style>
