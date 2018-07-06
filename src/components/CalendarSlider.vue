<template>
  <div class="calendar-slider">
    <div class="inner">
      <div @click="setWorkoutDate(-2)" :class="['workout', 'two-days-out', {'is-today': twoDaysBeforeIsToday}]">
        <div class="icon">&nbsp;</div>
        <div class="week-day">{{ twoDaysBeforeWeekDay }}</div>
        <div class="date">{{ twoDaysBefore }}</div>
        <div class="workout-title">{{ twoDaysBeforeWorkout.title }}</div>
      </div>
      <div @click="setWorkoutDate(-1)" :class="['workout', 'one-day-out', {'is-today': oneDayBeforeIsToday}]">
        <div class="icon">&nbsp;</div>
        <div class="week-day">{{ oneDayBeforeWeekDay }}</div>
        <div class="date">{{ oneDayBefore }}</div>
        <div class="workout-title">{{ oneDayBeforeWorkout.title }}</div>
      </div>
      <div :class="['workout', 'workout-day', {'is-today': workoutDayIsToday}]">
        <div class="icon">&nbsp;</div>
        <div class="week-day">{{ workoutWeekDay }}</div>
        <div class="date">{{ workoutDay }}</div>
        <h1 class="workout-title">{{ workout.title }}</h1>
        <h1 class="workout-body">{{ workout.body }}</h1>
      </div>
      <div @click="setWorkoutDate(1)" :class="['workout', 'one-day-out', {'is-today': oneDayAfterIsToday}]">
        <div class="icon">&nbsp;</div>
        <div class="week-day">{{ oneDayAfterWeekDay }}</div>
        <div class="date">{{ oneDayAfter }}</div>
        <div class="workout-title">{{ oneDayAfterWorkout.title }}</div>
      </div>
      <div @click="setWorkoutDate(2)" :class="['workout', 'two-days-out', {'is-today': twoDaysAfterIsToday}]">
        <div class="icon">&nbsp;</div>
        <div class="week-day">{{ twoDaysAfterWeekDay }}</div>
        <div class="date">{{ twoDaysAfter }}</div>
        <div class="workout-title">{{ twoDaysAfterWorkout.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { workouts, workoutPlaceholder } from '../workouts';
export default {
  name: 'CalendarSlider',

  data() {
    return {};
  },

  computed: {
    twoDaysBefore() {
      return this.$store.getters.twoDatesBefore.getDate();
    },
    oneDayBefore() {
      return this.$store.getters.oneDateBefore.getDate();
    },
    workoutDay() {
      return this.$store.state.workoutDate.getDate();
    },
    oneDayAfter() {
      return this.$store.getters.oneDateAfter.getDate();
    },
    twoDaysAfter() {
      return this.$store.getters.twoDatesAfter.getDate();
    },
    twoDaysBeforeIsToday() {
      return this.isToday(this.$store.getters.twoDatesBefore);
    },
    oneDayBeforeIsToday() {
      return this.isToday(this.$store.getters.oneDateBefore);
    },
    workoutDayIsToday() {
      return this.isToday(this.$store.state.workoutDate);
    },
    oneDayAfterIsToday() {
      return this.isToday(this.$store.getters.oneDateAfter);
    },
    twoDaysAfterIsToday() {
      return this.isToday(this.$store.getters.twoDatesAfter);
    },
    twoDaysBeforeWeekDay() {
      return this.$store.getters.twoDatesBefore.getWeekDay().substr(0, 1);
    },
    oneDayBeforeWeekDay() {
      return this.$store.getters.oneDateBefore.getWeekDay().substr(0, 1);
    },
    workoutWeekDay() {
      return this.$store.state.workoutDate.getWeekDay().substr(0, 1);
    },
    oneDayAfterWeekDay() {
      return this.$store.getters.oneDateAfter.getWeekDay().substr(0, 1);
    },
    twoDaysAfterWeekDay() {
      return this.$store.getters.twoDatesAfter.getWeekDay().substr(0, 1);
    },
    twoDaysBeforeWorkout() {
      return (
        workouts[this.$store.getters.twoDatesBefore.getDayOfYear() % 5] ||
        workoutPlaceholder
      );
    },
    oneDayBeforeWorkout() {
      return (
        workouts[this.$store.getters.oneDateBefore.getDayOfYear() % 5] ||
        workoutPlaceholder
      );
    },
    workout() {
      return (
        workouts[this.$store.state.workoutDate.getDayOfYear() % 5] ||
        workoutPlaceholder
      );
    },
    oneDayAfterWorkout() {
      return (
        workouts[this.$store.getters.oneDateAfter.getDayOfYear() % 5] ||
        workoutPlaceholder
      );
    },
    twoDaysAfterWorkout() {
      return (
        workouts[this.$store.getters.twoDatesAfter.getDayOfYear() % 5] ||
        workoutPlaceholder
      );
    },
  },
  methods: {
    setWorkoutDate(diff) {
      return this.$store.dispatch('setWorkoutDate', diff);
    },
    isToday(workoutDate) {
      return (
        new Date().toISODateString() === new Date(workoutDate).toISODateString()
      );
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/components/calendar-slider.scss">
</style>
