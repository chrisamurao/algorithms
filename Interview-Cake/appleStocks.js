/**
 * Suppose we could access yesterday's stock prices as an array, where:
 *
 * * The values are the price in dollars of Apple Stock
 * * A higher index indicates a later time.
 *
 * Ex. If the stock cost $500 at 10:30am and $550 at 11:00 am then:
 * stockPricesYesterday[60] =  500;
 *
 * Problem: Write an efficient function that takes stockPricesYesterday and returns the
 * best profit made from 1 purchase and 1 sale of 1 Apple stock yesterday.
 *
 * You must buy before you sell.
 * You may not buy and sell at the same time.
 *
 * * Strategy:
 * Define the solution:
 * To find the highest difference in values "buy" and "sell" which are elements of the array
 * The index of buy must be lower than the index of sell.
 *
 * One way:
 * Brute force.
 * Start at the first and compare with everything after it.
 * If the profit is greater, save it in a currentHighest variable.
 *
 *
 *
 */

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

//Brute force, O(n^2) time complexity
//This is kind of simple to do, but we can see the nested for loops so it's kinda slow

function getMaxProfitBrute(prices) {
  let maxSoFar;
  for (let i = 0; i < prices.length - 1; i++) {
    let buy = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      let sell = prices[j];
      if (!maxSoFar) {
        maxSoFar = sell - buy;
      } else if (maxSoFar < sell - buy) {
        maxSoFar = sell - buy;
      }
    }
  }
  console.log(maxSoFar);
  return maxSoFar;
}

/**
 * What are we missing here? Is there something we can notice about the data that
 * can let us do less work?
 *
 * Can we do it by only looping through the set once?
 *
 * Remember the old axiom
 * Buy low sell high
 *
 * Keep track of the lowest we've seen so far.
 *
 */

function getMaxProfit(prices) {
  let lowestPriceSoFar = prices[0];
  let highestProfitSoFar;

  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - lowestPriceSoFar;

    if (!highestProfitSoFar) highestProfitSoFar = profit;
    if (profit > highestProfitSoFar) highestProfitSoFar = profit;
    if (prices[i] < lowestPriceSoFar) lowestPriceSoFar = prices[i];
  }

  return highestProfitSoFar;
}
const stockPricesNegative = [10, 9, 8, 1];
console.log(getMaxProfit(stockPricesYesterday));
console.log(getMaxProfit(stockPricesNegative));
// returns 6 (buying for $5 and selling for $11)
