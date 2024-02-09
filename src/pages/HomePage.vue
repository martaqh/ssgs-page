<script setup lang="ts">
import EventCard from "@/components/EventCard.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import TheHeader from "@/components/TheHeader.vue";
import BasePage from "@/pages/BasePage.vue";

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
  <BasePage
    ><main class="home-page">
      <div class="home-page__hero-section">
        <TheHeader />
        <div class="home-page__hero-section__text">
          <div class="home-page__hero-section__title">
            <h1>
              Chorał gregoriański <br />
              Muzyka
              <span
                >z głębi <br />
                serca i historii</span
              >
            </h1>
          </div>
          <div class="home-page__hero-section__description">
            <p>
              Stowarzyszenie
              <br />
              <span> Schola Gregoriana Silesiensis </span>
              <br />
              zrzesza śpiewaków i śpiewaczki <br />
              wykonujących <br />
              <span>chorał gregoriański i pieśni tradycyjne</span>
              <br />
              Śpiewamy razem od ponad 20 lat
            </p>
          </div>
        </div>
      </div>

      <section class="home-page__upcoming-events offset">
        <SectionTitle>Nadchodzące wydarzenia</SectionTitle>
        <EventCard :event="eventUpcoming" />
      </section>
      <section class="home-page__past-events offset">
        <SectionTitle>Zrealizowane wydarzenia</SectionTitle>
        <div class="cards-section">
          <EventCard v-for="event of eventsPast" :event="event" />
          <EventCard v-for="event of eventsPast" :event="event" />
        </div>
      </section>
    </main>
  </BasePage>
</template>

<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__hero-section {
    padding: 48px;
    height: 80vh;

    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(/src/assets/IMG_3380.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include tablet {
      padding: 64px;
    }

    @include mobile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 48px;
      padding: 48px;
    }

    &__text {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 2rem;

      span {
        color: $color-accent;
      }
    }

    &__description {
      text-align: end;
    }
  }

  &__newsletter {
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 1.5rem;

      @include mobile {
        font-size: 1.2rem;
      }

      span {
        color: $color-accent;
      }
    }

    input {
      padding: 16px;
      width: 70%;
      font-family: $font-main;
      font-size: 1rem;
      border-radius: $border-radius;
      background-color: $color-text-primary;

      &:focus-visible {
        outline: 2px solid $color-accent;
        border: 1px solid $color-accent;
      }
      &.invalid {
        outline: 3px solid $color-error;
        border: 1px solid $color-error;
      }
    }

    p {
      color: $color-error;
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

.offset {
  max-width: 1200px;
  margin: 90px auto;

  @include tablet {
    margin: 64px auto;
  }

  @include mobile {
    margin: 32px 0 0;
    padding: 0 32px;
  }
}
</style>
