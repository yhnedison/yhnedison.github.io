---
layout: post
category: Leetcode
description: 
keywords: ['String', 'Leetcode', 'Easy']
---
### [893. Groups of Special-Equivalent Strings](https://leetcode.com/problems/groups-of-special-equivalent-strings)

#### Tags: 'String'

<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array <code>A</code> of strings.</p>
<p>Two strings <code>S</code> and <code>T</code> are <em>special-equivalent</em> if after any number of <em>moves</em>, S == T.</p>
<p>A <em>move</em> consists of choosing two indices <code>i</code> and <code>j</code> with <code>i % 2 == j % 2</code>, and swapping <code>S[i]</code> with <code>S[j]</code>.</p>
<p>Now, a <em>group of special-equivalent strings from <code>A</code></em> is a non-empty subset S of <code>A</code> such that any string not in S is not special-equivalent with any string in S.</p>
<p>Return the number of groups of special-equivalent strings from <code>A</code>.</p>
<p> </p>
<ul>
</ul>
<div>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">["a","b","c","a","c","c"]</span>
<strong>Output: </strong><span id="example-output-1">3</span>
<span><strong>Explanation</strong>: 3 groups ["a","a"], ["b"], ["c","c","c"]</span>
</pre>
<div>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong><span id="example-input-2-1">["aa","bb","ab","ba"]</span>
<strong>Output: </strong><span id="example-output-2">4</span>
<strong>Explanation</strong>: 4 groups <span id="example-input-2-1">["aa"], ["bb"], ["ab"], ["ba"]</span>
</pre>
<div>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong><span id="example-input-3-1">["abc","acb","bac","bca","cab","cba"]</span>
<strong>Output: </strong><span id="example-output-3">3</span>
<strong>Explanation</strong>: 3 groups ["abc","cba"], ["acb","bca"], ["bac","cab"]
</pre>
<div>
<p><strong>Example 4:</strong></p>
<pre><strong>Input: </strong><span id="example-input-4-1">["abcd","cdab","adcb","cbad"]</span>
<strong>Output: </strong><span id="example-output-4">1</span>
<strong>Explanation</strong>: 1 group <span id="example-input-4-1">["abcd","cdab","adcb","cbad"]</span>
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ul>
<li><code>1 &lt;= A.length &lt;= 1000</code></li>
<li><code>1 &lt;= A[i].length &lt;= 20</code></li>
<li>All <code>A[i]</code> have the same length.</li>
<li>All <code>A[i]</code> consist of only lowercase letters.</li>
</ul>
</div>
</div>
</div>
</div>
</div></div>

### Solution
