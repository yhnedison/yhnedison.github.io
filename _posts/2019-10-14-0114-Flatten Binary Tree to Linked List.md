---
layout: post
title: 114. Flatten Binary Tree to Linked List
category: Leetcode
description: 
keywords: ['Tree', 'Depth-first Search', 'Leetcode', 'Medium']
---
### [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list)

#### Tags: 'Tree', 'Depth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, flatten it to a linked list in-place.</p>
<p>For example, given the following tree:</p>
<pre>    1
   / \
  2   5
 / \   \
3   4   6
</pre>
<p>The flattened tree should look like:</p>
<pre>1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
</pre>
</div></div>

### Solution
```java
class Solution {
    public void flatten(TreeNode root) {
        flatten(root,null);
    }
    private TreeNode flatten(TreeNode root, TreeNode pre) {
        if(root==null) return pre;
        pre=flatten(root.right,pre);    
        pre=flatten(root.left,pre);
        root.right=pre;
        root.left=null;
        pre=root;
        return pre;
    }
}


// straight
// O(n^2) NOT GOOD ENOUGH
// Right -> Left -> Root
class Solution {
    public void flatten(TreeNode root) {
        if (root == null) return;
        TreeNode left = root.left, right = root.right;
        root.left = null;
        flatten(left);
        flatten(right);
        root.right = left;
        
        TreeNode curr = root;
        while (curr.right != null) {
            curr = curr.right;
        }
        
        curr.right = right;   
    }
}
```