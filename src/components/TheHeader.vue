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
  //max-width: 1200px;
  margin: 0 auto;
  padding: 24px 80px;
  display: flex;
  justify-content: space-between;
}
.logo {
  padding-top: 24px;
  margin-left: -16px;

  img {
    max-width: 200px;
    filter: invert(66%) sepia(70%) saturate(366%) hue-rotate(342deg)
      brightness(102%) contrast(103%);
    @include mobile {
      max-width: 160px;
      justify-self: center;
    }
  }
}
</style>
