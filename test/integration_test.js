'use strict'

const { assert: { equal, deepEqual } } = require('chai')
const { exec } = require('child_process')

// child_process.exec(): spawns a shell and runs a command within that shell, 
// passing the stdout and stderr to a callback function when complete.
describe('cli-stuff', () => {
  it('should handle no args cal comparison', (cb) => {
    exec('bin/node-cal', (err, stdout) => {
      exec('cal', (err2, stdout2) => {
        deepEqual(stdout, stdout2)
        cb()
      })
    })
  })  

  it('should handle no args', (cb) => {
    exec('bin/node-cal', (err, stdout) => {
      let expected = 
`    January 2017
Su Mo Tu We Th Fr Sa
 1  2  3  4  5  6  7
 8  9 10 11 12 13 14
15 16 17 18 19 20 21
22 23 24 25 26 27 28
29 30 31
`
      equal(stdout, expected)
      cb()
    })
  }) 

  it("should handle 2 args cal comparison", (cb) => {
    exec('bin/node-cal 01 2100', (err, stdout) => {
      exec('cal 01 2100', (err2, stdout2) => {
        deepEqual(stdout, stdout2)
        cb()
      })
    })
  })
})
