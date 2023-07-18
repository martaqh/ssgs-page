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
  max-width: 1440px;
  margin: 0 auto;
}
</style>
