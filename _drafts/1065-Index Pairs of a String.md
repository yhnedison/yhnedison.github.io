---
layout: post
title: 1065. Index Pairs of a String
category: [Leetcode]
description: 
keywords: ['String', 'Trie', 'Leetcode', 'Easy']
---
### [1065. Index Pairs of a String](https://leetcode.com/problems/index-pairs-of-a-string)

#### Tags: 'String', 'Trie'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a <code>text</code> string and <code>words</code> (a list of strings), return all index pairs <code>[i, j]</code> so that the substring <code>text[i]...text[j]</code> is in the list of <code>words</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong>text = <span id="example-input-1-1">"thestoryofleetcodeandme"</span>, words = <span id="example-input-1-2">["story","fleet","leetcode"]</span>
<strong>Output: </strong><span id="example-output-1">[[3,7],[9,13],[10,17]]</span>
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong>text = <span id="example-input-2-1">"ababa"</span>, words = <span id="example-input-2-2">["aba","ab"]</span>
<strong>Output: </strong><span id="example-output-2">[[0,1],[0,2],[2,3],[2,4]]</span>
<strong>Explanation: </strong>
Notice that matches can overlap, see "aba" is found in [0,2] and [2,4].
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li>All strings contains only lowercase English letters.</li>
<li>It's guaranteed that all strings in <code>words</code> are different.</li>
<li><code>1 &lt;= text.length &lt;= 100</code></li>
<li><code>1 &lt;= words.length &lt;= 20</code></li>
<li><code>1 &lt;= words[i].length &lt;= 50</code></li>
<li>Return the pairs <code>[i,j]</code> in sorted order (i.e. sort them by their first coordinate in case of ties sort them by their second coordinate).</li>
</ol></div></div>

### Solution
