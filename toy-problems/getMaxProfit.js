/**
	* Suppose we could access yesterday's stock prices as an array, where:

	* The indices are the time in minutes past trade opening time, which was 9:30am
	* local time.
	*
	* The values are the price in dollars of Apple stock at that time.
	* So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

	* Write an efficient function that takes stockPricesYesterday and returns the best
	* profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

	* @param arr of int
	* @return int
	*
	* Time: linear o(n)
	* Space: constant o(1)
*/

function getMaxProfit(arr) {
	if (arr.length < 2) {
		throw new Error('Getting a profit requires at least 2 prices')
	}

	// initial settings
	var minPrice = arr[0];
	var maxProfit = arr[1] - arr[0];

	for (var i = 1; i < arr.length; i++) {
			var currentPrice = arr[i];

			var potentialProfit = currentPrice - minPrice;

			maxProfit = Math.max(maxProfit, potentialProfit);
			minPrice = Math.min(minPrice, currentPrice)

			// console.log(currentPrice, potentialProfit, maxProfit, minPrice);
	}
	return maxProfit;
}

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(stockPricesYesterday));
