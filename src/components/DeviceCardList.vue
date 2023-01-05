<template>
  <section class="device">
    <div class="device__header">
      <div class="header__col">
        <img src="/img/device_placeholder.svg" alt="" />
      </div>

      <div class="header__col">
        <h3 class="device__name">Stage 1</h3>
        <h4 class="device__uvs">Universes: 50</h4>
      </div>
    </div>

    <div class="device__body">
      <p class="text">UUID: 5b17d1b2-5f9c-1aogeut...</p>
      <p class="text">number: 5b17d1b2-5f9c-1aogeut...</p>
    </div>

    <div class="device__indicators">
      <div class="indicator">
        <Icon name="wifi" />
      </div>
      <button class="btn">
        <Icon name="power" />
      </button>
    </div>

    <div class="device__controls">
      <button class="btn"><Icon name="cogs" /></button>
      <button class="btn"><Icon name="trash" /></button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue';
</script>

<style scoped>
.device {
  display: flex;
  align-items: center;
  gap: 72px;
  width: 100%;
  border: 1px solid #c0c4cd;
  box-shadow: 0px 0px 8px 2px rgba(0, 14, 51, 0.2);
  border-radius: 8px;
  padding: 24px;
}

.device__header {
  display: flex;
  gap: 10px;
  align-items: center;
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

.device__controls,
.device__indicators {
  display: flex;
  gap: 12px;
}

.device__body {
  flex: 1;
}

.btn {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.text {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
}
</style>
