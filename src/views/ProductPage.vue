<template>
  <div>
    <h1>{{ offer.title }}</h1>
    <p>{{ offer.description }}</p>
    <img v-if="offer.image" :src="offer.image" alt="Product image" />
    <img
      v-else
      src="https://dummyimage.com/600x400/74c0c8/fff&text=ReMarket"
      alt="Dummy Image"
    />
    <p>Votes: {{ offer.votes }}</p>
    <a
      :href="
        offer.link != undefined
          ? `https://www.rebuy.de/i,` + offer.link
          : 'https://www.rebuy.de/kaufen/categories'
      "
      target="blank"
      >BUY</a
    >
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
import { useStore } from "../stores/store";
const store = useStore();
const offer = store.getOfferById(Number(route.params.id));
// const link = offer.link ? "`https://www.rebuy.de/i,` + offer.link" : "https://www.rebuy.de/kaufen/categories";
</script>

<style lang="scss" scoped></style>
