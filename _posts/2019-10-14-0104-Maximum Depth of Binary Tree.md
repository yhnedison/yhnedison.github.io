---
layout: post
category: Leetcode
description: 
keywords: ['Tree', 'Depth-first Search', 'Leetcode', 'Easy']
---
### [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)

#### Tags: 'Tree', 'Depth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, find its maximum depth.</p>
<p>The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>
<p><strong>Note:</strong> A leaf is a node with no children.</p>
<p><strong>Example:</strong></p>
<p>Given binary tree <code>[3,9,20,null,null,15,7]</code>,</p>
<pre>    3
   / \
  9  20
    /  \
   15   7</pre>
<p>return its depth = 3.</p>
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


 // 100%, 94%
 // Recursive
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null)  return 0;

        int left = maxDepth(root.left);
        int right = maxDepth(root.right);
        return Math.max(left, right) + 1;
    }
}

// BFS Level Order Traversal
// 11% 93%
class Solution {
    public int maxDepth(TreeNode root) {
        int max = 0;
        if (root == null) return max;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            max++; // one more level
            int levelSize = queue.size();
            for (int i = 0; i < levelSize; i++) {
                TreeNode curr = queue.poll();
                if (curr.left != null) queue.offer(curr.left);
                if (curr.right != null) queue.offer(curr.right);
            }
        }
        return max;
    }
}

// DFS 
// 11% 93%
class Solution {
    public int maxDepth(TreeNode root) {
        int max = 0;
        if (root == null) return max;
        
        Stack<TreeNode> stack1 = new Stack<>();
        Stack<Integer> stack2 = new Stack<>(); // use another stack to track and store each node's depth
        stack1.push(root);
        stack2.push(1);
        while (!stack1.isEmpty()) {
            TreeNode curr = stack1.pop();
            int currDepth = stack2.pop();
            max = Math.max(max, currDepth);
            if (curr.left != null) {
                stack1.push(curr.left);
                stack2.push(currDepth + 1);
            }
            if (curr.right != null) {
                stack1.push(curr.right);
                stack2.push(currDepth + 1);
            }
        }
        return max;
        
    }
}
```