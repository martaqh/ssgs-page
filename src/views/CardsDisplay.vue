<script setup lang="ts"></script>

<template>
  <div class="cards-display">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.cards-display {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 370px);
  grid-gap: 32px;

  @include desktop {
    grid-template-columns: repeat(3, 1fr);
  }

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mobile {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
