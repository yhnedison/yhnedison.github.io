---
layout: post
category: Leetcode
description: 
keywords: ['Graph', 'Leetcode', 'Hard']
---
### [1153. String Transforms Into Another String](https://leetcode.com/problems/string-transforms-into-another-string)

#### Tags: 'Graph'

<div class="content__u3I1 question-content__JfgR"><div><p>Given two strings <code>str1</code> and <code>str2</code> of the same length, determine whether you can transform <code>str1</code> into <code>str2</code> by doing <strong>zero or more</strong> <em>conversions</em>.</p>
<p>In one conversion you can convert <strong>all</strong> occurrences of one character in <code>str1</code> to <strong>any</strong> other lowercase English character.</p>
<p>Return <code>true</code> if and only if you can transform <code>str1</code> into <code>str2</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong>str1 = <span id="example-input-1-1">"aabcc"</span>, str2 = <span id="example-input-1-2">"ccdee"</span>
<strong>Output: </strong><span id="example-output-1">true</span>
<strong>Explanation: </strong>Convert 'c' to 'e' then 'b' to 'd' then 'a' to 'c'. Note that the order of conversions matter.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong>str1 = <span id="example-input-2-1">"leetcode"</span>, str2 = <span id="example-input-2-2">"codeleet"</span>
<strong>Output: </strong><span id="example-output-2">false</span>
<strong>Explanation: </strong>There is no way to transform str1 to str2.
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li><code>1 &lt;= str1.length == str2.length &lt;= 10^4</code></li>
<li>Both <code>str1</code> and <code>str2</code> contain only lowercase English letters.</li>
</ol>
</div></div>

### Solution
