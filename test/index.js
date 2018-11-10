'use strict'

const assert = require('assert')
const fs = require('fs')
const filelog = require('..')

describe('filelog', () => {
  const filename = __dirname + '/.log'
  after(() => {
    fs.unlinkSync(filename)
  })
  it('appends to a file', () => {
    filelog(filename)({hello: 'world'})

    assert.equal(fs.readFileSync(filename) + '', '{ hello: \'world\' }\n')
  })
})
