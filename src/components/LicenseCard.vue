<script setup lang="ts"></script>

<template>
  <section class="component">
    <header class="component__header">
      <h2 class="component__title">Basic Plan</h2>
      <h3 class="component__subTitle">
        The essentials for a budding buisness: update and manage your
        information
      </h3>
    </header>
    <hr class="component__devider" />

    <div class="component__body">
      <h5 class="text">Features</h5>
      <ul class="list">
        <li class="list__item">
          <i class="ico icon-check"></i>
          <span class="list__text">RSS based push</span>
        </li>
        <li class="list__item">
          <i class="ico icon-check"></i>
          <span class="list__text">Notification</span>
        </li>
        <li class="list__item">
          <i class="ico icon-check"></i>
          <span class="list__text">Plugin access settings</span>
        </li>
        <li class="list__item">
          <i class="ico icon-check"></i>
          <span class="list__text">GEO fence push</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.component {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 48px;
  gap: 24px;
  background: #FFFFFF;
  border: 1px solid #DFE1E6;
  box-shadow: 0px 0px 4px 1px rgba(0, 14, 51, 0.2);
  border-radius: 8px;
}

.component__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.component__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

}

.component__title {
  font-size: 40px;
  margin: 0;
  color: #000000;
}

.component__subTitle {
  font-weight: 400;
  font-size: 12px;
  color: #000000;
  margin: 0;
  text-align: center;
}

.component__devider {
  width: 190px;
  border: 1px solid var(--primary-50-color);
}

.list__text {
  font-weight: 400;
  font-size: 12px;
}

.icon-check {
  display: block;
  background-image: url(/img/icon_prime_check-circle.svg);
  width: 20px;
  height: 20px;
}

.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
}

.list__item {
  display: flex;
  gap: 16px;
  align-items: center;
}

.text {
  margin: 0px;
}

</style>
