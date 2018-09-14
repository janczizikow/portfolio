<template>
  <nuxt-link
    class="card"
    :to="`/projects/${slug}`">
    <app-progresive-img
      class="card__thumb"
      imgClass="card__img"
      :placeholder="placeholder"
      :srcset="srcset"
      :alt="name">
      <figcaption class="card__inner">
        <p>{{ date }}</p>
        <h3 class="card__title">{{ name }}</h3>
      </figcaption>
    </app-progresive-img>
  </nuxt-link>
</template>

<script>
import appProgresiveImg from '~/components/ProgressiveImg.vue';

export default {
  props: {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    date: [String, Object],
    category: String,
    thumbnail: { type: Object, required: true },
    big: { type: Boolean,required: true }
  },
  computed: {
    placeholder() {
      return this.big ? this.thumbnail.big_placeholder.url : this.thumbnail.small_placeholder.url
    },
    srcset() {
      if (this.big) {
        return `${this.thumbnail.big.url}, ${this.thumbnail.big_retina.url} 2x`;
      } else {
        return `${this.thumbnail.small.url}, ${this.thumbnail.small_retina.url} 2x`;
      }
    }
  },
  components: {
    appProgresiveImg
  }
}
</script>

<style lang="scss">
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
    overflow: hidden;

    &::after {
      content: "";
      display: block;
      height: 0;
      width: 100%;
      padding-bottom: 100%;
    }

    .card__img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      transition: transform .62s cubic-bezier(.05, .2, .1, 1);
    }
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

