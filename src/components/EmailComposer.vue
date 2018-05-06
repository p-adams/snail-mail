<template>
  <v-flex>
    <v-form>
      <v-text-field
        label="to"
        v-model="toRecipient"
      />
      <v-text-field
        label="subject"
        v-model="emailSubject"
      />
      <v-text-field
        label="body"
        v-model="emailBody"
      />
      <v-btn
        @click="composeEmail({toRecipient, emailSubject, emailBody})"
        :disabled="inputFieldsAreEmpty"  
      >Send email</v-btn>
      <v-btn>Cancel</v-btn>
    </v-form>
  </v-flex>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "EmailComposer",
  data() {
    return {
      toRecipient: "",
      emailSubject: "",
      emailBody: ""
    };
  },
  methods: {
    ...mapActions(["composeEmail"])
  },
  computed: {
    inputFieldsAreEmpty() {
      return (
        this.toRecipient === "" ||
        this.emailSubject === "" ||
        this.emailBody === ""
      );
    }
  }
};
</script>

