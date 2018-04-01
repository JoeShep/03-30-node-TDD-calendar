"use strict"

const { assert: { equal, isFunction, deepEqual } } = require('chai')
const { getFirstDay } = require('../lib/first-day.js')

describe('firstDay', () => {
  describe('getFirstDay', () => {
    it('should return an integer between 1 and 6', () => {
      let years = ['2010', 1799, 1847, 1912, 2250, 2100]
      let months = [1, '2', 7, 9, 11, 12]
      let expected = [5, 5, 4, 0, 5, 3]
      
      years.forEach( (year, index) => {
        let result = getFirstDay(months[index], year)
        equal(result, expected[index])
      })
    })
  })

})
