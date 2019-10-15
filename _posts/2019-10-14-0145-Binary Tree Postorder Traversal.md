---
layout: post
title: 145. Binary Tree Postorder Traversal
category: Leetcode
description: 
keywords: ['Stack', 'Tree', 'Leetcode', 'Hard']
---
### [145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal)

#### Tags: 'Stack', 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, return the <em>postorder</em> traversal of its nodes' values.</p>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong> <code>[1,null,2,3]</code>
   1
    \
     2
    /
   3

<strong>Output:</strong> <code>[3,2,1]</code>
</pre>
<p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</p>
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
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result=new ArrayList<>();
        Stack<TreeNode> stack=new Stack<>();
        TreeNode curr=root;
        while(curr!=null || !stack.isEmpty()){
            if(curr!=null){
                stack.push(curr);
                if(curr.left!=null){
                    curr=curr.left;
                }
                else{
                    curr=curr.right;
                }
            }
            else{
                curr=stack.pop();
                result.add(curr.val);
                if(!stack.isEmpty() && stack.peek().left==curr){
                    curr=stack.peek().right;
                }
                else{
                    curr=null;
                }
            }
        }
        return result;
    }
}

class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<Integer>();
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode curr = root;
        while ( curr != null || !stack.isEmpty()) {
            // find leaf nodes
            while (curr != null) {
                stack.push(curr);
                if (curr.left != null) {
                    curr = curr.left;
                } else {
                    curr = curr.right;
                }
            }
            TreeNode curr = stack.pop();
            result.add(curr.val);
            if (!stack.isEmpty() && stack.peek().left == curr) {
                curr = stack.peek().right;
            }
        }
        return result;
    }
    
}


```