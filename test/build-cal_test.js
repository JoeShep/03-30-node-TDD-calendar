'use strict'

const { assert: { equal, isFunction, deepEqual } } = require('chai')
const { buildCal } = require('../lib/build-cal.js')

describe('buildCal', () => {
  it('should return a formatted month calendar string', () => {
    let expected = '     June 2016\nSu Mo Tu We Th Fr Sa\n          1  2  3  4\n 5  6  7  8  9 10 11\n12 13 14 15 16 17 18\n19 20 21 22 23 24 25\n26 27 28 29 30\n'
    equal(buildCal('6', '2016'), expected)
    equal(buildCal('jun', '2016'), expected)
    equal(buildCal('june', '2016'), expected)
    equal(buildCal('June', '2016'), expected)
    equal(buildCal('Jun', '2016'), expected)
  })
})
