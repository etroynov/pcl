<template>
  <div class="container">
    <header class="page-header">
      <Typography>Dashboard</Typography>
    </header>

    <div>
      <ResetPasswordModal />
      <hr />
      <AddNewCardModal />
      <hr />
      <ChangePasswordModal />
      <hr />
      <DeleteAccountModal />
      <hr />
    </div>
  </div>
</template>

<script setup lang="ts">
import Typography from '@/components/Typography.vue';
import ChangePasswordModal from '@/components/modals/ChangePassword.vue';
import ResetPasswordModal from '@/components/modals/ResetPassword.vue';
import AddNewCardModal from '@/components/modals/AddNewCard.vue';
import DeleteAccountModal from '@/components/modals/DeleteAccount.vue';
</script>
