'use strict'

function moveRight(direction) {
    if (direction === 'North')
        return 'East'
    else if (direction === 'East')
        return 'South'
    else if (direction === 'South')
        return 'West'
    else if (direction === 'West')
        return 'North'
    else {
        throw Error('Unknown direction')
    }
}

function moveLeft(direction) {
    if (direction === 'North')
        return 'West'
    else if (direction === 'East')
        return 'North'
    else if (direction === 'South')
        return 'East'
    else if (direction === 'West')
        return 'South'
    else {
        throw Error('Unknown direction')
    }
}

function walk(x, y, units, direction) {
    if (units < 0)
        throw Error('Steps can´t be negative')
    if (direction === 'North')
        y += units
    else if (direction === 'East')
        x += units
    else if (direction === 'South')
        y -= units
    else if (direction === 'West')
        x -= units
    else {
        throw Error('Unknown direction')
    }

    return { x, y }
}

function handleSingleWalkingDirections(directions,
                                       walkSoManyUnits,
                                       x,
                                       y,
                                       direction) {

    for (let char in directions) {
        if (directions[char] === 'R')
            direction = moveRight(direction)
        else if (directions[char] === 'L')
            direction = moveLeft(direction)
        else if (directions[char] === 'W') {
            const result = walk(x, y, parseInt(walkSoManyUnits), direction)
            x = result.x
            y = result.y
        }
    }

   return {x, y, direction}
}

function handleWalkingDirections(directions, x, y, direction) {
    let working_buffer = ''
    let walk_units = ''
    let temp = directions

    while (temp.length > 0) {
        while (temp.length > 0 && isNaN(temp[0])) {
            working_buffer += temp[0]
            temp = temp.substr(1)
        }

        // Now we are on a number
        while (temp.length > 0 && !isNaN(temp[0])) {
            walk_units += temp[0]
            temp = temp.substr(1)
        }

        const result = handleSingleWalkingDirections(working_buffer, walk_units, x, y, direction)
        x = result.x
        y = result.y
        direction = result.direction

        working_buffer = ''
        walk_units = ''
    }

     return { x, y, direction}
}

module.exports = {
    handleSingleWalkingDirections,
    handleWalkingDirections,
    moveLeft,
    moveRight,
    walk
}
