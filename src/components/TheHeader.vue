<script setup lang="ts">
import TopNav from "./TopNav.vue";
</script>

<template>
  <div class="header">
    <router-link to="/" class="logo">
      <img src="/src/assets/logo.png" />
    </router-link>
    <TopNav></TopNav>
  </div>
</template>

<style scoped lang="scss">
.header {
  margin: 0;
  display: flex;
  justify-content: space-between;
}
.logo {
  img {
    max-width: 200px;
    filter: brightness(0) invert(1);
    @include mobile {
      max-width: 160px;
      justify-self: center;
    }
  }
}
</style>
