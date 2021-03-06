---
layout: post
title: 411. Minimum Unique Word Abbreviation
category: [Leetcode]
description: 
keywords: ['Backtracking', 'Bit Manipulation', 'Leetcode', 'Hard']
---
### [411. Minimum Unique Word Abbreviation](https://leetcode.com/problems/minimum-unique-word-abbreviation)

#### Tags: 'Backtracking', 'Bit Manipulation'

<div class="content__u3I1 question-content__JfgR"><div><p>A string such as <code>"word"</code> contains the following abbreviations:</p>
<pre>["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
</pre>
<p>Given a target string and a set of strings in a dictionary, find an abbreviation of this target string with the <b><i>smallest possible</i></b> length such that it does not conflict with abbreviations of the strings in the dictionary. </p>
<p>Each <b>number</b> or letter in the abbreviation is considered length = 1. For example, the abbreviation "a32bc" has length = 4.</p>
<p><b>Note:</b><br/>
</p><ul>
<li>In the case of multiple answers as shown in the second example below, you may return any one of them.</li>
<li>Assume length of target string = <b>m</b>, and dictionary size = <b>n</b>. You may assume that <b>m ≤ 21</b>, <b>n ≤ 1000</b>, and <b>log<sub>2</sub>(n) + m ≤ 20</b>.</li>
</ul>
<p></p>
<p><b>Examples:</b><br/>
</p><pre>"apple", ["blade"] -&gt; "a4" (because "5" or "4e" conflicts with "blade")

"apple", ["plain", "amber", "blade"] -&gt; "1p3" (other valid answers include "ap3", "a3e", "2p2", "3le", "3l1").
</pre>
<p></p></div></div>

### Solution
