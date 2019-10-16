---
layout: post
title: 536. Construct Binary Tree from String
category: [Leetcode]
description: 
keywords: ['String', 'Tree', 'Leetcode', 'Medium']
---
### [536. Construct Binary Tree from String](https://leetcode.com/problems/construct-binary-tree-from-string)

#### Tags: 'String', 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>You need to construct a binary tree from a string consisting of parenthesis and integers. </p>
<p>The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure. </p>
<p>You always start to construct the <b>left</b> child node of the parent first if it exists.</p>
<p><b>Example:</b><br/>
</p><pre><b>Input:</b> "4(2(3)(1))(6(5))"
<b>Output:</b> return the tree root node representing the following tree:

       4
     /   \
    2     6
   / \   / 
  3   1 5   
</pre>
<p></p>
<p><b>Note:</b><br/>
</p><ol>
<li>There will only be <code>'('</code>,  <code>')'</code>,  <code>'-'</code> and  <code>'0'</code> ~ <code>'9'</code> in the input string.</li>
<li>An empty tree is represented by <code>""</code> instead of <code>"()"</code>.</li>
</ol>
<p></p></div></div>

### Solution
