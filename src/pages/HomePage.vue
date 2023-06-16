<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import SectionTitle from '@/components/SectionTitle.vue';
</script>

<template>
  <main class="home-page">
    <section class="home-page__section">
      <SectionTitle>Nadchodzące wydarzenia</SectionTitle>
      <div class="cards-section">
        <EventCard upcoming image-url="https://upload.wikimedia.org/wikipedia/commons/b/b8/Graduale_Aboense_3.jpg" />
      </div>
    </section>
    <section class="home-page__section">
      <SectionTitle>Dotychczasowe realizacje</SectionTitle>
      <div class="cards-section">
        <EventCard image-url="src/assets/Ofiarowanie.jpg" />
        <EventCard image-url="src/assets/pasja_stas.jpg" />
        <EventCard image-url="src/assets/nativitatis.jpg" />
        <EventCard image-url="src/assets/Adwentowy.jpg" />
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  &__section {
    margin-top: 50px;
  }
}
.cards-section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
