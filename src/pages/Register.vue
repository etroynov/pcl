<template>
  <div class="page">
    <div class="info grey">
      <ul class="list">
        <li class="list__item item">
          <div class="item__title"></div>
          <div class="item__subTitle"></div>
        </li>
        <li class="list__item item">
          <div class="item__title"></div>
          <div class="item__subTitle"></div>
        </li>
        <li class="list__item item">
          <div class="item__title"></div>
          <div class="item__subTitle"></div>
        </li>
        <li class="list__item item">
          <div class="item__title"></div>
          <div class="item__subTitle"></div>
        </li>
      </ul>
    </div>
    <div class="white"></div>
  </div>
</template>

<style scoped>
.page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  background-color: white;
}

.grey {
  background-color: #d6d6d6;
}
</style>
