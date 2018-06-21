<template>
  <header class="header" itemscope itemtype="http://schema.org/SiteNavigationElement" aria-label="Main navigation">
    <container fluid>
      <div class="header__inner">
        <nuxt-link to="/" class="header__logo">
          <app-logo class="header__icon"/>
        </nuxt-link>
        <button @click="toggleMobileMenu" class="header__toggle">
          <app-burger class="header__toggle-icon"/>
        </button>
        <nav class="header__links">
          <nuxt-link
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            exact-active-class="header__link--active"
            class="header__link"
            itemprop="url">
            <span class="header__link-item" itemprop="name">{{ link.title }}</span>
          </nuxt-link>
        </nav>
      </div>
    </container>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

import { Container } from '~/components/Layout';
import appLogo from '~/assets/images/icons/logo.svg';
import appBurger from '~/assets/images/icons/burger.svg';

export default {
  data() {
    return {
      links: [
        { to: '/', title: 'Projects' },
        { to: '/about', title: 'About' },
        { to: '/contact', title: 'Contact' },
      ]
    };
  },
  methods: mapActions([
    'toggleMobileMenu'
  ]),
  components: {
    Container,
    appLogo,
    appBurger
  }
}
</script>


<style lang="scss" scoped>
@import "~/assets/_vars.scss";

.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255,255,255,0.96);
  // border-bottom: 1px solid $light_grey;
  // box-shadow:  0 0 3px 0 rgba(0,0,0,0.22);
  // box-shadow: 0 1px 4px 0 rgba(0,0,0,.08);
  z-index: 3;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3.625rem;
  }

  &__logo {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__icon {
    width: 112px;
    height: 15px;
    color: $dark;
    fill: currentColor;
  }

  &__toggle {
    @extend %btn-reset;
    height: 100%;

    @include breakpoint($lg) {
      display: none;
    }
  }

  &__toggle-icon {
    fill: currentColor;
    width: 1.5rem;
    height: 0.875rem;
  }

  &__links {
    display: none;

    @include breakpoint($lg) {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    padding: 0 0.9375rem;
    height: 100%;
    color: $light_dark;
    transition: color .2s linear;

    &:last-child {
      padding-right: 0;
    }

    &:hover {
      color: $dark;

      // Breaks the BEM convetion, but rules are meant to be broken, right?
      .header__link-item::before {
        left: 0;
        right: auto;
        width: 100%;
      }
    }

    &--active {
      color: $dark;

      // as the above, sorry BEM
      .header__link-item::before {
        left: 0;
        right: auto;
        width: 100%;
      }
    }
  }

  &__link-item {
    position: relative;

    &::before {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: .125rem;
      background-color: $primary;
      transition: width .24s ease-in-out;
    }
  }
}
</style>
