---
layout: post
title: 1090. Largest Values From Labels
category: [Leetcode]
description: 
keywords: ['Hash Table', 'Greedy', 'Leetcode', 'Medium']
---
### [1090. Largest Values From Labels](https://leetcode.com/problems/largest-values-from-labels)

#### Tags: 'Hash Table', 'Greedy'

<div class="content__u3I1 question-content__JfgR"><div><p>We have a set of items: the <code>i</code>-th item has value <code>values[i]</code> and label <code>labels[i]</code>.</p>
<p>Then, we choose a subset <code>S</code> of these items, such that:</p>
<ul>
<li><code>|S| &lt;= num_wanted</code></li>
<li>For every label <code>L</code>, the number of items in <code>S</code> with label <code>L</code> is <code>&lt;= use_limit</code>.</li>
</ul>
<p>Return the largest possible sum of the subset <code>S</code>.</p>
<p> </p>
<div>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong>values = <span id="example-input-1-1">[5,4,3,2,1]</span>, labels = <span id="example-input-1-2">[1,1,2,2,3]</span>, <code>num_wanted </code>= <span id="example-input-1-3">3</span>, use_limit = <span id="example-input-1-4">1</span>
<strong>Output: </strong><span id="example-output-1">9</span>
<strong>Explanation: </strong>The subset chosen is the first, third, and fifth item.
</pre>
<div>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong>values = <span id="example-input-2-1">[5,4,3,2,1]</span>, labels = <span id="example-input-2-2">[1,3,3,3,2]</span>, <code>num_wanted </code>= <span id="example-input-2-3">3</span>, use_limit = <span id="example-input-2-4">2</span>
<strong>Output: </strong><span id="example-output-2">12</span>
<strong>Explanation: </strong>The subset chosen is the first, second, and third item.
</pre>
<div>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong>values = <span id="example-input-3-1">[9,8,8,7,6]</span>, labels = <span id="example-input-3-2">[0,0,0,1,1]</span>, <code>num_wanted </code>= <span id="example-input-3-3">3</span>, use_limit = <span id="example-input-3-4">1</span>
<strong>Output:</strong> 16
<strong>Explanation: </strong>The subset chosen is the first and fourth item.
</pre>
<div>
<p><strong>Example 4:</strong></p>
<pre><strong>Input: </strong>values = <span id="example-input-4-1">[9,8,8,7,6]</span>, labels = <span id="example-input-4-2">[0,0,0,1,1]</span>, <code>num_wanted </code>= <span id="example-input-4-3">3</span>, use_limit = <span id="example-input-4-4">2</span>
<strong>Output: </strong><span id="example-output-4">24</span>
<strong>Explanation: </strong>The subset chosen is the first, second, and fourth item.
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li><code>1 &lt;= values.length == labels.length &lt;= 20000</code></li>
<li><code>0 &lt;= values[i], labels[i] &lt;= 20000</code></li>
<li><code>1 &lt;= num_wanted, use_limit &lt;= values.length</code></li>
</ol>
</div>
</div>
</div>
</div></div></div>

### Solution
