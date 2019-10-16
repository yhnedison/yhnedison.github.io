---
layout: post
title: 953. Verifying an Alien Dictionary
category: [Leetcode]
description: 
keywords: ['Hash Table', 'Leetcode', 'Easy']
---
### [953. Verifying an Alien Dictionary](https://leetcode.com/problems/verifying-an-alien-dictionary)

#### Tags: 'Hash Table'

<div class="content__u3I1 question-content__JfgR"><div><p>In an alien language, surprisingly they also use english lowercase letters, but possibly in a different <code>order</code>. The <code>order</code> of the alphabet is some permutation of lowercase letters.</p>
<p>Given a sequence of <code>words</code> written in the alien language, and the <code>order</code> of the alphabet, return <code>true</code> if and only if the given <code>words</code> are sorted lexicographicaly in this alien language.</p>
<p> </p>
<div>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong>words = <span id="example-input-1-1">["hello","leetcode"]</span>, order = <span id="example-input-1-2">"hlabcdefgijkmnopqrstuvwxyz"</span>
<strong>Output: </strong><span id="example-output-1">true</span>
<strong>Explanation: </strong><span id="example-output-1">As 'h' comes before 'l' in this language, then the sequence is sorted.</span>
</pre>
<div>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong>words = <span id="example-input-2-1">["word","world","row"]</span>, order = <span id="example-input-2-2">"worldabcefghijkmnpqstuvxyz"</span>
<strong>Output: </strong><span id="example-output-2">false</span>
<strong>Explanation: </strong><span id="example-output-1">As 'd' comes after 'l' in this language, then words[0] &gt; words[1], hence the sequence is unsorted.</span>
</pre>
<div>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong>words = <span id="example-input-3-1">["apple","app"]</span>, order = <span id="example-input-3-2">"abcdefghijklmnopqrstuvwxyz"</span>
<strong>Output: </strong><span id="example-output-3">false
</span><strong>Explanation: </strong>The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" &gt; "app", because 'l' &gt; '∅', where '∅' is defined as the blank character which is less than any other character (<a href="https://en.wikipedia.org/wiki/Lexicographical_order" target="_blank">More info</a>).
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li><code>1 &lt;= words.length &lt;= 100</code></li>
<li><code>1 &lt;= words[i].length &lt;= 20</code></li>
<li><code>order.length == 26</code></li>
<li>All characters in <code>words[i]</code> and <code>order</code> are english lowercase letters.</li>
</ol>
</div>
</div>
</div>
</div></div>

### Solution
