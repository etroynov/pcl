<template>
  <button class="btn" :class="classList" @click="props.onClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
type TypesList = 'default' | 'primary' | 'ghost';
type Props = {
  type?: TypesList;
  size?: 'm' | 's' | 'xs';
  block?: boolean;
  class?: string;

  onClick?: (e: any) => void;
};

const props = defineProps<Props>();
console.info(props.type || 'default');
const classList = [
  props.type || 'default',
  props.size || 'm',
  props.block ? 'block' : '',
  props.class,
];
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
  border: 1px solid var(--neutral-60-color);
}

.primary {
  color: #ffffff;
  background-color: #001333;
}

.secondary {
  color: #001333;
  background-color: transparent;
}

.block {
  width: 100%;
}

.m {
  padding: 12px 32px;
}

.s {
  padding: 7px 24px;
}

.xs {
  padding: 9px;
}
</style>
