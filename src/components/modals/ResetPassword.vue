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
  background: var(--main-color);
}
</style>
