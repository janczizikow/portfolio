<template>
  <main>
    <container>
      <section class="contact">
        <row>
          <column>
            <h3 class="contact__info-heading">Let's build something awesome!</h3>
            <div class="contact__info-text">
              <p>Fill in the form or <a :href="'mailto:' + contact.email">email me</a> to get in touch.</p>
              <p>I'm currently looking for job opportunities as a web developer. If you like what you saw and you're hiring let's talk :)</p>
            </div>
          </column>
        </row><!-- ./contact__row -->

        <row class="contact__form">
          <app-form :action="'/'" :method="'POST'" :novalidate="true"/>
          <column :lg="5">
            <template v-for="(value, key, i) in contact">
              <h4 class="contact__info-heading" :key="i + key">{{ key }}</h4>
              <p class="contact__info-text" :key="i + value"  >{{ value }}</p>
            </template>
          </column><!-- /col-5 -->
        </row><!--./row -->

      </section><!--./contact -->
    </container><!--./container -->
    <app-modal v-if="isModalOpen" :footer="false">
      <h1 slot="header" class="contact__modal-heading">Thanks!</h1>
      <p slot="body">Your message was successfully sent! Will get back to you soon.</p>
    </app-modal>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

import { Container, Row, Column } from '~/components/Layout';
import appForm from '~/components/Contact/Form.vue';
import appModal from '~/components/Modal.vue';

export default {
  data() {
    return {
      contact: {
        email: 'jan.czizikow@gmail.com',
        phone: '+48 791 039 924',
        location: 'Warsaw, Poland'
      }
    }
  },
  computed: {
    ...mapGetters([
      'isModalOpen'
    ])
  },
  components: {
    Container,
    Row,
    Column,
    appForm,
    appModal
  }
}
</script>

<style lang="scss" scoped>
.contact {
  padding: 4rem 0;

  &__info-heading {
    margin: 0 0 .5rem;
  }

  &__info-text {
    margin: 0 0 1.25rem;
  }

  &__modal-heading {
    margin: 0;
  }
}
</style>
