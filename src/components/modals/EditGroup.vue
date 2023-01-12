<script setup lang="ts">
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <div class="modal">
    <header class="modal__header">
      <h2 class="modal__title">Edit Group</h2>
    </header>

    <div class="modal__body">
      <form class="form">
        <div class="form__group group">
          <label for="" class="group__name">Board cover</label>
          <input type="file" name="" id="" class="cover__placeholder" />
        </div>

        <div class="form__group group">
          <label for="" class="group__name">Name</label>
          <Input placeholder="Name of group" />
        </div>

        <div class="form__group group">
          <label for="" class="group__name">Chosen Devices</label>
          <select class="ammount_chooser">
            <option value="">3</option>
          </select>
        </div>

        <div class="info">
          <header>
            <h4 class="info__title">Delete group</h4>
          </header>

          <div class="info__body">
            Delete this group. You can't undo this! All your devices will remain
            in a tab Devices.
          </div>
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

.cover__placeholder {
  width: 267px;
  height: 86px;
  background: #c0c4cd;
  border: 1px solid #d0d3da;
  border-radius: 4px;
}

.modal__body {
  display: grid;
  gap: 24px;
}

.modal__title {
  margin: 0;
  font-size: 20px;
}

.form__group {
  display: grid;
  gap: 8px;
}

.form__group:not(:last-child) {
  padding-bottom: 24px;
}

.modal__footer {
  display: flex;
  justify-content: space-between;
}

.group__name {
  font-size: 12px;
  font-weight: 700;
}

.ammount_chooser {
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid var(--neutral-30-color);
  border-radius: var(--base-radius-s);
}

.info {
  display: grid;
  gap: 8px;
}

.info__title {
  font-size: 12px;
  color: #e65c5c;
  margin: 0;
}

.info__body {
  font-size: 12px;
  color: #656d7f;
}
</style>
