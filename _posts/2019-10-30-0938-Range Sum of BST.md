---
layout: post
title: 938. Range Sum of BST
category: [Leetcode]
description: 
keywords: ['Tree', 'Recursion', 'Leetcode', 'Easy']
---
### [938. Range Sum of BST](https://leetcode.com/problems/range-sum-of-bst)

#### Tags: 'Tree', 'Recursion'

<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> node of a binary search tree, return the sum of values of all nodes with value between <code>L</code> and <code>R</code> (inclusive).</p>
<p>The binary search tree is guaranteed to have unique values.</p>
<p> </p>
<div>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong>root = <span id="example-input-1-1">[10,5,15,3,7,null,18]</span>, L = <span id="example-input-1-2">7</span>, R = <span id="example-input-1-3">15</span>
<strong>Output: </strong><span id="example-output-1">32</span>
</pre>
<div>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong>root = <span id="example-input-2-1">[10,5,15,3,7,13,18,1,null,6]</span>, L = <span id="example-input-2-2">6</span>, R = <span id="example-input-2-3">10</span>
<strong>Output: </strong><span id="example-output-2">23</span>
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li>The number of nodes in the tree is at most <code>10000</code>.</li>
<li>The final answer is guaranteed to be less than <code>2^31</code>.</li>
</ol>
</div>
</div></div></div>

### Solution
```java
//Recursive
public int rangeSumBST(TreeNode root, int L, int R) {
    if (root == null) return 0;
    int sum = 0;
    if (root.val >= L && root.val <= R) {
        sum += root.val; //preorder
    }
    if (root.val > L) {
        sum += rangeSumBST(root.left, L, R);   
    }
    if (root.val < R) {
        sum += rangeSumBST(root.right, L, R);
    }
    return sum;
}

// Iterative
public int rangeSumBST(TreeNode root, int L, int R) {
    if (root == null) return 0;
    
    int sum = 0;
    Stack<TreeNode> stack = new Stack<>();
    stack.push(root);
    
    while (!stack.isEmpty()) {
        TreeNode node = stack.pop();
        if (node == null) continue;
        if (node.val >= L && node.val <= R) {
            sum += node.val;
        }
        if (node.val > L) {
            // left is possible
            stack.push(node.left);
        }
        if (node.val < R) {
            // right is possible
            stack.push(node.right);
        }
    }
    return sum;
}
```