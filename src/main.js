import App from "./App.vue";
import "./index.css";
import { createApp } from "vue";
import { store } from "./vuex/store";

const app = createApp(App);
app.use(store);

app.mount("#app");
