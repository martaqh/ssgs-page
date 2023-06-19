<script setup lang="ts">
import TopNav from "./TopNav.vue";
</script>

<template>
  <div class="header">
    <router-link to="/" class="logo">
      <img
        src="src/assets/SSGS_logo.png"
        style="
          filter: invert(66%) sepia(70%) saturate(366%) hue-rotate(342deg)
            brightness(102%) contrast(103%);
        "
      />
    </router-link>
    <TopNav></TopNav>
  </div>
</template>

<style scoped lang="scss">
.header {
  margin: 0;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
}

.logo {
  padding-top: 24px;
  margin-left: -18px;
  img {
    max-width: 200px;
  }
}
</style>
