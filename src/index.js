module.exports = function isObjectNotArray(val) {
    if (val === undefined) { // undefined
        return false
    }
    if (arguments[0] === undefined) { // no arugment
        throw new Error('no arguments provided...')
    } else {
        if (typeof val === 'object') { // objcet array null
            if (val === null) {
                return false
            } else if (Array.isArray(val)) {
                return false
            } else {
                return true
            }
        } else {
            throw new Error('arguments must be an object...')
        }
    }
}