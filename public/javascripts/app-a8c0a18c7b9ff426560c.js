!function(t){function e(o){if(s[o])return s[o].exports;var n=s[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var s={};e.m=t,e.c=s,e.d=function(t,s,o){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="javascripts/",e(e.s=0)}([function(t,e,s){t.exports=s(1)},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(2),n=s(3),i=s(4);new Vue({el:"#app",components:{"todays-workout":o.a,"track-workout":n.a},computed:{day:function(){var t=new Date,e=new Date(t.getFullYear(),0,0),s=t-e+60*(e.getTimezoneOffset()-t.getTimezoneOffset())*1e3;return Math.floor(s/864e5)},workoutDay:function(){return this.day%5+1},workout:function(){return i.a[this.day%5]}}})},function(t,e,s){"use strict";var o=Vue.component("todays-workout",{props:["workout"],data:function(){return{}},template:'\n    <div class="todays-workout section">\n      <div class="container">\n        <h1 class="title">{{ workout.title }}</h1>\n        <p>{{ workout.body }}</p>\n      </div>\n    </div>\n  '});e.a=o},function(t,e,s){"use strict";var o=Vue.component("track-workout",{props:["workout","workoutDay"],data:function(){return{sets:0,reps:0,weight:0,hasSaved:!1,showCheck:!1}},mounted:function(){this.workouts[this.today]&&(this.sets=this.workouts[this.today].sets||0,this.reps=this.workouts[this.today].reps||0,this.weight=this.workouts[this.today].weight||0,this.hasSaved=this.workouts[this.today].hasSaved||0)},computed:{workoutsComplete:function(){for(var t=0,e=0;e<Object.keys(this.workouts).length;e++){var s=Object.keys(this.workouts)[e],o=this.workouts[s];o.sets>0&&o.reps>0&&(t+=1)}return t},buttonText:function(){return this.showCheck?"Saved":this.hasSaved?"Update":"Save"},today:function(){var t=new Date,e=t.getDate(),s=t.getMonth()+1,o=t.getFullYear();return e<10&&(e="0"+e),s<10&&(s="0"+s),o+"-"+s+"-"+e},workouts:function(){var t={};try{t=JSON.parse(localStorage.getItem("tracking-workouts"))}catch(t){}return Object.assign({},t)}},methods:{save:function(){var t=this;this.hasSaved=!0,this.showCheck=!0,setTimeout(function(){t.showCheck=!1},5e3);var e=JSON.parse(JSON.stringify(this.$data));delete e.workouts,e.workoutDay=this.workoutDay,e.workout=this.workout,this.workouts[this.today]=e,localStorage.setItem("tracking-workouts",JSON.stringify(this.workouts))}},template:'\n    <div class="track-workout section">\n      <div class="container">\n        <div class="card">\n          <header class="card-header">\n            <div class="card-header-title is-centered">Track Your Workout</div>\n          </header>\n          <div class="card-content">\n            <div class="field">\n              <label for="sets" class="label"># Sets</label>\n              <div class="control">\n                <input v-model="sets" type="number" class="input" min="0" />\n              </div>\n            </div>\n            <div class="field">\n              <label for="reps" class="label"># Reps</label>\n              <div class="control">\n                <input v-model="reps" type="number" class="input" min="0" />\n              </div>\n            </div>\n            <div class="field">\n              <label for="weight" class="label">Extra Weight (lbs)</label>\n              <div class="control">\n                <input v-model="weight" type="number" class="input" min="0" step="0.1" />\n              </div>\n            </div>\n            <div class="field">\n              <button class="button is-primary is-rounded is-medium" @click.prevent="save" @mouseleave="setTimeout(()=>{showCheck = false},1000)">\n                <span>{{ buttonText }}</span>\n                <span v-if="showCheck" class="icon is-small">\n                  <i class="fas fa-check"></i>\n                </span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <p class="has-text-grey-light">\n          Completed workouts: {{ workoutsComplete }}\n        </p>\n      </div>\n    </div>\n  '});e.a=o},function(t,e,s){"use strict";s.d(e,"a",function(){return o});var o=[{title:"Back + Shoulders",body:"Pull-ups — wide / narrow / static"},{title:"Chest",body:"Push-ups — incline / decline / wide / explosive"},{title:"Legs",body:"Lunges, Jump Squats, Weighted Squats"},{title:"Biceps",body:"Chin-ups — wide / narrow / head-banger"},{title:"Abs",body:"Leg Raises, Static Holds, No situps!!!"}]}]);