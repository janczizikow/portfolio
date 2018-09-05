<template>
  <div class="site">
    <app-header/>

    <transition name="fade" appear>
      <app-mobile-menu v-if="isMobileMenuOpen"/>
    </transition>

    <nuxt class="site__content"/>

    <app-footer/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import appHeader from '~/components/Header/Header.vue';
import appMobileMenu from '~/components/Header/MobileMenu.vue';
import appFooter from '~/components/Footer.vue';

export default {
  computed: mapGetters([
    'isMobileMenuOpen'
  ]),
  components: {
    appHeader,
    appFooter,
    appMobileMenu,
  },
  mounted() {
    navigator.serviceWorker.getRegistrations()
      .then(function(registrations) {
        for (let registration of registrations) {
          registration.unregister()
        }
      })
  }
}
</script>


<style lang="scss">
@import "normalize.css";

*::before,
*::after,
* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  font-family: $font-stack;
  font-size: 1rem;
  line-height: 1.5;
  color: $light_dark;
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: $dark;
  font-weight: 500;
}

a {
  color: $primary;
  text-decoration: none;
  transition: color .2s linear;

  &:hover {
    color: $primary_light;
  }
}

// responsive images
img {
  max-width: 100%;
  height: auto;
  width: auto;
  vertical-align: middle;
}

img::selection {
  background: transparent;
}

figure {
  margin: 0;
}

::selection {
  color: $white;
  background-color: $primary;
}

.site {
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
}

.site__content {
  margin-top: 3.625rem;
  flex: 1;
}

.icon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  fill:currentColor;
  transition: all .5s ease;
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}

.page-enter, .page-leave-to {
  opacity: 0;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: scale(0.98);
}

.fade-enter-active {
  transition: opacity .2s ease-out, transform .2s ease-out;
}

.fade-leave-active {
  transition: all .2s ease-out;
}
</style>
