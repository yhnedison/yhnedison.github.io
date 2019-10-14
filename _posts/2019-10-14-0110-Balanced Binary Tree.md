---
layout: post
category: Leetcode
description: 
keywords: ['Tree', 'Depth-first Search', 'Leetcode', 'Easy']
---
### [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree)

#### Tags: 'Tree', 'Depth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, determine if it is height-balanced.</p>
<p>For this problem, a height-balanced binary tree is defined as:</p>
<blockquote>
<p>a binary tree in which the depth of the two subtrees of <em>every</em> node never differ by more than 1.</p>
</blockquote>
<p><strong>Example 1:</strong></p>
<p>Given the following tree <code>[3,9,20,null,null,15,7]</code>:</p>
<pre>    3
   / \
  9  20
    /  \
   15   7</pre>
<p>Return true.<br/>
<br/>
<strong>Example 2:</strong></p>
<p>Given the following tree <code>[1,2,2,3,3,null,null,4,4]</code>:</p>
<pre>       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
</pre>
<p>Return false.</p>
</div></div>

### Solution
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isBalanced(TreeNode root) {
        if (root == null) return true; // end case
        if (root != null && Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) 
            return false;
        return isBalanced(root.left) && isBalanced(root.right);
    }
    
    private int maxDepth(TreeNode node) {
        if (node == null) return 0;
        return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
    }
}
```