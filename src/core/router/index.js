import VueRouter from "vue-router";

import LandingPage from "../../pages/LandingPage.vue";
import SearcherPage from "../../pages/SearcherPage.vue";
import OffererPage from "../../pages/OffererPage.vue";
import AboutUs from "../../pages/AboutUs.vue";
import Contact from "../../pages/ContactPage.vue";
import HowItWorksPage from "../../pages/HowItWorksPage.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/searcher", component: SearcherPage, name: "Searcher" },
  { path: "/offerer", component: OffererPage, name: "Offerer" },
  { path: "/aboutUs", component: AboutUs, name: "aboutus" },
  { path: "/contact", component: Contact, name: "Contact" },
  { path: "/howitworks", component: HowItWorksPage, name: "HowTo" },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      /*
            return {
              selector: to.hash
            }
      */
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
