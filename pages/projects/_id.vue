<template>
  <main class="project">
      <container fluid>
        <div class="project__center project__intro">
          <!-- <h2 class="project__title">{{ $route.params.id }}</h2> -->
          <h2 class="project__title">{{ title }}</h2>
          <p>{{ description }}</p>
          <template v-if="introLinks">
            <app-button
            v-for="(link, i) in introLinks"
            :key="i"
            :href="link.link">{{ link.text }}</app-button>
          </template>
        </div>
      </container>
    <section class="project__showcase">
      <container fluid>
        <div class="project__center">
          <!-- <picture> -->
            <!-- <source media="(min-width: 992px)" srcset="/assets/img/projects/jekyll-sleek/jekyll-sleek-1_lg.jpg, /assets/img/projects/jekyll-sleek/jekyll-sleek-1_lg@2x.jpg 2x"> -->
            <img
              class="project__img"
              v-for="(image, i) in images"
              :key="image"
              :src="image"
              :alt="title + '-' + i">
          <!-- </picture> -->
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
import projectsData from '~/static/data.json';

import { Container } from '~/components/Layout';
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

    throw Error('Project not found in data!');

  },
  validate ({ params }) {
    const URLS = projectsData;
    let arr = URLS.projects.map(el => {
      el.title.toLowerCase().replace(/\W+/, '-');
    })
    // console.log(arr);
    // return /(jekyll\-sleek$)/.test(params.id);
    return true;
  },
  components: {
    Container,
    appButton,
    appControls
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

  &__showcase {
    padding: 4rem 0;
  }

  &__img {
    margin-bottom: 3rem;
  }
}
</style>
