<template>
    <column
      tag="form"
      class="form"
      @submit.native.prevent="formSubmit"
      :action="formAction"
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
          <app-button type="submit" :disabled="$v.$invalid">Send</app-button>
        </column>

      </row><!-- /row -->
    </column><!-- ./col-7 -->
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import { required, email } from 'vuelidate/lib/validators';

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
      message: ''
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
    formAction() {
      return `https://formspree.io/${this.action}`;
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
      const data = JSON.stringify(this.$data);
      axios.post(this.formAction, data, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => {
        if (response.status === 200) {
          this.$store.commit('toggleModal');
          this.resetForm(e);
        }
      })
      .catch(error => {
        alert('Snap! Something went wrong. Please try again or email me from your email service provider.');
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
