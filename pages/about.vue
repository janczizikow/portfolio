<template>
  <main>
    <container>
      <section class="about">
        <row middle>
          <column :lgOrder="2" :lg="6">
            <img src="https://images.unsplash.com/photo-1529349910542-f85dcb84309e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ea07694667114afb2b158c5f418fb3b&auto=format&fit=crop&w=2550&q=80">
          </column>
          <column :lg="6">
            <h1>Hey, nice to meet you! 👋</h1>
            <p>I’m Jan, 26 year old web developer from Poland. I’m that guy on the picture enjoying Thai Wake Park and trying to wakeboard for the first time - it was a blast! Anyways, back to serious stuff, during my business studies at collage I got interested in building websites. After graduating I worked for roughly a year as a UX Project Manager in an e-commerce company. As my job involed working with UX designers and develeopers, my interested in web development increased further - I started learning more and more in my free time after work and at some point I decided to take a changed in my career and persue my passion - making great web experiences, this time as a developer. Currently I’m in Berlin, Germany, where I joined a coding bootcamp and I’m looking for new job opportunties.</p>
            <app-button href="/CV.pdf">View CV</app-button>
          </column>
        </row>
      </section>
    </container>
  </main>
</template>

<script>
import { Container, Row, Column } from '~/components/Layout'
import appButton from '~/components/Button.vue'
export default {
  components: {
    Container,
    Row,
    Column,
    appButton,
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/_vars.scss";

.about {
  padding: 4rem 0;
}

</style>
