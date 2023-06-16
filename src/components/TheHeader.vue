<script setup lang="ts">
import TopNav from './TopNav.vue';
</script>

<template>
  <div class="header">
    <router-link to="HomePage" class="logo"> </router-link>
    <TopNav></TopNav>
  </div>
</template>

<style scoped lang="scss">
.header {
  margin: 0 0 30px 0;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
}

.logo {
  img {
    max-width: 100px;
  }
}
</style>
