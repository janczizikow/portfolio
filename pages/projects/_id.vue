<template>
  <main class="project">
      <container fluid>
        <div class="project__center project__intro">
          <h2 class="project__title">{{ title }}</h2>
          <p>{{ description }}</p>
          <template v-if="introLinks">
            <row center middle :gutters="false">
              <app-button
                v-for="(link, i) in introLinks"
                :key="i"
                :class="{'project__btn--second': (i >= 1) }"
                :href="link.link">{{ link.text }}</app-button>
            </row>
          </template>
        </div>
      </container>
    <section class="project__showcase">
      <container fluid>
        <div class="project__center">
          <picture v-for="(image, i) in images" :key="image">
            <source media="(min-width: 992px)" :srcset="'/images/projects/' + $route.params.id + '/' + $route.params.id + '-' + (i + 1) + '_lg.jpg' + ', ' + '/images/projects/' + $route.params.id + '/' + $route.params.id + '-' + (i + 1) + '_lg@2x.jpg 2x'">
            <source media="(min-width: 768px)" :srcset="'/images/projects/' + $route.params.id + '/' + $route.params.id + '-' + (i + 1) + '_md.jpg' + ', ' + '/images/projects/' + $route.params.id + '/' + $route.params.id + '-' + (i + 1) + '_md@2x.jpg 2x'">
            <source media="(min-width: 576px)" :srcset="'/images/projects/' + $route.params.id + '/' + $route.params.id + '-' + (i + 1) + '_sm.jpg' + ', ' + '/images/projects/' + $route.params.id + '/' + $route.params.id + '-' + (i + 1) + '_sm@2x.jpg 2x'">
            <source media="(min-width: 0)" :srcset="'/images/projects/' + $route.params.id + '/' + $route.params.id + '-' + (i + 1) + '_xs.jpg' + ', ' + '/images/projects/' + $route.params.id + '/' + $route.params.id + '-' + (i + 1) + '_xs@2x.jpg 2x'">
            <img
              class="project__img"
              :key="image"
              :src="image"
              :alt="title + '-' + i"/>
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
// FIXME: Mixins issue
import projectsData from '~/static/data.json';

import { Container, Row } from '~/components/Layout';
import appButton from '~/components/Button.vue';
import appControls from '~/components/Project/Controls.vue';

export default {
  asyncData({ params }) {
    const data = projectsData;

    function getCurProjectData(str) {
      return str.toLowerCase().replace(/\W+/, '-');
    }

    const index = data.projects.findIndex(el => {
      if ( getCurProjectData(el.title) === params.id ) {
        return el;
      }
    });

    if (index !== -1) {
      return data.projects[index];
    }
  },
  validate ({ params }) {
    //FIXME: This should be dynamic
    const URLS = projectsData.projects.map(project => project.title.toLowerCase().replace(/\W+/g, '-'));
    return URLS.some(el => el === params.id);
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
@import "~/assets/_vars.scss";

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
