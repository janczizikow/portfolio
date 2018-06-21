<template>
  <main class="project">
      <container>
        <div class="project__center project__intro">
          <h2 class="project__title">{{ $route.params.id }}</h2>
          <p>Web design and development of a landing page for an artist. The EP wasn’t released yet, but the website is up and running. Thanks to modern tech (GatsbyJS & React) the browsing experience is lightning fast! Check it out:</p>
          <app-button :href="'https://www.blanccstate.com'">View Website</app-button>
        </div>
      </container>
    <section class="project__showcase">
      <container>
        <div class="project__center">
          <img
            class="project__img"
            v-for="n in 4"
            :key="n"
            :src="'https://www.janczizikow.com/assets/img/projects/blanccstate/blanccstate-' + n + '_lg@2x.jpg'"
            alt="">
        </div>
      </container>
    </section>
    <section class="project__controls">
      <container>
        <div class="project__center">
          <app-controls
            :prev="{text: 'Something', link: '/'}"
            :next="{text: 'Something', link: '/'}"/>
        </div>
      </container>
    </section>
  </main>
</template>


<script>
import { Container } from '~/components/Layout';
import appButton from '~/components/Button.vue';
import appControls from '~/components/Project/Controls.vue';
export default {
  validate ({ params }) {
    return /(jekyll\-sleek$)/.test(params.id);
    // // Must be a number
    // return /^\d+$/.test(params.id)
  },
  components: {
    Container,
    appButton,
    appControls
  }
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
