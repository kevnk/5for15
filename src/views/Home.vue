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
    <div v-if="!isDone" :class="['done-toggle', {'is-done': isDone}]">
      <a href="#" @click.prevent="toggleWorkout">
        <span class="check" v-html="checkIcon"></span>
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
import StreakCount from '@/components/StreakCount.vue';
import CalendarSlider from '@/components/CalendarSlider.vue';
import LastWorkout from '@/components/LastWorkout.vue';

export default {
  name: 'home',
  data() {
    return {
      isDone: false,
      checkIcon: `<img class="svg" src="${require('@/assets/images/check.svg')}" />`,
    };
  },
  computed: {
    workoutMonth() {
      return this.$store.getters.workoutMonth;
    },
    workoutYear() {
      return this.$store.getters.workoutYear;
    },
  },
  components: {
    'streak-count': StreakCount,
    'calendar-slider': CalendarSlider,
    'last-workout': LastWorkout,
  },
  methods: {
    toggleWorkout() {},
  },
};
</script>

<style lang="scss" src="@/assets/styles/pages/home.scss">
</style>
