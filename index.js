'use strict'

const util = require('util')
const fs = require('fs')

module.exports = filename => (...msg) => {
  fs.appendFileSync(filename, msg.map(item => typeof item === 'string' ? item : util.inspect(item)).join(' '))
}
