---
layout: post
category: Leetcode
description: 
keywords: ['Tree', 'Leetcode', 'Easy']
---
### [653. Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst)

#### Tags: 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.</p>
<p><b>Example 1:</b></p>
<pre><b>Input:</b> 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

<b>Output:</b> True
</pre>
<p> </p>
<p><b>Example 2:</b></p>
<pre><b>Input:</b> 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

<b>Output:</b> False
</pre>
<p> </p>
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
    public boolean findTarget(TreeNode root, int k) {
        //Recursive, using hashset
        Set<Integer> set = new HashSet<>();
        return find(root, k, set);
    }
    private boolean find(TreeNode root, int k, Set<Integer> set) {
        // preorder traversal
        if (root == null) return false; // end case
        if (set.contains(k - root.val)) return true;
        set.add(root.val);
        return find(root.left, k, set) || find(root.right, k, set);
    }
}


class Solution {
    public boolean findTarget(TreeNode root, int k) {
        // iterative bfs, using hashset
        Set<Integer> set = new HashSet<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            if (queue.peek() != null) {
                TreeNode node = queue.remove();
                if (set.contains(k - node.val)) return true;
                set.add(node.val);
                queue.add(node.left);
                queue.add(node.right);
            } else {
                queue.remove();
            }
        }
        return false;
    }
}
```