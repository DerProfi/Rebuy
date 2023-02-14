<template>
  <div>
    <ul class="list">
      <li v-for="offer in sortedOffers" :key="offer.id" class="offer">
        <img v-if="offer.image" :src="offer.image" alt="Product image" />
        <img
          v-else
          src="https://dummyimage.com/600x400/74c0c8/fff&text=ReMarket"
          alt="Dummy Image"
        />
        {{ offer.title }} ({{ offer.votes }} votes)
        <the-button title="Upvote" @click="store.upvoteOffer(offer.id)" />
        <the-button title="Downvote" @click="store.downvoteOffer(offer.id)" />
        <router-link :to="`/offer/${offer.id}`">Details</router-link>
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
//MODAL
// var modal = document.getElementById("myModal");
// function openModul() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "block";
// }
// function createLink() {
//   let link = "https://www.rebuy.de/i,";
//   document.getElementById("link")?.setAttribute("href", link);
// }
// function closeModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }
// window.onclick = function (event) {
//   var modal = document.getElementById("myModal");

//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
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

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
