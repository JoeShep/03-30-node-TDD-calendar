'use strict'

const { validateArgs } = require('./form-validation')
const { getToday } = require('./this-day')
const { getErrorMsg } = require('./error-msg')
const { buildCal } = require('./build-cal')

const [,, ...args] = process.argv

// kind of like processing the args for the dice roll exercise
if ( validateArgs(args)) {
  const month = args[0] ? args[0] : getToday().month
  const year = args[1] ? args[1] : getToday().year
  const month_cal = buildCal(month, year)
  process.stdout.write(month_cal);
} else {
  let message = getErrorMsg()
  console.log(message);
}
