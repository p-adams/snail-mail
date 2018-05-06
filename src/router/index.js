import Vue from "vue";
import Router from "vue-router";
import MainEmailActivityContainer from "@/components/MainEmailActivityContainer";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "MainEmailActivityContainer",
      component: MainEmailActivityContainer
    }
  ]
});
