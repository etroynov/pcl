<template>
  <header class="header">
    <div class="row">
      <div class="company-info col">
        <div class="company-info__logo"></div>
        <div class="company-info__name">Pixout ltd.</div>
      </div>
      <div class="col"><Badge status="paid" /></div>
    </div>
    <nav>
      <ul class="menu">
        <li class="menu__item" v-for="route in routes" :key="route.name">
          <RouterLink class="menu__link" :to="route.path">
            {{ route.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import Badge from '../Badge.vue';
import { routes } from '@/router';
</script>

<style scoped>
.header {
  padding: 16px 40px 0 40px;
  background-color: var(--main-color);
  border: 1px solid var(--border-color);
}

.menu {
  display: flex;
  gap: 24px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.menu__link {
  padding-bottom: 18px;
  display: inline-block;
  color: var(--neutral-70-color);
  text-decoration: none;
}

.menu-link-active {
  color: var(--primary-100-color);
  border-bottom: 2px solid;
}
</style>
