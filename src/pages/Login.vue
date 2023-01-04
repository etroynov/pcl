<template>
  <div class="page">
    <div class="container">
      <header class="header">
        <h1 class="header__title">Log in to PixoutCloud</h1>
      </header>
      <form class="form">
        <div class="form__group">
          <input type="text" class="form__field" />
        </div>
        <div class="form__group">
          <input type="submit" class="form__btn" value="Continue with Email" />
        </div>
      </form>
    </div>
    <footer class="footer">
      <RouterLink to="/register">Don’t have an acount? Sign Up</RouterLink>
    </footer>
  </div>
</template>

<style scoped>
.page {
  display: grid;
  grid-template-rows: 1fr max-content;
  height: 100vh;
}

.footer {
  display: flex;
  justify-content: center;
}
</style>
