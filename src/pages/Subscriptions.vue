<script setup lang="ts">
import Typography from '@/components/Typography.vue';
</script>

<template>
  <div class="container">
    <div>
      <header class="header__main">
        <Typography>Billing</Typography>
      </header>

      <main>
        <div class="billing">
          <div class="row">
            <div class="col">
              <div class="info">
                <div class="info__title">Next billing date</div>
                <div class="info__description">December 23, 2022</div>
              </div>
            </div>
            <div class="col flex-2">
              <div class="info">
                <div class="info__title">Bill total</div>
                <div class="info__description">$100</div>
              </div>
            </div>
            <div class="col flex-2">
              <div class="info info--no-border">
                <div class="info__title">Number of users</div>
                <div class="info__description">3</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <div>
      <header class="header">
        <Typography>Plans</Typography>
      </header>

      <main>
        <div class="plans">
          <div class="row-2">
            <div class="col">
              <div class="plan">
                <div class="plan__row">
                  <div class="plan__col">
                    <div class="plan__title">Basic Plan</div>
                    <div class="plan__description">
                      The essentials for a budding buisness: update and manage
                      your information
                    </div>
                  </div>
                  <div class="plan__col">
                    <div class="plan__price">20$</div>
                    <div class="plan__price-info">per user/month</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="plan">
                <div class="plan__row">
                  <div class="plan__col">
                    <div class="plan__title">Basic Plan</div>
                    <div class="plan__description">
                      The essentials for a budding buisness: update and manage
                      your information
                    </div>
                  </div>
                  <div class="plan__col">
                    <div class="plan__price">20$</div>
                    <div class="plan__price-info">per user/month</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="plan">
                <div class="plan__row">
                  <div class="plan__col">
                    <div class="plan__title">Basic Plan</div>
                    <div class="plan__description">
                      The essentials for a budding buisness: update and manage
                      your information
                    </div>
                  </div>
                  <div class="plan__col">
                    <div class="plan__price">20$</div>
                    <div class="plan__price-info">per user/month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.billing {
  margin-bottom: 40px;
  padding: 16px 32px 32px 32px;
  border: 2px solid var(--neutral-40-color);
  box-shadow: 0px 0px 4px 1px rgba(0, 14, 51, 0.2);
  border-radius: 8px;
}

.header__main {
  margin: 40px 0 24px 0;
}

.header {
  margin-bottom: 24px;
}

.info {
  display: grid;
  gap: var(--base-gap);
  border-right: 1px solid var(--neutral-40-color);
  padding-right: 24px;

  &__title {
    font-size: 16px;
  }

  &__description {
    font-size: 32px;
    font-weight: bold;
  }

  &--no-border {
    border: none;
  }
}

.row {
  display: flex;
  gap: 85px;
}

.row-2 {
  display: flex;
  gap: 24px;
}

.col {
  flex: 3;
}

.flex-2 {
  flex: 2;
}

.plan {
  padding: 16px 32px;
  border: 1px solid var(--neutral-40-color);
  box-shadow: 0px 0px 4px 1px rgba(0, 14, 51, 0.2);
  border-radius: var(--base-radius);

  &__row {
    display: flex;
    gap: 60px;
  }

  &__col {
    display: grid;
    gap: 12px;
  }

  &__title {
    font-size: 20px;
    font-weight: bold;
  }

  &__price {
    font-size: 40px;
    font-weight: bold;
  }

  &__price-info {
    color: var(--neutral-80-color);
    font-size: 13px;
  }
}
</style>
