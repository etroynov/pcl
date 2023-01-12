<template>
  <div class="container">
    <header class="page-header">
      <Typography>Groups</Typography>
    </header>

    <main class="cards">
      <GroupCard />
      <AddCard />
      <hr />
      <AddNewGroup />
      <hr />
      <EditGroup />
    </main>
  </div>
</template>

<script setup lang="ts">
import Typography from '@/components/Typography.vue';
import AddCard from '@/components/AddCard.vue';
import GroupCard from '@/components/GroupCard.vue';
import AddNewGroup from '@/components/modals/AddNewGroup.vue';
import EditGroup from '@/components/modals/EditGroup.vue';
</script>

<style scoped>
.cards {
  /* display: flex; */
  /* gap: 32px; */
  /* flex-wrap: wrap; */
}
</style>
