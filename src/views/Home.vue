<template>
  <div class="home">
    <div class="top-bar">
      <div class="bar-item">
        <streak-count />
      </div>
      <div class="bar-item month">
        {{ workoutMonth }}
      </div>
      <div class="bar-item year">
        {{ workoutYear }}
      </div>
    </div>
    <calendar-slider />
    <div v-if="!workout.isDone" :class="['done-toggle', {'is-done': workout.isDone}]">
      <a href="#" @click.prevent="toggleWorkout">
        <span class="check"><check-icon /></span>
        <span class="ff-hand">DONE</span>
      </a>
      <last-workout />
    </div>
    <div v-else>
      Set
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import StreakCount from '@/components/StreakCount.vue';
import CalendarSlider from '@/components/CalendarSlider.vue';
import LastWorkout from '@/components/LastWorkout.vue';
const CheckIcon = Vue.component(
  'check-icon',
  require('@/assets/images/check-regular.svg')
);

export default {
  name: 'home',
  components: {
    CheckIcon,
  },
  data() {
    return {};
  },
  computed: {
    workoutMonth() {
      return this.$store.getters.workoutMonth;
    },
    workoutYear() {
      return this.$store.getters.workoutYear;
    },
    workout() {
      return this.$store.getters.workout;
    },
  },
  components: {
    'streak-count': StreakCount,
    'calendar-slider': CalendarSlider,
    'last-workout': LastWorkout,
  },
  methods: {
    toggleWorkout() {
      this.$store.dispatch('toggleWorkout', !this.workout.isDone);
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/pages/home.scss">
</style>
