<template>
  <div class="section">
    <div class="container">
      <h1 class="title">{{ workout.title }}</h1>
      <p>{{ workout.body }}</p>
    </div>
  </div>
</template>

<script>
const workouts = [
  {
    title: 'Back + Shoulders',
    body: 'Pull-ups — wide / narrow / static'
  },
  {
    title: 'Chest',
    body: 'Push-ups — incline / decline / wide / explosive'
  },
  {
    title: 'Legs',
    body: 'Lunges, Jump Squats, Weighted Squats'
  },
  {
    title: 'Biceps',
    body: 'Chin-ups — wide / narrow / head-banger'
  },
  {
    title: 'Abs',
    body: 'Leg Raises, Static Holds, No situps!!!'
  },
]

export default {
  name: 'Workout',
  computed: {
    day() {
      // @see: https://stackoverflow.com/a/8619946/622287
      var now = new Date();
      var start = new Date(now.getFullYear(), 0, 0);
      var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
      var oneDay = 1000 * 60 * 60 * 24;
      return Math.floor(diff / oneDay);
    },
    workout() {
      return workouts[this.day%5];
    },
  }
}
</script>

<style scoped>
  h1 {
    font-weight: 800;
  }
</style>
