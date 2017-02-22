'use strict'

const expect = require('chai').expect

const cashier = require('./index')

describe('coin kata', () => {
  describe('#makeChange', () => {

    it('should return an empty array for undefined or null money input', () => {
      expect(cashier.makeChange(undefined, [1])).to.eql([])
      expect(cashier.makeChange(null, [1])).to.eql([])
    })

    it('should return an empty array for 0 money input', () => {
      expect(cashier.makeChange(0, [1])).to.eql([])
    })

    it('should throw an error if coins are not provided', () => {
      expect(() => cashier.makeChange(1.23)).to.throw(/coins/)
    })

    it('should throw an error if coins are not an array', () => {
      expect(() => cashier.makeChange(1.23, 'foo')).to.throw(/array/)
    })

    it('should sort the coins', () => {
      expect(cashier.makeChange(0.93, [0.01, 0.25, 0.10, 0.50, 0.05])).to.eql([0.50, 0.25, 0.10, 0.05, 0.01, 0.01, 0.01])
    })

    context('when using current legal us coins', () => {

      const testCases = [
        {input: 0.01, expected: [0.01]},
        {input: 0.02, expected: [0.01, 0.01]},
        {input: 0.03, expected: [0.01, 0.01, 0.01]},
        {input: 0.04, expected: [0.01, 0.01, 0.01, 0.01]},
        {input: 0.05, expected: [0.05]},
        {input: 0.06, expected: [0.05, 0.01]},
        {input: 0.07, expected: [0.05, 0.01, 0.01]},
        {input: 0.09, expected: [0.05, 0.01, 0.01, 0.01, 0.01]},
        {input: 0.10, expected: [0.10]},
        {input: 0.17, expected: [0.10, 0.05, 0.01, 0.01]},
        {input: 0.22, expected: [0.10, 0.10, 0.01, 0.01]},
        {input: 0.25, expected: [0.25]},
        {input: 0.27, expected: [0.25, 0.01, 0.01]},
        {input: 0.49, expected: [0.25, 0.10, 0.10, 0.01, 0.01, 0.01, 0.01]},
        {input: 0.50, expected: [0.50]},
        {input: 0.93, expected: [0.50, 0.25, 0.10, 0.05, 0.01, 0.01, 0.01]},
        {input: 0.98, expected: [0.50, 0.25, 0.10, 0.10, 0.01, 0.01, 0.01]},
        {input: 1.00, expected: [1.00]},
      ]

      testCases.forEach(testCase => {
        it(`should correctly return change for \$${testCase.input}`, () => {
          const legalUSCoins = [0.01, 0.05, 0.10, 0.25, 0.50, 1.00]

          expect(cashier.makeChange(testCase.input, legalUSCoins)).to.eql(testCase.expected)
        })
      })
    })

    context('when using historic us coins', () => {    //
      const testCases = [
        {input: 0.005, expected: [0.005]},
        {input: 0.01, expected: [0.01]},
        {input: 0.02, expected: [0.02]},
        {input: 0.03, expected: [0.03]},
        {input: 0.04, expected: [0.03, 0.01]},
        {input: 0.05, expected: [0.05]},
        {input: 0.06, expected: [0.05, 0.01]},
        {input: 0.07, expected: [0.05, 0.02]},
        {input: 0.08, expected: [0.05, 0.03]},
        {input: 0.09, expected: [0.05, 0.03, 0.01]},
        {input: 0.10, expected: [0.10]},
        {input: 0.11, expected: [0.10, 0.01]},
        {input: 0.12, expected: [0.10, 0.02]},
        {input: 0.13, expected: [0.10, 0.03]},
        {input: 0.14, expected: [0.10, 0.03, 0.01]},
        {input: 0.15, expected: [0.10, 0.05]},
        {input: 0.20, expected: [0.20]},
        {input: 0.25, expected: [0.25]},
        {input: 0.30, expected: [0.25, 0.05]},
        {input: 0.35, expected: [0.25, 0.1]},
        {input: 0.40, expected: [0.20, 0.20]},
      ]

      testCases.forEach(testCase => {
        it(`should correctly return change for \$${testCase.input}`, () => {
          const historicUSCoins = [0.005, 0.01, 0.02, 0.03, 0.05, 0.10, 0.20, 0.25, 0.50, 1.00]

          expect(cashier.makeChange(testCase.input, historicUSCoins)).to.eql(testCase.expected)
        })
      })
    })

    context('when calculating large amounts of change', () => {    //
      const testCases = [
        {input: 10, expected: arrayOfOnes(10)},
        {input: 1000, expected: arrayOfOnes(1000)},
        {input: 10000, expected: arrayOfOnes(10000)},
        {input: 10000, expected: arrayOfOnes(10000)},
      ]

      function arrayOfOnes(numOnes) {
        const a = []
        let c = 0;
        while (c++ < numOnes)
          a.push(1)
        return a
      }

      testCases.forEach(testCase => {
        it(`should perform efficiently given \$${testCase.input}`, function() {
          this.timeout(100)

          const historicUSCoins = [0.005, 0.01, 0.02, 0.03, 0.05, 0.10, 0.20, 0.25, 0.50, 1.00]

          expect(cashier.makeChange(testCase.input, historicUSCoins)).to.eql(testCase.expected)
        })
      })
    })
  })
})
