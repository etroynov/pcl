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
        <button><Icon name="cogs" /></button>
        <button><Icon name="trash" /></button>
      </div>
    </header>

    <div class="device__body">
      <p class="text">UUID: 5b17d1b2-5f9c-1aogeut...</p>
      <p class="text">number: 5b17d1b2-5f9c-1aogeut...</p>
    </div>

    <footer class="device__footer footer">
      <div class="footer_controls">
        <button>
          <Icon name="wifi" />
        </button>
        <button>
          <Icon name="power" />
        </button>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue';
</script>
