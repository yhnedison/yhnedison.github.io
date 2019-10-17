---
layout: post
title: 942. DI String Match
category: [Leetcode]
description: 
keywords: ['Math', 'Leetcode', 'Easy']
---
### [942. DI String Match](https://leetcode.com/problems/di-string-match)

#### Tags: 'Math'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>S</code> that <strong>only</strong> contains "I" (increase) or "D" (decrease), let <code>N = S.length</code>.</p>
<p>Return <strong>any</strong> permutation <code>A</code> of <code>[0, 1, ..., N]</code> such that for all <code>i = 0, ..., N-1</code>:</p>
<ul>
<li>If <code>S[i] == "I"</code>, then <code>A[i] &lt; A[i+1]</code></li>
<li>If <code>S[i] == "D"</code>, then <code>A[i] &gt; A[i+1]</code></li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">"IDID"</span>
<strong>Output: </strong><span id="example-output-1">[0,4,1,3,2]</span>
</pre>
<div>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong><span id="example-input-2-1">"III"</span>
<strong>Output: </strong><span id="example-output-2">[0,1,2,3]</span>
</pre>
<div>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong><span id="example-input-3-1">"DDI"</span>
<strong>Output: </strong><span id="example-output-3">[3,2,0,1]</span></pre>
</div>
</div>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li><code>1 &lt;= S.length &lt;= 10000</code></li>
<li><code>S</code> only contains characters <code>"I"</code> or <code>"D"</code>.</li>
</ol></div></div>

### Solution