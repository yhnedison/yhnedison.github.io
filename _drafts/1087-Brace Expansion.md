---
layout: post
title: 1087. Brace Expansion
category: [Leetcode]
description: 
keywords: ['Backtracking', 'Leetcode', 'Medium']
---
### [1087. Brace Expansion](https://leetcode.com/problems/brace-expansion)

#### Tags: 'Backtracking'

<div class="content__u3I1 question-content__JfgR"><div><p>A string <code>S</code> represents a list of words.</p>
<p>Each letter in the word has 1 or more options.  If there is one option, the letter is represented as is.  If there is more than one option, then curly braces delimit the options.  For example, <code>"{a,b,c}"</code> represents options <code>["a", "b", "c"]</code>.</p>
<p>For example, <code>"{a,b,c}d{e,f}"</code> represents the list <code>["ade", "adf", "bde", "bdf", "cde", "cdf"]</code>.</p>
<p>Return all words that can be formed in this manner, in lexicographical order.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">"{a,b}c{d,e}f"</span>
<strong>Output: </strong><span id="example-output-1">["acdf","acef","bcdf","bcef"]</span>
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong><span id="example-input-2-1">"abcd"</span>
<strong>Output: </strong><span id="example-output-2">["abcd"]</span>
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li><code>1 &lt;= S.length &lt;= 50</code></li>
<li>There are no nested curly brackets.</li>
<li>All characters inside a pair of consecutive opening and ending curly brackets are different.</li>
</ol>
</div></div>

### Solution
