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

const helper = require('../../../../modules/helper')

describe('verifyDirectionHasOnlyValidChars', function() {
  it('returns true correctly for a valid string', () => {
    const input = 'W55555RW555555W444444W1'
    const expectedResult = true

    const result = helper.directionHasOnlyValidChars(input)

    expect(result).to.equal(expectedResult)
  })

  it('returns false correctly for an invalid string', () => {
    const input = 'W55555RW555555W444444W1G'
    const expectedResult = false

    const result = helper.directionHasOnlyValidChars(input)

    expect(result).to.equal(expectedResult)
  })
})

