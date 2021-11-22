import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueToastr from "vue-toastr";

Vue.use(Vuetify);
const opts = {};

Vue.use(VueRouter);
Vue.use(VueToastr);

export default new Vuetify(opts);
