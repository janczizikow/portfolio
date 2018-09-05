<template>
  <figure :class="'progressive-img'">
    <img
      data-sizes="auto"
      :src="placeholder ? placeholderImg : false"
      :data-srcset="responsive ? retina : src"
      :class="[ 'lazyload', { 'blur-up': blur }, imgClass ]"
      :alt="alt"
    />
      <!-- https://github.com/nuxt/nuxt.js/issues/2582 -->
      <noscript inline-template><img :src="src" :alt="alt"/></noscript>
      <slot></slot>
  </figure>
</template>

<script>
export default {
  props: {
    responsive: { type: Boolean, default: true },
    blur: { type: Boolean, default: true },
    alt: { type: String, required: true },
    src: { type: String, required: true },
    placeholder: { type: [Boolean, String], default: false },
    imgClass: { type: String }
  },
  computed: {
    retina() {
      const index = this.src.lastIndexOf('.');
      return `${this.src}, ${this.src.substr(0, index)}@2x${this.src.substr(index, this.src.length)} 2x`;
    },
    placeholderImg() {
      const index = this.src.lastIndexOf('.');
      return `${this.src.substr(0, index)}_placeholder${this.src.substr(index, this.src.length)}`;
    }
  }
}
</script>

<style lang="scss">
.progressive-img {
  background:#e7e7e7;
  position: relative;
  overflow: hidden;
  position: relative;
  display: block;
  max-width: 100%;

  &::after {
    content: "";
    display: block;
    height: 0;
    width: 100%;
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    font-family: "blur-up: always", "object-fit: cover";
    object-fit: cover;
  }
}

.blur-up {
  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="12" /></filter></svg>#filter');
  filter: blur(12px);
  transition: filter .1s;
}

.blur-up.lazyloaded {
  filter: blur(0);
}
</style>
