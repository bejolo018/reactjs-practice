const cloneArray = require('./cloneArray')

test('properly clones array', () => {
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})

// Here toBe does not work because toBe test realizes that although the values are the same, they are being held at different memory addresses,
// toEqual makes it so they are held at the same memory address which is why we run the second test to ensure that we are making a copy and it is not the same array