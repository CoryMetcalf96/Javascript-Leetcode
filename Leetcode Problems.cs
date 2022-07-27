// C# Leetcode Problems and Explanations

// Best Time to Buy and Sell Stocks - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ ------------
/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104

Pseudocode:
1. Establish a starting profit variable.
2. Check to make sure the array isn't null and that it has a length of 2 or mor.
    a. Establish a variable for the best price to buy as the starting element.
    b. Establish a variable for the best price to sell as 0 to begin with.
    c. Loop through the entire array.
        1. Set the profit to the highest value, comparing the current profit and the current price - the current best price to buy.
        2. Set the best price to buy to the lowest value, comparting the current price to buy and the current price in the iteration.
3. Return the profit.
*/

public class Solution {
    public int MaxProfit(int[] prices) {
        // Establish profit variable
        int profit = 0;

        // Check to make sure the array is not null and the length is greater than 1.
        if(prices != null & prices.Length > 1)
        {
            // Establish the current best price to buy as the first index and the current best price to sell as 0.
            int bestPriceToBuy = prices[0];
            int bestPriceToSell = 0;

            // Cycle through the array
            for (int i = 0; i < prices.Length; i++)
            {
                // Reassign the profit to that which is higher: the current profit or the current price - the current best price to buy.
                profit = Math.Max(profit, prices[i] - bestPriceToBuy);
                // Reassign the best price to buy to the minimum between the current price and the current best price to buy.
                bestPriceToBuy = Math.Min(bestPriceToBuy, prices[i]);
            }
        }
        return profit;
    }
}