<template>
  <main>
    <container>
      <section class="login">
        <row>
          <column :mdOffset="3" :md="6" :lgOffset="4" :lg="4">
            <h1>Log in</h1>
            <p v-if="error">{{error}}</p>
            <form @submit.prevent="formSubmit" action="/login" method="POST" novalidate>
              <div class="form__form-group">
                <app-input
                  @blur="$v.email.$touch()"
                  :error="$v.email.$error"
                  :errorMsg="emailErrorMsg"
                  v-model="email">Email</app-input>
              </div>
              <div class="form__form-group">
                <app-input
                  @blur="$v.password.$touch()"
                  :error="$v.password.$error"
                  :errorMsg="$v.password.$error ? 'This field is required' : null"
                  type="password"
                  v-model="password">Password</app-input>
              </div>
              <app-button block type="submit" :loading="loading" :disabled="$v.$invalid || loading">Log in</app-button>
            </form>
          </column>
        </row>
      </section>
    </container>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import { required, email } from 'vuelidate/lib/validators';
import api from '~/plugins/axios';
import { Container, Row, Column } from '~/components/Layout';
import appInput from '~/components/Input.vue';
import appButton from '~/components/Button.vue';

export default {
  middleware: 'notAuthenticated',
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      error: null,
    }
  },
  methods: {
    ...mapActions([
      'toggleModal',
      'setAuth',
      'logIn',
    ]),
    async formSubmit(e) {
      this.loading = true;
      try {
        await this.$store.dispatch('logIn', {
          email: this.email,
          password: this.password,
        });
        this.error = null;
      } catch (error) {
        this.loading = false;
        if (error.response) {
          this.error = error.response.data.errors.join(', ');
        } else {
          this.error = error.message;
        }
      } finally {
        this.$router.push('/dashboard');
      }
    }
  },
  computed: {
    emailErrorMsg() {
      if (!this.$v.email.required) {
        return 'This field is required'
      } else if (!this.$v.email.email) {
        return 'Email address is invalid'
      }
    },
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  components: {
    Container,
    Row,
    Column,
    appInput,
    appButton
  }
}
</script>


<style lang="scss" scoped>
.login {
  padding: 4rem 0;
}

.form__form-group {
  margin-bottom: 0.25rem;
}
</style>

