'use strict'

function verifyDirectionHasOnlyValidChars (direction) {
    let temp = direction

    const somethingExceptAllowedChars = /[^RLW0-9]+/

    // Returns true if there is a character except the allowed matches
    const result = somethingExceptAllowedChars.test(direction)

    // Need to invert because we check for disallowed chars
    return !result
}

module.exports = {
    directionHasOnlyValidChars: verifyDirectionHasOnlyValidChars
}
