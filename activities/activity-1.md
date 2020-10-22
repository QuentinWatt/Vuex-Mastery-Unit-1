## Sharing data between components without Vuex

App.vue

```
<template>
  <Counter @counted="updateCount" />
  <DisplayCounter :count="count" />
</template>

<script>
import Counter from "./components/Counter.vue";
import DisplayCounter from "./components/DisplayCounter.vue";

export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  components: {
    Counter,
    DisplayCounter,
  },
  methods: {
    updateCount(value) {
      this.count = value;
    },
  },
};
</script>
```

DisplayCounter.vue

```
<template>
  <h1>Display the count here: {{ count }}</h1>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: null,
    },
  },
};
</script>
```

Counter.vue

```
<template>
  <button @click="increaseCount">count is: {{ count }}</button>
</template>

<script>
export default {
  name: "Counter",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increaseCount() {
      this.count = this.count + 1;
      this.$emit("counted", this.count);
    },
  },
};
</script>
```
