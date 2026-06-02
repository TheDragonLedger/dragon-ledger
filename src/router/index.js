import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Books from "../views/Books.vue";
import Characters from "../views/Characters.vue";
import World from "../views/World.vue";
import ArchiveLocations from "../views/ArchiveLocations.vue";
import ArchiveMoodboards from "../views/ArchiveMoodboards.vue";
import ArchiveCountry from "../views/ArchiveCountry.vue";
import ArchiveWorldPlaces from "../views/ArchiveWorldPlaces.vue";
import KittenDragon from "../views/KittenDragon.vue";
import Blog from "../views/Blog.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";

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
    path: "/archive/moodboards",
    name: "ArchiveMoodboards",
    component: ArchiveMoodboards,
  },
  {
    path: "/archive/places-of-the-world",
    name: "ArchiveWorldPlaces",
    component: ArchiveWorldPlaces,
  },
  {
    path: "/archive/places-of-the-world/:slug",
    name: "ArchiveCountry",
    component: ArchiveCountry,
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
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
