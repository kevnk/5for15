<template>
  <div class="streak-count">
    <div class="icon-wrap" v-html="bolt"></div>
    <div class="count">{{ count }} {{ day }}<br>streak</div>
  </div>
</template>

<script>
export default {
  name: 'StreakCount',

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
