<template>
  <component :is="tag" :class="getClasses">
    <slot></slot>
  </component>
</template>

<script>
import { hypernate } from '~/mixins';

export default {
  props: {
    xs: [Number, String],
    sm: [Number, String],
    md: [Number, String],
    lg: [Number, String],
    xl: [Number, String],
    xsOffset: [Number, String],
    smOffset: [Number, String],
    mdOffset: [Number, String],
    lgOffset: [Number, String],
    xlOffset: [Number, String],
    xsOrder: [Number, String],
    smOrder: [Number, String],
    mdOrder: [Number, String],
    lgOrder: [Number, String],
    xlOrder: [Number, String],
    tag: {
      type: String,
      default: 'div',
    }
  },
  computed: {
    getClasses() {
      let c = '';
      for (let key in this.$props) {
        if ( this[key] && key !== 'tag' ) {
          c += ` col-${this.hypernate(key)}-${this[key]}`;
        }
      }

      if (!c) {
        c = 'col'
      }
      return c.trim();
    }
  },
  mixins: [hypernate]
}
</script>

<style lang="scss">
@import "../scss/variables";
@import "../scss/mixins/grid";

@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {
  @return "-#{$name}";
}

@mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {
  %grid-column {
    width: 100%;
    min-height: 1px; // Prevent columns from collapsing when empty
    padding-right: ($gutter / 2);
    padding-left: ($gutter / 2);
  }

  @each $breakpoint in map-keys($breakpoints) {
    $infix: breakpoint-infix($breakpoint);
    $bp-val: map-get($breakpoints, $breakpoint);

    .col {
      @extend %grid-column;
    }

    @for $i from 1 through $columns {
      .col#{$infix}-#{$i} {
        @extend %grid-column;
      }
    }

    // make a media query only if breakpoint is above 0
    @if $bp-val > 0 {
      @include media($bp-val) {

        @for $i from 1 through $columns {
          .col#{$infix}-#{$i} {
            @include make-col($i, $columns);
          }
        }

        // Order classes
        @for $i from 0 through $columns {
          .col#{$infix}-order-#{$i} { order: $i; }
        }

        // offset classes
        @for $i from 0 through ($columns - 1) {
          .col#{$infix}-offset-#{$i} {
            @include make-col-offset($i, $columns);
          }
        }

      }
    } @else {

      @for $i from 1 through $columns {
        .col#{$infix}-#{$i} {
          @include make-col($i, $columns);
        }
      }

      // offset classes
      @for $i from 0 through ($columns - 1) {
        .col#{$infix}-offset-#{$i} {
          @include make-col-offset($i, $columns);
        }
      }
    }
  }
}

@include make-grid-columns();
</style>
