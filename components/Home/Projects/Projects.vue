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
        { id: 1, date: '18 Feb 2018', name: 'Blanccstate', category: 'Website' },
        { id: 2, date: '18 Feb 2018', name: 'the clinic', category: 'Website' },
        { id: 3, date: '18 Feb 2018', name: 'Minimal Portfolio', category: 'Website' },
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
      display: grid;
      grid-template: repeat(2, 1fr) / repeat(4, 1fr);
      grid-gap: 20px;
    }
  }

  &__item {
    display: flex;
    width: 100%;
    margin-bottom: 5%;
    cursor: pointer;

    &:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    &:nth-child(2n) {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 1;
    }

    &:nth-child(3n) {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 3;
    }

    &:nth-child(4n) {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 2;
      grid-row-end: 3;
    }

    @include breakpoint($md) {
      margin-bottom: 0;
    }
  }
}
</style>

