---
layout: post
category: Leetcode
description: 
keywords: ['Array', 'Two Pointers', 'Binary Search', 'Leetcode', 'Easy']
---
### [167. Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted)

#### Tags: 'Array', 'Two Pointers', 'Binary Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of integers that is already <strong><em>sorted in ascending order</em></strong>, find two numbers such that they add up to a specific target number.</p>
<p>The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.</p>
<p><strong>Note:</strong></p>
<ul>
<li>Your returned answers (both index1 and index2) are not zero-based.</li>
<li>You may assume that each input would have <em>exactly</em> one solution and you may not use the <em>same</em> element twice.</li>
</ul>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong> numbers = [2,7,11,15], target = 9
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.</pre>
</div></div>

### Solution
```java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // for each element, run a bidirectional sweep of 2sum for following elements
        Arrays.sort(nums);
        List<List<Integer>> result = new LinkedList<>();
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int lo = i + 1, hi = nums.length - 1, sum = 0 - nums[i];
            while (lo < hi) {
                if (nums[lo] + nums[hi] == sum) {
                    result.add(Arrays.asList(nums[i], nums[lo], nums[hi]));
                    while (lo < hi && nums[lo] == nums[lo+1]) lo++; // skip duplicates when result foun
                    while (lo < hi && nums[hi] == nums[hi-1]) hi--;
                    lo++;
                    hi--;
                } else if (nums[lo] + nums[hi] < sum) {
                    lo++;
                } else {
                    hi--;
                }
            }
        }
        return result;
    }
}
```