<template>
  <div class="calendar-slider">
    <div class="two-days-out">
      <div class="date">{{ twoDatesBefore }}</div>
      <div class="workout-name">TODO</div>
    </div>
    <div class="one-day-out">
      <div class="date">{{ oneDateBefore }}</div>
      <div class="workout-name">TODO</div>
    </div>
    <div class="the-day">
      <div class="date">{{ workoutDate }}</div>
      <h1 class="workout-name">TODO</h1>
    </div>
    <div class="one-day-out">
      <div class="date">{{ oneDateAfter }}</div>
      <div class="workout-name">TODO</div>
    </div>
    <div class="two-days-out">
      <div class="date">{{ twoDatesAfter }}</div>
      <div class="workout-name">TODO</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarSlider',

  data() {
    return {};
  },

  computed: {
    workoutDate() {
      return this.$store.state.workoutDate.getDate();
    },
    oneDateBefore() {
      return this.$store.getters.oneDateBefore.getDate();
    },
    twoDatesBefore() {
      return this.$store.getters.twoDatesBefore.getDate();
    },
    oneDateAfter() {
      return this.$store.getters.oneDateAfter.getDate();
    },
    twoDatesAfter() {
      return this.$store.getters.twoDatesAfter.getDate();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
