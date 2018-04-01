'use strict'

const { getMonths } = require('./weeks')
const months = getMonths()

const getMonthLength = (month, year) => {
  let monthNum = getMonthNum(month, year)
  let monthLength = monthNum.monthObj[monthNum.key].len
  return monthLength
}

const makeMonthArr = () => {
  const monthArr = []
  for (let month in months) {
    monthArr.push(months[month].name)
  }
  return monthArr
}

const getMonthNum = (month, year) => {
  let monthObj = getMonths(year)
  for(let key in monthObj) {
    if (monthObj[key].name === month)
      return {key, monthObj}
  }
}

// decode whether month argument is num or string before 
// returning it as a full string
const getMonthString = (month) => {
  let monthStr = null
  if ( Number.isInteger(+month) ) {
    if (month.length === 2 && month.split('')[0] === '0') 
      month = month.charAt(1)
    monthStr = morphMonthNum(month)
  } else {
    monthStr = morphMonthStr(month.toLowerCase())[0]
  }
  return monthStr 
}

const morphMonthNum = (monthNum) => {
  return months[monthNum].name
}

const morphMonthStr = (monthStr) => {
  const monthsArr = makeMonthArr(true)
  return monthsArr.filter( (month) => {
    return month.toLowerCase().includes(monthStr)
  })
}

module.exports = { morphMonthStr, morphMonthNum, getMonthLength, getMonthString, getMonthNum }
