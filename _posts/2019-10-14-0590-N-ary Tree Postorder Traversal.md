---
layout: post
category: Leetcode
description: 
keywords: ['Tree', 'Leetcode', 'Easy']
---
### [590. N-ary Tree Postorder Traversal](https://leetcode.com/problems/n-ary-tree-postorder-traversal)

#### Tags: 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an n-ary tree, return the <i>postorder</i> traversal of its nodes' values.</p>
<p>For example, given a <code>3-ary</code> tree:</p>
<p> </p>
<p><img src="https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png" style="width: 100%; max-width: 300px;"/></p>
<p> </p>
<p>Return its postorder traversal as: <code>[5,6,3,2,4,1]</code>.</p>
 

<p><b>Note:</b></p>
<p>Recursive solution is trivial, could you do it iteratively?</p>
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

// two stack method, EASY TO UNDERSTAND
class Solution {
    public List<Integer> postorder(Node root) {
        List<Integer> result = new LinkedList<>();
        Stack<Node> stack1 = new Stack<>();
        Stack<Node> stack2 = new Stack<>();
        if (root == null) return result;
        
        stack1.push(root);
        while (!stack1.isEmpty()) {
            Node curr = stack1.pop();
            stack2.push(curr);
            for (Node child: curr.children) {
                stack1.push(child);
            }
        }
        
        while (!stack2.isEmpty()) {
            result.add(stack2.pop().val);
        }
        return result;
    }
}
```