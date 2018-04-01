'use strict'

const { dayOne } = require('./first-day')

// a year that is divisible by 100 is a leap year only if it is also divisible by 400
const isLeapYear = (year) => {
  return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
}

const getMonths = (year) => {
  const months = {
    1: {name: "January", len: 31},
    2: {name: "February", len: isLeapYear(year) ? 29 : 28},
    3: {name: "March", len: 31},
    4: {name: "April", len: 30},
    5: {name: "May", len: 31},
    6: {name: "June", len: 30},
    7: {name: "July", len: 31},
    8: {name: "August", len: 30},
    9: {name: "September", len: 30},
    10: {name: "October", len: 31},
    11: {name: "November", len: 30},
    12: {name: "December", len: 31}
  }
  return months
}

const buildWeeksArr = (days, firstDay) => {
  // make an array of nums based on month length, add one to each first to start at 1, not 0
  let daysArr = Array.from(Array(days)).map( (element, index) => {
    let spacedDate = (index.toString().length === 1 && index !== 9) ? ` ${index + 1} ` : `${index + 1} `
    return spacedDate
  })

  // make an array of n single spaces, where n = the number of the first day
  let blankDays = Array(firstDay).fill(" ".repeat(3))
  let spacedDays = blankDays.concat(daysArr)
  spacedDays = spacedDays.map( (day, index) => {
    if ((index + 1) % 7 == 0 && index != 0) {
      let day7 = day.split('')
      day7.pop()
      day = `${day7.join('')}\n`
      return day
    } else {
      return day
    }
  })
  // add a new line at end of the month
  let lastDay = spacedDays.pop()
  let lastDayArr = lastDay.split('')
  lastDayArr.splice(2)
  lastDay = lastDayArr.join('')
  spacedDays.push(`${lastDay}\n`)
  return spacedDays
}

module.exports = {getMonths, buildWeeksArr}
