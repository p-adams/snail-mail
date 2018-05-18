<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-title class="headline">
            <h5><slot name="title"></slot></h5>
          </v-card-title>
          <v-card-text>
            <v-form>
              <slot></slot>
            </v-form>
          </v-card-text>
          <v-card-text class="red--text">
            <slot name="error"></slot>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <slot name="buttons"></slot>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TheEntryForm"
};
</script>


