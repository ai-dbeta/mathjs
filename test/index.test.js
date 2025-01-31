// test/index.test.js
const { expect } = require('chai');
const math = require('mathjs');

describe('Math.js Custom Functions', () => {
  it('should correctly add two matrices', () => {
    const a = math.matrix([[1, 2], [3, 4]]);
    const b = math.matrix([[5, 6], [7, 8]]);
    const result = math.add(a, b);
    const expected = math.matrix([[6, 8], [10, 12]]);
    expect(result).to.deep.equal(expected);
  });
});
