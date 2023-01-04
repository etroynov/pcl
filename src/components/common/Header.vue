<template>
  <header class="header">
    <div class="header__meta">
      <div class="row">
        <div class="company-info col">
          <Avatar />
          <div class="company-info__name">Pixout ltd.</div>
        </div>
        <div class="col"><Badge type="success" value="paid" /></div>
      </div>

      <div class="row">
        <div class="col links">
          <Button size="s">Support</Button>
          <RouterLink to="/changelog" class="link">Changelog</RouterLink>
        </div>
        <div class="col">
          <div class="user">
            <div class="user__name">Evgenii Troinov</div>
            <div class="user__avatar"><Avatar /></div>
          </div>
        </div>
      </div>
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
import Badge from '@/components/Badge.vue';
import Button from '@/components/Button.vue';
import Avatar from '@/components/Avatar.vue';

import { routes } from '@/router';
</script>

<style scoped>
.header {
  display: grid;
  gap: 8px;
  padding: 16px 40px 0 40px;
  background-color: var(--main-color);
  border: 1px solid var(--border-color);
}

.header__meta {
  display: flex;
  justify-content: space-between;
}

.menu {
  display: flex;
  gap: 24px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.menu__link {
  padding: 18px 0;
  display: inline-block;
  color: var(--neutral-70-color);
  text-decoration: none;
}

.company-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.row {
  display: flex;
  gap: 24px;
  align-items: center;
}

.links {
  display: flex;
  align-items: center;
  gap: 16px;
}

.link {
  color: var(--grey-30-color);
  text-decoration: none;
}

.user {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
