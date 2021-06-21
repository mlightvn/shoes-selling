import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ParentTemplate from '@/components/layouts/ParentTemplate.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/collection",
    component: () =>
      import("../views/Collection.vue"),
  },
  {
    path: "/products",
    component: () => import("../views/Products.vue"),
    children: [
      {
        path: ":id",
        component: () =>
          import("../views/Products.vue"),
      },
    ],
  },
  {
    path: "/categories",
    component: ParentTemplate,
    children: [
      {
        path: "shoes",
        component: () =>
          import("../views/Products.vue"),
      },
      {
        path: "racing-boots",
        component: () =>
          import("../views/categories/RacingBoots.vue"),
      },
    ],
  },
  {
    path: "/contact",
    component: () =>
      import("../views/Contact.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not_found",
    component: () => import('@/views/errors/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
