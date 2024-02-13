<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";
import TheHeader from "@/components/TheHeader.vue";
import BasePage from "@/pages/BasePage.vue";
import CardsDisplay from "@/views/CardsDisplay.vue";
import EventCard from "@/components/EventCard.vue";

const upcomingEvents = [
  {
    id: 1,
    title: "Pieśń nad pieśniami",
    festival: "XXXI Festiwal Pieśń Naszych Korzeni",
    place: "Jarosław",
    date: "23 sierpnia 2024 r.",
    time: "20:00",
    imageUrl: "/assets/Adwentowy.jpg",
  },
  {
    id: 2,
    title: "Kodeks Mikołaja z Koźla",
    place: "Koźle",
    date: "23 kwietnia 2024 r.",
    time: "20:00",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/Graduale_Aboense_3.jpg",
  },
];

const pastEvents = [
  {
    id: 1,
    title: "Pasja według św. Jana",
    place: "Wrocław",
    date: "19 marca 2019 r.",
    imageUrl: "/assets/pasja_stas.jpg",
  },
  {
    id: 2,
    title: "Wieczór pieśni adwentowych",
    place: "Wrocław Strachocin",
    date: "14 grudnia 2023 r.",
    imageUrl: "/assets/Adwentowy.jpg",
  },
  {
    id: 3,
    title: "Oficjum o świętym Augustynie",
    place: "Ibramowice",
    date: "3 listopada 2023 r.",
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
        <CardsDisplay>
          <EventCard
            v-for="event of upcomingEvents"
            :event="event"
            :key="event.id"
          >
          </EventCard>
        </CardsDisplay>
      </section>
      <section class="home-page__past-events offset">
        <SectionTitle>Zrealizowane wydarzenia</SectionTitle>

        <CardsDisplay>
          <EventCard
            v-for="event of pastEvents"
            :event="event"
            :key="event.id"
          ></EventCard>
        </CardsDisplay>
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
      color: $color-text-secondary;
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

.offset {
  margin: 90px 84px 0 84px;
}
</style>
