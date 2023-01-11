<template>
  <component :is="tag" class="component" :class="classList">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
type Props = {
  class?: string;
  level?: number;
};

const props = defineProps<Props>();
const tag = `h${props.level ?? 1}`;
const classList = [props.class, tag];
</script>

<style scoped>
.component {
  margin: 0;
}


.h2 {
  font-size: 20px;
  line-height: 28px;
}
</style>
