---
layout: post
title: 1063. Number of Valid Subarrays
category: [Leetcode]
description: 
keywords: ['Stack', 'Leetcode', 'Hard']
---
### [1063. Number of Valid Subarrays](https://leetcode.com/problems/number-of-valid-subarrays)

#### Tags: 'Stack'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an array <code>A</code> of integers, return the number of <strong>non-empty continuous subarrays</strong> that satisfy the following condition:</p>
<p>The leftmost element of the subarray is not larger than other elements in the subarray.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">[1,4,2,5,3]</span>
<strong>Output: </strong><span id="example-output-1">11</span>
<strong>Explanation: </strong>There are 11 valid subarrays: [1],[4],[2],[5],[3],[1,4],[2,5],[1,4,2],[2,5,3],[1,4,2,5],[1,4,2,5,3].
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong><span id="example-input-2-1">[3,2,1]</span>
<strong>Output: </strong><span id="example-output-2">3</span>
<strong>Explanation: </strong>The 3 valid subarrays are: [3],[2],[1].
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong><span id="example-input-3-1">[2,2,2]</span>
<strong>Output: </strong><span id="example-output-3">6</span>
<strong>Explanation: </strong>There are 6 valid subarrays: [2],[2],[2],[2,2],[2,2],[2,2,2].
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li><code>1 &lt;= A.length &lt;= 50000</code></li>
<li><code>0 &lt;= A[i] &lt;= 100000</code></li>
</ol></div></div>

### Solution
