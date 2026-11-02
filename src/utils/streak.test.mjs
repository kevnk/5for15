// Run: node src/utils/streak.test.mjs
// Checks countStreak on both sides of UTC. The expected answers are what the
// old store.js loop gave in America/Chicago, where it happened to work.
// Node's MODULE_TYPELESS_PACKAGE_JSON warning is harmless: "type": "module"
// would break the CommonJS babel.config.js and vue.config.js.
import assert from 'assert';
import { countStreak } from './streak.js';

const zones = [
  'America/Chicago',
  'Europe/Paris',
  'Asia/Tokyo',
  'Pacific/Auckland',
  'Europe/London',
  'UTC',
];

// [year, monthIndex, day]: a plain day, then days whose last three days
// cross a DST switch (US Mar 8 / Nov 1, EU Mar 29, NZ Apr 5 / Sep 27).
const days = [
  [2026, 5, 15],
  [2026, 2, 9],
  [2026, 10, 2],
  [2026, 2, 30],
  [2026, 3, 6],
  [2026, 8, 28],
];

// Workouts logged `ago` days before `now`, keyed the way store.js keys them.
const log = (now, ago, isDone = true) =>
  Object.fromEntries(
    ago.map(n => [
      new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - n,
        12
      ).toISODateString(),
      { isDone },
    ])
  );

const cases = [
  ['today only', now => log(now, [0]), 1],
  ['three days in a row', now => log(now, [0, 1, 2]), 3],
  ['yesterday and the day before', now => log(now, [1, 2]), 2],
  ['nothing logged', () => ({}), 0],
  ['today, gap, day before', now => log(now, [0, 2]), 1],
  [
    'yesterday logged as not done',
    now => ({ ...log(now, [1], false), ...log(now, [2]) }),
    0,
  ],
];

let checks = 0;
for (const zone of zones) {
  process.env.TZ = zone;
  for (const [y, m, d] of days) {
    for (const [h, min] of [[0, 30], [23, 30]]) {
      const now = new Date(y, m, d, h, min);
      for (const [name, workouts, expected] of cases) {
        assert.strictEqual(
          countStreak(workouts(now), now),
          expected,
          `${zone} ${now.toString()}: ${name}`
        );
        checks++;
      }
    }
  }
}
console.log(`ok: ${checks} streak checks across ${zones.length} time zones`);
