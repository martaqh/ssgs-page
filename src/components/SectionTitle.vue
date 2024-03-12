<script setup lang="ts"></script>

<template>
  <div class="section-title">
    <h2>
      <slot />
    </h2>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  font-size: 28px;
  font-family: $font-main;
  text-transform: uppercase;
  margin-bottom: 48px;
}
</style>
