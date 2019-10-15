---
layout: post
title: 654. Maximum Binary Tree
category: Leetcode
description: 
keywords: ['Tree', 'Leetcode', 'Medium']
---
### [654. Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree)

#### Tags: 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>
Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:
</p><ol>
<li>The root is the maximum number in the array. </li>
<li>The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.</li>
<li>The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.</li>
</ol>
<p></p>
<p>
Construct the maximum tree by the given array and output the root node of this tree.
</p>
<p><b>Example 1:</b><br/>
</p><pre><b>Input:</b> [3,2,1,6,0,5]
<b>Output:</b> return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
</pre>
<p></p>
<p><b>Note:</b><br/>
</p><ol>
<li>The size of the given array will be in the range [1,1000].</li>
</ol>
<p></p></div></div>

### Solution
```java
// Recursive
// O(n^2) O(n) 99% 97%
class Solution {
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        if (nums == null) return null;
        return build(nums, 0, nums.length - 1);
    }
    
    private TreeNode build(int[] nums, int start, int end) {
        if (start > end) return null; // End Case
        
        int maxIndex = findMaxIndex(nums, start, end);
        TreeNode node = new TreeNode(nums[maxIndex]);
        
        node.left = build(nums, start, maxIndex -1);
        node.right = build(nums, maxIndex + 1, end);
        return node;
    }
    
    private int findMaxIndex(int[] nums, int start, int end) {
        int max = start;
        for (int i = start+ 1; i <= end; i++) {
            if (nums[i] > nums[max]) max = i;
        }
        return max;
    }
}

// O(n) solution 12% 78%
// Heap is slower than stack
class Solution {
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        Deque<TreeNode> stack = new LinkedList<>();
        for(int i = 0; i < nums.length; i++) {
            TreeNode curr = new TreeNode(nums[i]);
            while(!stack.isEmpty() && stack.peek().val < nums[i]) {
                curr.left = stack.pop();
            }
            if(!stack.isEmpty()) {
                stack.peek().right = curr;
            }
            stack.push(curr);
        }
        
        return stack.isEmpty() ? null : stack.removeLast();
    }
}

```