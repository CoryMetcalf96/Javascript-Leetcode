// Javascripts Leetcode Problems and Explanations


// Two Sum @ https://leetcode.com/problems/two-sum/ -----------------------------------------------
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/

// Soution Explanation 
// Take your original array and turn it in to a hash, setting the key:value pair as value:index.
// Loop through your given array now, setting up a 'potential key' that's equivelant to the target - the current array value.
    // Check to see if the hash has has this potential key and make sure that it doesn't match the curent index in the for loop.
    // return an array, giving the current index that the for loop is on and the index of the potential key from within the hash.

var twoSum = function(nums, target) {
    // Establish a hash / dictionary.
    const hash = {};

    // Loop through the nums array, creating a hash as you do so with a value:index pairing.
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        hash[val] = i;
    }

    // Loop through the nums array one more time.
    for (let i = 0; i < nums.length; i++) {
        // Set the potentialKey as the target - the current value of this iteration.
        let potentialKey = target - nums[i];

        // If the hash/dictionary has this key and it's not on the current index, return the current index and the potential key's index.
        if (hash[potentialKey] && hash[potentialKey] !== i) {
            return [i, hash[potentialKey]];
        }
    }
};

// Time complexity: O(n) because it only iterates through the array twice
// Space Complexity: O(n)



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

*/

