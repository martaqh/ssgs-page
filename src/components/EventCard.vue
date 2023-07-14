<script setup lang="ts">
import { computed } from "vue";
import type { Event } from "@/pages/EventPage.vue";

const props = defineProps<{
  event: Event;
}>();
</script>

<template>
  <router-link :to="{ name: 'EventPage', params: { eventId: event.id } }">
    <div class="event-card" :class="{ upcoming: event.upcoming }">
      <div class="event-card__image" :class="{ upcoming: event.upcoming }">
        <img :src="event.imageUrl" />
      </div>
      <div class="event-card__content" :class="{ upcoming: event.upcoming }">
        <div v-if="event.upcoming" class="event-card__details">
          <div class="event-card__time">
            <span>23 czerwca 2023 r. (sobota)</span>
            <span>g. 19:00</span>
          </div>
          <span class="event-card__place">Kościół św. Macieja, Wrocław</span>
        </div>
        <div>
          <h2 class="event-card__title" :class="{ upcoming: event.upcoming }">
            {{ event.title }}
          </h2>
          <p
            class="event-card__description"
            :class="{ upcoming: event.upcoming }"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p
            v-if="event.upcoming"
            class="event-card__description"
            :class="{ upcoming: event.upcoming }"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div v-if="!event.upcoming" class="event-card__footer">
            <time>18 maja 2023 r.</time>
            <p>></p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.event-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 304px;
  padding: 32px;
  margin-bottom: 32px;
  overflow: hidden;
  background-color: $color-card;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 4px;

  &__content {
    &.upcoming {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 24px;
      @include mobile {
        padding-left: 0;
      }
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: transform 0.5s ease-in-out;

      @include desktop {
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    &.upcoming {
      height: 100%;
      max-height: 320px;
      max-width: 464px;

      @include mobile {
        max-width: none;
        max-height: 240px;
        aspect-ratio: 1/2;
      }
    }
  }
  &__title {
    font-family: $font-title;
    font-size: 1.5rem;
    margin: 32px 0 16px;

    &.upcoming {
      margin: 0 0 16px 0;
      font-size: 2.5rem;

      @include tablet {
        font-size: 2rem;
      }

      @include mobile {
        font-size: 1.8rem;
        margin-top: 32px;
      }
    }
  }
  &__description {
    line-height: 1.3;
    color: $color-text-secondary;
    &.upcoming {
      font-size: 1.1rem;
    }
  }

  &__details {
    color: $color-accent-light;
    align-self: flex-end;
    width: fit-content;
    border-radius: 4px;
    gap: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include mobile {
      align-self: flex-start;
      margin: 32px 0;
    }
  }
  &__time {
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    gap: 32px;
    justify-content: flex-end;

    @include tablet {
      font-size: 1.3rem;
    }

    @include mobile {
      font-size: 1.2rem;
      justify-content: flex-start;
    }
  }
  &__place {
    font-size: 1.2rem;
    text-transform: uppercase;
    display: flex;
    justify-content: flex-end;

    @include mobile {
      justify-content: flex-start;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    color: $color-accent-light;
  }

  &.upcoming {
    background-color: transparent;
    box-shadow: none;
    width: 100%;
    flex-direction: row;
    padding: 0;
    height: 320px;

    @include mobile {
      flex-direction: column;
      height: fit-content;
    }
  }
}
</style>
