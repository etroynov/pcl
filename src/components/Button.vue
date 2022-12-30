<template>
  <button class="btn btn-primary">Test</button>
  <button class="btn btn-secondary">Test</button>

</template>

<script setup lang="ts"></script>

<style scoped>
.btn {
  font-size: 16px;
  line-height: 24px;
  padding: 12px 32px;
  border: 1px solid #001333;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  color: #ffffff;
  background-color: #001C4D;
  border-color: #001C4D;
}

.btn-primary {
  color: #ffffff;
  background-color: #001333;
}

.btn-secondary {
  color: #001333;
  background-color: transparent;
}

</style>
