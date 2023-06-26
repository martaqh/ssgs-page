<script setup lang="ts"></script>
<template>
  <span class="top-nav__hamburger">|||</span>
  <ul class="top-nav__main">
    <router-link to="/o-nas" class="top-nav__item">O nas</router-link>
    <router-link to="/robert-pozarski" class="top-nav__item"
      >Robert Pożarski</router-link
    >
    <router-link to="/oferta-koncertowa" class="top-nav__item"
      >Oferta koncertowa</router-link
    >
    <router-link to="/dyskografia" class="top-nav__item"
      >Dyskografia</router-link
    >
    <router-link to="/kontakt" class="top-nav__item">Kontakt</router-link>
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
    font-size: 1.1rem;
    color: $color-font;
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
