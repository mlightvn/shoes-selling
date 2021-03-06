import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import ParentTemplate from '@/components/layouts/ParentTemplate.vue'

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/auth",
    component: ParentTemplate,
    children: [
      {
        path: "login",
        component: () => import("../views/auth/Login.vue"),
      },
      {
        path: "register",
        component: () => import("../views/auth/Register.vue"),
      },
      {
        path: "forgot-password",
        component: () => import("../views/auth/ForgotPassword.vue"),
      },
    ],
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/products/Index.vue"),
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
