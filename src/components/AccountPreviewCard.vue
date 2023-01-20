<template>
  <div class="component">
    <div class="component__col">
      <div class="account__thumb"><Icon name="facebook" /></div>
      <h3 class="account__title">Facebook</h3>
    </div>
    <div class="component__col">
      <a href="" class="component__link">connect</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue';
</script>

<style scoped>
.component {
  width: 434px;
  border: 1px solid #c0c4cd;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
}

.component__col {
  display: flex;
  gap: 8px;
  align-items: center;
}

.account__title {
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  margin: 0;
}

.component__link {
  text-decoration: none;
  font-size: 16px;
  color: var(--primary-50-color);
}
</style>
