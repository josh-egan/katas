'use strict'

module.exports = {
  makeChange(money, coins) {
    if (!coins || !Array.isArray(coins))
      throw new Error('An array of coins must be provided.')
    if (!money)
      return []

    const orderedCoins = sortLargestToSmallest(coins)
    return getLeastCoins(money, orderedCoins)
  }
}

function sortLargestToSmallest(coins) {
  return coins.sort((curr, prev) => prev - curr)
}

function getLeastCoins(money, orderedCoins) {
  const coinSets = orderedCoins.map((_, i, arr) => arr.slice(i))

  return coinSets.reduce((least, coinSet) => {
    let remainingMoney = money
    const currentSumOfLeast = sum(least)
    const change = []

    coinSet.forEach(coin => {
      while (remainingMoney / coin >= 1) {
        change.push(coin)
        remainingMoney = fixPrecision(remainingMoney - coin)
        if (currentSumOfLeast === money && !isFewerCoins(least, change))
          break;
      }
    })

    if (sum(change) > currentSumOfLeast)
      return change
    return isFewerCoins(least, change) ? change : least
  }, null)
}

function isFewerCoins(prevCoins, newCoins) {
  return !prevCoins || newCoins.length < prevCoins.length
}

function sum(array) {
  if (!array)
    return 0
  const s = array.reduce((total, current) => total + current, 0)
  return fixPrecision(s)
}

function fixPrecision(n, decimalPlaces = 6) {
  return parseFloat(n.toFixed(decimalPlaces))
}
