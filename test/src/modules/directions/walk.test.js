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

describe('walk', function() {
  it('returns the correct value for 0,1,north', () => {
    const steps = 1
    let originalX = 0
    let originalY = 0

    const {x: tx, y: ty} = directions.walk(originalX, originalY, steps, 'North')

    expect(tx).to.equal(0)
    expect(ty).to.equal(1)
  })

  it('returns the correct value for 1,0,south', () => {
    const steps = 9
    let originalX = 1
    let originalY = 0

    const {x: tx, y: ty} = directions.walk(originalX, originalY, steps, 'South')

    expect(tx).to.equal(1)
    expect(ty).to.equal(-9)
  })

  it('returns the correct value for 9,7,east', () => {
    const steps = 5
    let originalX = 9
    let originalY = 7

    const {x: tx, y: ty} = directions.walk(originalX, originalY, steps, 'East')

    expect(tx).to.equal(14)
    expect(ty).to.equal(7)
  })

  it('returns the correct value for -6,-4,West', () => {
    const steps = 3
    let originalX = -6
    let originalY = -4

    const {x: tx, y: ty} = directions.walk(originalX, originalY, steps, 'West')

    expect(tx).to.equal(-9)
    expect(ty).to.equal(-4)
  })

  it('returns an error on negative steps', () => {
    const steps = -3
    let originalX = -6
    let originalY = -4

    try {
      const {x: tx, y: ty} = directions.walk(originalX, originalY, steps, 'West')
    } catch(e) {
      expect(e).not.to.equal(undefined)
      expect(e.message).to.equal('Steps can´t be negative')
    }
  })

  it('returns an error on unknown direction', () => {
    const steps = 3
    let originalX = -6
    let originalY = -4

    try {
      const {x: tx, y: ty} = directions.walk(originalX, originalY, steps, 'test')
    } catch(e) {
      expect(e).not.to.equal(undefined)
      expect(e.message).to.equal('Unknown direction')
    }
  })

})

