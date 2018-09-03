<template>
  <section class="dashboard">
    <container>
      <h1>Welcome back.</h1>
      <app-button @click="logOut">Log Out</app-button>
      <nuxt-link to="/">Back home</nuxt-link>
    </container>
  </section>
</template>

<script>
import api from '~/plugins/axios';
import { mapActions } from 'vuex';
import { Container, Row, Column } from '~/components/Layout';
import appButton from '~/components/Button';

export default {
  middleware: 'authenticated',
  fetch({ store }) {
    return store.dispatch('loadSubmissions')
      // .then((res => ({ submissions: res })));
  },
  methods: {
    ...mapActions([
      'logOut'
    ]),
    logOut() {
      this.$store.dispatch('logOut').then(() => {
        this.$router.push('/login');
      });
    }
  },
  components: {
    Container,
    Row,
    Column,
    appButton
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/_vars.scss";

.dashboard {
  background-color: $light_grey
}
</style>
