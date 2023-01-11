<script setup lang="ts">
type Props = {
  type?: string;
  placeholder?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <input :type="props.type" :placeholder="props.placeholder" class="input" />
</template>

<style scoped>
.input {
  width: 100%;
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid var(--neutral-30-color);
  border-radius: var(--base-radius-s);
}
</style>
