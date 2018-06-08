<template>
  <header class="header">
    <div class="header__container">
      <div>Header here</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 3;
  &__container {
    display: flex;
    height: 3.625rem;
  }
}
</style>
