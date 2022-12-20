<template>
  <Header />
  <RouterView />
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Header from '@/components/common/Header.vue';
</script>
