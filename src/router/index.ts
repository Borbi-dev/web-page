import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DownloadView from "../views/DownloadView.vue";
import NewsView from "../views/NewsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/download",
    name: "download",
    component: DownloadView
  },
  {
    path: "/news",
    name: "news",
    component: NewsView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
