<template>
  <component :is="tag" :class="getClasses">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    gutters: { type: Boolean, default: true },
    reverse: { type: Boolean, default: false },
    start: { type: Boolean, default: false },
    center: { type: Boolean, default: false },
    end: { type: Boolean, default: false },
    top: { type: Boolean, default: false },
    middle: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    around: { type: Boolean, default: false },
    between: { type: Boolean, default: false },
    tag: { type: String, default: 'div' }
  },
  computed: {
    getClasses() {
      let c = 'row';
      for (let key in this.$props) {
        if ( this[key] && key !== 'tag' ) {
          c += ` row--${key}`;
        }
      }
      return c;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/mixins/grid";

.row {
  @include make-row();

  &--gutters {
    margin-left: -$grid-gutter-width / 2;
    margin-right: -$grid-gutter-width / 2;
  }

  &--reverse {
    flex-direction: row-reverse;
  }

  &--start {
    align-items: flex-start;
    text-align: start;
  }

  &--center {
    justify-content: center;
    text-align: center;
  }

  &--end {
    justify-content: flex-end;
    text-align: end;
  }

  &--top {
    align-items: flex-start;
  }

  &--middle {
    align-items: center;
  }

  &--bottom {
    align-items: flex-end;
  }

  &--around {
    justify-content: space-around;
  }

  &--between {
    justify-content: space-between;
  }
}
</style>
