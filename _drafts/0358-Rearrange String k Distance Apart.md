---
layout: post
title: 358. Rearrange String k Distance Apart
category: [Leetcode]
description: 
keywords: ['Hash Table', 'Heap', 'Greedy', 'Leetcode', 'Hard']
---
### [358. Rearrange String k Distance Apart](https://leetcode.com/problems/rearrange-string-k-distance-apart)

#### Tags: 'Hash Table', 'Heap', 'Greedy'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a non-empty string <b>s</b> and an integer <b>k</b>, rearrange the string such that the same characters are at least distance <b>k</b> from each other.</p>
<p>All input strings are given in lowercase letters. If it is not possible to rearrange the string, return an empty string <code>""</code>.</p>
<p><strong>Example 1:</strong></p>
<div>
<pre><strong>Input: </strong>s = <span id="example-input-1-1">"aabbcc"</span>, k = <span id="example-input-1-2">3</span>
<strong>Output: </strong><span id="example-output-1">"abcabc" 
<strong>Explanation: </strong></span>The same letters are at least distance 3 from each other.
</pre>
<div>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong>s = <span id="example-input-2-1">"aaabc"</span>, k = <span id="example-input-2-2">3</span>
<strong>Output: </strong><span id="example-output-2">"" 
<strong>Explanation:</strong> </span>It is not possible to rearrange the string.
</pre>
<div>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong>s = <span id="example-input-3-1">"aaadbbcc"</span>, k = <span id="example-input-3-2">2</span>
<strong>Output: </strong><span id="example-output-3">"abacabcd"
</span><span id="example-output-2"><strong>Explanation:</strong> </span>The same letters are at least distance 2 from each other.
</pre>
</div>
</div>
</div></div></div>

### Solution
