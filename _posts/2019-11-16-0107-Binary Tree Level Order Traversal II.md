---
layout: post
title: 107. Binary Tree Level Order Traversal II
category: [Leetcode]
description: 
keywords: ['Tree', 'Breadth-first Search', 'Leetcode', 'Easy']
---
### [107. Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii)

#### Tags: 'Tree', 'Breadth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, return the <i>bottom-up level order</i> traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).</p>
<p>
For example:<br/>
Given binary tree <code>[3,9,20,null,null,15,7]</code>,<br/>
</p><pre>    3
   / \
  9  20
    /  \
   15   7
</pre>
<p></p>
<p>
return its bottom-up level order traversal as:<br/>
</p><pre>[
  [15,7],
  [9,20],
  [3]
]
</pre>
<p></p></div></div>

### Solution
类比102
方法1：层级遍历 然后reverse
```java
public List<List<Integer>> levelOrderBottom(TreeNode root) {
    LinkedList<List<Integer>> result = new LinkedList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        List<Integer> list = new LinkedList<>();
        int size = queue.size();
        for (int i = 0; i < size; i++) {
            TreeNode node = queue.poll();
            list.add(node.val);
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        result.addFirst(list);
        // or user Collections.reverse(result)
    }
    return result;
}

```
方法2: DFS Recursive
```java
public List<List<Integer>> levelOrderBottom(TreeNode root) {
    LinkedList<List<Integer>> result = new LinkedList<List<Integer>>();
    helper(root, result, 0);
    return result;
}

private void helper(TreeNode root, LinkedList<List<Integer>> result, int height) {
    if (root == null) return;
    if (height >= result.size()) {
        result.addFirst(new LinkedList<Integer>());
    }
    
    result.get(result.size() - 1 - height).add(root.val);
    helper(root.left, result, height + 1);
    helper(root.right, result, height + 1);
}
```