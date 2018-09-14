<template>
  <column
    tag="form"
    class="form"
    @submit.native.prevent="formSubmit"
    :action="action"
    :method="method"
    :novalidate="novalidate"
    :lg="7">
    <row>
      <column :md="6">
        <div class="form__form-group">
          <app-input
            @blur="$v.name.$touch()"
            :error="$v.name.$error"
            :errorMsg="$v.name.$error ? 'This field is required' : null"
            v-model="name">Name</app-input>
        </div>
      </column>
      <column :md="6">
        <div class="form__form-group">
          <app-input
            type="email"
            @blur="$v.email.$touch()"
            :error="$v.email.$error"
            :errorMsg="emailErrorMsg"
            v-model="email">Email</app-input>
        </div>
      </column>
    </row><!-- /row -->
    <row>
      <column>
        <app-input
          @blur="$v.message.$touch()"
          :error="$v.message.$error"
          :errorMsg="$v.message.$error ? 'This field is required' : null"
          v-model="message" type="textarea">Message</app-input>
        <app-button type="submit" :loading="loading" :disabled="$v.$invalid || loading">Send</app-button>
      </column>
    </row><!-- /row -->
  </column><!-- ./col-7 -->
</template>

<script>
import { mapActions } from 'vuex';
import { required, email } from 'vuelidate/lib/validators';
import api from '~/plugins/axios';
import { Contianer, Row, Column } from '~/components/Layout';
import appInput from '~/components/Input.vue';
import appButton from '~/components/Button.vue';

export default {
  props: {
    action: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    novalidate: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      loading: false,
      error: null,
    };
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
    name: {
      required
    },
    email: {
      required,
      email
    },
    message: {
      required
    }
  },
  methods: {
    ...mapActions([
      'toggleModal'
    ]),
    resetForm(e) {
      this.name = '';
      this.email = '';
      this.message = '';
      this.$v.$reset(); // reset vuelidate
      e.target.reset(); // reset the form
    },
    formSubmit(e) {
      this.loading = true;
      const submission = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      api.post('/submissions', {
        submission
      })
      .then(response => {
        if (response.status === 200 || response.status ===  201) {
          this.loading = false;
          this.error = null;
          this.$store.commit('toggleModal');
          this.resetForm(e);
        }
      })
      .catch(error => {
        this.loading = false;
        if (error.response) {
          this.error = error.response.data.error;
        } else {
          this.error = error.message;
        }
        alert(this.error);
        console.log(error);
      });
    },
  },
  components: {
    Row,
    Column,
    appInput,
    appButton
  }
}
</script>

<style lang="scss" scoped>
.form {
  margin-bottom: 2rem;
}
</style>