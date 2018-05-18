<template>
  <the-entry-form>
    <span slot="title">Register for Snail Mail</span>
    <v-text-field/>
    <v-text-field/>
    <v-text-field/>
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

