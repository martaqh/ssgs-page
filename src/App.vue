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
  color: $color-font;
  font-family: $font-text;
  max-width: 1200px;
  padding: 0 24px;
  margin: 0 auto;
}
</style>
