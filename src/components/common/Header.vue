<template>
  <header class="header">
    <div>
      <Badge status="paid" />
    </div>
    <nav>
      <ul class="menu">
        <li class="menu-item" v-for="link in links" :key="link.href">
          <a
            class="menu-link"
            :class="{ 'menu-link-active': link.active }"
            :href="link.href"
            >{{ link.label }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import Badge from '../Badge.vue';

const links = [
  {
    label: 'Overview',
    href: 'overview',
  },
  {
    label: 'Subscription',
    href: 'subscription',
  },
  {
    label: 'License',
    href: 'license',
  },
  {
    label: 'Clients',
    href: 'clients',
  },
  {
    label: 'Groups',
    href: 'groups',
  },
  {
    label: 'Devices',
    href: 'devices',
    active: true,
  },
  {
    label: 'Settings',
    href: 'settings',
  },
];
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

.menu-link {
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
