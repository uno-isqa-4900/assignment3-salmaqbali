import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "List",
    component: () => import("../components/ListMovies"),
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../components/CreateMovies"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/EditMovies"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
