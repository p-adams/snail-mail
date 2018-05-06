import usersHandler from "../../utils/usersHandler";
const UsersModule = {
  state: {
    user: {
      username: undefined,
      password: undefined,
      authenticated: false
    },
    userAuthenticationErrorMessage: undefined
  },
  mutations: {
    resetErrorMessage(state) {
      state.userAuthenticationErrorMessage = undefined;
    },
    setErrorMessage(state, errorMessage) {
      state.userAuthenticationErrorMessage = errorMessage;
    },
    setCurrentUser(state, { username, password, authenticated }) {
      state.user = { username, password, authenticated };
    },
    signOut(state) {
      state.user.authenticated = false;
    }
  },
  actions: {
    loadUsers({ commit }) {
      commit("loadUsers", { users: Users() });
    },
    entryFormSubmit({ commit, state, dispatch }) {
      dispatch("loadUsers");
      state.users.map(user => {
        console.log(user);
      });
    },
    authenticateUser({ commit }, payload) {
      commit("resetErrorMessage");
      return usersHandler
        .authenticateUser(payload)
        .then(result => {
          if (result.data === "Account does not exist") {
            commit("setErrorMessage", result.data);
          } else if (result.data === "Wrong username or password") {
            commit("setErrorMessage", result.data);
          } else {
            commit("setCurrentUser", {
              username: payload.username,
              password: payload.password,
              authenticated: true
            });
          }
        })
        .catch(error => console.error(error));
    },
    signOut({ commit }) {
      return commit("signOut");
    }
  },
  getters: {
    userAuthenticationErrorMessage: state =>
      state.userAuthenticationErrorMessage,
    isUserAuthenticated: state => state.user.authenticated,
    authenticatedUser: state => state.user
  }
};

export default UsersModule;
