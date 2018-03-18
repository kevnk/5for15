var TrackWorkout = Vue.component('track-workout', {
  props: ['workout', 'workoutDay'],
  data() {
    return {
      sets: 0,
      reps: 0,
      weight: 0,
      hasSaved: false,
      showCheck: false,
    };
  },
  mounted() {
    if (this.workouts[this.today]) {
      this.sets = this.workouts[this.today].sets || 0;
      this.reps = this.workouts[this.today].reps || 0;
      this.weight = this.workouts[this.today].weight || 0;
      this.hasSaved = this.workouts[this.today].hasSaved || 0;
    }
  },
  computed: {
    workoutsComplete: {
      cache: false,
      get() {
        let count = 0;
        for (var i = 0; i < Object.keys(this.workouts).length; i++) {
          let day = Object.keys(this.workouts)[i];
          let workout = this.workouts[day];
          if (workout.sets != 0 && workout.reps != 0) {
            count += 1;
          }
        }
        return count;
      },
    },
    buttonText() {
      if (this.showCheck) return 'Saved';
      return this.hasSaved ? 'Update' : 'Save';
    },
    today() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      return `${yyyy}-${mm}-${dd}`;
    },
    workouts() {
      let workouts = {};
      try {
        workouts = JSON.parse(localStorage.getItem(`tracking-workouts`));
      } catch (e) {}
      return Object.assign({}, workouts);
    },
  },
  methods: {
    save() {
      this.hasSaved = true;
      this.showCheck = true;
      setTimeout(() => {
        this.showCheck = false;
      }, 5000);
      let data = JSON.parse(JSON.stringify(this.$data));
      delete data.workouts;
      data.workoutDay = this.workoutDay;
      data.workout = this.workout;
      this.workouts[this.today] = data;

      localStorage.setItem(`tracking-workouts`, JSON.stringify(this.workouts));
    },
  },
  template: `
    <div class="track-workout section">
      <div class="container">
        <div class="card is-rounded">
          <header class="card-header">
            <div class="card-header-title is-centered">Track Your Workout</div>
          </header>
          <div class="card-content">
            <div class="field">
              <label for="sets" class="label"># Sets</label>
              <div class="control">
                <input v-model="sets" type="number" class="input" min="0" />
              </div>
            </div>
            <div class="field">
              <label for="reps" class="label"># Reps</label>
              <div class="control">
                <input v-model="reps" type="number" class="input" min="0" />
              </div>
            </div>
            <div class="field">
              <label for="weight" class="label">Extra Weight (lbs)</label>
              <div class="control">
                <input v-model="weight" type="number" class="input" min="0" step="0.1" />
              </div>
            </div>
            <div class="field">
              <button class="button is-primary is-rounded is-medium" @click.prevent="save" @mouseleave="setTimeout(()=>{showCheck = false},2000)">
                <span>{{ buttonText }}</span>
                <span v-if="showCheck" class="icon is-small">
                  <i class="fas fa-check"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <p class="has-text-grey-light">
          Completed Workouts: {{ workoutsComplete }}
        </p>
      </div>
    </div>
  `,
});

export default TrackWorkout;
