<template>
  <div class="container">
    <header class="page-header">
      <Typography>Licenses</Typography>
    </header>

    <div>
      <LicenseCard />
      <LicenseCard />
      <LicenseCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import Typography from '@/components/Typography.vue';
import LicenseCard from '@/components/LicenseCard.vue';
</script>
