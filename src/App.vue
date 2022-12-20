<template>
  <Button />

  <component :is="$route.meta.layout"></component>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Button from '@/components/Button.vue';
</script>
