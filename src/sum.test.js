const sum = require("./sum")

test("add 3 + 5 to be equal 8", () => {
    expect(sum(3, 5)).toBe(8);
})