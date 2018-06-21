<template>
  <div class="controls">

    <div class="controls__item controls__item--prev">
      <span class="controls__meta">Previous</span>
      <nuxt-link :to="prev.link" class="controls__link">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11">
            <path fill="fillColor" d="M5.647 1.718c.37-.434.323-1.09-.106-1.465A1.016 1.016 0 0 0 4.095.36L.25 4.875a1.05 1.05 0 0 0 .017 1.378l3.95 4.407c.38.424 1.03.456 1.448.07a1.05 1.05 0 0 0 .07-1.468l-3.34-3.725 3.253-3.819z"></path>
          </svg>
        </span>
        {{ prev.text }}
      </nuxt-link>
    </div>

    <div class="controls__item controls__item--next">
      <span class="controls__meta">Next</span>
      <nuxt-link :to="next.link" class="controls__link">
        {{ next.text }}
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11">
            <path fill="#fillColor" d="M.353 9.282c-.37.434-.323 1.09.106 1.465a1.016 1.016 0 0 0 1.446-.107L5.75 6.125a1.05 1.05 0 0 0-.017-1.378L1.784.34A1.015 1.015 0 0 0 .336.27a1.05 1.05 0 0 0-.07 1.468l3.34 3.725L.353 9.282z"></path>
          </svg>
        </span>
      </nuxt-link>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object
    },
    next: {
      type: Object
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~/assets/_vars.scss";

.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.375rem 0 1.25rem;
  border-top: 1px solid $grey;

  &__item {
    display: flex;
    flex-direction: column;

    &--prev {
      align-items: flex-start;
      text-align: left;
    }

    &--next {
      align-items: flex-end;
      text-align: right;
    }
  }

  &__meta {
    font-size: 0.875rem;
  }

  &__link {
    color: $dark;
    font-weight: 500;
  }
}

</style>
