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
  },
  actions: {},
  getters: {
    workoutMonth(state) {
      return state.workoutDate.getShortMonthName();
    },
    workoutYear(state) {
      return state.workoutDate.getFullYear();
    },
    oneDateBefore(state) {
      let d = new Date(state.workoutDate);
      return new Date(d.setDate(d.getDate() - 1));
    },
    twoDatesBefore(state) {
      let d = new Date(state.workoutDate);
      return new Date(d.setDate(d.getDate() - 2));
    },
    oneDateAfter(state) {
      let d = new Date(state.workoutDate);
      return new Date(d.setDate(d.getDate() + 1));
    },
    twoDatesAfter(state) {
      let d = new Date(state.workoutDate);
      return new Date(d.setDate(d.getDate() + 2));
    },
  },
});

const WORKOUTS = [
  {
    title: 'Pull-ups',
    body: 'wide / narrow / static',
  },
  {
    title: 'Push-ups',
    body: 'incline / decline / wide / explosive',
  },
  {
    title: 'Legs',
    body: 'lunges / jump squats / weighted squats',
  },
  {
    title: 'Chin-ups',
    body: 'wide / narrow / head-banger',
  },
  {
    title: 'Abs',
    body: 'leg raises / static holds / no situps!',
  },
];
