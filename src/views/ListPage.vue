<template>
  <div>
    <h1>Offers</h1>
    <ul>
      <li v-for="offer in offers" :key="offer.id">
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
</style>
