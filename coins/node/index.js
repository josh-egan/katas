'use strict'

module.exports = {
  makeChange(money, coins) {
    if (!coins || !Array.isArray(coins))
      throw new Error('An array of coins must be provided.')

    if (!money)
      return []

    let leastCoinsSolution
    const orderedCoins = coins.sort((curr, prev) => prev - curr)

    for (let startingIndex = 0; startingIndex < orderedCoins.length; startingIndex++){
      const change = []
      let remainingMoney = money
      for (let i = startingIndex; i < orderedCoins.length; i++) {
        if(leastCoinsSolution && change.length > leastCoinsSolution.length)
          break;
        let coin = orderedCoins[i]
        while (remainingMoney / coin >= 1) {
          change.push(coin)
          if(leastCoinsSolution && change.length > leastCoinsSolution.length)
            break;
          remainingMoney = parseFloat((remainingMoney - coin).toFixed(6))
        }
      }

      if (!leastCoinsSolution || change.length < leastCoinsSolution.length)
        leastCoinsSolution = change
    }

    return leastCoinsSolution
  }
}
