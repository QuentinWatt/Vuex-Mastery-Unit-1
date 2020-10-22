<template>
  <button @click="powerOn">Power On</button>
  <button @click="powerOff">Power Off</button>
</template>

<script>
export default {
  name: "Counter",
  props: {
    msg: String,
  },
  methods: {
    powerOn() {
      this.$store.dispatch("powerOn");
    },
    powerOff() {
      this.$store.dispatch("powerOff");
    },
  },
};
</script>
