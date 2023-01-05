<template>
  <section class="device">
    <header class="device__header header">
      <div class="header__meta header__row">
        <div class="header__col">
          <img src="/img/device_placeholder.svg" alt="" />
        </div>

        <div class="header__col">
          <h3 class="device__name">Stage 1</h3>
          <h4 class="device__uvs">Universes: 50</h4>
        </div>
      </div>
      <div class="header__controls">
        <button class="btn"><Icon name="cogs" /></button>
        <button class="btn"><Icon name="trash" /></button>
      </div>
    </header>

    <div class="device__body">
      <p class="text">UUID: 5b17d1b2-5f9c-1aogeut...</p>
      <p class="text">number: 5b17d1b2-5f9c-1aogeut...</p>
    </div>

    <footer class="device__footer footer">
      <div class="footer__controls">
        <div class="indicator">
          <Icon name="wifi" />
        </div>
        <button class="btn">
          <Icon name="power" />
        </button>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue';
</script>

<style scoped>
.device {
  width: 378px;
  border: 1px solid #c0c4cd;
  box-shadow: 0px 0px 8px 2px rgba(0, 14, 51, 0.2);
  border-radius: 8px;
  padding: 24px;
}
.btn {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.header__row {
  display: flex;
  gap: 10px;
  align-items: center;
}
.header__controls {
  display: flex;
  gap: 12px;
}
.device__header {
  display: flex;
  justify-content: space-between;
}

.device__name {
  margin: 0;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
}

.device__uvs {
  margin: 0;
  font-weight: 400;
  font-size: 13px;
  line-height: 14px;
}

.text {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
}

.device__body {
  padding-top: 10px;
  padding-bottom: 35px;
}

.device__footer {
  display: flex;
  justify-content: flex-end;
}

.footer__controls {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
