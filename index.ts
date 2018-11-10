const util = require('util')
const fs = require('fs')

module.exports = (filename: string) => (...msg: any[]) => {
  fs.appendFileSync(filename, msg.map(item => typeof item === 'string' ? item : util.inspect(item)).join(' ') + '\n')
}
