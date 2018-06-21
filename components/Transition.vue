<template>
  <div :class=" className ? 'loading' : 'loading--loaded' ">
    <div class="loading__rect-1"></div>
    <div class="loading__rect-2"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      className: false,
    }
  },
  // created() {
  //   setTimeout(data => {
  //     this.data.className != this.data.className
  //   }, 1000);
  // },
  beforeDestroy() {
    console.log('before destroy hook');
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/_vars.scss";

.loading {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000000000;
  background-color: transparent;
  opacity: 1;
  transition: transform .3s;
  background-color: $dark;

  &--loaded {
    transform: translateX(-100%);
  }

  &__rect-1,
  &__rect-2 {
    position: absolute;
    left: 100%;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &__rect-1 {
    background-color: #121212;
  }

  &__rect-2 {
    background-color: #0a0a0a;
  }
}
</style>
