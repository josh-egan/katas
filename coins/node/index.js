'use strict'
const coins = [100, 50, 25, 10, 5, 1]

module.exports = {
  makeChange(dollars) {
    const change = []
    if (!dollars)
      return change

    let cents = dollars * 100
    coins.forEach(coin => {
      while (cents / coin >= 1) {
        change.push(coin)
        cents -= coin
      }
    })

    return change
  }
}
