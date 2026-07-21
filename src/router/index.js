import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Books from "../views/Books.vue";
import Characters from "../views/Characters.vue";
import Postcards from "../views/Postcards.vue";
import PostcardDetail from "../views/PostcardDetail.vue";
import World from "../views/World.vue";
import ArchiveLocations from "../views/ArchiveLocations.vue";
import ArchiveMoodboards from "../views/ArchiveMoodboards.vue";
import ArchiveRealmHeraldry from "../views/ArchiveRealmHeraldry.vue";
import ArchiveRealmsHeraldry from "../views/ArchiveRealmsHeraldry.vue";
import ArchiveCountry from "../views/ArchiveCountry.vue";
import ArchiveWorldPlaces from "../views/ArchiveWorldPlaces.vue";
import KittenDragon from "../views/KittenDragon.vue";
import KittenDragonStory from "../views/KittenDragonStory.vue";
import Blog from "../views/Blog.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import BeyondLedger from "../views/BeyondLedger.vue";
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
    path: "/postcards",
    name: "Postcards",
    component: Postcards,
  },
  {
    path: "/postcards/:slug",
    name: "PostcardDetail",
    component: PostcardDetail,
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
    path: "/archive/realms-heraldry",
    name: "ArchiveRealmsHeraldry",
    component: ArchiveRealmsHeraldry,
  },
  {
    path: "/archive/realms-heraldry/:slug",
    name: "ArchiveRealmHeraldry",
    component: ArchiveRealmHeraldry,
  },
  {
    path: "/kitten-dragon",
    name: "KittenDragon",
    component: KittenDragon,
  },
  {
    path: "/kitten-dragon/:slug",
    name: "KittenDragonStory",
    component: KittenDragonStory,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/journey",
    redirect: "/blog",
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
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/beyond-the-ledger",
    name: "BeyondLedger",
    component: BeyondLedger,
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
