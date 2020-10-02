const sum = require('./sum')

test('properly adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
})

// Expect takes anything we want, and saying that we expect whatever is in this section will be related to the next section, there are a variety of other options other than toBe,
// such as toHaveBeen called, toHaveReturned, toHaveLength, toHaveProperty, etc