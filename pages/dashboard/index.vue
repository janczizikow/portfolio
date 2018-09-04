<template>
  <section class="dashboard">
    <container>
      <h1>Welcome back.</h1>
      <app-button @click="logOut">Log Out</app-button>
      <div>
        <h2>Recent submissions</h2>
        <ul>
          <li v-for="submission in submissions" :key="submission.id">
            <nuxt-link :to="`/dashboard/submission/${submission.id}`">{{submission.name}}</nuxt-link>
          </li>
        </ul>
      </div>
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
  async asyncData(context) {
    try {
      const data = await context.store.dispatch('auth/loadSubmissions');
      return { submissions: data.data }
    } catch(error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions([
      'auth/logOut'
    ]),
    logOut() {
      this.$store.dispatch('auth/logOut').then(() => {
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
