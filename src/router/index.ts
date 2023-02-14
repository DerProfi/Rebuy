import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/ListPage.vue"),
    },
    {
      path: "/offer/:id",
      name: "productPage",
      component: () => import("../views/ProductPage.vue"),
    },
  ],
});

export default router;
