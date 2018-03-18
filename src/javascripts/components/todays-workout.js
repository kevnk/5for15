var TodaysWorkout = Vue.component('todays-workout', {
  props: ['workout'],
  data() {
    return {};
  },
  template: `
    <div class="todays-workout section">
      <div class="container">
        <h1 class="title">{{ workout.title }}</h1>
        <p>{{ workout.body }}</p>
      </div>
    </div>
  `,
});

export default TodaysWorkout;
