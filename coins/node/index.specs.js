'use strict'

const expect = require('chai').expect

const cashier = require('./index')

describe('coin kata', () => {
  describe('#makeChange', () => {
    it('should return an empty array for undefined or null input', () => {
      expect(cashier.makeChange()).to.eql([])
      expect(cashier.makeChange(null)).to.eql([])
    })

    const testCases = [
      {input: 0.00, expected: []},
      {input: 0.01, expected: [1]},
      {input: 0.02, expected: [1, 1]},
      {input: 0.03, expected: [1, 1, 1]},
      {input: 0.04, expected: [1, 1, 1, 1]},
      {input: 0.05, expected: [5]},
      {input: 0.06, expected: [5, 1]},
      {input: 0.07, expected: [5, 1, 1]},
      {input: 0.09, expected: [5, 1, 1, 1, 1]},
      {input: 0.10, expected: [10]},
      {input: 0.17, expected: [10, 5, 1, 1]},
      {input: 0.22, expected: [10, 10, 1, 1]},
      {input: 0.25, expected: [25]},
      {input: 0.27, expected: [25, 1, 1]},
      {input: 0.49, expected: [25, 10, 10, 1, 1, 1, 1]},
      {input: 0.50, expected: [50]},
      {input: 0.93, expected: [50, 25, 10, 5, 1, 1, 1]},
      {input: 0.98, expected: [50, 25, 10, 10, 1, 1, 1]},
      {input: 1.00, expected: [100]},
    ]

    testCases.forEach(testCase => {
      it(`should correctly return change for \$${testCase.input}`, () => {
        expect(cashier.makeChange(testCase.input)).to.eql(testCase.expected)
      })
    })
  })
})
