<script setup lang="ts">
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <div class="modal">
    <header class="modal__header">
      <h2 class="modal__title">Are you sure?</h2>
    </header>

    <div class="modal__body">Once you delete a group, you can't undo it!</div>

    <footer class="modal__footer">
      <Button>Cancel</Button>
      <Button type="primary">Delete forever</Button>
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

.form__group {
  display: grid;
}
.form__group:not(:last-child) {
  padding-bottom: 24px;
}

.modal__footer {
  display: flex;
  justify-content: space-between;
}
</style>
