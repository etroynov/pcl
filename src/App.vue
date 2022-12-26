<template>
  <component :is="$route.meta.layout"></component>
  <hr />
  <Button />
  <hr />
  <DeviceCard />
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
import DeviceCard from '@/components/DeviceCard.vue';
</script>
