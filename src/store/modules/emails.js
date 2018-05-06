import emails from "../../mock-apis/emails";
import { getEmails } from "../../utils/emailsHandler";
const Emails = {
  state: {
    emails: [],
    openedEmail: undefined,
    selectedEmailAction: undefined,
    emailDeliveryStatus: undefined
  },
  mutations: {
    loadInbox(state, options) {
      state.emails.push(...options.emails);
    },
    openEmail(state, options) {
      state.openedEmail = options.email;
    },
    updateInbox(state, options) {
      state.emails = options.emails;
    },
    setSelectedEmailAction(state, options) {
      state.selectedEmailAction = options.action;
    }
  },
  actions: {
    loadInbox({ commit }) {
      getEmails("api/email-inbox").then(emails => {
        commit("loadInbox", { emails });
      });
    },
    openEmail({ commit }, payload) {
      commit("openEmail", {
        email: emails.filter(email => email.id === payload.id)[0]
      });
    },
    deleteEmail({ commit }) {
      commit("updateInbox", {
        emails: emails.filter(email => email.checked === false)
      });
    },
    composeEmail({ commit }, payload) {
      console.log(payload);
      // composeNewEmail("/api/new-email", { email: payload.email });
    },
    setSelectedEmailAction({ commit }, payload) {
      commit("setSelectedEmailAction", { action: payload.action });
    }
  },
  getters: {
    getEmails: state => state.emails,
    getSelectedEmail: state => state.openedEmail,
    getSelectedEmailAction: state => state.selectedEmailAction
  }
};

export default Emails;
