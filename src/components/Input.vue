<template>
  <input :type="props.type" />
</template>

<script setup lang="ts">
const props = defineProps(['type']);
</script>
