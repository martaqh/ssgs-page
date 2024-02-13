<script setup lang="ts"></script>
<template>
  <span class="top-nav__hamburger">|||</span>
  <ul class="top-nav__main">
    <li class="top-nav__item">
      <router-link to="/about">O nas</router-link>
    </li>
    <li class="top-nav__item">
      <router-link to="/music">Nasza muzyka</router-link>
    </li>
    <li class="top-nav__item">
      <router-link to="/sources">Źródła</router-link>
    </li>
    <li class="top-nav__item">
      <router-link to="/contact">Kontakt</router-link>
    </li>
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
    & li:last-child {
      padding-right: 0px;
    }
  }
  &__item {
    padding: 20px 28px;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      color: $color-accent;
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
