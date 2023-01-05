<template>
  <div class="container">
    <header class="page-header">
      <Typography :level="1">Welcome, Evgenii!</Typography>
    </header>
    <section class="user-info">
      <figure class="user-info__avatar">
        <img src="/img/avatar_placeholder.svg" alt="" />
      </figure>

      <section class="user-props">
        <div class="user-props__row">
          <div><span class="user-props__key">Name:</span> Evgenii T</div>
          <div>
            <span class="user-props__key">Email/login:</span> EvgeniiT@gmail.com
          </div>
        </div>

        <div class="user-props__row">
          <RouterLink to="/profile" class="user-props__link">
            Account details
          </RouterLink>
        </div>
      </section>
    </section>

    <div class="orders-list list">
      <header class="list__header">
        <Typography :level="2" class="list__divider">Active orders</Typography>
        <Divider />
      </header>
      <div class="list__body list__body-empty">0 active orders</div>
    </div>

    <div class="users-extra">
      <div class="payments-list">
        <header>
          <Typography :level="2">Payment method</Typography>
        </header>

        <div>
          <Button :block="true">+ add payment method</Button>
        </div>
      </div>
      <div class="address-list">
        <header>
          <Typography :level="2">Address</Typography>
        </header>

        <div>
          <Button :block="true">+ add address</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Typography from '@/components/Typography.vue';
import Divider from '@/components/Divider.vue';
import Button from '@/components/Button.vue';
</script>

<style scoped>
.user-info {
  display: flex;
  gap: 44px;
  margin-bottom: 48px;
}

.user-info__avatar {
  margin: 0;
  padding: 0;
}

.user-props {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.user-props__row {
  display: flex;
  gap: 4px;
  flex-direction: column;
}

.user-props__link {
  color: var(--primary-50-color);
  text-decoration: none;
}

.user-props__key {
  color: var(--neutral-80-color);
}

.orders-list {
  margin-bottom: 48px;
}

.list {
  display: grid;
  gap: 16px;
}

.list__body {
  padding-top: 16px;
}

.list__body-empty {
  text-align: center;
}

.list__divider {
  margin-bottom: 16px;
}

.users-extra {
  display: flex;
  gap: 32px;
}

.address-list,
.payments-list {
  display: flex;
  gap: 12px;
  flex-direction: column;
  flex: 1;
}
</style>
