---
layout: post
title: 719. Find K-th Smallest Pair Distance
category: [Leetcode]
description: 
keywords: ['Array', 'Binary Search', 'Heap', 'Leetcode', 'Hard']
---
### [719. Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance)

#### Tags: 'Array', 'Binary Search', 'Heap'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array, return the k-th smallest <b>distance</b> among all the pairs. The distance of a pair (A, B) is defined as the absolute difference between A and B. </p>
<p><b>Example 1:</b><br/>
</p><pre><b>Input:</b>
nums = [1,3,1]
k = 1
<b>Output: 0</b> 
<b>Explanation:</b>
Here are all the pairs:
(1,3) -&gt; 2
(1,1) -&gt; 0
(3,1) -&gt; 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.
</pre>
<p></p>
<p><b>Note:</b><br/>
</p><ol>
<li><code>2 &lt;= len(nums) &lt;= 10000</code>.</li>
<li><code>0 &lt;= nums[i] &lt; 1000000</code>.</li>
<li><code>1 &lt;= k &lt;= len(nums) * (len(nums) - 1) / 2</code>.</li>
</ol>
<p></p></div></div>

### Solution