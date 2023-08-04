<script setup lang="ts"></script>
<template>
  <span class="top-nav__hamburger">|||</span>
  <ul class="top-nav__main">
    <router-link to="/about" class="top-nav__item">O nas</router-link>
    <router-link to="/music" class="top-nav__item">Nasza muzyka</router-link>
    <router-link to="/sources" class="top-nav__item">Źródła</router-link>
    <router-link to="/contact" class="top-nav__item">Kontakt</router-link>
  </ul>
</template>

<style lang="scss" scoped>
.top-nav {
  &__main {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include mobile {
      display: none;
    }
  }
  &__item {
    padding: 24px;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      color: $color-accent;
      text-shadow: 0px 0px 20px $color-accent-light;
      transition: all 0.2s ease-in;
    }
  }
  &__hamburger {
    display: none;
    @include mobile {
      display: block;
    }
  }
}
</style>
