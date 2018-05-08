import axios from "axios";

export const getEmails = username =>
  axios.get(`/api/emails/${username}`).then(result => result.data);
