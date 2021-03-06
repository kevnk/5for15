<template>
  <div class="calendar-slider">
    <div class="inner">
      <div @click="setWorkoutDate(-2)" :class="['workout', 'two-days-out', {'is-today': twoDaysBeforeIsToday}]">
        <div class="icon">
          <check-icon v-if="twoDaysBeforeIsDone" class="is-done" />
          <times-icon v-else class="isnt-done" />
        </div>
        <div class="week-day">{{ twoDaysBeforeWeekDay }}</div>
        <div class="date">{{ twoDaysBefore }}</div>
        <div class="workout-title">{{ twoDaysBeforeWorkout.title }}</div>
      </div>
      <div @click="setWorkoutDate(-1)" :class="['workout', 'one-day-out', {'is-today': oneDayBeforeIsToday}]">
        <div class="icon">
          <check-icon v-if="oneDayBeforeIsDone" class="is-done" />
          <times-icon v-else class="isnt-done" />
        </div>
        <div class="week-day">{{ oneDayBeforeWeekDay }}</div>
        <div class="date">{{ oneDayBefore }}</div>
        <div class="workout-title">{{ oneDayBeforeWorkout.title }}</div>
      </div>
      <div :class="['workout', 'workout-day', {'is-today': workoutDayIsToday}]">
        <div class="icon">
          <check-icon v-if="workoutDayIsDone" class="is-done" />
          <times-icon v-else class="isnt-done" />
        </div>
        <div class="week-day">{{ workoutWeekDay }}</div>
        <div class="date">{{ workoutDay }}</div>
        <h1 class="workout-title">{{ workout.title }}</h1>
        <h1 class="workout-body">{{ workout.body }}</h1>
      </div>
      <div @click="setWorkoutDate(1)" :class="['workout', 'one-day-out', {'is-today': oneDayAfterIsToday}]">
        <div class="icon">
          <check-icon v-if="oneDayAfterIsDone" class="is-done" />
          <times-icon v-else class="isnt-done" />
        </div>
        <div class="week-day">{{ oneDayAfterWeekDay }}</div>
        <div class="date">{{ oneDayAfter }}</div>
        <div class="workout-title">{{ oneDayAfterWorkout.title }}</div>
      </div>
      <div @click="setWorkoutDate(2)" :class="['workout', 'two-days-out', {'is-today': twoDaysAfterIsToday}]">
        <div class="icon">
          <check-icon v-if="twoDaysAfterIsDone" class="is-done" />
          <times-icon v-else class="isnt-done" />
        </div>
        <div class="week-day">{{ twoDaysAfterWeekDay }}</div>
        <div class="date">{{ twoDaysAfter }}</div>
        <div class="workout-title">{{ twoDaysAfterWorkout.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { WORKOUTS, WORKOUT_PLACEHOLDER } from '../workouts';
const CheckIcon = Vue.component(
  'check-icon',
  require('@/assets/images/check-regular.svg')
);
const TimesIcon = Vue.component(
  'times-icon',
  require('@/assets/images/times-regular.svg')
);

export default {
  name: 'CalendarSlider',
  components: {
    CheckIcon,
    TimesIcon,
  },
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
    twoDaysBeforeIsDone() {
      return this.workoutIsDone(this.$store.getters.twoDatesBefore);
    },
    oneDayBeforeIsDone() {
      return this.workoutIsDone(this.$store.getters.oneDateBefore);
    },
    workoutDayIsDone() {
      return this.workoutIsDone(this.$store.state.workoutDate);
    },
    oneDayAfterIsDone() {
      return this.workoutIsDone(this.$store.getters.oneDateAfter);
    },
    twoDaysAfterIsDone() {
      return this.workoutIsDone(this.$store.getters.twoDatesAfter);
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
        WORKOUTS[this.$store.getters.twoDatesBefore.getDayOfYear() % 5] ||
        WORKOUT_PLACEHOLDER
      );
    },
    oneDayBeforeWorkout() {
      return (
        WORKOUTS[this.$store.getters.oneDateBefore.getDayOfYear() % 5] ||
        WORKOUT_PLACEHOLDER
      );
    },
    workout() {
      return (
        WORKOUTS[this.$store.state.workoutDate.getDayOfYear() % 5] ||
        WORKOUT_PLACEHOLDER
      );
    },
    oneDayAfterWorkout() {
      return (
        WORKOUTS[this.$store.getters.oneDateAfter.getDayOfYear() % 5] ||
        WORKOUT_PLACEHOLDER
      );
    },
    twoDaysAfterWorkout() {
      return (
        WORKOUTS[this.$store.getters.twoDatesAfter.getDayOfYear() % 5] ||
        WORKOUT_PLACEHOLDER
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
    workoutIsDone(workoutDate) {
      let workoutDateISO = new Date(workoutDate).toISODateString();
      let workout = this.$store.state.workouts[workoutDateISO] || {};
      return workout.isDone;
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/components/calendar-slider.scss">
</style>
