<script setup lang="ts">
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <div class="modal">
    <header class="modal__header">
      <h2 class="modal__title">Change password</h2>
    </header>

    <div class="modal__body">
      <form action="" class="form">
        <div class="form__group">
          <label for="" class="form__label">Old password</label>
          <Input placeholder="********" />
          <div class="form__extra">
            <a href="">Forgot your password?</a>
          </div>
        </div>

        <div class="form__group">
          <label for="" class="form__label">New password</label>
          <Input placeholder="********" />
        </div>

        <div class="form__group">
          <label for="" class="form__label">Confirm new password</label>
          <Input placeholder="********" />
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
