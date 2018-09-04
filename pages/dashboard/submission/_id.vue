<template>
  <section>
    <container>
      <h1>Submission {{submission.id}}</h1>
      <p>Name: {{submission.name}}</p>
      <p>Email: {{submission.email}}</p>
      <p>Message: {{submission.message}}</p>
      <appButton @click="removeSubmission">Delete submission</appButton>
      <div>
        <nuxt-link to="/dashboard">go back</nuxt-link>
      </div>
    </container>
  </section>
</template>

<script>
import api from '~/plugins/axios';
import { Container, Row, Column } from '~/components/Layout';
import appButton from '~/components/Button';

export default {
  middleware: 'authenticated',
  async asyncData({ store, params }) {
    try {
      const res = await api.get(`/submissions/${params.id}`, {
        headers: {
          'Authorization': store.getters['auth/isAuth']
        }
      });
      return { submission: res.data };
    } catch(error) {
      console.log(error);
    }
  },
  data() {
    return {
      loading: false,
      error: null,
    }
  },
  methods: {
    removeSubmission() {
      this.loading = true;
      const res = api.delete(`/submissions/${this.submission.id}`, {
        headers: {
          'Authorization': this.$store.getters['auth/isAuth']
        }
      }).then(res => {
        this.$router.push('/dashboard')
      }).catch(error => {
        alert(error);
      })
    }
  },
  components: {
    Container,
    Row,
    Column,
    appButton
  }
}
</script>

<style lang="scss" scoped>

</style>
