<template>
  <the-entry-form>
    <span slot="title">Register for Snail Mail</span>
    <v-text-field placeholder="Create email"/>
    <v-text-field placeholder="Create password"/>
    <v-text-field placeholder="Re-enter password"/>
    <div slot="buttons">
      <v-btn>Cancel</v-btn>
      <v-btn>Register</v-btn>
    </div>
  </the-entry-form>
</template>
<script>
import TheEntryForm from "./TheEntryForm";
export default {
  components: {
    TheEntryForm
  }
};
</script>

