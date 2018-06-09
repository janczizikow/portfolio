<template>
  <div class="menu">
    <div class="container">
        <div class="menu__top">
            <nuxt-link @click.native="toggleMobileMenu" to="/" class="menu__logo">
            <!-- SVG issue: https://github.com/nuxt/nuxt.js/issues/3423 -->
            <svg class="menu__logo-icon">
              <use href="/logo.svg#logo"></use>
            </svg>
          </nuxt-link>
          <button @click="toggleMobileMenu" class="menu__toggle">
            <svg class="menu__toggle-icon">
              <use href="/cross.svg#cross"></use>
            </svg>
          </button>
        </div>
        <div class="menu__links-wrapper">
          <nav class="menu__links">
            <nuxt-link
              v-for="(link, i) in links"
              :key="i"
              :to="link.to"
              class="menu__link"
              exact-active-class="menu__link--active"
              @click.native="toggleMobileMenu">{{ link.title }}</nuxt-link>
          </nav>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      windowWidth: 0,
      links: [
        { to: '/', title: 'Projects' },
        { to: '/about', title: 'About' },
        { to: '/contact', title: 'Contact' },
      ]
    };
  },
  methods: {
    ...mapActions([
      'toggleMobileMenu'
    ]),
    getWindowWidth(e) {
      this.windowWidth = window.innerWidth;
      if ( this.windowWidth > 768 ) {
        this.$store.dispatch('toggleMobileMenu');
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.getWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  }
}
</script>


<style lang="scss" scoped>
@import "~/assets/_vars.scss";
.menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: $dark;
  z-index: 4;

  &__logo {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__logo-icon {
    width: 112px;
    height: 15px;
    color: $white;
    fill: currentColor;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3.625rem;
  }

  &__toggle {
    @extend %btn-reset;
  }

  &__toggle-icon {
    fill: currentColor;
    width: 1.125rem;
    height: 1.125rem;
  }
  &__links-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: calc(100vh - 7.25rem);
  }

  &__links {
    margin: auto;
    width: 100%;
  }

  &__link {
    margin-bottom: 0.75rem;
    display: block;
    font-size: 2.25rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    color: $white;
    opacity: 0.6;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__link--active {
    opacity: 1;
  }
}
</style>
