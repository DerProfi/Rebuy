import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    offers: [
      {
        id: 1,
        title: "Product One",
        description: "This is the first offer",
        votes: 0,
        image: "../../public/iphone.jpg",
        link: "11374415",
      },
      {
        id: 2,
        title: "Product Two",
        description: "This is the second offer",
        votes: 3,
      },
      {
        id: 3,
        title: "Product Three",
        description: "This is the third offer",
        votes: 0,
        image: "../../public/mac.jpg",
        link: "9870608",
      },
      {
        id: 4,
        title: "Product Four",
        description: "This is the fourth offer",
        votes: 2,
      },
      {
        id: 5,
        title: "Product Fife",
        description: "This is the fifth offer",
        votes: 0,
      },
      {
        id: 6,
        title: "Product Six",
        description: "This is the sisth offer",
        votes: 1,
      },
      {
        id: 7,
        title: "Product Seven",
        description: "This is the seventh offer",
        votes: 0,
      },
    ],
  }),
  getters: {
    getOfferById: (state) => (id: Number) => {
      return state.offers.find((o) => o.id === id);
    },
  },
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
