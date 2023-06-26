<script setup lang="ts"></script>

<template>
  <div class="section-title">
    <h2>
      <slot />
    </h2>

    <div class="section-title__bottom-line"></div>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  font-size: 3rem;
  font-family: $font-title;
  margin: 48px 0;
  padding: 16px 0;

  @include tablet {
    font-size: 2.5rem;
  }

  @include mobile {
    font-size: 2rem;
    margin: 32px 0;
  }

  &__bottom-line {
    width: 100%;
    height: 1px;
    margin-top: 16px;
    background-color: $color-accent-light;
    box-shadow: 0px 0px 2px $color-accent-light;
  }
}
</style>
