"use strict";

const getToday = () => {
  // example of what currentDate might look like: Tue Mar 27 2018 21:48:07 GMT-0500 (CDT)
  let currentDate = new Date();
  let year = currentDate.toString().split(" ")[3];
  // returns an index of current month, ie March === 2
  let month = currentDate.getMonth() + 1;
  return { month, year };
};

module.exports = { getToday };
