<template>
  <div class="badge primary">{{ props.status }}</div>
</template>

<script setup lang="ts">
const props = defineProps(['status']);
</script>

<style scoped>
.badge {
  display: inline-block;
}
</style>
