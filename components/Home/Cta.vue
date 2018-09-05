<template>
  <section class="cta">
    <div class="container">
      <div class="cta__inner">
        <h1 class="cta__text">Hiring a web developer?</h1>
        <app-button to="/contact" color="success">Let's talk</app-button>
      </div>
    </div>
  </section>
</template>

<script>
import appButton from '~/components/Button.vue';
export default {
  components: {
    appButton,
  }
}
</script>


<style lang="scss" scoped>
.cta {
  padding: 3rem 1rem;
  background-color: $primary;

  &__inner {
    text-align: center;
  }

  &__text {
    margin-top: 0;
    color: $white;
  }
}
</style>
