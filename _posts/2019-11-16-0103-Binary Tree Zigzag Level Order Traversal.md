---
layout: post
title: 103. Binary Tree Zigzag Level Order Traversal
category: [Leetcode]
description: 
keywords: ['Stack', 'Tree', 'Breadth-first Search', 'Leetcode', 'Medium']
---
### [103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal)

#### Tags: 'Stack', 'Tree', 'Breadth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, return the <i>zigzag level order</i> traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).</p>
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
return its zigzag level order traversal as:<br/>
</p><pre>[
  [3],
  [20,9],
  [15,7]
]
</pre>
<p></p></div></div>

### Solution
```java
public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
    List<List<Integer>> result = new LinkedList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int size = queue.size();
        List<Integer> list = new LinkedList<>();
        for (int i = 0; i < size; i++) {
            TreeNode node = queue.poll();
            list.add(node.val);
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        if (result.size() % 2 == 1) {
            Collections.reverse(list);
        }
        result.add(list);
    }
    return result;
}
```