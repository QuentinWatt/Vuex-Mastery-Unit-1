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
