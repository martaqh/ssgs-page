<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  to?: string;
  href?: string;
  context?: "form" | undefined;
}>();

const componentVariant = computed(() => {
  if (props.to) {
    return "router-link";
  } else if (props.href) {
    return "a";
  } else {
    return "button";
  }
});

const buttonType = computed(() => {
  return props.context === "form" ? "submit" : "button";
});
</script>

<template>
  <component
    :is="componentVariant"
    class="base-button"
    :to="to"
    :href="href"
    :type="buttonType"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.base-button {
  height: fit-content;
  width: fit-content;
  padding: 20px;
  border: 1px solid $color-accent;
  border-radius: $border-radius;
  box-shadow: box-shadow;
  color: $color-accent;
  text-align: center;

  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 1.5px;

  background: rgba(60, 60, 60, 0.2);

  backdrop-filter: blur(2px);
  border: 1px solid $color-accent-light;

  &:hover {
    cursor: pointer;
    color: $color-accent;
    border: 1px solid $color-accent;
    text-shadow: 0px 0px 20px $color-accent-light;
    transition: all 0.2s ease-in;
  }

  @include mobile {
    padding: 16px;
    font-size: 1rem;
    letter-spacing: normal;
    width: 70%;
  }
}
</style>
