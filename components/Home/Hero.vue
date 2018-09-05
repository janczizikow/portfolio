<template>
  <section class="hero">
    <container class="hero__inner">
      <row middle between>

        <column :lg="6">
          <slot name="header"></slot>
          <slot name="lead"></slot>
          <div class="hero__scroll">
            <arrow-down />
          </div>
        </column>

        <column :lg="6" class="hero__hidden-md">
          <img src="~/assets/images/illustrations/hero__img.svg" alt="Illustration">
        </column>

      </row>
    </container>
  </section>
</template>

<script>
import { Container, Row, Column } from '~/components/Layout';
import arrowDown from '~/assets/images/icons/arrow-down.svg?inline';

export default {
  components: {
    Container,
    Row,
    Column,
    arrowDown
  }
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 2.375rem 0;
  width: 100%;
  min-height: 16.25rem;

  &__inner {
    position: relative;
  }

  &__hidden-md {
    display: none;
    visibility: hidden;

    @include breakpoint($lg) {
      display: block;
      visibility: visible;
    }
  }

  &__scroll {
    display: none;
    visibility: hidden;

    @include breakpoint($lg) {
      display: block;
      visibility: visible;
      position: absolute;
      left: 20px;
      bottom: 30px;
      opacity: .65;
      animation: scrollDown 2s ease infinite;
    }
  }
}

@keyframes scrollDown {
  0% {
    transform: translateY(-16px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-16px);
  }
}
</style>

