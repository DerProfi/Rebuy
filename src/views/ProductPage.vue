<template>
  <div class="container">
    <img v-if="offer.image" :src="offer.image" alt="Product image" />
    <img
      v-else
      src="https://dummyimage.com/600x400/74c0c8/fff&text=ReMarket"
      alt="Dummy Image"
    />
    <div class="container-details">
      <h2>{{ offer.title }}</h2>
      <p>{{ offer.description }}</p>
      <p>Votes: {{ offer.votes }}</p>
      <div class="container-buttons">
        <a
          :href="
            offer.link != undefined
              ? `https://www.rebuy.de/i,` + offer.link
              : 'https://www.rebuy.de/kaufen/categories'
          "
          target="blank"
          >BUY</a
        >
        <router-link :to="'/'" class="button">All offers</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
import { useStore } from "../stores/store";
const store = useStore();
const offer = store.getOfferById(Number(route.params.id));
</script>

<style lang="scss" scoped>
@import "../src/styles/main.scss";

.container {
  outline: 1px solid rgb(208, 207, 207);
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
  &-details {
    width: 100%;
    padding: 15px;
    background-color: $secondary;
    box-sizing: border-box;
  }
  &-buttons {
    height: auto;
    display: flex;
    justify-content: center;
  }
  .button {
    background-color: rgb(81, 80, 80);
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }
}
</style>
