'use strict'

const src = require('..')
const dist = require('../dist')

test('qs.src', () => {
  expect(src.f()).toBe('foo=foo&bar=bar&zoo=zoo&haa=haa')
})

test('qs.dist', () => {
  expect(dist.f()).toBe('foo=foo&bar=bar&zoo=zoo&haa=haa')
})