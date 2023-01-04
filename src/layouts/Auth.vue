<template>
  <RouterLink class="menu__link" to="/login"> Login </RouterLink>
  <RouterLink class="menu__link" to="/register"> Register </RouterLink>
  <RouterView />
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
</script>
