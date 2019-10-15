---
layout: post
title: 543. Diameter of Binary Tree
category: Leetcode
description: 
keywords: ['Tree', 'Leetcode', 'Easy']
---
### [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree)

#### Tags: 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the <b>longest</b> path between any two nodes in a tree. This path may or may not pass through the root.
</p>
<p>
<b>Example:</b><br/>
Given a binary tree <br/>
</p><pre>          1
         / \
        2   3
       / \     
      4   5    
</pre>
<p></p>
<p>
Return <b>3</b>, which is the length of the path [4,2,1,3] or [5,2,1,3].
</p>
<p><b>Note:</b>
The length of path between two nodes is represented by the number of edges between them.
</p></div></div>

### Solution
```java
// Although the longest path doesn't have to go through the root node, it has to pass the root node of some subtree of the tree 
// So we traverse the tree, calculateing longest path passing this node(while is maxDepthLeft + maxDepthRight), and maintain the max
// Postorder traversal Calculate maxDepth while maintaining result
// Refer to 563 Binmary Tree Tilt
class Solution {
    private int result = 0; // maintain a global variable
    public int diameterOfBinaryTree(TreeNode root) {
        maxDepth(root);
        return result;
    }
    
    // the same as 104 maxDepth, while maintaining max
    private int maxDepth(TreeNode node) {
        if (node == null) return 0;
        int left = maxDepth(node.left);
        int right = maxDepth(node.right);
        
        result = Math.max(result, left + right); // this maintains the max
        return Math.max(left, right) + 1;
    }
}

// Without GLOBAL Variable
// http://www.javacoffeebreak.com/faq/faq0066.html
// https://www.techiedelight.com/pass-integer-reference-java/
// 98% 59%
class Solution {
    public int findTilt(TreeNode root) {
        int[] result = new int[1];
        postorderSum(root, result);
        return result[0];
    }
    
    // calculate sum of tree, while maintaining sum
    private  int postorderSum(TreeNode node, int[] result) {
        if (node == null) return 0;
        int left = postorderSum(node.left, result);
        int right = postorderSum(node.right, result);
        
        result[0] += Math.abs(left- right);// maintain result
        
        return left + right + node.val;
    }
}
```