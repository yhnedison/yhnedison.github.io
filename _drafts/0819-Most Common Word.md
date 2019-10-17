---
layout: post
title: 819. Most Common Word
category: [Leetcode]
description: 
keywords: ['String', 'Leetcode', 'Easy']
---
### [819. Most Common Word](https://leetcode.com/problems/most-common-word)

#### Tags: 'String'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.</p>
<p>Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.</p>
<p> </p>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong> 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
<strong>Output:</strong> "ball"
<strong>Explanation:</strong> 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
</pre>
<p> </p>
<p><strong>Note: </strong></p>
<ul>
<li><code>1 &lt;= paragraph.length &lt;= 1000</code>.</li>
<li><code>0 &lt;= banned.length &lt;= 100</code>.</li>
<li><code>1 &lt;= banned[i].length &lt;= 10</code>.</li>
<li>The answer is unique, and written in lowercase (even if its occurrences in <code>paragraph</code> may have uppercase symbols, and even if it is a proper noun.)</li>
<li><code>paragraph</code> only consists of letters, spaces, or the punctuation symbols <code>!?',;.</code></li>
<li>There are no hyphens or hyphenated words.</li>
<li>Words only consist of letters, never apostrophes or other punctuation symbols.</li>
</ul>
</div></div>

### Solution