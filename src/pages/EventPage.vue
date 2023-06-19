<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";

type Event = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
};

const props = defineProps<{
  event: Event;
}>();
</script>

<template>
  <SectionTitle></SectionTitle>
</template>
