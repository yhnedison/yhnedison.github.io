---
layout: post
title: 1053. Previous Permutation With One Swap
category: [Leetcode]
description: 
keywords: ['Array', 'Greedy', 'Leetcode', 'Medium']
---
### [1053. Previous Permutation With One Swap](https://leetcode.com/problems/previous-permutation-with-one-swap)

#### Tags: 'Array', 'Greedy'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an array <code>A</code> of positive integers (not necessarily distinct), return the lexicographically largest permutation that is smaller than <code>A</code>, that can be <strong>made with one swap</strong> (A <em>swap</em> exchanges the positions of two numbers <code>A[i]</code> and <code>A[j]</code>).  If it cannot be done, then return the same array.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong>[3,2,1]
<strong>Output: </strong>[3,1,2]
<strong>Explanation: </strong>Swapping 2 and 1.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong>[1,1,5]
<strong>Output: </strong>[1,1,5]
<strong>Explanation: </strong>This is already the smallest permutation.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong>[1,9,4,6,7]
<strong>Output: </strong>[1,7,4,6,9]
<strong>Explanation: </strong>Swapping 9 and 7.
</pre>
<p><strong>Example 4:</strong></p>
<pre><strong>Input: </strong>[3,1,1,3]
<strong>Output: </strong>[1,3,1,3]
<strong>Explanation: </strong>Swapping 1 and 3.
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li><code>1 &lt;= A.length &lt;= 10000</code></li>
<li><code>1 &lt;= A[i] &lt;= 10000</code></li>
</ol>
</div></div>

### Solution