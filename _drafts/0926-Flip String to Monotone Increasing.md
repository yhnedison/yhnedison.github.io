---
layout: post
title: 926. Flip String to Monotone Increasing
category: [Leetcode]
description: 
keywords: ['Array', 'Leetcode', 'Medium']
---
### [926. Flip String to Monotone Increasing](https://leetcode.com/problems/flip-string-to-monotone-increasing)

#### Tags: 'Array'

<div class="content__u3I1 question-content__JfgR"><div><p>A string of <code>'0'</code>s and <code>'1'</code>s is <em>monotone increasing</em> if it consists of some number of <code>'0'</code>s (possibly 0), followed by some number of <code>'1'</code>s (also possibly 0.)</p>
<p>We are given a string <code>S</code> of <code>'0'</code>s and <code>'1'</code>s, and we may flip any <code>'0'</code> to a <code>'1'</code> or a <code>'1'</code> to a <code>'0'</code>.</p>
<p>Return the minimum number of flips to make <code>S</code> monotone increasing.</p>
<p> </p>
<div>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">"00110"</span>
<strong>Output: </strong><span id="example-output-1">1</span>
<strong>Explanation: </strong>We flip the last digit to get 00111.
</pre>
<div>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong><span id="example-input-2-1">"010110"</span>
<strong>Output: </strong><span id="example-output-2">2</span>
<strong>Explanation: </strong>We flip to get 011111, or alternatively 000111.
</pre>
<div>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong><span id="example-input-3-1">"00011000"</span>
<strong>Output: </strong><span id="example-output-3">2</span>
<strong>Explanation: </strong>We flip to get 00000000.
</pre>
<p> </p>
<p><strong><span>Note:</span></strong></p>
<ol>
<li><code>1 &lt;= S.length &lt;= 20000</code></li>
<li><code>S</code> only consists of <code>'0'</code> and <code>'1'</code> characters.</li>
</ol>
</div>
</div>
</div></div></div>

### Solution
