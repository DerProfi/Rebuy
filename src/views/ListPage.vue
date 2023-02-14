<template>
  <div class="container">
    <h1>ReMarket Offers</h1>
    <list-offer />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "../stores/store";
import ListOffer from "../components/ListOffer.vue";

const store = useStore();
const { offers } = storeToRefs(store);
</script>

<style lang="scss" scoped>
h1 {
  color: black;
}
</style>
