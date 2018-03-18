var TodaysWorkout = Vue.component('todays-workout', {
  data() {
    return {};
  },
  computed: {
    day() {
      // @see: https://stackoverflow.com/a/8619946/622287
      var now = new Date();
      var start = new Date(now.getFullYear(), 0, 0);
      var diff =
        now -
        start +
        (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
      var oneDay = 1000 * 60 * 60 * 24;
      return Math.floor(diff / oneDay);
    },
    workout() {
      return WORKOUTS[this.day % 5];
    },
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

const WORKOUTS = [
  {
    title: 'Back + Shoulders',
    body: 'Pull-ups — wide / narrow / static',
  },
  {
    title: 'Chest',
    body: 'Push-ups — incline / decline / wide / explosive',
  },
  {
    title: 'Legs',
    body: 'Lunges, Jump Squats, Weighted Squats',
  },
  {
    title: 'Biceps',
    body: 'Chin-ups — wide / narrow / head-banger',
  },
  {
    title: 'Abs',
    body: 'Leg Raises, Static Holds, No situps!!!',
  },
];
