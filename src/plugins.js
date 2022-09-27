import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueToastr from "vue-toastr";

Vue.use(Vuetify);

Vue.use(VueRouter);
Vue.use(VueToastr);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: {
          base: "#004c45",
          lighten1: "#397870",
          darken1: "#00241e",
        },
        /*
        primary: {
          base: "#1a237e",
          lighten1: "#000051",
          darken1: "#000051",
        },
        **/
        secondary: {
          base: "#ff5100",
          lighten1: "#ff853c",
          darken1: "#c30f00",
        },
      },
    },
  },
});
