<template>
  <i class="icon" :class="`icon-${props.name}`"></i>
</template>

<script setup lang="ts">
const props = defineProps(['name']);
</script>

<style scoped>
.icon {
  display: block;
  width: 20px;
  height: 20px;

  background-position: center;
  background-repeat: no-repeat;
}

.icon-cogs {
  background-image: url('/img/icon_cogs.svg');
}

.icon-trash {
  background-image: url('/img/icon_trash.svg');
}

.icon-wifi {
  background-image: url('/img/icon_wifi.svg');
}

.icon-power {
  background-image: url('/img/icon_power.svg');
}
</style>
