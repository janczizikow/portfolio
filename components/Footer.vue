<template>
  <footer class="footer">
    <div class="footer__inner">
      <ul class="footer__social">
        <li
          v-for="(item, i) in socialLinks"
          :key="i"
          class="footer__social-item">
          <a
            :href="item.to"
            class="footer__social-item__link"
            rel="noopener"
            target="_blank">
            <component
              :is="item.component"
              class="icon footer__social-item__icon"
            />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import appGithubIcon from '~/assets/images/icons/github.svg?inline';
import appCodepenIcon from '~/assets/images/icons/codepen.svg?inline';
import appLinkedinIcon from '~/assets/images/icons/linkedin.svg?inline';

export default {
  data() {
    return {
      socialLinks: [
        { to: 'https://github.com/janczizikow/', component: 'app-github-icon'},
        { to: 'https://codepen.io/hollow3d/', component: 'app-codepen-icon'},
        { to: 'https://www.linkedin.com/in/janczizikow', component: 'app-linkedin-icon'},
      ]
    };
  },
  components: {
    appGithubIcon,
    appCodepenIcon,
    appLinkedinIcon
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 3.625rem 0;
  background-color: $dark;
  color: $white;

  &__inner {
    text-align: center;
  }

  &__social {
    @extend %list-reset;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &__social-item {

    &__link {
      padding: 0 0.9375rem;
      color: $white;
      transition: opacity .2s linear;

      &:hover {
        opacity: 0.7;
      }
    }

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
}
</style>