<template>
  <section class="account">
    <header class="account__header row">
      <div class="col account__meta">
        <div class="account__thumb"><Icon name="mail" /></div>
        <h3 class="account__title">Mail</h3>
      </div>
      <div class="col">
        <button class="exit_btn"><Icon name="cross" /></button>
      </div>
    </header>
    <div class="account__body">EvgeniiT@mail.ru</div>
    <hr class="account_divider" />
    <footer class="account__footer">
      <input type="checkbox" name="" class="" id="subscriptions" />
      <label for="subscriptions">use for subscriptions</label>
    </footer>
  </section>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue';
</script>

<style scoped>
.account {
  width: 434px;
  border: 1px solid #c0c4cd;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 24px;
}

.row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.account__title {
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  margin: 0;
}

.account__body {
  font-size: 16px;
}

.account__meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.account_divider {
  border: 1px solid #c0c4cd;
  width: 383px;
}

.exit_btn {
  border: none;
  background: transparent;
  padding: 2px;
}

.account__footer {
  display: flex;
  gap: 12px;
}
</style>
