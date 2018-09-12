<template>
  <section class="projects">
    <container>
      <h1 class="projects__header">Projects</h1>
      <div class="projects__inner">
        <app-project-item
          v-for="project in projects"
          :key="project.id"
          :name="project.name"
          :date="project.date"
          :slug="project.slug"
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
  props: {
    projects: { type: Array, required: true }
  },
  components: {
    Container,
    appProjectItem,
  }
}
</script>


<style lang="scss" scoped>
.projects {
  padding: 3rem 0;
  background-color: $light_grey;

  &__header {
    text-align: center;
  }

  &__inner {

    @supports (display: grid) {
      @include breakpoint($md) {
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(4, 1fr);
        grid-template-areas:
          'one one two two'
          'three three four four'
          'five five six six';
        grid-gap: 20px;
      }

      @include breakpoint($lg) {
        display: grid;
        grid-template: repeat(2, 1fr) / repeat(4, 1fr);
        grid-template-areas:
          'one one two three'
          'one one four five';
        grid-gap: 20px;
      }
    }
  }

  &__item {
    display: block;
    width: 100%;
    margin-bottom: 5%;
    cursor: pointer;

    &:first-child {
      grid-area: one;
    }

    &:nth-child(2) {
      grid-area: two;
    }

    &:nth-child(3) {
      grid-area: three;
    }

    &:nth-child(4) {
      grid-area: four;
    }

    &:nth-child(5) {
      grid-area: five;
    }

    @include breakpoint($md) {
      margin-bottom: 0;
    }
  }
}
</style>

