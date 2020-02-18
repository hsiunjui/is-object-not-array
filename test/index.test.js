const isObjectNotArray = require('../src/index.js')

test('[1,3] should return false', () => {
    expect(isObjectNotArray([1, 3])).toBe(false)
})

test('null should return false', () => {
    expect(isObjectNotArray(null)).toBe(false)
})

test('{} should return true', () => {
    expect(isObjectNotArray({})).toBe(true)
})


test('new obj should return true', () => {
    const C = function() {
        this.name = 'name'
    }
    const c = new C()
    expect(isObjectNotArray(c)).toBe(true)
})