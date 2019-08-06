'use strict'
const yargs = require('yargs')
const argv = yargs.parse()
//const argv = yargs.option('directions', {demandOption: true, type: 'string'}).argv

const directions = argv._[0]

const directionsModule = require('./modules/directions')
const helper = require('./modules/helper')

let x = 0
let y = 0
let direction = 'North'

if (!helper.directionHasOnlyValidChars(directions)) {
    console.error('Invalid characters in Way Description')
    console.error('Allowed Characters: R, L, W')
    console.error('Allowed Numbers: 0-9')
    return -1
}

const result = directionsModule.handleWalkingDirections(directions, x, y, direction)
x =result.x
y = result.y
direction = result.direction

console.log(`X:${x} Y:${y} Direction:${direction}`)
