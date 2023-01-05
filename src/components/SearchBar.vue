<template>
  <div class="search-bar">
    <input type="text" class="input" placeholder="Search..." />
    <div class="view-controls">
      <Button
        size="xs"
        class="left"
        :onClick="() => props.onVariantChange('block')"
      >
        <Icon name="menu-block" />
      </Button>

      <Button
        size="xs"
        class="right"
        :onClick="() => props.onVariantChange('list')"
      >
        <Icon name="menu-list" />
      </Button>
    </div>
    <Button type="primary" size="s">Add devices</Button>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';

type Props = {
  onVariantChange: (variant: string) => void;
};

const props = defineProps<Props>();
</script>

<style scoped>
.search-bar {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr max-content max-content;
  padding-top: 24px;
}

.input {
  width: 100%;
  padding: 7px 20px 7px 48px;
  font-size: 16px;
  background: url('/img/icon_lupa.svg') 20px center no-repeat;
  border: 1px solid var(--neutral-60-color);
  border-radius: 4px;
}

.left {
  border-right: none;
  border-radius: 4px 0 0 4px;
}

.right {
  border-radius: 0 4px 4px 0;
}
</style>
