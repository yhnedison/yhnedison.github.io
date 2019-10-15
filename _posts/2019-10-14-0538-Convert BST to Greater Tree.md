---
layout: post
title: 538. Convert BST to Greater Tree
category: Leetcode
description: 
keywords: ['Tree', 'Leetcode', 'Easy']
---
### [538. Convert BST to Greater Tree](https://leetcode.com/problems/convert-bst-to-greater-tree)

#### Tags: 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.</p>
<p>
<b>Example:</b>
</p><pre><b>Input:</b> The root of a Binary Search Tree like this:
              5
            /   \
           2     13

<b>Output:</b> The root of a Greater Tree like this:
             18
            /   \
          20     13
</pre>
<p></p></div></div>

### Solution
```java
/// Reverse of Inorder Traversal Recursive 99% 37%
class Solution {
    private int sum = 0;
    public TreeNode convertBST(TreeNode root) {
        if (root == null) return null;
        convertBST(root.right);
        root.val += sum;
        sum = root.val;
        convertBST(root.left);
        return root;
    }
}

// Reverse of Inorder Traversal 14% 37%
class Solution {
    public TreeNode convertBST(TreeNode root) {
        TreeNode curr = root;
        Stack<TreeNode> stack = new Stack<>();
        int sum = 0;
        while (curr != null || !stack.isEmpty()) {
            while (curr != null) {
                stack.push(curr);
                curr = curr.right;
            }
            curr = stack.pop();
            sum += curr.val;
            curr.val = sum;
            curr = curr.left;
        }
        return root;
    }
}

 //Two Pass, 6% 6%
class Solution {
    public TreeNode convertBST(TreeNode root) {
        // First pass calculate sum
        // Preorder Traversal
        int sum = 0;
        Stack<TreeNode> stack = new Stack<>();
        TreeNode curr = root;
        stack.push(curr);
        while (!stack.isEmpty()) {
            curr = stack.pop();
            if (curr != null) {
                sum += curr.val;
                stack.push(curr.right);
                stack.push(curr.left);
            }
        }
        
        // Second psss, rebuild tree value
        // Inorder traversal, calculate currentSum(includeing current node)
        // for each node, newValue = sum - currentSum
        int currentSum = 0;
        curr = root;
        while (curr != null || !stack.isEmpty()) {
            while (curr != null) {
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop();
            currentSum += curr.val;
            curr.val = sum - currentSum + curr.val;
            curr = curr.right;
        }

        return root;
    }
}
```