<template>
  <div class="page">
    <div class="info grey">
      <ul class="list">
        <li class="list__item item">
          <div class="title__container">
            <img src="/img/icon_check.png" alt=""> 
            <div class="item__title">One of our advantages</div>
          </div>
          <div class="item__subTitle">
            Subtitle that is telling about the advantages of using our workspace
          </div>
        </li>
        <li class="list__item item">
          <div class="title__container">
            <img src="/img/icon_check.png" alt=""> 
            <div class="item__title">One of our advantages</div>
          </div>
          <div class="item__subTitle">
            Subtitle that is telling about the advantages of using our workspace
          </div>
        </li>
        <li class="list__item item">
          <div class="title__container">
            <img src="/img/icon_check.png" alt=""> 
            <div class="item__title">One of our advantages</div>
          </div>
          <div class="item__subTitle">
            Subtitle that is telling about the advantages of using our workspace
          </div>
        </li>
        <li class="list__item item">
          <div class="title__container">
            <img src="/img/icon_check.png" alt=""> 
            <div class="item__title">One of our advantages</div>
          </div>
          <div class="item__subTitle">
            Subtitle that is telling about the advantages of using our workspace
          </div>
        </li>
      </ul>
    </div>
    <div class="white">
      <section class="info">
        <header class="info__header">
          <h1 class="info__title">Join our cloud team <br> for the better job</h1>
        </header>
        <form action="" class="form">
          <div class="form__group">
            <input type="text" class="form__field" placeholder="Email adress"/>
          </div>
          <div class="form__group">
            <input
              type="submit"
              class="form__btn"
              value="Continue with Email"
            />
          </div>
        </form>
        <div class="info__footer footer">
          <div class="footer__description">
            By clicking continue, you agree to our <br> <span class="text_black">Terms of Service</span> and <span class="text_black">Privacy
            Policy</span>.
          </div>
          <hr class="footer__devider" />
          <div>
            <span class="footer__text">Already have an account?</span>
            <RouterLink to="/login">Log in</RouterLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  background-color: white;
}

.list {
  display: grid;
  gap: 30px;
  margin: 0;
}

.list__item {
  display: grid;
  gap: 24px;
}

.item__title {
  font-family: 'Inter';
  font-weight: 700;
  font-size: 25px;
  color: #000000;
}

.item__subTitle {
  padding-left: 48px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  color: #3A3F4B;
  width: 339px;

}

.grey {
  background-color: #FAFAFA;
  padding: 80px 146px;
}

.white {
  padding: 120px 80px;
}

.info {
  display: grid;
  align-items: flex-start;
  gap: 40px;
}

.info__title {
  margin: 0;
}

.title__container {
  display: flex;
  gap: 24px;
}
.header__title {
  margin: 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
}
.form {
  display: grid;
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

.info__footer {
  display: grid;
  justify-content: start;
  gap: 40px;
}

.footer {
  font-family: 'Inter';
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
}
.footer__description {
  color: #3A3F4B;
}
.text_black {
  color: #000000;
}

.footer__devider {
  width: 420px;
  border-top: 1px solid #D0D3DA;
}

.footer__text {
  color: #000000;
}



</style>
