<template>
  <nuxt-link
    class="card"
    :to="'/projects/' + projectURL">
    <figure class="card__thumb">
      <img
        class="card__img"
        :src="'/images/' + projectURL + '.jpg'"
        :alt="title"/>
      <figcaption class="card__inner">
        <p>{{ date }}</p>
        <h3 class="card__title">{{ title }}</h3>
      </figcaption>
    </figure>
  </nuxt-link>
</template>

<script>


export default {
  props: {
    title: { type: String, required: true },
    date: [String, Object],
    category: String
  },
  computed: {
    projectURL() {
      return this.title.toLowerCase().replace(/\W+/, '-');
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: $dark;
    opacity: 0;
    z-index: 1;
    transition: opacity .62s cubic-bezier(.05, 0.2, .1, 1);
  }

  &__thumb {
    position: relative;
  }

  &__inner {
    position: absolute;
    top: auto;
    bottom: 30px;
    left: 0;
    padding: 30px;
    padding-bottom: 0;
    color: $white;
    z-index: 2;
  }

  &__title {
    color: $white;
  }

  &__img {
    transition: transform .62s cubic-bezier(.05, .2, .1, 1);
  }


  @include breakpoint($lg) {

    &:hover {

      &::before {
        opacity: 0.6;
      }

      .card__img {
        transform: scale(1.05);
      }
    }
  }
}
</style>

