<template>
  <div class="menu">
    <container fluid>
        <div class="menu__top">
            <nuxt-link @click.native="toggleMobileMenu" to="/" class="menu__logo">
            <!-- SVG issue: https://github.com/nuxt/nuxt.js/issues/3423 -->
            <app-logo class="menu__logo-icon"/>
          </nuxt-link>
          <button @click="toggleMobileMenu" class="menu__toggle">
            <app-menu-toggle class="menu__toggle-icon"/>
          </button>
        </div>
        <div class="menu__links-wrapper">
          <transition-group name="fade-in" tag="nav" appear class="menu__links">
            <nuxt-link
              v-for="(link, i) in afterAuthLinks"
              :key="i"
              :to="link.to"
              :style="{'transition-delay': (.05 + 0.07 * (i + 1) ) + 's'}"
              class="menu__link"
              exact-active-class="menu__link--active"
              @click.native="toggleMobileMenu">{{ link.title }}</nuxt-link>
          </transition-group>
        </div>
    </container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { Container } from '~/components/Layout';
import appLogo from '~/assets/images/icons/logo.svg?inline';
import appMenuToggle from '~/assets/images/icons/cross.svg?inline';

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
      if ( this.windowWidth > 992 ) {
        this.$store.dispatch('toggleMobileMenu');
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
    Container,
    appLogo,
    appMenuToggle
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
.menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: $dark;
  z-index: 19999;

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
    height: 100%;
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
    letter-spacing: 1.5px;
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

.fade-in-enter {
  opacity: 0;
  transform: translateY(-24px);
}

.fade-in-enter-active {
  transition: opacity .5s ease, transform 0.5s ease;
}

</style>
