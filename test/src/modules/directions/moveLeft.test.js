// Copyright IBM Corp. 2013,2018. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict'
let assert = require('assert')
let expect = require('../../../helpers/expect')
let Promise = require('bluebird')
const fs = require('fs')

const sinon = require('sinon')

const directions = require('../../../../modules/directions')

describe('moveLeft', function() {
  it('returns East for North correctly', () => {
    const input = 'East'
    const expectedResult = 'North'

    const result = directions.moveLeft(input)

    expect(result).to.equal(expectedResult)
  })

  it('returns South for East correctly', () => {
    const input = 'South'
    const expectedResult = 'East'

    const result = directions.moveLeft(input)

    expect(result).to.equal(expectedResult)
  })

  it('returns West for South correctly', () => {
    const input = 'West'
    const expectedResult = 'South'

    const result = directions.moveLeft(input)

    expect(result).to.equal(expectedResult)
  })

  it('returns South for West correctly', () => {
    const input = 'West'
    const expectedResult = 'South'

    const result = directions.moveLeft(input)

    expect(result).to.equal(expectedResult)
  })

  it('returns an error on unknown direction', () => {
    const input = 'test'
    const expectedResult = 'North'

    try {
      const result = directions.moveLeft(input)
    } catch(e) {
      expect(e).not.to.equal(undefined)
      expect(e.message).to.equal('Unknown direction')
    }
  })

})

