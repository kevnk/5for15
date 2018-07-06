<template>
  <div class="streak-count">
    <div class="icon-wrap"><bolt-icon /></div>
    <div class="count">{{ count }} {{ day }}<br>streak</div>
  </div>
</template>

<script>
import Vue from 'vue';
const BoltIcon = Vue.component(
  'bolt-icon',
  require('@/assets/images/bolt.svg')
);

export default {
  name: 'StreakCount',
  components: {
    BoltIcon,
  },
  data() {
    return {
      bolt: `<img class="svg" src="${require('@/assets/images/bolt.svg')}" />`,
    };
  },
  computed: {
    count() {
      return '#';
    },
    day() {
      return this.count === 1 ? 'day' : 'days';
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/components/streak-count.scss">
</style>
