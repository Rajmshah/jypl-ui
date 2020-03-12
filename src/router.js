import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Phase2.vue";
import Login from "./views/Login.vue";
import Attendance from "./views/Player-Attendance.vue";
import Photograph from "./views/Player-Photograph.vue";
import Form from "./views/Form.vue";
import ThankYou from "./views/ThankYou.vue";
import CoupleForm from "./views/Couple-Form.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    // {
    //   path: "/",
    //   name: "Home",
    //   component: Home
    // },
    {
      path: "/player-attendance",
      name: "Attendance",
      component: Attendance
    },
    {
      path: "/player-photograph",
      name: "Photograph",
      component: Photograph
    },
    {
      path: "/registration/form",
      name: "Form",
      component: Form
    },
    {
      path: "/couple-form",
      name: "CoupleForm",
      component: CoupleForm
    },
    {
      path: "/thank-you",
      name: "Thank You",
      component: ThankYou
    }
  ]
});
