<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <main class="app">
    <TheHeader />
    <router-view />
  </main>
</template>

<style scoped lang="scss">
.app {
  color: $color-text-primary;
  font-family: $font-text;
  max-width: 1200px;
  padding: 0 24px;
  margin: 0 auto;
  @include mobile {
    padding: 0 32px;
  }
}
</style>
