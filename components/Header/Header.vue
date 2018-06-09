<template>
  <header class="header" itemscope itemtype="http://schema.org/SiteNavigationElement" aria-label="Main navigation">
    <div class="header__container">
      <div class="header__inner">
        <nuxt-link to="/" class="header__logo">
          <!-- SVG issue: https://github.com/nuxt/nuxt.js/issues/3423 -->
          <svg class="header__icon">
            <use href="/logo.svg#logo"></use>
          </svg>
        </nuxt-link>
        <button @click="toggleMobileMenu" class="header__toggle">
          <svg class="header__toggle-icon">
            <use href="/burger.svg#burger"></use>
          </svg>
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
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

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
  ])
}
</script>


<style lang="scss" scoped>
@import "breakpoint-sass";
@import "~/assets/_vars.scss";
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: $white;
  border-bottom: 0.125rem solid $light_grey;
  z-index: 3;

  &__container { @include container(1200px) }

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
    padding: 0;
    height: 100%;
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;

    @include breakpoint($md) {
      display: none;
    }
  }

  &__toggle-icon {
    // color: $dark;
    fill: currentColor;
    width: 1.5rem;
    height: 0.875rem;
  }

  &__links {
    display: none;

    @include breakpoint($md) {
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
    transition: color .2s linear;

    &:last-child {
      padding-right: 0;
    }

    &:hover {
      color: $dark;

      // Breaks the BEM convetion, but rules are meant to be broken, right?
      .header__link-item::before {
        width: 100%;
      }
    }

    &--active {
      color: $dark;

      // as the above, sorry BEM
      .header__link-item::before {
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
      left: 0;
      bottom: 0;
      height: .125rem;
      width: 0;
      background-color: $primary;
      transition: width .35s ease;
    }
  }
}
</style>
