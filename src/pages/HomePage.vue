<script setup lang="ts">
import EventCard from "@/components/EventCard.vue";
import SectionTitle from "@/components/SectionTitle.vue";

const eventUpcoming = {
  id: 1,
  upcoming: true,
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/Graduale_Aboense_3.jpg",
};

const eventsPast = [
  {
    id: 2,
    upcoming: false,
    imageUrl: "/src/assets/pasja_stas.jpg",
  },
  {
    id: 2,
    upcoming: false,
    imageUrl: "/src/assets/Adwentowy.jpg",
  },
  {
    id: 3,
    upcoming: false,
    imageUrl: "/src/assets/Ofiarowanie.jpg",
  },
];
</script>

<template>
  <main class="home-page">
    <section class="home-page__section">
      <SectionTitle>Nadchodzące wydarzenia</SectionTitle>
      <EventCard :event="eventUpcoming" />
    </section>
    <section class="home-page__section">
      <SectionTitle>Dotychczasowe realizacje</SectionTitle>
      <div class="cards-section">
        <EventCard v-for="event of eventsPast" :event="event" />
        <EventCard v-for="event of eventsPast" :event="event" />
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  &__section {
    margin-top: 48px;
  }
}
.cards-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mobile {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
