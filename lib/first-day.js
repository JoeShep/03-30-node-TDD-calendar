/***
* h = calculated day
* q = day (q for day??? don't ask me... ask Dr. Zeller....)
* m = month
* y = year
* note: calculations must be in integers - do not use floats or it will fail.
*
*      /    |(m+1)*26|       | y |       | y |   | y |    \
* h = | q + |--------| + y + |---| + 6 * |---| + |---| - 1 | mod 7
*      \    |   10   |       | 4 |       |100|   |400|    /
*
***/

// returns 0-6 where 0=sunday, 1=monday, etc...
function getFirstDay(month, year) {
  // make sure month and year are numbers
  month = +month;
  year = +year;
  // January and February are to be considered months 13 and 14 of the previous year
  if (month < 3) { month += 12; year -= 1; }
  let day = 1
  const day1num = (day + Math.floor( ((month + 1) * 26) / 10) + year + Math.floor(year / 4) + 6 * Math.floor(year / 100) + Math.floor(year / 400) - 1) % 7;
  return day1num;
}

module.exports = { getFirstDay }
