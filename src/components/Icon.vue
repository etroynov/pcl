<template>
  <i class="icon" :class="`icon-${props.name}`"></i>
</template>

<script setup lang="ts">
type IconsList =
  | 'cogs'
  | 'trash'
  | 'wifi'
  | 'power'
  | 'cross'
  | 'menu-block'
  | 'menu-list'
  | 'facebook'
  | 'mail';

type Props = {
  name: IconsList;
};

const props = defineProps<Props>();
</script>

<style scoped>
.icon {
  display: block;
  width: 20px;
  height: 20px;

  background-position: center;
  background-repeat: no-repeat;
}

.icon-cogs {
  background-image: url('/img/icon_cogs.svg');
}

.icon-trash {
  background-image: url('/img/icon_trash.svg');
}

.icon-wifi {
  background-image: url('/img/icon_wifi.svg');
}

.icon-power {
  background-image: url('/img/icon_power.svg');
}

.icon-cross {
  background-image: url('/img/icon_cross.svg');
}

.icon-menu-block {
  background-image: url('/img/icon_menu_block.svg');
}

.icon-menu-list {
  background-image: url('/img/icon_menu_list.svg');
}

.icon-eye {
  background-image: url('/img/icon_eye.svg');
}

.icon-mail {
  background-image: url('/img/icon_mail.svg');
  width: 32px;
  height: 32px;
}

.icon-facebook {
  background-image: url('/img/icon_facebook.svg');
  width: 32px;
  height: 32px;
}


</style>
