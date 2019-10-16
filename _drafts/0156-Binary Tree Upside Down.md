---
layout: post
title: 156. Binary Tree Upside Down
category: [Leetcode]
description: 
keywords: ['Tree', 'Leetcode', 'Medium']
---
### [156. Binary Tree Upside Down](https://leetcode.com/problems/binary-tree-upside-down)

#### Tags: 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty, flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.</p>
<p><strong>Example:</strong></p>
<pre><strong>Input: </strong>[1,2,3,4,5]

    1
   / \
  2   3
 / \
4   5

<strong>Output:</strong> return the root of the binary tree [4,5,2,#,#,3,1]

   4
  / \
 5   2
    / \
   3   1  
</pre>
<p><strong>Clarification:</strong></p>
<p>Confused what <code>[4,5,2,#,#,3,1<font face="monospace">]</font></code> means? Read more below on how binary tree is serialized on OJ.</p>
<p>The serialization of a binary tree follows a level order traversal, where '#' signifies a path terminator where no node exists below.</p>
<p>Here's an example:</p>
<pre>   1
  / \
 2   3
    /
   4
    \
     5
</pre>
<p>The above binary tree is serialized as <code>[1,2,3,#,#,4,#,#,5]</code>.</p>
</div></div>

### Solution
