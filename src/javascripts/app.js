import TodaysWorkout from 'components/todays-workout';

var vm = new Vue({
  el: '#app',
  components: {
    'todays-workout': TodaysWorkout,
  },
});
