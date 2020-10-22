## Sharing data using Vuex

main.js

```
import App from "./App.vue";
import "./index.css";
import { createApp } from "vue";
import { store } from "./vuex/store";

const app = createApp(App);
app.use(store);

app.mount("#app");
```

store.js

```
import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      power: false,
    };
  },
  mutations: {
    powerOn(state) {
      state.power = true;
    },
    powerOff(state) {
      state.power = false;
    },
  },
  actions: {
    powerOn(context) {
      context.commit("powerOn");
    },
    powerOff(context) {
      context.commit("powerOff");
    },
  },
});

```

App.vue

```
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

```

DisplayPower.vue

```
<template>
  <h1 :style="{ color: $store.state.power ? 'green' : 'red' }">
    Power: {{ $store.state.power }}
  </h1>
</template>
```

Counter.vue

```
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
```
