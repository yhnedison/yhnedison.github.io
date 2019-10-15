---
layout: post
title: 814. Binary Tree Pruning
category: Leetcode
description: 
keywords: ['Tree', 'Leetcode', 'Medium']
---
### [814. Binary Tree Pruning](https://leetcode.com/problems/binary-tree-pruning)

#### Tags: 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>We are given the head node <code>root</code> of a binary tree, where additionally every node's value is either a 0 or a 1.</p>
<p>Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.</p>
<p>(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)</p>
<pre><strong>Example 1:</strong>
<strong>Input:</strong> [1,null,0,0,1]
<strong>Output: </strong>[1,null,0,null,1]
 
<strong>Explanation:</strong> 
Only the red nodes satisfy the property "every subtree not containing a 1".
The diagram on the right represents the answer.

<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_2.png" style="width:450px"/>
</pre>
<pre><strong>Example 2:</strong>
<strong>Input:</strong> [1,0,1,0,0,0,1]
<strong>Output: </strong>[1,null,1,null,1]


<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_1.png" style="width:450px"/>
</pre>
<pre><strong>Example 3:</strong>
<strong>Input:</strong> [1,1,0,1,1,0,1,0]
<strong>Output: </strong>[1,1,0,1,1,null,1]


<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/05/1028.png" style="width:450px"/>
</pre>
<p><strong>Note: </strong></p>
<ul>
<li>The binary tree will have at most <code>100 nodes</code>.</li>
<li>The value of each node will only be <code>0</code> or <code>1</code>.</li>
</ul>
</div></div>

### Solution
```java
// Recursive
// 1. what should the function return(functionality)
// 2. what is the end case
class Solution {
    public TreeNode pruneTree(TreeNode root) {
        if (root == null) return null;
        
        root.left = pruneTree(root.left); // prune children first
        root.right = pruneTree(root.right);
        
        if (root.left == null && root.right == null && root.val == 0) return null; // prune current
        
        return root;
    }
}
```