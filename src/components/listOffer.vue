<template>
  <div class="container">
    <ul class="list">
      <li v-for="offer in sortedOffers" :key="offer.id" class="offer">
        <img v-if="offer.image" :src="offer.image" alt="Product image" />
        <img
          v-else
          src="https://dummyimage.com/600x400/74c0c8/fff&text=ReMarket"
          alt="Dummy Image"
        />
        <div class="list-details">
          <h3>{{ offer.title }}</h3>
          <p>{{ offer.votes }} votes</p>
          <div class="list-buttons">
            <the-button title="&#128077" @click="store.upvoteOffer(offer.id)" />
            <the-button title="&#128078" @click="store.downvoteOffer(offer.id)" />
            <router-link :to="`/offer/${offer.id}`">Details</router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "../stores/store";
import { computed } from "vue";
import TheButton from "../components/TheButton.vue";

const store = useStore();
const { offers } = storeToRefs(store);

const sortedOffers = computed(() => {
  return offers.value.sort((a, b) => b.votes - a.votes);
});
</script>

<style lang="scss" scoped>
@import '../src/styles/main.scss';

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.offer {
  outline: 1px solid rgb(208, 207, 207);
  margin: 20px;
  background-color: $secondary;
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
  &-details {
    margin: 10px 15px;
  }
  &-buttons {
  }
}
</style>
