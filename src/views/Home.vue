<template>
  <div class="home">
    <div class="top-bar">
      <streak-count />
      {{ workoutMonth }}
      {{ workoutYear }}
    </div>
    <calendar-slider />
    <div v-if="!isDone">
      <a href="#" @click.prevent="toggleWorkout">
        <div class="check" v-html="checkIcon"></div>
        <div class="ff-hand">DONE</div>
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
      checkIcon: `<img src="${require('@/assets/images/check.svg')}" />`,
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
