<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";

const props = defineProps<{
  upcoming?: boolean;
  imageUrl?: string;
}>();
</script>
<template>
  <SectionTitle></SectionTitle>
</template>
