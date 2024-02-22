<script setup lang="ts">
type Event = {
  id?: number;
  title?: string;
  festival?: string;
  place?: string;
  date?: string;
  time?: string;
  imageUrl?: string;
};

const props = defineProps<{
  event: Event;
}>();
</script>

<template>
  <router-link :to="{ name: 'EventPage', params: { eventId: event.id } }">
    <div class="event-card">
      <div class="event-card__image">
        <img :src="event.imageUrl" />
      </div>
      <div class="event-card__title">
        <h2>
          {{ event.title }}
        </h2>
      </div>
      <h6 v-if="event.festival">
        {{ event.festival }}
      </h6>

      <div class="event-card__details">
        <time>{{ event.date }} {{ event.time }}</time> /
        <span class="event-card__place"> {{ event.place }}</span>
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.event-card {
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: 32px;
  overflow: hidden;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:hover {
    color: $color-accent;

    img {
      filter: grayscale(0%);
    }
  }

  &__image {
    width: 100%;
    height: 60%;
    max-height: 236px;
    margin-bottom: 8px;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: grayscale(100%);
    }
  }

  &__title {
    font-family: $font-main;
    text-transform: uppercase;
    font-size: 22px;
    line-height: 130%;

    @include desktop {
      font-size: 20px;
    }

    h6 {
      text-transform: none;
      font-size: 20px;

      @include desktop {
        font-size: 18px;
      }
    }
  }

  &__details {
    font-size: 18px;

    @include desktop {
      font-size: 16px;
    }
  }
}
</style>
