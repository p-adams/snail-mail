import axios from "axios";
export default {
  authenticateUser: ({ username, password } = payload) => {
    return axios
      .post("/api/users/authenticate", { username, password })
      .then(response => response);
  }
};
