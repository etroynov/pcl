<template>
  <div class="container">
    <header class="page-header">
      <Typography>License</Typography>
    </header>

    <div class="cards__container">
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

<style scoped>

.cards__container {
  display: flex;
  gap: 31px;
}

</style>