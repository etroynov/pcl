<template>
  <div class="component">
    <header class="component__header">
      <h3 class="component__title">Special sales</h3>
    </header>

    <div class="component__body">
      <div class="property">
        <div class="property__name">email</div>
        <div class="property__control"></div>
      </div>

      <div class="property">
        <div class="property__name">push notification</div>
        <div class="property__control"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component {
  width: 434px;
  border: 1px solid #c0c4cd;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
}
.component__title {
  font-weight: 700;
  font-size: 20px;
  margin: 0;
}

.component__body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.property {
  display: flex;
  justify-content: space-between;
}
.property__name {
  font-weight: 400;
  font-size: 20px;
}
</style>
