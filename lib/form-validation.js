'use strict'

const { getMonths } = require('./weeks')

// arg1 should be a month, arg2 a year. 
// But can't rely on that being true
const validateArgs = (args) => {
  if (args.length == 0) return true
  return isMonth(args[0]) && isYear(args[1]) ? true : false
}

const isMonth = (item) => {
  return isNaN(+item) ? validateMonthStr(item) : validateMonthNum(+item)
}

const isYear = (item) => {
  return !isNaN(+item) 
  ? item > 1753 && item < 9999
  : false
}

const validateMonthNum = (monthNum) => {
  return monthNum > 0 && monthNum < 13
}

const validateMonthStr = (monthStr) => {
  if (monthStr.length < 3) return false
  let months = getMonths()
  let monthArr = []
  for (let month in months) {
    monthArr.push(months[month].name)
  }
  if (
  monthArr.filter( (month) => {
    return month.toLowerCase().includes(monthStr.toLowerCase())
  }).length === 0 
  ) {
    return false
  } else {
    return true
  }
}

module.exports = { validateArgs }
