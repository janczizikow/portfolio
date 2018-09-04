<template>
  <headroom
    :speed="300"
    :easing="'ease'"
    :offset="500"
    :style="stylesOverride"
    :disabled="!isHeadroomActive">
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
              v-for="(link, i) in afterAuthLinks"
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
  </headroom>
</template>

<script>
import { mapActions } from 'vuex';
import { headroom } from 'vue-headroom';

import { Container } from '~/components/Layout';
import appLogo from '~/assets/images/icons/logo.svg';
import appBurger from '~/assets/images/icons/burger.svg';

export default {
  data() {
    return {
      windowWidth: 0,
      isHeadroomActive: true,
      stylesOverride: null,
      links: [
        { to: '/', title: 'Projects' },
        { to: '/about', title: 'About' },
        { to: '/contact', title: 'Contact' },
      ],
    };
  },
  methods: {
    ...mapActions([
      'toggleMobileMenu'
    ]),
    getWindowWidth(e) {
      this.windowWidth = window.innerWidth;
      if ( this.windowWidth < 992 ) {
        this.isHeadroomActive = false;
        this.stylesOverride = 'transform: translate3d(0, 0, 0)';
      } else {
        this.isHeadroomActive = true;
        this.stylesOverride = null;
      }
    }
  },
  computed: {
    afterAuthLinks() {
      if (this.$store.getters['auth/isAuth']) {
        return this.links.concat({ to: '/dashboard', title: 'Dashboard' });
      } else {
        return this.links;
      }
    }
  },
  components: {
    headroom,
    Container,
    appLogo,
    appBurger
  },
  mounted() {
    this.getWindowWidth();
    window.addEventListener('resize', this.getWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  }
}
</script>


<style lang="scss" scoped>
@import "~/assets/_vars.scss";

.headroom--top {
  box-shadow: none!important;
}

.headroom--not-top {
  box-shadow:  0 0 3px 0 rgba(0,0,0,0.22);
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.08);
}

@include breakpoint($lg) {
  .header {
    box-shadow: none!important;
  }
}
.header {
  box-shadow:  0 0 3px 0 rgba(0,0,0,0.22);
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.08);
  width: 100%;
  background-color: rgba(255,255,255,0.96);


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
