'use strict'

const src = require('..')
const dist = require('../dist')

const qs = require('querystring')

test('qs.src', () => {
  expect(qs.parse(src.f())).toEqual(qs.parse('foo=foo&bar=bar&zoo=zoo&haa=haa'))
})

test('qs.dist', () => {
  expect(qs.parse(dist.f())).toEqual(qs.parse('foo=foo&bar=bar&zoo=zoo&haa=haa'))
})