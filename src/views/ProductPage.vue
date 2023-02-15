<template>
  <div class="product">
    <img
      class="product-image"
      v-if="offer.image"
      :src="offer.image"
      alt="Product image"
    />
    <img
      class="product-image"
      v-else
      src="https://dummyimage.com/600x400/74c0c8/fff&text=ReMarket"
      alt="Dummy Image"
    />
    <div class="product-details">
      <h2>{{ offer.title }}</h2>
      <p>{{ offer.description }}</p>
      <p>Votes: {{ offer.votes }}</p>
      <div class="product-buttons">
        <a
          class="button--tertiary"
          :href="
            offer.link != undefined
              ? `https://www.rebuy.de/i,` + offer.link
              : 'https://www.rebuy.de/kaufen/categories'
          "
          target="blank"
          >BUY</a
        >
        <router-link :to="'/'" class="button--secondary"
          >All offers</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Use route for params
import { useRoute } from "vue-router";
const route = useRoute();
// Use Pinia
import { useStore } from "../stores/store";
const store = useStore();
// Get the offer correlated to the current route
const offer = store.getOfferById(Number(route.params.id));
</script>

<style lang="scss" scoped>
@import "../src/styles/main.scss";

.product {
  outline: $outline;
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
  &-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }
  &-details {
    width: 100%;
    padding: $sp-m;
    background-color: $secondary;
    box-sizing: border-box;
  }
  &-buttons {
    height: auto;
    display: flex;
    justify-content: center;
  }
}
</style>
