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
    const change = []

    coinSet.forEach(coin => {
      while (remainingMoney / coin >= 1) {
        change.push(coin)
        remainingMoney = parseFloat((remainingMoney - coin).toFixed(6))
        if (!isFewerCoins(least, change))
          break;
      }
    })

    return isFewerCoins(least, change) ? change : least
  }, null)
}

function isFewerCoins(prevCoins, newCoins) {
  return !prevCoins || newCoins.length < prevCoins.length
}