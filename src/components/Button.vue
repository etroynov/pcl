<template>
  <button class="btn" :class="props.type"><slot></slot></button>
</template>

<script setup lang="ts">
type TypesList = 'default' | 'primary' | 'ghost';
type Props = {
  type: TypesList;
};

const props = defineProps<Props>();
</script>

<style scoped>
.btn {
  font-size: 16px;
  line-height: 24px;
  padding: 12px 32px;
  border: 1px solid #001333;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  color: #ffffff;
  background-color: #001c4d;
  border-color: #001c4d;
}

.primary {
  color: #ffffff;
  background-color: #001333;
}

.secondary {
  color: #001333;
  background-color: transparent;
}
</style>
