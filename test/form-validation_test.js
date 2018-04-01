const { validateArgs } = require('../lib/form-validation')
const { assert: { equal } } = require('chai')

describe('validateArgs', () => {
  it(`should return true`, () => {
    equal(validateArgs(["Sep", "1938"]), true)
    equal(validateArgs(["05", "2006"]), true)
    equal(validateArgs(["12", "2006"]), true)
    equal(validateArgs(["2", "2006"]), true)
  })

  it(`should return false`, () => {
    equal(validateArgs(["sep", "1720"]), false)
    equal(validateArgs(["sep", "10000"]), false)
    equal(validateArgs(["se", "2008"]), false)
    equal(validateArgs(["bob", "2006"]), false)
    equal(validateArgs(["2005", "sept"]), false)
    equal(validateArgs(["12", "08"]), false)
    equal(validateArgs(["13", "2008"]), false)
    equal(validateArgs(["0", "2008"]), false)
  })
})
