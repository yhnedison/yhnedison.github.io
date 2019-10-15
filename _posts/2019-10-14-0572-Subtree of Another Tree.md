---
layout: post
title: 572. Subtree of Another Tree
category: Leetcode
description: 
keywords: ['Tree', 'Leetcode', 'Easy']
---
### [572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree)

#### Tags: 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>
Given two non-empty binary trees <b>s</b> and <b>t</b>, check whether tree <b>t</b> has exactly the same structure and node values with a subtree of <b>s</b>. A subtree of <b>s</b> is a tree consists of a node in <b>s</b> and all of this node's descendants. The tree <b>s</b> could also be considered as a subtree of itself.
</p>
<p><b>Example 1:</b><br/>

Given tree s:
</p><pre>     3
    / \
   4   5
  / \
 1   2
</pre>
Given tree t:
<pre>   4 
  / \
 1   2
</pre>
Return <b>true</b>, because t has the same structure and node values with a subtree of s.
<p></p>
<p><b>Example 2:</b><br/>

Given tree s:
</p><pre>     3
    / \
   4   5
  / \
 1   2
    /
   0
</pre>
Given tree t:
<pre>   4
  / \
 1   2
</pre>
Return <b>false</b>.
<p></p></div></div>

### Solution
```java
// Refer to 100-Same Tree 
// check sameTree of t against every node in s
// 92% 97%
class Solution {
    public boolean isSubtree(TreeNode s, TreeNode t) {
        if (s == null && t == null) return false;
        else if (s != null && t == null) return true;
        else if (s == null && t != null) return false;
        
        // preorder traversal
        return sameTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
     }
    
    private boolean sameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if ((p == null || q == null) || p.val != q.val) return false;
        return sameTree(p.left, q.left) && sameTree(p.right, q.right);
    }
}


// Iterative preorder traversal
// 9% 8%
class Solution {
    public boolean isSubtree(TreeNode s, TreeNode t) {
        if (s == null && t == null) return false;
        else if (s != null && t == null) return true;
        else if (s == null && t != null) return false;
        
        Stack<TreeNode> stack = new Stack<>();
        stack.push(s);
        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();
            if (sameTree(node, t)) return true;
            if (node != null) {
                stack.push(node.right);
                stack.push(node.left);
            }
        }
        return false;
     }
    
    private boolean sameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if ((p == null || q == null) || p.val != q.val) return false;
        return sameTree(p.left, q.left) && sameTree(p.right, q.right);
    }
}
```