"use strict"

const createWeekHeader = () => {
  return `Su Mo Tu We Th Fr Sa`
}

const createMainHeader = (month, year) => {
  let header = `${month} ${year}`
  let calWidth = 20;
  let spaces = ' '.repeat(Math.floor((calWidth - header.length) / 2))
  return spaces + header
}

const formatHeader = (month, year) => {
  let mainHeader = createMainHeader(month, year)
  let weekHeader = createWeekHeader()
  return [[`${mainHeader}\n`], [`${weekHeader}\n`]]
}

module.exports = {createWeekHeader, createMainHeader, formatHeader}
