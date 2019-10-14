---
layout: post
category: Leetcode
description: 
keywords: ['Graph', 'Topological Sort', 'Leetcode', 'Hard']
---
### [269. Alien Dictionary](https://leetcode.com/problems/alien-dictionary)

#### Tags: 'Graph', 'Topological Sort'

<div class="content__u3I1 question-content__JfgR"><div><p>There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of <b>non-empty</b> words from the dictionary, where <b>words are sorted lexicographically by the rules of this new language</b>. Derive the order of letters in this language.</p>
<p><b>Example 1:</b></p>
<pre><strong>Input:</strong>
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

<strong>Output: </strong><code>"wertf"</code>
</pre>
<p><b>Example 2:</b></p>
<pre><strong>Input:</strong>
[
  "z",
  "x"
]

<strong>Output: </strong><code>"zx"</code>
</pre>
<p><b>Example 3:</b></p>
<pre><strong>Input:</strong>
[
  "z",
  "x",
  "z"
] 

<strong>Output:</strong> <code>""</code> 

<strong>Explanation:</strong> The order is invalid, so return <code>""</code>.
</pre>
<p><b>Note:</b></p>
<ol>
<li>You may assume all letters are in lowercase.</li>
<li>You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.</li>
<li>If the order is invalid, return an empty string.</li>
<li>There may be multiple valid order of letters, return any one of them is fine.</li>
</ol>
</div></div>

### Solution
