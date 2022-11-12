import { createRouter, createWebHistory } from "vue-router";
import Header from "../components/HeaderNav.vue";
import Competences from "../components/Competences.vue";
import Portfolio from "../components/Portfolio.vue";
import Propos from "../components/Apropos.vue";

const routes = [
  {
    path: "/",
    name: "Header",
    component: Header,
  },
  {
    path: "/competences",
    name: "Competences",
    component: Competences,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/propos",
    name: "Propos",
    component: Propos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
