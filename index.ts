import util from 'util'
import fs from 'fs'

module.exports = (filename: string) => (...msg: any[]) => {
  fs.appendFileSync(filename, msg.map(item => typeof item === 'string' ? item : util.inspect(item)).join(' '))
}
