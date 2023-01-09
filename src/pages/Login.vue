<template>
  <div class="page">
    <div class="container">
      <header class="header">
        <h1 class="header__title">Log in to PixoutCloud</h1>
      </header>
      <form class="form">
        <div class="form__group">
          <input type="text" class="form__field" placeholder="Email adress" />
        </div>
        <div class="form__group">
          <input type="submit" class="form__btn" value="Continue with Email" />
        </div>
      </form>
    </div>
    <footer class="footer">
      <RouterLink to="/register" class="footer__link">
        Don’t have an acount? Sign Up
      </RouterLink>
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
  border-top: 1px solid #d0d3da;
  padding: 32px;
  font-size: 20px;
  line-height: 28px;
  color: var(--primary-50-color);
}

.footer__link {
  font-size: 20px;
  text-decoration: none;
  color: var(--primary-50-color);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.header__title {
  margin: 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form__field {
  width: 420px;
  padding: 12px 15px;
  font-size: 16px;
  background: #ffffff;
  border: 1px solid #99a0af;
  border-radius: 4px;
}

.form__btn {
  width: 420px;
  padding: 12px 26px;
  background: var(--primary-50-color) url('/img/icon_letter.svg') 24px center
    no-repeat;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
</style>
