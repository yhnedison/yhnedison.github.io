---
layout: post
title: 439. Ternary Expression Parser
category: [Leetcode]
description: 
keywords: ['Stack', 'Depth-first Search', 'Leetcode', 'Medium']
---
### [439. Ternary Expression Parser](https://leetcode.com/problems/ternary-expression-parser)

#### Tags: 'Stack', 'Depth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string representing arbitrarily nested ternary expressions, calculate the result of the expression. You can always assume that the given expression is valid and only consists of digits <code>0-9</code>, <code>?</code>, <code>:</code>, <code>T</code> and <code>F</code> (<code>T</code> and <code>F</code> represent True and False respectively).

</p><p><b>Note:</b>
</p><ol>
<li>The length of the given string is ≤ 10000.</li>
<li>Each number will contain only one digit.</li>
<li>The conditional expressions group right-to-left (as usual in most languages).</li>
<li>The condition will always be either <code>T</code> or <code>F</code>. That is, the condition will never be a digit.</li>
<li>The result of the expression will always evaluate to either a digit <code>0-9</code>, <code>T</code> or <code>F</code>.</li>
</ol>
<p></p>
<p>
<b>Example 1:</b>
</p><pre><b>Input:</b> "T?2:3"

<b>Output:</b> "2"

<b>Explanation:</b> If true, then result is 2; otherwise result is 3.
</pre>
<p></p>
<p>
<b>Example 2:</b>
</p><pre><b>Input:</b> "F?1:T?4:5"

<b>Output:</b> "4"

<b>Explanation:</b> The conditional expressions group right-to-left. Using parenthesis, it is read/evaluated as:

             "(F ? 1 : (T ? 4 : 5))"                   "(F ? 1 : (T ? 4 : 5))"
          -&gt; "(F ? 1 : 4)"                 or       -&gt; "(T ? 4 : 5)"
          -&gt; "4"                                    -&gt; "4"
</pre>
<p></p>
<p>
<b>Example 3:</b>
</p><pre><b>Input:</b> "T?T?F:5:3"

<b>Output:</b> "F"

<b>Explanation:</b> The conditional expressions group right-to-left. Using parenthesis, it is read/evaluated as:

             "(T ? (T ? F : 5) : 3)"                   "(T ? (T ? F : 5) : 3)"
          -&gt; "(T ? F : 3)"                 or       -&gt; "(T ? F : 5)"
          -&gt; "F"                                    -&gt; "F"
</pre>
<p></p></div></div>

### Solution
