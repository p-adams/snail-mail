<template>
  <v-btn
    class="button"
    @click="event"
    flat
    :outline="true"
  >{{ buttonTitle }}</v-btn>
</template>
<script>
export default {
  props: {
    event: {
      type: Function,
      required: true
    },
    buttonTitle: {
      type: String,
      required: true,
      default: ""
    },
    size: {
      type: String
    }
  }
};
</script>
<style scoped>
.button {
  margin-left: 10px;
}
</style>


