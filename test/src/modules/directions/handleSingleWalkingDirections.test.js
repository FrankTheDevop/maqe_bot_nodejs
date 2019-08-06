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

describe('handleSingleWalkingDirections', function() {
  it('returns the correct value for RW15', () => {
    const input = 'RW15'
    const walkSoManyUnits = '15'
    let originalX = 0
    let originalY = 2
    const originalDirection = 'North'

    const {x: tx, y: ty, direction: tDirection} = directions.handleSingleWalkingDirections(input, walkSoManyUnits, originalX, originalY, originalDirection)

    expect(tx).to.equal(parseInt(walkSoManyUnits))
    expect(ty).to.equal(originalY)
    expect(tDirection).to.equal('East')
  })

  it('returns the correct value for LLLL', () => {
    const input = 'LLLL'
    const walkSoManyUnits = '0'
    let originalX = 0
    let originalY = -3
    const originalDirection = 'North'

    const {x: tx, y: ty, direction: tDirection} = directions.handleSingleWalkingDirections(input, walkSoManyUnits, originalX, originalY, originalDirection)

    expect(tx).to.equal(parseInt(walkSoManyUnits))
    expect(ty).to.equal(originalY)
    expect(tDirection).to.equal('North')
  })

  it('returns the correct value for RRW40000', () => {
    const input = 'RRW'
    const walkSoManyUnits = '40000'
    let originalX = 0
    let originalY = -3
    const originalDirection = 'North'

    const {x: tx, y: ty, direction: tDirection} = directions.handleSingleWalkingDirections(input, walkSoManyUnits, originalX, originalY, originalDirection)

    expect(tx).to.equal(originalX)
    expect(ty).to.equal(originalY-parseInt((walkSoManyUnits)))
    expect(tDirection).to.equal('South')
  })

})

