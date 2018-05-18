<template>
  <v-btn
    class="button"
    v-on="clickListener"
    flat
  >{{ buttonTitle }}</v-btn>
</template>
<script>
export default {
  props: {
    buttonTitle: {
      type: String,
      required: true,
      default: ""
    }
  },
  computed: {
    clickListener() {
      const self = this;
      return {
        ...this.$listeners,
        click: function() {
          self.$emit("click");
        }
      };
    }
  }
};
</script>
<style scoped>
.button {
  margin-left: 10px;
}
</style>


