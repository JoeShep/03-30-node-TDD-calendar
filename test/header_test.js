"use strict"

const { assert: { equal, isFunction, deepEqual } } = require('chai')
const { createWeekHeader, createMainHeader, formatHeader } = require('../lib/header.js')

describe('buildHeader', () => {
  describe('createWeekHeader', () => {
    it('should return a fixed list of the days of the week', () => {
      let expected = 'Su Mo Tu We Th Fr Sa'
      equal(createWeekHeader(), expected)
    })
  })

  describe('createMainHeader', () => {
    it(`should be a function`, () => {
      isFunction(createMainHeader)
    })

    it('should return a month and year string', () => {
      let expected = '     March 2017'
      equal(createMainHeader('March', '2017'), expected)
    })
  })

  describe('formatHeader', () => {
    it(`should be a function`, () => {
      isFunction(formatHeader)
    })

    it('should return an array conaining the main and week headers', () => {
      let expected = [['     March 2017\n'], ['Su Mo Tu We Th Fr Sa\n']]
      deepEqual(formatHeader('March', '2017'), expected)
    })
  })
})
