<template>
  <component :is="tag" :class="getClass">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    fluid: { type: Boolean, default: false },
    tag: { type: String, default: 'div' }
  },
  computed: {
    getClass() {
      return this.fluid ? 'container--fluid' : 'container';
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/mixins/grid";

.container,
.container--fluid {
  @include make-container();
}

.container {
  @include make-container-breakpoints();
}
</style>
