<template>
  <section class="account">
    <header class="account__header row">
      <div class="col account__meta">
        <div class="account__thumb"></div>
        <h3 class="account__title">mail</h3>
      </div>
      <div class="col">
        <button><Icon name="cross" /></button>
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
  border: 1px solid;
}
</style>
