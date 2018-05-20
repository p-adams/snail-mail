import vue from "vue";
import Vuex from "vuex";
import Users from "./modules/users";
import Emails from "./modules/emails";
import UserInterface from "./modules/userInterface";
vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    UserInterface,
    Users,
    Emails
  }
});

export default store;
