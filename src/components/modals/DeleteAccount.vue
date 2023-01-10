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
          <ul>
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
          <ul>
            <li>feature 1</li>
            <li>feature 1</li>
            <li>feature 1</li>
          </ul>
        </div>
      </section>
    </div>

    <footer class="modal__footer">
      <Button>Cancel</Button>
      <Button type="primary">delete account</Button>
    </footer>
  </div>
</template>

<style scoped>
.modal {
  background: var(--main-color);
}
</style>
