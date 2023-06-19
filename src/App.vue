<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import HomePage from "./pages/HomePage.vue";
</script>

<template>
  <main class="app">
    <TheHeader />
    <router-view />
  </main>
</template>

<style scoped lang="scss">
.app {
  background-image: linear-gradient(
    90deg,
    rgba(38, 36, 33, 1) 27%,
    rgba(43, 42, 39, 1) 56%,
    rgba(38, 36, 33, 1) 100%
  );
  color: #dbd7d0;
  font-family: $font-text;
  max-width: 1200px;
  padding: 0 24px;
  margin: 0 auto;
}
</style>
