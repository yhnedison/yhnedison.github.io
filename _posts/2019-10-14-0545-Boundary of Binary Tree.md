---
layout: post
category: Leetcode
description: 
keywords: ['Tree', 'Leetcode', 'Medium']
---
### [545. Boundary of Binary Tree](https://leetcode.com/problems/boundary-of-binary-tree)

#### Tags: 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, return the values of its boundary in <b>anti-clockwise</b> direction starting from root. Boundary includes left boundary, leaves, and right boundary in order without duplicate <strong>nodes</strong>.  (The values of the nodes may still be duplicates.)</p>
<p><b>Left boundary</b> is defined as the path from root to the <b>left-most</b> node. <b>Right boundary</b> is defined as the path from root to the <b>right-most</b> node. If the root doesn't have left subtree or right subtree, then the root itself is left boundary or right boundary. Note this definition only applies to the input binary tree, and not applies to any subtrees.</p>
<p>The <b>left-most</b> node is defined as a <b>leaf</b> node you could reach when you always firstly travel to the left subtree if exists. If not, travel to the right subtree. Repeat until you reach a leaf node.</p>
<p>The <b>right-most</b> node is also defined by the same way with left and right exchanged.</p>
<p><b>Example 1</b></p>
<pre><b>Input:</b>
  1
   \
    2
   / \
  3   4

<b>Ouput:</b>
[1, 3, 4, 2]

<b>Explanation:</b>
The root doesn't have left subtree, so the root itself is left boundary.
The leaves are node 3 and 4.
The right boundary are node 1,2,4. Note the anti-clockwise direction means you should output reversed right boundary.
So order them in anti-clockwise without duplicates and we have [1,3,4,2].
</pre>
<p> </p>
<p><b>Example 2</b></p>
<pre><b>Input:</b>
    ____1_____
   /          \
  2            3
 / \          / 
4   5        6   
   / \      / \
  7   8    9  10  
       
<b>Ouput:</b>
[1,2,4,7,8,9,10,6,3]

<b>Explanation:</b>
The left boundary are node 1,2,4. (4 is the left-most node according to definition)
The leaves are node 4,7,8,9,10.
The right boundary are node 1,3,6,10. (10 is the right-most node).
So order them in anti-clockwise without duplicate nodes we have [1,2,4,7,8,9,10,6,3].
</pre>
<p> </p>
</div></div>

### Solution
```java
// Find separately
// 100% 78% 
class Solution {
    List<Integer> nodes = new ArrayList<>(1000);
    public List<Integer> boundaryOfBinaryTree(TreeNode root) {

        if(root == null) return nodes;

        nodes.add(root.val);
        leftBoundary(root.left);
        leaves(root.left);
        leaves(root.right);
        rightBoundary(root.right);

        return nodes;
    }
    public void leftBoundary(TreeNode root) {
        if(root == null || (root.left == null && root.right == null)) return;
        nodes.add(root.val);
        if(root.left == null) leftBoundary(root.right);
        else leftBoundary(root.left);
    }
    public void rightBoundary(TreeNode root) {
        if(root == null || (root.right == null && root.left == null)) return;
        if(root.right == null)rightBoundary(root.left);
        else rightBoundary(root.right);
        nodes.add(root.val); // add after child visit(reverse)
    }
    public void leaves(TreeNode root) {
        if(root == null) return;
        if(root.left == null && root.right == null) {
            nodes.add(root.val);
            return;
        }
        leaves(root.left);
        leaves(root.right);
    }
}

// recursive
public class Solution {
    public List<Integer> boundaryOfBinaryTree(TreeNode root) {
        List<Integer> res = new ArrayList<Integer>();
        if (root != null) {
            res.add(root.val);
            getBounds(root.left, res, true, false);
            getBounds(root.right, res, false, true);
        }
        return res;
    }

    private void getBounds(TreeNode node, List<Integer> res, boolean lb, boolean rb) {
        if (node == null) return;
        if (lb) res.add(node.val);
        if (!lb && !rb && node.left == null && node.right == null) res.add(node.val);
        getBounds(node.left, res, lb, rb && node.right == null);
        getBounds(node.right, res, lb && node.left == null, rb);
        if (rb) res.add(node.val);
    }
}


```