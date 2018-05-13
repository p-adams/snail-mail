<template>
  <v-toolbar-items>
    <button-wrapper
      buttonTitle="Register"
      @click="showRegistrationForm"
    />
    <button-wrapper
      buttonTitle="Login"
      @click="showLoginForm"
    />
  </v-toolbar-items>
</template>
<script>
import ButtonWrapper from "./ButtonWrapper";
export default {
  components: {
    ButtonWrapper
  },
  methods: {
    showRegistrationForm() {
      this.$router.push({ name: "Registration" });
    },
    showLoginForm() {
      this.$router.push("login");
    }
  }
};
</script>

