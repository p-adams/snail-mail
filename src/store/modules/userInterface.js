const UserInterface = {
  state: {
    accountAdminVisibility: false
  },
  mutations: {
    setAccountAdminVisibility(state) {
      state.accountAdminVisibility = !state.accountAdminVisibility;
    }
  },
  actions: {
    toggleAccountAdminVisibility({ commit }) {
      commit("setAccountAdminVisibility");
    }
  },
  getters: {
    accountAdminVisibility: state => state.accountAdminVisibility
  }
};

export default UserInterface;
