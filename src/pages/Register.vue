<template>
  <div class="page">
    <div class="info grey">
      <ul class="list">
        <li class="list__item item">
          <div class="item__title">One of our advantages</div>
          <div class="item__subTitle">
            Subtitle that is telling about the advantages of using our workspace
          </div>
        </li>
        <li class="list__item item">
          <div class="item__title">One of our advantages</div>
          <div class="item__subTitle">
            Subtitle that is telling about the advantages of using our workspace
          </div>
        </li>
        <li class="list__item item">
          <div class="item__title">One of our advantages</div>
          <div class="item__subTitle">
            Subtitle that is telling about the advantages of using our workspace
          </div>
        </li>
        <li class="list__item item">
          <div class="item__title">One of our advantages</div>
          <div class="item__subTitle">
            Subtitle that is telling about the advantages of using our workspace
          </div>
        </li>
      </ul>
    </div>
    <div class="white">
      <section class="info">
        <header class="info__header">
          <h1 class="info__title">Join our cloud team for the better job</h1>
        </header>
        <form action="" class="form">
          <div class="form__group">
            <input type="text" class="form__field" />
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
            By clicking continue, you agree to our Terms of Service and Privacy
            Policy.
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

.grey {
  background-color: #d6d6d6;
}
</style>
