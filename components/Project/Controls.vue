<template>
  <row middle between :gutters="false" class="controls">

    <div class="controls__item controls__item--prev">
      <template v-if="prev">
        <span class="controls__meta">Previous</span>
        <nuxt-link :to="`/projects/${prev.slug}`" class="controls__link">
          <span>
            <app-arrow-left class="controls__icon"/>
          </span>
          {{ prev.name }}
        </nuxt-link>
      </template>
    </div>

    <div class="controls__item controls__item--next">
      <template v-if="next">
        <span class="controls__meta">Next</span>
        <nuxt-link :to="`/projects/${next.slug}`" class="controls__link">
          {{ next.name }}
          <span>
            <app-arrow-right class="controls__icon"/>
          </span>
        </nuxt-link>
      </template>
    </div>

  </row>
</template>

<script>
import { Row } from '~/components/Layout';
import appArrowLeft from '~/assets/images/icons/arrow-left.svg?inline';
import appArrowRight from '~/assets/images/icons/arrow-right.svg?inline';

export default {
  props: {
    prev: { type: Object },
    next: { type: Object }
  },
  components: {
    Row,
    appArrowLeft,
    appArrowRight,
  }
}
</script>


<style lang="scss" scoped>
.controls {
  padding: 1.375rem 0 1.25rem;

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

    .controls__icon {
      transition: all .2s linear;
    }

    &:hover {
      color: $primary;

      .controls__icon {
        fill: $primary;
      }
    }
  }
}

</style>
