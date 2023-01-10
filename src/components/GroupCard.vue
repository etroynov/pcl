<script setup lang="ts">
import Icon from '@/components/Icon.vue';
</script>

<template>
  <section class="card">
    <figure class="card__image-container">
      <img src="/img/group_placeholder.svg" alt="" class="card__image" />
    </figure>
    <div class="card__extra">
      <div class="extra__info row">
        <div class="col">
          <img src="/img/device_placeholder.svg" alt="" />
        </div>
        <div class="col">
          <div class="card__title">left side</div>
          <div class="card__subtitle">2 devices</div>
        </div>
      </div>
      <div class="extra__controls">
        <button class="card__btn"><Icon name="cogs" /></button>
        <button class="card__btn"><Icon name="trash" /></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card {
  width: 376px;
  padding: 24px 24px 11px 24px;
  border: 2px solid var(--neutral-40-color);
  border-radius: 8px;
  background-color: var(--main-color);
}

.card__image-container {
  margin: 0 0 10px 0;
}

.card__image {
  width: 100%;
}

.card__extra {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__title {
  font-size: 13px;
  font-weight: bold;
}

.card__subtitle {
  color: var(--neutral-80-color);
  font-size: 13px;
}

.card__btn {
  border: none;
  background-color: transparent;
}
</style>
