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
            <a href="" class="form__link">Forgot your password?</a>
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
  width: 452px;
  display: grid;
  gap: 32px;
  background: var(--main-color);
  padding: 40px;
  box-shadow: 0px 0px 8px 2px rgba(0, 14, 51, 0.2);
}

.modal__title {
  margin: 0;
}

.modal__body {
  display: grid;
  gap: 24px;
}

.form__group {
  display: grid;
  gap: 8px;
}

.form__group:not(:last-child) {
  padding-bottom: 24px;
}

.form__label {
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
}

.modal__footer {
  display: flex;
  justify-content: space-between;
}

.form__link {
  font-size: 12px;
  line-height: 15px;
  color: var(--primary-50-color);
  text-decoration: none;
}
</style>
