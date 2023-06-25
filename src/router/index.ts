import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/o-nas",
    name: "About",
    component: () => import("@/pages/AboutPage.vue"),
  },
  {
    path: "/events/:eventId",
    name: "EventPage",
    component: () => import("@/pages/EventPage.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
