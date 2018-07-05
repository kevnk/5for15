import Vue from 'vue';
import Vuex from 'vuex';
import { version, name } from '../package.json';
require('@/utils/date');

Vue.use(Vuex);

const WORKOUT = {};
const WORKOUTS = {};
WORKOUTS[new Date().toISODateString()] = WORKOUT;
let TODAY = new Date();
TODAY.setHours(23, 59, 59);

export default new Vuex.Store({
  state: {
    workoutDate: TODAY,
    workouts: WORKOUTS,
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
      let workoutDate = state.workoutDate.addDays(diff);
      let now = new Date();
      now.setHours(24, 0, 0);
      if (now.getTime() > workoutDate.getTime()) {
        state.workoutDate = workoutDate;
      }
    },
    toggleWorkout(state, isDone) {
      let workout = this.getters.workout;
      workout.isDone = isDone;
      state.workouts[state.workoutDate.toISODateString()] = workout;
    },
  },
  actions: {
    setWorkoutDate(store, diff) {
      this.commit('setWorkoutDate', diff);
    },
    toggleWorkout(store, isDone) {
      this.commit('toggleWorkout', isDone);
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
    workout(state) {
      return state.workouts[state.workoutDate.toISODateString()] || WORKOUT;
    },
    isDone(state, getters) {
      return getters.workout.isDone;
    },
  },
});
