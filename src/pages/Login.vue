<template>
  <div class="page">
    <div class="container">
      <header class="header">
        <h1 class="header__title">Log in to PixoutCloud</h1>
      </header>
      <form class="form">
        <div class="form__group">
          <input type="text" class="form__field" placeholder="Email adress"/>
        </div>
        <div class="form__group">
          <input type="submit" class="form__btn"  value="Continue with Email" />
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
  border-top: 1px solid #D0D3DA;;
  padding: 32px;
  font-size: 20px;
  line-height: 28px;
  color: #005EFF;
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
  width: 400px;
  background: #FFFFFF;
  border: 1px solid #99A0AF;
  border-radius: 4px;
  padding: 10px;
}

.form__btn {
  gap: 88px;
  width: 422px;
  padding: 10px;
  background: #005EFF;
  color: #FFFFFF;
  border-radius: 4px;
  border: none;
}

</style>
