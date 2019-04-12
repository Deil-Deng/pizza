import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";
import axios from "axios";

Vue.use(VueRouter);

axios.defaults.baseURL = "https://wd6296503269ipmamo.wilddogio.com/";

const router = new VueRouter({
  routes,
  //去掉路径#号
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { X: 0, y: 100 };
  }
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
