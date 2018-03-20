var TodaysWorkout = Vue.component('todays-workout', {
  props: ['workout', 'workoutDay'],
  data() {
    return {};
  },
  template: `
    <div class="todays-workout section">
      <div class="container">
        <p class="protitle has-text-grey-light">Day {{ workoutDay }}</p>
        <h1 class="title is-1 is-spaced">{{ workout.title }}</h1>
        <p class="subtitle is-4 has-text-grey">{{ workout.body }}</p>
      </div>
    </div>
  `,
});

export default TodaysWorkout;
