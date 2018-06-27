import Vue from 'vue';
import Vuex from 'vuex';
import { version, name } from '../package.json';
require('@/utils/date');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    workoutDate: new Date(),
    workouts: {},
    version: version,
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem(name)) {
        let savedStore = JSON.parse(localStorage.getItem(name));
        if (savedStore.version !== version) {
          localStorage.setItem(
            `${name}-v${savedStore.version}`,
            JSON.stringify(savedStore)
          );
        }
        this.replaceState(
          Object.assign(state, savedStore, {
            version: version,
            workoutDate: state.workoutDate,
          })
        );
      }
    },
    setWorkoutDate(state, diff) {
      state.workoutDate = state.workoutDate.addDays(diff);
    },
  },
  actions: {
    setWorkoutDate(store, diff) {
      this.commit('setWorkoutDate', diff);
    },
  },
  getters: {
    workoutMonth(state) {
      return state.workoutDate.getShortMonthName();
    },
    workoutYear(state) {
      return state.workoutDate.getFullYear();
    },
    twoDatesBefore(state) {
      return state.workoutDate.addDays(-2);
    },
    oneDateBefore(state) {
      return state.workoutDate.addDays(-1);
    },
    oneDateAfter(state) {
      return state.workoutDate.addDays(1);
    },
    twoDatesAfter(state) {
      return state.workoutDate.addDays(2);
    },
  },
});
