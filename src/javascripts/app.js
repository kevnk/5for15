import TodaysWorkout from 'components/todays-workout';
import TrackWorkout from 'components/track-workout';
import { WORKOUTS } from 'config';

var vm = new Vue({
  el: '#app',
  components: {
    'todays-workout': TodaysWorkout,
    'track-workout': TrackWorkout,
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
    workoutDay() {
      return this.day % 5 + 1;
    },
    workout() {
      return WORKOUTS[this.day % 5];
    },
  },
});
