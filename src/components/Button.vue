<template>
  <button class="btn" :class="classList"><slot></slot></button>
</template>

<script setup lang="ts">
type TypesList = 'default' | 'primary' | 'ghost';
type Props = {
  type?: TypesList;
  size?: 's' | 'm';
};

const props = defineProps<Props>();
const classList = [props.type || 'default', props.size || 'm'];
</script>

<style scoped>
.btn {
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #001333;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
}

.btn:hover {
  color: #ffffff;
  background-color: #001c4d;
  border-color: #001c4d;
}

.default {
  color: var(--grey-30-color);
  border: 1px solid var(--grey-40-color);
}

.primary {
  color: #ffffff;
  background-color: #001333;
}

.secondary {
  color: #001333;
  background-color: transparent;
}

.s {
  padding: 8px 24px;
}

.m {
  padding: 12px 32px;
}
</style>
