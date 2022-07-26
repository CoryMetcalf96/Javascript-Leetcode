// Leetcode Problems and Explanations


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
    // Check to see if the has has this potential key and make sure that it doesn't match the curent index in the for loop.
    // return a duple, giving the current index that the for loop is on and the index of the potential key from within the hash.

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