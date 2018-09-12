<template>
  <main class="project">
      <container fluid>
        <div class="project__center project__intro">
          <h2 class="project__title">{{ name }}</h2>
          <p>{{ description }}</p>
          <template v-if="links">
            <row center middle :gutters="false">
              <app-button
                v-for="(link, i) in links"
                :key="i"
                :class="{'project__btn--second': (i >= 1) }"
                :href="link.url">{{ link.text }}</app-button>
            </row>
          </template>
        </div>
      </container>
    <section class="project__showcase">
      <container fluid>
        <div class="project__center">
          <picture v-for="(photo, i) in photos" :key="photo.id">
            <source media="(min-width: 992px)" :srcset="`${photo.photo.large.url}, ${photo.photo.large_retina.url} 2x`">
            <source media="(min-width: 768px)" :srcset="`${photo.photo.medium.url}, ${photo.photo.medium_retina.url} 2x`">
            <source media="(min-width: 576px)" :srcset="`${photo.photo.small.url}, ${photo.photo.small_retina.url} 2x`">
            <source media="(min-width: 0)" :srcset="`${photo.photo.extra_small.url}, ${photo.photo.extra_small_retina.url} 2x`">
            <img
              class="project__img"
              :key="photo.id"
              :src="photo.photo.large_retina.url"
              :alt="name + '-' + i"/>
          </picture>
        </div>
      </container>
    </section>
    <section class="project__controls">
      <container fluid>
        <div class="project__center">
          <app-controls
            :prev="prev"
            :next="next"/>
        </div>
      </container>
    </section>
  </main>
</template>


<script>
import api from '~/plugins/axios';
import { Container, Row } from '~/components/Layout';
import appButton from '~/components/Button.vue';
import appControls from '~/components/Project/Controls.vue';

export default {
  async asyncData({ params, error }) {
    try {
      const res = await api.get(`/projects/${params.id}`);
      return res.data;
    } catch (e) {
      if (e.request.res) {
        return error({ statusCode: e.request.res.statusCode, message: e.request.res.statusMessage});
      } else {
        return error({ statusCode: e.statusCode, message: e.message});
      }
    }
  },
  components: {
    Container,
    Row,
    appButton,
    appControls,
  },
}
</script>

<style lang="scss" scoped>
.project {

  &__intro {
    margin: 60px 0;
  }

  &__center {
    max-width: 720px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }

  &__title {
    position: relative;
    margin: 0 0 85px;
    text-align: center;
    text-transform: capitalize;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -8px;
      width: 50px;
      height: 2px;
      background-color: $primary;
    }
  }

  &__btn--second {
    margin-top: 1.5rem;
    margin-left: 0;

    @include breakpoint($sm) {
      margin-top: 0;
      margin-left: 1.5rem;
    }
  }

  &__showcase {
    padding: 4rem 0;
    background-color: $light_grey;
  }

  &__img {
    margin-bottom: 3rem;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .08);
  }
}
</style>
