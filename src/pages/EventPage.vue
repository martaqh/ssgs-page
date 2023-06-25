<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";

export type Event = {
  id?: number;
  title?: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  upcoming?: boolean;
};

const props = defineProps<{
  event: Event;
}>();
</script>

<template>
  <SectionTitle>Jestem eventem</SectionTitle>
</template>
