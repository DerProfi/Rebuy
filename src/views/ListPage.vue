<template>
  <div class="container">
    <sell-banner />
    <h1>ReMarket Offers</h1>
    <list-offer />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "../stores/store";
import listOffer from "../components/listOffer.vue";
import SellBanner from "../components/SellBanner.vue";

const store = useStore();
const { offers } = storeToRefs(store);
</script>

<style lang="scss" scoped>
h1 {
  color: black;
}
</style>
