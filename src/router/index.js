import Vue from "vue";
import Router from "vue-router";
import EmailHomepage from "@/components/EmailHomepage";
import WelcomePage from "@/components/WelcomePage";
import LoginForm from "@/components/LoginForm";
import RegistrationForm from "@/components/RegistrationForm";
import ErrorPage from "@/components/ErrorPage";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "WelcomePage",
      component: WelcomePage
    },
    {
      path: "/email-homepage",
      name: "EmailHomepage",
      component: EmailHomepage
    },
    {
      path: "/login",
      name: "Login",
      component: LoginForm
    },
    {
      path: "/registration",
      name: "Registration",
      component: RegistrationForm
    },
    {
      path: "/error",
      name: "Error",
      component: ErrorPage
    }
  ]
});
