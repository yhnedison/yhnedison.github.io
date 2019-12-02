---
layout: post
title: 108. Convert Sorted Array to Binary Search Tree
category: [Leetcode]
description: 
keywords: ['Tree', 'Depth-first Search', 'Leetcode', 'Easy']
---
### [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree)

#### Tags: 'Tree', 'Depth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an array where elements are sorted in ascending order, convert it to a height balanced BST.</p>
<p>For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of <em>every</em> node never differ by more than 1.</p>
<p><strong>Example:</strong></p>
<pre>Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
</pre>
</div></div>

### Solution
方法1： DFS 答案不唯一，当偶数个时取左还是取右 `O(n) space O(n) time`
```java
public TreeNode sortedArrayToBST(int[] nums) {
    return helper(nums, 0, nums.length - 1);
}

private TreeNode helper(int[] nums, int l, int r) {
    if (l > r) {
        return null;
    }
    
    int m = l + (r - l) / 2;
    TreeNode root = new TreeNode(nums[m]);
    root.left = helper(nums, l, m - 1);
    root.right = helper(nums, m + 1, r);
    return root;
}
```