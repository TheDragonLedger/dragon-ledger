import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Books from "../views/Books.vue";
import Characters from "../views/Characters.vue";
import World from "../views/World.vue";
import ArchiveLocations from "../views/ArchiveLocations.vue";
import KittenDragon from "../views/KittenDragon.vue";
import Blog from "../views/Blog.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/books",
    name: "Books",
    component: Books,
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters,
  },
  {
    path: "/archive",
    name: "Archive",
    component: World,
  },
  {
    path: "/world",
    redirect: "/archive",
  },
  {
    path: "/archive/locations",
    name: "ArchiveLocations",
    component: ArchiveLocations,
  },
  {
    path: "/kitten-dragon",
    name: "KittenDragon",
    component: KittenDragon,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/journal",
    redirect: "/blog",
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
