<script setup lang="ts">
import Button from '@/components/Button.vue';
</script>

<template>
  <div class="modal">
    <header class="modal__header">
      <h2 class="modal__title">Reset your password</h2>
    </header>

    <div class="modal__body">
      We’ll send you a link to reset your password. Please check your email.
    </div>

    <footer class="modal__footer">
      <Button>Cancel</Button>
      <Button type="primary">Reset password</Button>
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
  display: grid;
  gap: 24px;
}

.modal__title {
  margin: 0;
}

.modal__footer {
  display: flex;
  justify-content: space-between;
}
</style>
