import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    offers: [
      {
        id: 1,
        title: "Product One",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        votes: 0,
        image: "../../public/iphone.jpg",
        link: "11374415",
      },
      {
        id: 2,
        title: "Product Two",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        votes: 3,
        image: "../../public/pods.jpg",
        link: "11185787",
      },
      {
        id: 3,
        title: "Product Three",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        votes: 0,
        image: "../../public/mac.jpg",
        link: "9870608",
      },
      {
        id: 4,
        title: "Product Four",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        votes: 2,
      },
      {
        id: 5,
        title: "Product Fife",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        votes: 0,
      },
      {
        id: 6,
        title: "Product Six",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        votes: 1,
        image: "../../public/ipad.jpg",
        link: "8147992",
      },
      {
        id: 7,
        title: "Product Seven",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
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
