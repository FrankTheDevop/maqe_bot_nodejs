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

describe('handleWalkingDirections', function() {
  it('returns the correct value for W5RW5RW2RW1R', () => {
    const input = 'W5RW5RW2RW1R'
    let originalX = 0
    let originalY = 0
    const originalDirection = 'North'

    const {x: tx, y: ty, direction: tDirection} = directions.handleWalkingDirections(input, originalX, originalY, originalDirection)

    expect(tx).to.equal(4)
    expect(ty).to.equal(3)
    expect(tDirection).to.equal('North')
  })

  it('returns the correct value for RW15RW1', () => {
    const input = 'RW15RW1'
    let originalX = 0
    let originalY = 0
    const originalDirection = 'North'

    const {x: tx, y: ty, direction: tDirection} = directions.handleWalkingDirections(input, originalX, originalY, originalDirection)

    expect(tx).to.equal(15)
    expect(ty).to.equal(-1)
    expect(tDirection).to.equal('South')
  })

  it('returns the correct value for RRW11RLLW19RRW12LW1', () => {
    const input = 'RRW11RLLW19RRW12LW1'
    let originalX = 0
    let originalY = 0
    const originalDirection = 'North'

    const {x: tx, y: ty, direction: tDirection} = directions.handleWalkingDirections(input, originalX, originalY, originalDirection)

    expect(tx).to.equal(7)
    expect(ty).to.equal(-12)
    expect(tDirection).to.equal('South')
  })

  it('returns the correct value for W55555RW555555W444444W1', () => {
    const input = 'W55555RW555555W444444W1'
    let originalX = 0
    let originalY = 0
    const originalDirection = 'North'

    const {x: tx, y: ty, direction: tDirection} = directions.handleWalkingDirections(input, originalX, originalY, originalDirection)

    expect(tx).to.equal(1000000)
    expect(ty).to.equal(55555)
    expect(tDirection).to.equal('East')
  })

  it('returns the correct value for LLLLLW99RRRRRW88LLLRL', () => {
    const input = 'LLLLLW99RRRRRW88LLLRL'
    let originalX = 0
    let originalY = 0
    const originalDirection = 'North'

    const {x: tx, y: ty, direction: tDirection} = directions.handleWalkingDirections(input, originalX, originalY, originalDirection)

    expect(tx).to.equal(-99)
    expect(ty).to.equal(88)
    expect(tDirection).to.equal('East')
  })

})

