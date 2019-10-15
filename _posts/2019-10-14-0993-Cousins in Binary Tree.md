---
layout: post
title: 993. Cousins in Binary Tree
category: Leetcode
description: 
keywords: ['Tree', 'Breadth-first Search', 'Leetcode', 'Easy']
---
### [993. Cousins in Binary Tree](https://leetcode.com/problems/cousins-in-binary-tree)

#### Tags: 'Tree', 'Breadth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>In a binary tree, the root node is at depth <code>0</code>, and children of each depth <code>k</code> node are at depth <code>k+1</code>.</p>
<p>Two nodes of a binary tree are <em>cousins</em> if they have the same depth, but have <strong>different parents</strong>.</p>
<p>We are given the <code>root</code> of a binary tree with unique values, and the values <code>x</code> and <code>y</code> of two different nodes in the tree.</p>
<p>Return <code>true</code> if and only if the nodes corresponding to the values <code>x</code> and <code>y</code> are cousins.</p>
<p> </p>
<p><strong>Example 1:<br/>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/12/q1248-01.png" style="width: 180px; height: 160px;"/></strong></p>
<pre><strong>Input: </strong>root = <span id="example-input-1-1">[1,2,3,4]</span>, x = <span id="example-input-1-2">4</span>, y = <span id="example-input-1-3">3</span>
<strong>Output: </strong><span id="example-output-1">false</span>
</pre>
<div>
<p><strong>Example 2:<br/>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/12/q1248-02.png" style="width: 201px; height: 160px;"/></strong></p>
<pre><strong>Input: </strong>root = <span id="example-input-2-1">[1,2,3,null,4,null,5]</span>, x = <span id="example-input-2-2">5</span>, y = <span id="example-input-2-3">4</span>
<strong>Output: </strong><span id="example-output-2">true</span>
</pre>
<div>
<p><strong>Example 3:</strong></p>
<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2019/02/13/q1248-03.png" style="width: 156px; height: 160px;"/></strong></p>
<pre><strong>Input: </strong>root = <span id="example-input-3-1">[1,2,3,null,4]</span>, x = 2, y = 3
<strong>Output: </strong><span id="example-output-3">false</span></pre>
<p> </p>
</div>
</div>
<p><strong>Note:</strong></p>
<ol>
<li>The number of nodes in the tree will be between <code>2</code> and <code>100</code>.</li>
<li>Each node has a unique integer value from <code>1</code> to <code>100</code>.</li>
</ol>
<div>
<div>
<div> </div>
</div>
</div></div></div>

### Solution
```java
// Recursive 100% 100%
class Solution {
    public boolean isCousins(TreeNode root, int x, int y) {
        return (findDepth(root, x, 1) == findDepth(root, y, 1)) && !isSibling(root, x, y);
    }
    
    // Preorder traversal
    private int findDepth(TreeNode node, int val, int height) {
        if (node == null) return 0;
        if (node.val == val) return height;
        return findDepth(node.left, val, height+1)|findDepth(node.right, val, height+1);
    }
    
    private boolean isSibling(TreeNode node, int x, int y) {
        if (node == null) return false;
        boolean current = false;
        if (node.left != null && node.right != null) {
            current = (node.left.val == x && node.right.val == y) || (node.left.val == y && node.right.val == x);
        }
        return current || isSibling(node.left, x, y) || isSibling(node.right, x, y);
    }
}

// BFS, level order traversal, 
// check isSibling and isSameLevel on different level
// 69% 100%
class Solution {
    public boolean isCousins(TreeNode root, int x, int y) {
        Queue<TreeNode> queue = new LinkedList<>();
        if (root == null) return false;
        queue.offer(root);
        while(!queue.isEmpty()) {
            int size = queue.size();
            boolean foundX = false, foundY= false;
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                if (node.val == x) foundX = true;
                if (node.val == y) foundY = true;
                
                // check next level for sibling, if so return false
                // so that on each level, make sure isSibling doesn't exist
                if (node.left != null && node.right != null) {
                    if ((node.left.val == x && node.right.val == y) || node.left.val == y && node.right.val == x)
                        return false;
                }
                
                // previous level checked not isSibling
                // current level check isSameLevel
                if (foundX && foundY) return true;
                
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            
        }
        return false;
    }
}

// check isSibling and isSameLevel on same level, ignore root. Easier to understand
// 69% 100%
class Solution {
    public boolean isCousins(TreeNode root, int x, int y) {
        Queue<TreeNode> queue = new LinkedList<>();
        if (root == null) return false;
        queue.offer(root);
        while(!queue.isEmpty()) {
            int size = queue.size();
            boolean foundX = false, foundY= false, isSibling = false;
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                if (node.left != null) {
                    if (node.left.val ==  x) foundX = true;
                    if (node.left.val == y) foundY = true;
                }
                if (node.right != null) {
                    if (node.right.val ==  x) foundX = true;
                    if (node.right.val == y) foundY = true;
                }
                

                if (node.left != null && node.right != null) {
                    if ((node.left.val == x && node.right.val == y) || node.left.val == y && node.right.val == x)
                        isSibling = true;
                }
                
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            // end of each level
            if (foundX && foundY && !isSibling) return true;
            
        }
        return false;
    }
}
```