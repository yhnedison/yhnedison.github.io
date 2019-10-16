---
layout: post
title: 1064. Fixed Point
category: [Leetcode]
description: 
keywords: ['Array', 'Binary Search', 'Leetcode', 'Easy']
---
### [1064. Fixed Point](https://leetcode.com/problems/fixed-point)

#### Tags: 'Array', 'Binary Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an array <code>A</code> of distinct integers sorted in ascending order, return the smallest index <code>i</code> that satisfies <code>A[i] == i</code>.  Return <code>-1</code> if no such <code>i</code> exists.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">[-10,-5,0,3,7]</span>
<strong>Output: </strong><span id="example-output-1">3</span>
<strong>Explanation: </strong>
For the given array, <code>A[0] = -10, A[1] = -5, A[2] = 0, A[3] = 3</code>, thus the output is 3.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong><span id="example-input-2-1">[0,2,5,8,17]</span>
<strong>Output: </strong><span id="example-output-2">0</span>
<strong>Explanation: </strong>
<code>A[0] = 0</code>, thus the output is 0.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong><span id="example-input-3-1">[-10,-5,3,4,7,9]</span>
<strong>Output: </strong><span id="example-output-3">-1</span>
<strong>Explanation: </strong>
There is no such <code>i</code> that <code>A[i] = i</code>, thus the output is -1.
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li><code>1 &lt;= A.length &lt; 10^4</code></li>
<li><code>-10^9 &lt;= A[i] &lt;= 10^9</code></li>
</ol>
</div></div>

### Solution
