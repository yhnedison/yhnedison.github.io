---
layout: post
title: 1018. Binary Prefix Divisible By 5
category: [Leetcode]
description: 
keywords: ['Array', 'Leetcode', 'Easy']
---
### [1018. Binary Prefix Divisible By 5](https://leetcode.com/problems/binary-prefix-divisible-by-5)

#### Tags: 'Array'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an array <code>A</code> of <code>0</code>s and <code>1</code>s, consider <code>N_i</code>: the i-th subarray from <code>A[0]</code> to <code>A[i]</code> interpreted as a binary number (from most-significant-bit to least-significant-bit.)</p>
<p>Return a list of booleans <code>answer</code>, where <code>answer[i]</code> is <code>true</code> if and only if <code>N_i</code> is divisible by 5.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">[0,1,1]</span>
<strong>Output: </strong><span id="example-output-1">[true,false,false]</span>
<strong>Explanation: </strong>
The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.  Only the first number is divisible by 5, so answer[0] is true.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong><span id="example-input-2-1">[1,1,1]</span>
<strong>Output: </strong><span id="example-output-2">[false,false,false]</span>
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong><span id="example-input-3-1">[0,1,1,1,1,1]</span>
<strong>Output: </strong><span id="example-output-3">[true,false,false,false,true,false]</span>
</pre>
<p><strong>Example 4:</strong></p>
<pre><strong>Input: </strong><span id="example-input-4-1">[1,1,1,0,1]</span>
<strong>Output: </strong><span id="example-output-4">[false,false,false,false,false]</span>
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li><code>1 &lt;= A.length &lt;= 30000</code></li>
<li><code>A[i]</code> is <code>0</code> or <code>1</code></li>
</ol>
</div></div>

### Solution
