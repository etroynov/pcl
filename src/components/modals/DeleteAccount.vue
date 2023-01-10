<script setup lang="ts">
import Button from '@/components/Button.vue';
</script>

<template>
  <div class="modal">
    <header class="modal__header">
      <h2 class="modal__title">
        Are you sure you want to delete your account?
      </h2>
    </header>

    <div class="modal__body">
      <section class="info">
        <header class="info__header">
          <h3 class="info__title">As a member you currently get:</h3>
        </header>

        <div class="info__body">
          <ul class="info__body__features">
            <li>feature 1</li>
            <li>feature 1</li>
            <li>feature 1</li>
          </ul>
        </div>
      </section>

      <section class="info">
        <header class="info__header">
          <h3 class="info__title">By deleting your profile you will lose:</h3>
        </header>

        <div class="info__body">
          <ul class="info__body__features">
            <li>feature 1</li>
            <li>feature 1</li>
            <li>feature 1</li>
          </ul>
        </div>
      </section>
    </div>

    <footer class="modal__footer">
      <Button>Cancel</Button>
      <Button type="primary">Delete Account</Button>
    </footer>
  </div>
</template>

<style scoped>
.modal {
  width: 452px;
  display: grid;
  gap: 32px;
  background: var(--main-color);
  padding: 40px;
  box-shadow: 0px 0px 8px 2px rgba(0, 14, 51, 0.2);
}

.modal__body {
  display: flex;
  justify-content: space-between;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info__title {
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  color: #3A3F4B;
}

.info__body {
  font-weight: 400;
  font-size: 16px;
  color: #555252;
}

.info__body__features {
  margin: 0;
  display: grid;
  gap: 8px;
}

.modal__title {
  margin: 0;

}

.modal__footer {
  display: flex;
  justify-content: space-between;
}
</style>
