'use strict'

const { buildWeeksArr } = require('./weeks')
const { formatHeader } = require('./header')
const { getMonthString, getMonthLength, getMonthNum  } = require('./format-month')
const { getFirstDay } = require('./first-day')

const buildCal = (month, year) => {
  let formattedMonth = getMonthString(month, year)
  let monthLength = getMonthLength(formattedMonth, year)
  let monthNum = getMonthNum(formattedMonth, year).key
  let dayOne = getFirstDay(monthNum, year)
  let calArr = []

  // ES6 spread operator to concat the returned arrays into calArray
  calArr.push(
    ...formatHeader(formattedMonth, year),
    ...buildWeeksArr(monthLength, dayOne)
    )
  
  let calStr = calArr.join('')
  return calStr
};

module.exports = { buildCal }
