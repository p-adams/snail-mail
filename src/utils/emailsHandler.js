import axios from "axios";

export const getEmails = endpoint =>
  axios.get(endpoint).then(result => result.data.emails);
