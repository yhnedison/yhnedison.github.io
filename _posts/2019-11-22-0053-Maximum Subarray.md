---
layout: post
title: 53. Maximum Subarray
category: [Leetcode]
description: 
keywords: ['Array', 'Divide and Conquer', 'Dynamic Programming', 'Leetcode', 'Easy']
---
### [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray)

#### Tags: 'Array', 'Divide and Conquer', 'Dynamic Programming'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code>, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.</p>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong> [-2,1,-3,4,-1,2,1,-5,4],
<strong>Output:</strong> 6
<strong>Explanation:</strong> [4,-1,2,1] has the largest sum = 6.
</pre>
<p><strong>Follow up:</strong></p>
<p>If you have figured out the O(<em>n</em>) solution, try coding another solution using the divide and conquer approach, which is more subtle.</p>
</div></div>

### Solution
方法1： DP, 类似还有134 Gas Station / 517 Washing Machines
```java
public int maxSubArray(int[] nums) {
    int n = nums.length;
    int[] dp = new int[n]; // dp[i] is the maximum subarray sum ending with nums[i]
    dp[0] = nums[0];
    int max = dp[0];
    
    for (int i = 1; i < n; i++) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
        max = Math.max(max, dp[i]);
    }
    return max;
}
```

方法2： divide and conquer 类似merge sort
```java

```