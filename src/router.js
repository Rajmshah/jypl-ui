import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Phase2.vue";
import Form from "./views/Form.vue";
import ThankYou from "./views/ThankYou.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/registration/form",
      name: "Form",
      component: Form
    },
    {
      path: "/thank-you",
      name: "Thank You",
      component: ThankYou
    }
  ]
});
