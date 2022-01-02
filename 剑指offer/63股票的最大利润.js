/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let cost = Number.MAX_VALUE;
    let profit = 0;
    for(price of prices){
        cost = Math.min(cost, price);
        profit = Math.max(profit, price - cost);
    }
    return profit;

};