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
              <strong>zrzesza</strong> śpiewaków i śpiewaczki <br />
              wykonujących <br />
              <span>
                chorał gregoriański
                <br />
                i pieśni tradycyjne
              </span>
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
    padding: 48px 84px;
    min-height: 800px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(/src/assets/IMG_3380.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__text {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 32px;
      line-height: 150%;
    }

    &__title {
      font-weight: 700;
      font-size: 40px;

      span {
        color: $color-accent;
        font-size: 48px;
      }
    }

    &__description {
      text-align: end;
      font-weight: 600;
      font-size: 32px;

      span {
        color: $color-accent;
        font-size: 40px;
      }
      strong {
        font-size: 28px;
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
