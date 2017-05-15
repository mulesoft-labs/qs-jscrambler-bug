'use strict'

const qs = require('querystring')

module.exports = {
  f() {
    return qs.stringify({
      foo: 'foo',
      bar: 'bar',
      zoo: 'zoo',
      haa: 'haa'
    })
  }
}
