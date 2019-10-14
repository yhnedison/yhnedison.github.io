---
layout: post
category: Leetcode
description: 
keywords: ['Tree', 'Breadth-first Search', 'Leetcode', 'Easy']
---
### [429. N-ary Tree Level Order Traversal](https://leetcode.com/problems/n-ary-tree-level-order-traversal)

#### Tags: 'Tree', 'Breadth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).</p>
<p>For example, given a <code>3-ary</code> tree:</p>
<p> </p>
<p><img src="https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png" style="width: 100%; max-width: 300px;"/></p>
<p> </p>
<p>We should return its level order traversal:</p>
<pre>[
     [1],
     [3,2,4],
     [5,6]
]
</pre>
<p> </p>
<p><b>Note:</b></p>
<ol>
<li>The depth of the tree is at most <code>1000</code>.</li>
<li>The total number of nodes is at most <code>5000</code>.</li>
</ol>
</div></div>

### Solution
```java
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val,List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
    public List<List<Integer>> levelOrder(Node root) {
        Queue<Node> queue = new LinkedList<>();
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;
        
        queue.offer(root);
        while (!queue.isEmpty()) {
            List<Integer> tempList = new ArrayList<>();
            
            int currentSize = queue.size();
            for (int i = 0; i < currentSize; i++) {
                Node curr = queue.poll();
                tempList.add(curr.val);
                if (curr.children != null) {
                    for (Node child: curr.children) {
                        queue.offer(child);
                    }
                }
            }
            result.add(tempList);
        }
        return result;
    }
}
```
