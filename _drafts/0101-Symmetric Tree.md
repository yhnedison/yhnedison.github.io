---
layout: post
category: Leetcode
description: 
keywords: ['Tree', 'Depth-first Search', 'Breadth-first Search', 'Leetcode', 'Easy']
---
### [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree)

#### Tags: 'Tree', 'Depth-first Search', 'Breadth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).</p>
<p>For example, this binary tree <code>[1,2,2,3,4,4,3]</code> is symmetric:</p>
<pre>    1
   / \
  2   2
 / \ / \
3  4 4  3
</pre>
<p> </p>
<p>But the following <code>[1,2,2,null,3,null,3]</code> is not:</p>
<pre>    1
   / \
  2   2
   \   \
   3    3
</pre>
<p> </p>
<p><b>Note:</b><br/>
Bonus points if you could solve it both recursively and iteratively.</p>
</div></div>

### Solution
```java
// Recursive
// 100% 61%
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if (root == null) return true;
        return helper(root.left, root.right);
    }
    
    private boolean helper(TreeNode left, TreeNode right) {
        if (left == null && right == null) return true;
        else if (left == null || right == null) return false;
        if (left.val != right.val) return false;

        return helper(left.left, right.right) && helper(left.right, right.left);
    }
}

// Iterative
// 44% 44%
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if (root == null) return true;
        
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root.left);
        stack.push(root.right);
        while (!stack.isEmpty()) {
            TreeNode n1 = stack.pop();
            TreeNode n2 = stack.pop();
            if (n1 == null && n2 == null) continue;
            if ((n1 == null || n2 == null) || n1.val != n2.val) return false;
            stack.push(n1.left);
            stack.push(n2.right);
            stack.push(n1.right);
            stack.push(n2.left);
        }
        return true;
    }
}
```