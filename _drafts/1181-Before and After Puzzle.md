---
layout: post
title: 1181. Before and After Puzzle
category: [Leetcode]
description: 
keywords: ['String', 'Leetcode', 'Medium']
---
### [1181. Before and After Puzzle](https://leetcode.com/problems/before-and-after-puzzle)

#### Tags: 'String'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a list of <code>phrases</code>, generate a list of Before and After puzzles.</p>
<p>A <em>phrase</em> is a string that consists of lowercase English letters and spaces only. No space appears in the start or the end of a phrase. There are no consecutive spaces in a phrase.</p>
<p><em>Before and After puzzles</em> are phrases that are formed by merging two phrases where the <strong>last word of the first phrase</strong> is the same as the <strong>first word of the second phrase</strong>.</p>
<p>Return the Before and After puzzles that can be formed by every two phrases <code>phrases[i]</code> and <code>phrases[j]</code> where <code>i != j</code>. Note that the order of matching two phrases matters, we want to consider both orders.</p>
<p>You should return a list of <strong>distinct</strong> strings <strong>sorted lexicographically</strong>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> phrases = ["writing code","code rocks"]
<strong>Output:</strong> ["writing code rocks"]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> phrases = ["mission statement",
                  "a quick bite to eat",
                  "a chip off the old block",
                  "chocolate bar",
                  "mission impossible",
                  "a man on a mission",
                  "block party",
                  "eat my words",
                  "bar of soap"]
<strong>Output:</strong> ["a chip off the old block party",
         "a man on a mission impossible",
         "a man on a mission statement",
         "a quick bite to eat my words",
         "chocolate bar of soap"]
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> phrases = ["a","b","a"]
<strong>Output:</strong> ["a"]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= phrases.length &lt;= 100</code></li>
<li><code>1 &lt;= phrases[i].length &lt;= 100</code></li>
</ul>
</div></div>

### Solution
