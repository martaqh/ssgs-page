<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <main class="app">
    <router-view />
  </main>
</template>

<style scoped lang="scss">
.app {
  color: $color-text-primary;
  font-family: $font-main;
  font-weight: 500;
}
</style>
