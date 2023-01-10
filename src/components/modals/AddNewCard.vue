<script setup lang="ts">
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <div class="modal">
    <header class="modal__header">
      <h2 class="modal__title">Add new card</h2>
    </header>

    <div class="modal__body">
      <form action="" class="form">
        <div class="form__group">
          <Input placeholder="Name on card" />
        </div>

        <div class="form__group">
          <Input placeholder="Card number" />
        </div>

        <div class="form__group">
          <Input placeholder="mm/yy" />
          <Input placeholder="CVV" />
        </div>
      </form>
    </div>

    <footer class="modal__footer">
      <Button>Cancel</Button>
      <Button type="primary">Save</Button>
    </footer>
  </div>
</template>

<style scoped>
.modal {
  background: var(--main-color);
}
</style>
