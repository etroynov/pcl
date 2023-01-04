<template>
  <div class="badge" :class="props.type ?? 'success'">{{ props.value }}</div>
</template>

<script setup lang="ts">
type Props = {
  type: 'success' | 'danger';
  value: string | number;
};

const props = defineProps<Props>();
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 4px 19px;
  border-radius: 15px;
}

.success {
  color: white;
  background-color: #27ae60;
}
</style>
