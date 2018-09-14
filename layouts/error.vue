<template>
  <div class="error">
    <div class="container">
      <div class="error__illustration">
        <app-error-illustration/>
      </div>
      <h1 class="error__title">{{title}}</h1>
      <p class="error__text">{{message}}</p>
      <app-button to="/">Go Home</app-button>
    </div>
  </div>
</template>


<script>
import appButton from '~/components/Button.vue';
import appErrorIllustration from '~/assets/images/illustrations/404.svg?inline';

export default {
  props: {
    error: { type: [Object, Error] }
  },
  computed: {
    title() {
      if (this.error.statusCode === 404) {
        return "Page Not Found";
      } else {
        return this.error.message;
      }
    },
    message() {
      if (this.error.statusCode === 404) {
        return "The page you are looking for doesn't seem to exist…";
      } else {
        return "Sorry, something went wrong";
      }
    }
  },
  components: {
    appButton,
    appErrorIllustration
  }
}
</script>

<style lang="scss">
.error {
  padding: 3rem 0;
  text-align: center;
  background-color: #F4F6FB;

  &__illustration {
    margin-left: 30px;
  }

  &__title {
    margin-top: -64px;
    font-size: 2rem;
  }

  &__text {
    margin: 1rem auto;
    width: 280px;
  }
}
</style>
