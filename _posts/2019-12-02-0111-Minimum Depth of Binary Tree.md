---
layout: post
title: 111. Minimum Depth of Binary Tree
category: [Leetcode]
description: 
keywords: ['Tree', 'Depth-first Search', 'Breadth-first Search', 'Leetcode', 'Easy']
---
### [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree)

#### Tags: 'Tree', 'Depth-first Search', 'Breadth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, find its minimum depth.</p>
<p>The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.</p>
<p><strong>Note:</strong> A leaf is a node with no children.</p>
<p><strong>Example:</strong></p>
<p>Given binary tree <code>[3,9,20,null,null,15,7]</code>,</p>
<pre>    3
   / \
  9  20
    /  \
   15   7</pre>
<p>return its minimum depth = 2.</p>
</div></div>

### Solution
方法1： 简单的DFS，需要global记录min, 不太好
```java
private int min = Integer.MAX_VALUE;
    
public int minDepth(TreeNode root) {
   if (root == null) return  0;
   helper(root, 1);
   return min;
}

private void helper(TreeNode root, int depth) {
   if (root == null) {
      return;
   }
   
   if (root.left == null && root.right == null) {
      min = Math.min(min, depth);
   }
   if (root.left != null) {
      helper(root.left, depth + 1);
   }
   if (root.right != null) {
      helper(root.right, depth + 1);
   }
   
}
```
方法2： DFS，不需要global
```java
public int minDepth(TreeNode root) {
   if (root == null) return 0;
   if (root.left == null) {
      return minDepth(root.right) + 1;
   } else if (root.right == null) {
      return minDepth(root.left) + 1;
   }
   
   return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}
```