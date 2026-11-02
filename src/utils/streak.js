import './date.js';

// Done days in a row ending yesterday, plus one if today is done.
// An unfinished today doesn't break the streak until the day is over.
export function countStreak(workouts, now = new Date()) {
  const isDone = date => (workouts[date.toISODateString()] || {}).isDone;
  // Noon, so DST shifts never push the day over midnight.
  let day = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
  let count = isDone(now) ? 1 : 0;
  while (isDone(day)) {
    count++;
    day = day.addDays(-1);
  }
  return count;
}
