<script setup lang="ts"></script>

<template>
  <div class="section-title">
    <h2>
      <slot />
    </h2>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  font-size: 28px;
  font-family: $font-main;
  text-transform: uppercase;
  margin-bottom: 48px;

  @include tablet {
    font-size: 2.5rem;
  }

  @include mobile {
    font-size: 2rem;
    margin: 32px 0;
  }
}
</style>
