---
layout: post
category: Leetcode
description: 
keywords: ['Tree', 'Leetcode', 'Easy']
---
### [589. N-ary Tree Preorder Traversal](https://leetcode.com/problems/n-ary-tree-preorder-traversal)

#### Tags: 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an n-ary tree, return the <i>preorder</i> traversal of its nodes' values.</p>
<p>For example, given a <code>3-ary</code> tree:</p>
<p> </p>
<p><img src="https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png" style="width: 100%; max-width: 300px;"/></p>
<p> </p>
<p>Return its preorder traversal as: <code>[1,3,5,6,2,4]</code>.</p>
<p> </p>
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
class Solution {
    public List<Integer> preorder(Node root) {
        List<Integer> result = new ArrayList<>();
        traversal(root, result);
        return result;
    }
    private void traversal(Node node, List<Integer> result) {
        if (node == null) return;
        result.add(node.val);
        if (node.children != null) {
            for (Node curr: node.children) {
                traversal(curr, result);
            }
        }
    }
}

// Facorite
class Solution {
    public List<Integer> preorder(Node root) {
        List<Integer> result = new LinkedList<>();
        Stack<Node> stack = new Stack<>();
        if (root == null) return result; // edge case
        stack.push(root);
        
        while (!stack.isEmpty()) {
            Node curr = stack.pop();
            result.add(curr.val);
            if (curr.children != null) {
                for (int i = curr.children.size() - 1; i >= 0; i--) {
                    stack.push(curr.children.get(i));
                }
            }
        }
        return result;
    }
}

class Solution {
    public List<Integer> list = new ArrayList<>();
    public List<Integer> preorder(Node root) {
        if (root == null)
            return list;
        
        list.add(root.val);
        for(Node node: root.children)
            preorder(node);
                
        return list;
    }
}

//Iterative



```