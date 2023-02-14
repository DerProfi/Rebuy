import { defineStore } from "pinia";
// import type { Offer } from "../models/offer";

export const useStore = defineStore("main", {
  state: () => ({
    offers: [
      {
        id: 1,
        title: "First",
        description: "This is the first offer",
        votes: 0,
        image: "../../public/iphone.jpg",
      },
      {
        id: 2,
        title: "Second",
        description: "This is the second offer",
        votes: 0,
      },
      {
        id: 3,
        title: "Third",
        description: "This is the third offer",
        votes: 0,
        image: "../../public/mac.jpg",
      },
      {
        id: 4,
        title: "Third",
        description: "This is the third offer",
        votes: 0,
      },
      {
        id: 5,
        title: "Third",
        description: "This is the third offer",
        votes: 0,
      },
      {
        id: 6,
        title: "Third",
        description: "This is the third offer",
        votes: 0,
      },
      {
        id: 7,
        title: "Third",
        description: "This is the third offer",
        votes: 0,
      },
    ],
  }),
  actions: {
    downvoteOffer(offerId: number) {
      const offer = this.offers.find((o) => o.id === offerId);
      if (offer) {
        offer.votes--;
      }
    },
    upvoteOffer(offerId: number) {
      const offer = this.offers.find((o) => o.id === offerId);
      if (offer) {
        offer.votes++;
      }
    },
  },
});
