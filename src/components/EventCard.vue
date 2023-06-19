<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  upcoming?: boolean;
  imageUrl?: string;
}>();
</script>

<template>
  <div class="event-card" :class="{ upcoming: props.upcoming }">
    <div class="event-card__image" :class="{ upcoming: props.upcoming }">
      <img :src="props.imageUrl" />
    </div>
    <div class="event-card__content" :class="{ upcoming: props.upcoming }">
      <div v-if="props.upcoming" class="event-card__details">
        <div class="event-card__time">
          <span>23 czerwca 2023 r. (sobota)</span>
          <span>g. 19:00</span>
        </div>
        <span class="event-card__place">Kościół św. Macieja, Wrocław</span>
      </div>
      <div>
        <h2 class="event-card__title" :class="{ upcoming: props.upcoming }">
          Wigilia św. Jana
        </h2>
        <p
          class="event-card__description"
          :class="{ upcoming: props.upcoming }"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p
          v-if="props.upcoming"
          class="event-card__description"
          :class="{ upcoming: props.upcoming }"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div v-if="!props.upcoming" class="event-card__footer">
          <time>18 maja 2023 r.</time>
          <p>></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.event-card {
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 320px;
  padding: 32px;
  margin-bottom: 32px;
  overflow: hidden;
  background-color: $color-card;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  //box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  border-radius: 4px;

  &__content {
    &.upcoming {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 0 0 32px;
    }
  }

  &__image {
    width: 100%;
    overflow: hidden;
    border-radius: 4px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: transform 0.5s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
    &.upcoming {
      height: 100%;
      max-height: 320px;
      max-width: 464px;
    }
  }
  &__title {
    font-family: $font-title;
    font-size: 1.5rem;
    margin: 32px 0 16px;

    &.upcoming {
      margin: 0 0 16px 0;
      font-size: 2.5rem;
    }
  }
  &__description {
    line-height: 1.3;

    &.upcoming {
      font-size: 1.1rem;
    }
  }

  &__details {
    align-self: flex-end;
    width: fit-content;
    border-radius: 4px;
    gap: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__time {
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    gap: 32px;
    justify-content: flex-end;
  }
  &__place {
    font-size: 1.2rem;
    text-transform: uppercase;
    display: flex;
    justify-content: flex-end;
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
  }
}
</style>
