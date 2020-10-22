<template>
  <PowerButtons />
  <DisplayPower />
</template>

<script>
import PowerButtons from "./components/PowerButtons.vue";
import DisplayPower from "./components/DisplayPower.vue";

export default {
  name: "App",
  components: {
    PowerButtons,
    DisplayPower,
  },
};
</script>
