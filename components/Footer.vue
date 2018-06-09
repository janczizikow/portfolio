<template>
  <footer class="footer">
    <div class="footer__container">
      <a href="www.google.com" target="_blank">Google</a>
      <a href="www.google.com" target="_blank">Google</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "~/assets/_vars.scss";
.footer {
  padding: 3.625rem 0;
  background-color: $dark;
  color: $white;
  &__container { @include container(1200px) }
}
</style>

