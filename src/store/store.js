import vue from "vue";
import Vuex from "vuex";
import Users from "./modules/users";
import Emails from "./modules/emails";
vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Users,
    Emails
  }
});

export default store;
