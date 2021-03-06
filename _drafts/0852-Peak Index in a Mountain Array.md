---
layout: post
title: 852. Peak Index in a Mountain Array
category: [Leetcode]
description: 
keywords: ['Binary Search', 'Leetcode', 'Easy']
---
### [852. Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array)

#### Tags: 'Binary Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Let's call an array <code>A</code> a <em>mountain</em> if the following properties hold:</p>
<ul>
<li><code>A.length &gt;= 3</code></li>
<li>There exists some <code>0 &lt; i &lt; A.length - 1</code> such that <code>A[0] &lt; A[1] &lt; ... A[i-1] &lt; A[i] &gt; A[i+1] &gt; ... &gt; A[A.length - 1]</code></li>
</ul>
<p>Given an array that is definitely a mountain, return any <code>i</code> such that <code>A[0] &lt; A[1] &lt; ... A[i-1] &lt; A[i] &gt; A[i+1] &gt; ... &gt; A[A.length - 1]</code>.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">[0,1,0]</span>
<strong>Output: </strong><span id="example-output-1">1</span>
</pre>
<div>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong><span id="example-input-2-1">[0,2,1,0]</span>
<strong>Output: </strong><span id="example-output-2">1</span></pre>
</div>
<p><strong>Note:</strong></p>
<ol>
<li><code>3 &lt;= A.length &lt;= 10000</code></li>
<li><code><font face="monospace">0 &lt;= A[i] &lt;= 10^6</font></code></li>
<li>A is a mountain, as defined above.</li>
</ol>
</div></div>

### Solution
