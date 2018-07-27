<template>
  <section class="projects">
    <container>
      <h1 class="projects__header">Projects</h1>
      <div class="projects__inner">
        <app-project-item
          v-for="project in projects"
          :key="project.id"
          :title="project.name"
          :date="project.date"
          class="projects__item"
          />
      </div>
    </container>
  </section>
</template>

<script>
import { Container } from '~/components/Layout';
import appProjectItem from './ProjectItem.vue';
export default {
  data() {
    return {
      projects: [
        { id: 0, date: '18 Feb 2018', name: 'Jekyll Sleek', category: 'Website' },
        { id: 1, date: '14 Jan 2018', name: 'Blanccstate', category: 'Website' },
        { id: 2, date: '21 Nov 2016', name: 'the clinic', category: 'Website' },
        { id: 3, date: '26 Oct 2016', name: 'Minimal Portfolio', category: 'Website' },
      ]
    };
  },
  components: {
    Container,
    appProjectItem,
  }
}
</script>


<style lang="scss" scoped>
@import "~/assets/_vars.scss";

.projects {
  padding: 3rem 0;
  background-color: $light_grey;

  &__header {
    text-align: center;
  }

  &__inner {

    @include breakpoint($md) {
      @supports (display: grid) {
        display: grid;
        grid-template: repeat(2, 1fr) / repeat(4, 1fr);
        grid-template-areas:
          'one one two two'
          'one one three four';
        grid-gap: 20px;
      }
    }
  }

  &__item {
    display: flex;
    width: 100%;
    margin-bottom: 5%;
    cursor: pointer;

    &:first-child {
      grid-area: one;
    }

    &:nth-child(2n) {
      grid-area: two;
    }

    &:nth-child(3n) {
      grid-area: three;
    }

    &:nth-child(4n) {
      grid-area: four;
    }

    @include breakpoint($md) {
      margin-bottom: 0;
    }
  }
}
</style>

