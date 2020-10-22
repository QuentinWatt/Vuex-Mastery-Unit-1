import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      power: false,
    };
  },
  getters: {
    powerText: (state) => {
      if (state.power) {
        return "On";
      }
      return "Off";
    },
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
