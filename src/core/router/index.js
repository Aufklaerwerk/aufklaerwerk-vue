import VueRouter from "vue-router";

import LandingPage from "../../pages/LandingPage.vue";

const routes = [
  { path: "/", component: LandingPage },
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
