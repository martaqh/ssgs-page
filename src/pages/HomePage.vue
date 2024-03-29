<script setup lang="ts">
import { ref, computed } from "vue";
import BaseButton from "@/components/BaseButton.vue";
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

const inputTouched = ref(false);
const submitClicked = ref(false);
const userEmail = ref("");

const isEmailValid = (input: string) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input
  );
};

const invalidEmail = computed(() => {
  return inputTouched.value && !isEmailValid(userEmail.value);
});

const subscribed = computed(() => {
  return isEmailValid(userEmail.value) && submitClicked.value;
});

const handleSubmit = () => {
  submitClicked.value = true;
  !isEmailValid(userEmail.value) ? (submitClicked.value = false) : null;
};

console.log(userEmail.value);
console.log(submitClicked.value);
</script>

<template>
  <main class="home-page">
    <div class="home-page__hero-section">
      <div class="home-page__hero-section__text">
        <h1>Chorał gregoriański</h1>
        <h2>Muzyka z głębi serca i historii</h2>
        <p class="home-page__hero-section__description">
          Stowarzyszenie "Schola Gregoriana Silesiensis" zrzesza śpiewaków i
          śpiewaczki wykonujących chorał gregoriański i pieśni tradycyjne. Od
          ponad 20 lat śpiewamy tak, jak nas uczył
          <strong>Robert Pożarski</strong>.
        </p>
      </div>

      <BaseButton class="home-page__hero-section__action" to="/about">
        Poznaj naszą muzykę
      </BaseButton>

      <img
        class="home-page__hero-section__photo first"
        src="/src/assets/IMG_3051.jpg"
      />

      <img
        class="home-page__hero-section__photo second"
        src="/src/assets/IMG_3506.jpg"
      />

      <img
        class="home-page__hero-section__photo third"
        src="/src/assets/IMG_3525.jpg"
      />
      <img
        class="home-page__hero-section__photo fourth"
        src="/src/assets/IMG_2790.jpg"
      />
    </div>

    <section class="home-page__newsletter offset">
      <h1 v-if="!subscribed">
        Chcesz otrzymywać informacje o nadchodzących wydarzeniach? Zapisz się na
        nasz <span>newsletter</span>!
      </h1>
      <h1 v-if="subscribed">
        <span>Udało się!</span> Wiadomość o naszej kolejnej inicjatywie trafi
        prosto do Twojej skrzynki mailowej.
      </h1>

      <input
        v-if="!subscribed"
        type="email"
        placeholder="Podaj swój adres e-mail"
        v-model="userEmail"
        @blur="inputTouched = true"
        :class="{ invalid: invalidEmail }"
      />
      <p v-if="invalidEmail">
        Podany adres e-mail jest niepoprawny. Wpisz właściwy adres.
      </p>

      <BaseButton
        v-if="!subscribed"
        class="home-page__newsletter__submit"
        context="form"
        @click="handleSubmit()"
      >
        Zapisuję się
      </BaseButton>
    </section>

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
</template>

<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: column;

  &__hero-section {
    margin: 48px 0;
    padding: 80px;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, 200px);
    grid-gap: 16px;
    background-image: url(/src/assets/salve-regina.svg);
    background-repeat: no-repeat;
    background-size: cover;

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
      display: flex;
      flex-direction: column;
      line-height: 1.1;
      grid-column: 1/8;
      grid-row: 1/3;
      font-family: $font-title;
      gap: 24px;

      @include mobile {
        text-align: center;
      }

      h1 {
        margin-top: 5rem;
        font-size: 5rem;
        text-transform: uppercase;

        @include desktop {
          font-size: 4rem;
        }

        @include tablet {
          font-size: 3rem;
        }

        @include mobile {
          font-size: 2.5rem;
        }
      }

      h2 {
        font-size: 1.5rem;
        text-transform: uppercase;

        @include desktop {
          font-size: 1.2rem;
        }

        @include tablet {
          font-size: 1.2rem;
        }

        @include mobile {
          font-size: 0.8rem;
        }
      }

      p {
        margin-top: 2rem;
        font-family: $font-main;
        font-size: 1.2rem;
        line-height: 1.6rem;
        text-wrap: balance;
      }
    }

    &__action {
      grid-row: 3;
      grid-column: 1/6;
      align-self: center;
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
      border-radius: $border-radius;
      border: 1px solid $color-accent-light;

      @include mobile {
        display: none;
      }

      &.first {
        grid-column: 10/13;
        grid-row: 1;
      }
      &.second {
        grid-column: 8/11;
        grid-row: 2;

        @include desktop {
          grid-column: 9/11;
        }

        @include tablet {
          grid-column: 9/11;
        }
      }

      &.third {
        grid-column: 11/13;
        grid-row: 2;
      }

      &.fourth {
        grid-column: 9/13;
        grid-row: 3;

        @include desktop {
          grid-column: 10/13;
        }

        @include tablet {
          grid-column: 8/13;
        }
      }
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
