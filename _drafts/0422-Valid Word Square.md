---
layout: post
title: 422. Valid Word Square
category: [Leetcode]
description: 
keywords: ['Leetcode', 'Easy']
---
### [422. Valid Word Square](https://leetcode.com/problems/valid-word-square)

#### Tags: 

<div class="content__u3I1 question-content__JfgR"><div><p>Given a sequence of words, check whether it forms a valid word square.</p>
<p>A sequence of words forms a valid word square if the <i>k</i><sup>th</sup> row and column read the exact same string, where 0 ≤ <i>k</i> &lt; max(numRows, numColumns).</p>
<p><b>Note:</b><br/>
</p><ol>
<li>The number of words given is at least 1 and does not exceed 500.</li>
<li>Word length will be at least 1 and does not exceed 500.</li>
<li>Each word contains only lowercase English alphabet <code>a-z</code>.</li>
</ol>
<p></p>
<p><b>Example 1:</b>
</p><pre><b>Input:</b>
[
  "abcd",
  "bnrt",
  "crmy",
  "dtye"
]

<b>Output:</b>
true

<b>Explanation:</b>
The first row and first column both read "abcd".
The second row and second column both read "bnrt".
The third row and third column both read "crmy".
The fourth row and fourth column both read "dtye".

Therefore, it is a valid word square.
</pre>
<p></p>
<p><b>Example 2:</b>
</p><pre><b>Input:</b>
[
  "abcd",
  "bnrt",
  "crm",
  "dt"
]

<b>Output:</b>
true

<b>Explanation:</b>
The first row and first column both read "abcd".
The second row and second column both read "bnrt".
The third row and third column both read "crm".
The fourth row and fourth column both read "dt".

Therefore, it is a valid word square.
</pre>
<p></p>
<p><b>Example 3:</b>
</p><pre><b>Input:</b>
[
  "ball",
  "area",
  "read",
  "lady"
]

<b>Output:</b>
false

<b>Explanation:</b>
The third row reads "read" while the third column reads "lead".

Therefore, it is <b>NOT</b> a valid word square.
</pre>
<p></p></div></div>

### Solution