import Vue from "vue";
import Router from "vue-router";
import MainEmailPanel from "@/components/MainEmailPanel";
import WelcomePage from "@/components/WelcomePage";
import LoginForm from "@/components/LoginForm";
import RegistrationForm from "@/components/RegistrationForm";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "WelcomePage",
      component: WelcomePage
    },
    {
      path: "/main",
      name: "MainEmailPanel",
      component: MainEmailPanel
    },
    {
      path: "/login",
      name: "LoginForm",
      component: LoginForm
    },
    {
      path: "/registration",
      name: "Registration",
      component: RegistrationForm
    }
  ]
});
