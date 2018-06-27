Date.prototype.monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

Date.prototype.weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

Date.prototype.getMonthName = function() {
  return this.monthNames[this.getMonth()];
};
Date.prototype.getShortMonthName = function() {
  return this.getMonthName().substr(0, 3);
};

Date.prototype.getWeekDay = function() {
  return this.weekDays[this.getDay()];
};

// @see: https://stackoverflow.com/a/8619946/622287
Date.prototype.getDayOfYear = function() {
  var start = new Date(this.getFullYear(), 0, 0);
  var diff =
    this -
    start +
    (start.getTimezoneOffset() - this.getTimezoneOffset()) * 60 * 1000;
  var oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

Date.prototype.addDays = function(days) {
  let d = new Date(this);
  d.setDate(d.getDate() + days);
  return d;
};
