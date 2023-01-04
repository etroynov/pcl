<template>
  <div class="search-bar">
    <div class="row">
      <div class="col">
        <input type="text" />
      </div>
      <div class="col">
        <Button><Icon name="cogs" /></Button>
        <Button><Icon name="cogs" /></Button>
      </div>
      <div class="col">
        <Button>Add devices</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
</script>
