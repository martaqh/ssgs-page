<script setup lang="ts">
import EventCard from "@/components/EventCard.vue";
import SectionTitle from "@/components/SectionTitle.vue";

const eventUpcoming = {
  id: 1,
  title: "Pieśń nad pieśniami",
  upcoming: true,
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/Graduale_Aboense_3.jpg",
};

const eventsPast = [
  {
    id: 2,
    title: "Pasja według św. Jana",
    upcoming: false,
    imageUrl: "/assets/pasja_stas.jpg",
  },
  {
    id: 2,
    title: "Wieczór pieśni adwentowych",
    upcoming: false,
    imageUrl: "/assets/Adwentowy.jpg",
  },
  {
    id: 3,
    title: "Nieszpory ku czci...",
    upcoming: false,
    imageUrl: "/assets/Ofiarowanie.jpg",
  },
];
</script>

<template>
  <main class="home-page">
    <div class="home-page__hero-section">
      <div class="home-page__hero-section__title">
        <h1>Chorał gregoriański</h1>
        <h2>Muzyka z głębi serca i historii</h2>
      </div>
      <RouterLink class="home-page__hero-section__action" to="/about">
        <strong>Posłuchaj</strong>
      </RouterLink>

      <img
        class="home-page__hero-section__photo first"
        src="/src/assets/IMG_3051.jpg"
      />

      <img
        class="home-page__hero-section__photo second"
        src="/src/assets/IMG_2790.jpg"
      />

      <img
        class="home-page__hero-section__photo third"
        src="/src/assets/IMG_3055.jpg"
      />
    </div>

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
    max-width: 1200px;
    margin: 0 auto;

    @include mobile {
      margin-top: 32px;
    }
  }
  &__hero-section {
    margin: 48px 0;
    padding: 80px;
    height: fit-content;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 200px);
    grid-gap: 16px;
    background-image: url(/src/assets/salve-regina.svg);
    background-repeat: no-repeat;
    background-size: cover;

    &__title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: $font-title;
      line-height: 1.1;
      align-self: flex-start;
      grid-column: 1/3;
      grid-row: 1/3;

      gap: 24px;

      h1 {
        font-size: 5rem;
      }

      h2 {
        font-size: 1.5rem;
      }
    }

    &__action {
      height: fit-content;
      padding: 24px;
      border: 1px solid $color-accent;
      border-radius: $border-radius;
      box-shadow: box-shadow;
      color: $color-accent;
      text-align: center;
      align-self: center;
      grid-row: 2;
      grid-column: 1/3;
      font-size: 1.2rem;
      letter-spacing: 0.2rem;

      &:hover {
        cursor: pointer;
        color: $color-accent;
        text-shadow: 0px 0px 20px $color-accent-light;
        box-shadow: 0px 0px 10px $color-accent-light;
        transition: all 0.3s ease-out;
      }
    }

    &__photo {
      overflow: hidden;
      max-height: 300px;
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
      height: 100%;
      width: 100%;
      overflow: hidden;
      object-fit: cover;
      filter: brightness(50%);
      border-radius: $border-radius;

      &.first {
        grid-column: 5/7;
        grid-row: 1;
      }
      &.second {
        grid-column: 4/6;
        grid-row: 2;
      }

      &.third {
        grid-column: 6/7;
        grid-row: 2;
      }
    }
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
  }
}
</style>
