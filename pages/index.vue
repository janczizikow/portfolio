<template>
  <main>
    <app-hero>
      <h1 slot="header">{{ header }}</h1>
      <p slot="lead">{{ lead }}</p>
    </app-hero>
    <app-projects/>
    <app-cta/>
  </main>
</template>

<script>
import appHero from '~/components/Home/Hero.vue';
import appProjects from '~/components/Home/Projects/Projects.vue';
import appCta from '~/components/Home/Cta.vue';
export default {
  data() {
    return {
      header: 'Just a simple dude who wants to build cool stuff.',
      lead: 'Previously UX Project manger at Motion Global - an e-commerce retailer of eyewear and contact lenses. Now, a self-starting web developer seeking to launch a career building web applications and services. Familiar with development and deployment processes for many web-based technologies.',
    };
  },
  components: {
    appHero,
    appProjects,
    appCta,
  }
}
</script>