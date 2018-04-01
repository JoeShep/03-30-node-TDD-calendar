"use strict"

const { assert: { equal, isFunction, deepEqual } } = require('chai')
const { getMonths, buildWeeksArr  } = require('../lib/weeks.js')

describe('weeks', () => {
  describe('getMonths', () => {
    it('should return an object', () => {
      equal(typeof(getMonths()), "object")    
    })

    it('should return 29 days in Feb if a leap year is passed in', () => {
      let months = getMonths(1944)
      let feb = months[2].len
      equal(feb, 29)
    })
  })  

  describe('buildWeeksArr', () => {
    it('should return a months days with spaces in an array', () => {
      let result = buildWeeksArr(31, 5)
      let expected = ["   ", "   ", "   ", "   ", "   ",' 1 ', ' 2\n', ' 3 ', ' 4 ', ' 5 ', ' 6 ', ' 7 ', ' 8 ', ' 9\n', '10 ', '11 ', '12 ', '13 ', '14 ', '15 ', '16\n', '17 ', '18 ', '19 ', '20 ', '21 ', '22 ', '23\n', '24 ', '25 ', '26 ', '27 ', '28 ', '29 ', '30\n', '31\n']
      deepEqual(result, expected)
    })
  })
  
})
