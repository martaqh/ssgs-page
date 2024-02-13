<script setup lang="ts">
import { ref, computed } from "vue";

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
</script>

<template>
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
</template>
