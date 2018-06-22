<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :disabled="disabled"
    :type="type"
    :target="href ? '_blank' : null"
    :rel="href ? 'noopener' : null"
    :class="['btn', `btn--${color}`, {'btn--block': block}, {'btn--loading': loading}]"
    v-bind="$attrs"
    v-on="$listeners">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    to: { type: [ String, Object ], default: null },
    href: { type: [ String, Object ] },
    block: { type: [Boolean], deafult: false },
    disabled: { type: Boolean, default: false },
    color: { type: String, default: 'primary' },
    loading: { type: Boolean, default: false },
  },
  computed: {
    tag() {
      if ( this.to && /https?/.test(this.to) === false ) {
        return 'nuxt-link'
      } else if ( this.href || /https?/.test(this.to) ) {
        return 'a'
      } else {
        return 'button'
      }
    },
    type() {
      return !this.to && !this.href ? 'button' : null;
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~/assets/_vars.scss";

.btn {
  position: relative;
  display: inline-block;
  @extend %btn-reset;
  padding: .75rem 2rem;
  text-align: center;
  white-space: nowrap;
  line-height: 1.5;
  color: $white;
  font-weight: 500;
  border-radius: 200px;
  user-select: none;
  transition: all .2s cubic-bezier(.02,.01,.47,1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: currentColor;
    border-radius: 50px;
    z-index: -1;
    opacity: 0;
    transform: scale(.2);
    transition: all .2s cubic-bezier(.02,.01,.47,1);
  }

  &:not(:disabled) {
    cursor: pointer;

    @include breakpoint($md) {
      &:hover {
      transition: all .3s cubic-bezier(.02,.01,.47,1);
      transform: scale(1.1);
      box-shadow: 0 1px 8px rgba(58,51,53,.4);

        &::before {
          opacity: .15;
          transition: all .3s cubic-bezier(.02,.01,.47,1);
          transform: scale(1);
        }
      }
    }
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &--block {
    display: block;
    width: 100%;
  }

  &--primary {
    background-color: $primary;

  }

  &--success {
    background-color: $success;
  }

  &--error {
    background-color: $error;
  }
}
</style>
