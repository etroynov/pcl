<template>
  <div class="container">
    <header class="page-header">
      <Typography>Clients</Typography>
    </header>

    <div>
      <AccountCard />
      <AccountPreviewCard />
      <SubscriptionsSettingsCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import Typography from '@/components/Typography.vue';
import AccountCard from '@/components/AccountCard.vue';
import AccountPreviewCard from '@/components/AccountPreviewCard.vue';
import SubscriptionsSettingsCard from '@/components/SubscriptionsSettingsCard.vue';
</script>
