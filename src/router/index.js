import Vue from "vue";
import Router from "vue-router";
import MainEmailPanel from "@/components/MainEmailPanel";
import WelcomePage from "@/components/WelcomePage";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/main",
      name: "MainEmailPanel",
      component: MainEmailPanel
    },
    {
      path: "/",
      name: "WelcomePage",
      component: WelcomePage
    }
  ]
});
