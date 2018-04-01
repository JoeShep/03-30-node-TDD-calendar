const { assert: { equal, isFunction, deepEqual } } = require('chai')
const { morphMonthStr, morphMonthNum, getMonthString, formatMonth, getMonthLength } = require('../lib/format-month')

describe('formatMonth', () => {

  describe('getMonthLength', () => {
    it('should return number of days in a month', () => {
      let months = ["February", "February", "April", "December"]
      let years = [2165, 1944, 1799, 1830]
      let expected = [28, 29, 30, 31]
      months.forEach( (month, i) => {
        equal(getMonthLength(months[i], years[i]), expected[i])    
      })
    })
  })

  describe('morphMonthStr', () => {
    it('should return a full month string', () => {
      let expected = 'September'
      equal(morphMonthStr('sep'), expected)
    })
  })

  describe('morphMonthNum', () => {
    it('should return a full month string', () => {
      let expected = 'September'
      equal(morphMonthNum('9'), expected)
    })
  })

  describe('getMonthString', () => {
    it('should return a full month string', () => {
      let expected = 'September'
      equal(getMonthString('09'), expected)
      equal(getMonthString('9'), expected)
      equal(getMonthString('sep'), expected)
      equal(getMonthString('sept'), expected)
      equal(getMonthString('Sept'), expected)
      equal(getMonthString('Sep'), expected)
      equal(getMonthString('September'), expected)
      expected = "October"
      equal(getMonthString('10'), expected)
    })
  })

  describe('getMonthString', () => {
    it.skip('should return an error if arg is bad', () => {
      let expectedError = 'You made a boo-boo. Pass a proper argument, Goofy'
      equal(getMonthString('Se'), expectedError)
      equal(getMonthString('xx'), expectedError)
      equal(getMonthString('1978'), expectedError)
      equal(getMonthString('--'), expectedError)
      equal(getMonthString(''), expectedError)
      equal(getMonthString('test'), expectedError)
    })
  })
})
