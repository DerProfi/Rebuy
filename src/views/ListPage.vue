<template>
  <div class="container">
    <h1>ReMarket Offers</h1>
    <ul class="list">
      <li v-for="offer in offers" :key="offer.id" class="offer">
        <img
          v-if="offer.image"
          :src="offer.image"
          :fallback="store.imageDefault"
          alt="Product image"
        />
        <img
          v-else
          src="https://dummyimage.com/600x400/74c0c8/fff&text=ReMarket"
          :fallback="store.imageDefault"
          alt="Dummy Image"
        />
        {{ offer.title }} ({{ offer.votes }} votes)
        <button @click="store.upvoteOffer(offer.id)">Upvote</button>
        <button @click="store.downvoteOffer(offer.id)">Downvote</button>
        <router-link :to="`/offers/${offer.id}`">Details</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "../stores/store";

const store = useStore();
const { offers } = storeToRefs(store);
</script>

<style lang="scss" scoped>
h1 {
  color: black;
}
.offer {
  outline: 1px solid black;
  margin: 20px;
  img {
    display: flex;
    width: 350px;
  }
}
.list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  row-gap: 50px;
  list-style: none;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  outline: 1px solid red;
}
</style>
