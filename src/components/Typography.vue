<template>
  <component :is="tag" class="component">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
type Props = {
  level?: number;
};

const props = defineProps<Props>();
const tag = `h${props.level ?? 1}`;
</script>

<style scoped>
.component {
  margin: 0;
}
</style>
