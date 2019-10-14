---
layout: post
category: Leetcode
description: 
keywords: ['Tree', 'Leetcode', 'Easy']
---
### [563. Binary Tree Tilt](https://leetcode.com/problems/binary-tree-tilt)

#### Tags: 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, return the tilt of the <b>whole tree</b>.</p>
<p>The tilt of a <b>tree node</b> is defined as the <b>absolute difference</b> between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.</p>
<p>The tilt of the <b>whole tree</b> is defined as the sum of all nodes' tilt.</p>
<p><b>Example:</b><br/>
</p><pre><b>Input:</b> 
         1
       /   \
      2     3
<b>Output:</b> 1
<b>Explanation:</b> 
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
</pre>
<p></p>
<p><b>Note:</b>
</p><ol>
<li>The sum of node values in any subtree won't exceed the range of 32-bit integer. </li>
<li>All the tilt values won't exceed the range of 32-bit integer.</li>
</ol>
<p></p></div></div>

### Solution
```java
// Postorder traversal Calculate sum while maintaining result
// Refer 543 Diameter of Binary Tree
class Solution {
    private int result = 0;
    public int findTilt(TreeNode root) {
        postorderSum(root);
        return result;
    }
    
    // calculate sum of tree, while maintaining sum
    private  int postorderSum(TreeNode node) {
        if (node == null) return 0;
        int left = postorderSum(node.left);
        int right = postorderSum(node.right);
        
        result += Math.abs(left- right);// maintain result
        
        return left + right + node.val;
    }
}
```