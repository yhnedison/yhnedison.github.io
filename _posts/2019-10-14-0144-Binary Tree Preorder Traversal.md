---
layout: post
title: 144. Binary Tree Preorder Traversal
category: Leetcode
description: 
keywords: ['Stack', 'Tree', 'Leetcode', 'Medium']
---
### [144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal)

#### Tags: 'Stack', 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, return the <em>preorder</em> traversal of its nodes' values.</p>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong> <code>[1,null,2,3]</code>
   1
    \
     2
    /
   3

<strong>Output:</strong> <code>[1,2,3]</code>
</pre>
<p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</p>
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
    public List<Integer> preorderTraversal(TreeNode root) {
        //Recursive
        List<Integer> result = new ArrayList<>();
        traversal(root, result);
        return result;
    }
    private void traversal(TreeNode root, List<Integer> result) {
        if (root == null) return;
        result.add(root.val);
        traversal(root.left, result);
        traversal(root.right, result);
    }
}

// Easy to Understand
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        // iterative using stack 
        List<Integer> result = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();
        TreeNode curr = null;
        stack.push(root);
        while(!stack.isEmpty()) {
            curr = stack.pop();
            if (curr != null) {
                result.add(curr.val);
                stack.push(curr.right); // FILO, push right first to pop left first
                stack.push(curr.left);
            }
        }
        return result;
    }
}


class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        // iterative, one loop
        List<Integer> result = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();
        TreeNode curr = root;
        while (curr != null || !stack.empty()) {
            if (curr != null) { // keep push left to null, while adding val to result
                result.add(curr.val);
                stack.push(curr);
                curr = curr.left;
            } else {
                curr = stack.pop();
                curr = curr.right;
            }
        }
        return result;
    }
}

class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        // iterative, different loop
        List<Integer> result = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();
        TreeNode curr = root;
        while (curr != null || !stack.empty()) {
            while (curr != null) { // keep push left to null, while adding val to result
                result.add(curr.val);
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop();
            curr = curr.right;
        }
        return result;
    }
}



```