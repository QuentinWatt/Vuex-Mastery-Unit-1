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
      sharedCount: 1,
    };
  },
  mutations: {
    incrementCount(state) {
      state.sharedCount++;
    },
    decrementCount(state) {
      state.sharedCount--;
    },
  },
  actions: {
    incrementCount(context) {
      context.commit("incrementCount");
    },
    decrementCount(context) {
      context.commit("decrementCount");
    },
  },
});

```

App.vue

```
<template>
  <Counter />
  <DisplayCounter />
</template>

<script>
import Counter from "./components/Counter.vue";
import DisplayCounter from "./components/DisplayCounter.vue";

export default {
  name: "App",
  components: {
    Counter,
    DisplayCounter,
  },
};
</script>
```

DisplayCounter.vue

```
<template>
  <h1>Display the count here: {{ $store.state.sharedCount }}</h1>
</template>
```

Counter.vue

```
<template>
  <button @click="increaseCount">Increase</button>
  <button @click="decreaseCount">Decrease</button>
</template>

<script>
export default {
  name: "Counter",
  props: {
    msg: String,
  },
  methods: {
    increaseCount() {
      this.$store.dispatch("incrementCount");
    },
    decreaseCount() {
      this.$store.dispatch("decrementCount");
    },
  },
};
</script>

```
