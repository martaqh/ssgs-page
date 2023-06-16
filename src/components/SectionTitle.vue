<script setup lang="ts"></script>

<template>
  <h2 class="section-title">
    <slot />
  </h2>
</template>

<style scoped lang="scss">
.section-title {
  display: flex;
  font-size: 3rem;
  font-family: $font-title;
  margin: 48px 0;
  padding: 20px 0;
  border-bottom: 1px solid $color-font;
}
</style>
