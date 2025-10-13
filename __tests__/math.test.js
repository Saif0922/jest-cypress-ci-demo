// const { add } = require('../src/math');

// test('adds 2 + 3 to equal 5', () => {
//   expect(add(2, 3)).toBe(5);
// });

const {add, subtract, divide, multiply} = require('../src/math');

describe("Math.js tests", () => {
  it("should test add",() => {
    expect(add(2,2)).toBe(4);
  });
  it("should test subtract",() => {
    expect(subtract(2,2)).toBe(0);
  });
  it("should test divide",() => {
    expect(divide(2,2)).toBe(1);
  });
  it("should test multiply",() => {
    expect(multiply(2,2)).toBe(5);
  });
});
