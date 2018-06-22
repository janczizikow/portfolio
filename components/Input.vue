<template>
  <div :class="['form-group', {'form-group--error': error} ]">
    <label :for="id" :class="{'form-group__label--error': error }">
      <slot></slot>
    </label>
    <component
      ref="input"
      @input="onInput"
      @blur="onBlur"
      @change="onChange"
      :is="tag"
      :value="value"
      :id="id"
      :type="type"
      :rows="rowsNum"
      :disabled="disabled"
      :required="required"
      :class="['form-group__control', {'form-group__control--error': error}]"
    />
    <span v-if="error" class="form-group__error-data">{{ errorMsg }}</span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    error: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 7
    },
    id: String,
    value: {
      type:[String, Number]
    },
    required: Boolean,
    errorMsg: String,
    disabled: Boolean,
  },
  computed: {
    tag() {
      return this.type !== 'textarea' ? 'input' : this.type;
    },
    rowsNum() {
      return this.type == 'textarea' ? this.rows : null;
    }
  },
  methods: {
    onInput(e) {
      const value = e.target.value;
      this.$emit('input', value);
    },
    onChange(e) {
      const value = e.target.value;
      this.$emit('change', value);
    },
    onBlur(e) {
      const value = e.target.value;
      this.$emit('blur', e);
    }
  },
  // Need to research if this is needed
  watch: {
    value(newVal) {
      console.log('value changed to: ' + newVal);
      this.value = newVal;
      this.$refs.input = newVal;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/_vars.scss";

// Reset Chrome autofill styles
input:-webkit-autofill,
input:-webkit-autofill:focus,
input:-webkit-autofill:hover,
select:-webkit-autofill,
select:-webkit-autofill:focus,
select:-webkit-autofill:hover,
textarea:-webkit-autofill,
textarea:-webkit-autofill:focus,
textarea:-webkit-autofill:hover {
  // scss-lint:disable all
  border: 0;
  border-bottom: 2px solid $grey;
  -webkit-text-fill-color: $dark;
  -webkit-box-shadow: 0 0 0 1000px #fff inset;
  transition: background-color 5000s ease-in-out 0s;
}

.form-group {
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 36px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    transition: width .45s cubic-bezier(.694, .048, .335, 1);
  }

  &::before {
    background-color: $primary;
    z-index: 5;
    transition-delay: .1s;
  }

  &::after {
    background: $error;
    z-index: 4;
  }

  &__control {
    padding: 6px 0;
    display: block;
    border: 0;
    width: 100%;
    border-bottom: 2px solid $grey;
    outline: none;
    font-family: $font-stack;
    background: transparent;
    resize: none; // prevent resizing the textarea

    &--error {
      border-bottom-color: $error !important; // to make it override the default hover effect and active blue border
    }
  }

  &__error-data {
    position: absolute;
    left: 0;
    bottom: -21px;
    font-size: 0.875rem;
    color: $error;
  }

  &__label--error {
    color: $error;
  }

  &:focus {
    border-color: $primary;
    transition: border-color .25s;
  }

  &:hover,
  &:focus,
  &:active {

    &::before,
    &::after {
      width: 100%;
    }
  }

  &--error {
    &:hover,
    &:focus,
    &:active {

      &::before,
      &::after {
        width: 0;
      }
    }
  }
}
</style>
