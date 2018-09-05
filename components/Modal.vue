<template>
  <transition name="modal" appear>
    <div class="modal">
      <div class="modal__inner flex-center">
        <div class="modal__content">
          <div v-if="header" class="modal__header">
            <slot name="header"></slot>
            <app-button @click.native="toggleModal" class="modal__close">
              <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M5.586 7L.636 2.05A1 1 0 0 1 2.05.636L7 5.586l4.95-4.95a1 1 0 0 1 1.414 1.414L8.414 7l4.95 4.95a1 1 0 0 1-1.414 1.414L7 8.414l-4.95 4.95A1 1 0 0 1 .636 11.95L5.586 7z" fill="#333" fill-rule="evenodd"/></svg>
            </app-button>
          </div>
          <div v-if="body" class="modal__body">
            <slot name="body"></slot>
          </div>
          <div v-if="footer" class="modal__footer">
            <slot name="footer"></slot>
          </div>
        </div>
        <div @click="toggleModal" class="modal__overlay"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex';

import appButton from '~/components/Button.vue';
export default {
  props: {
    isModalOpen: { type: Boolean, default: false },
    header: {type: Boolean, default: true },
    body: {type: Boolean, default: true },
    footer: {type: Boolean, default: true },
  },
  methods: {
    ...mapActions([
      'toggleModal'
    ]),
    toggleModal() {
      this.$store.commit('toggleModal');
    }
  },
  components: {
    appButton,
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  display: block;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 10000;
  transition: all .3s ease;

  &__inner {
    position: relative;
    top: 0;
    right: 0;
    width: auto;
    height: calc(100vh - 3rem);
    max-width: 768px;
    margin: 1.5rem auto;
    padding: 0 1rem;
  }

  &__content {
    padding: 1rem 0;
    position: relative;
    width: 100%;
    background-color: $white;
    border-radius: 4px;
    transition: all .3s ease;
    z-index: 10000;
  }

  &__close {
    position: absolute;
    padding: 1rem;
    top: 0;
    right: 0;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    user-select: none;

    &:hover {
      transform: scale(1)!important; // ugly. removing the hover effect from the button
      box-shadow: none!important; // ugly. removing the hover effect from the button
    }
  }

  &__header,
  &__body,
  &__footer {
    padding: 1em;
  }

  &__header > h1 {
    margin: 0;
  }

  &__body {
    text-align: left;
  }

  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: $dark;
    opacity: .64;
    transition: opacity .3s ease;
    z-index: 1040;
  }
}

.modal-enter,
.modal-enter .modal__overlay,
.modal-leave-active .modal__overlay {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal__content,
.modal-leave-active .modal__content {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}
</style>
