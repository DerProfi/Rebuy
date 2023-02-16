<template>
  <div class="container">
    <ul class="list">
      <li class="list__offer" v-for="offer in sortedOffers" :key="offer.id">
        <img
          class="list__image"
          :src="
            offer.image != undefined
              ? offer.image
              : 'https://dummyimage.com/600x400/74c0c8/fff&text=ReMarket'
          "
          alt="Product image"
        />
        <div class="list__details">
          <h3>{{ offer.title }}</h3>
          <p>{{ offer.votes }} votes</p>
          <the-button
            title="👍"
            aria-label="Thumps up"
            @click="store.upvoteOffer(offer.id)"
          />
          <the-button
            title="👎"
            aria-label="Thumps down"
            @click="store.downvoteOffer(offer.id)"
          />
          <router-link class="button--secondary" :to="`/offer/${offer.id}`"
            >Details</router-link
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Import necessary components and functions
import { computed } from "vue";
import TheButton from "../components/TheButton.vue";
// Use Pinia
import { useStore } from "../stores/store";
const store = useStore();
const sortedOffers = computed(() => {
  return store.getSortedOffers();
});
</script>

<style lang="scss" scoped>
@import "../src/styles/main.scss";

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  row-gap: 50px;
  list-style: none;
  &__offer {
    outline: $outline;
    margin: $sp-l;
    background-color: $secondary;
  }
  &__image {
    display: flex;
    width: 350px;
  }
  &__details {
    margin: $sp-s $sp-m;
  }
}
</style>
