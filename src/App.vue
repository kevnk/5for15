<template>
  <div id="app">
    <Workout />
  </div>
</template>

<script>
import Workout from './components/Workout.vue'

export default {
  name: 'app',
  components: {
    Workout
  }
}
</script>

<style>
html, body {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  text-align: center;
}
</style>
