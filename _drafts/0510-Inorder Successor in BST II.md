---
layout: post
title: 510. Inorder Successor in BST II
category: [Leetcode]
description: 
keywords: ['Tree', 'Leetcode', 'Medium']
---
### [510. Inorder Successor in BST II](https://leetcode.com/problems/inorder-successor-in-bst-ii)

#### Tags: 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary search tree and a node in it, find the in-order successor of that node in the BST.</p>
<p>The successor of a node <code>p</code> is the node with the smallest key greater than <code>p.val</code>.</p>
<p>You will have direct access to the node but not to the root of the tree. Each node will have a reference to its parent node.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/23/285_example_1.PNG" style="width: 122px; height: 117px;"/>
<pre><strong>Input: </strong>
root = <span id="example-input-1-1">{"$id":"1","left":{"$id":"2","left":null,"parent":{"$ref":"1"},"right":null,"val":1},"parent":null,"right":{"$id":"3","left":null,"parent":{"$ref":"1"},"right":null,"val":3},"val":2}</span>
p = <span id="example-input-1-2">1</span>
<strong>Output: </strong><span id="example-output-1">2</span>
<strong>Explanation: </strong>1's in-order successor node is 2. Note that both p and the return value is of Node type.
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/23/285_example_2.PNG" style="width: 246px; height: 229px;"/>
<pre><strong>Input: </strong>
root = <span id="example-input-2-1">{"$id":"1","left":{"$id":"2","left":{"$id":"3","left":{"$id":"4","left":null,"parent":{"$ref":"3"},"right":null,"val":1},"parent":{"$ref":"2"},"right":null,"val":2},"parent":{"$ref":"1"},"right":{"$id":"5","left":null,"parent":{"$ref":"2"},"right":null,"val":4},"val":3},"parent":null,"right":{"$id":"6","left":null,"parent":{"$ref":"1"},"right":null,"val":6},"val":5}</span>
p = <span id="example-input-2-2">6</span>
<strong>Output: </strong><span id="example-output-2">null</span>
<strong>Explanation: </strong>There is no in-order successor of the current node, so the answer is <code>null</code>.
</pre>
<p><strong>Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/02/285_example_34.PNG" style="width: 438px; height: 335px;"/>
<pre><strong>Input: </strong>
root = <span id="example-input-2-1">{"$id":"1","left":{"$id":"2","left":{"$id":"3","left":{"$id":"4","left":null,"parent":{"$ref":"3"},"right":null,"val":2},"parent":{"$ref":"2"},"right":{"$id":"5","left":null,"parent":{"$ref":"3"},"right":null,"val":4},"val":3},"parent":{"$ref":"1"},"right":{"$id":"6","left":null,"parent":{"$ref":"2"},"right":{"$id":"7","left":{"$id":"8","left":null,"parent":{"$ref":"7"},"right":null,"val":9},"parent":{"$ref":"6"},"right":null,"val":13},"val":7},"val":6},"parent":null,"right":{"$id":"9","left":{"$id":"10","left":null,"parent":{"$ref":"9"},"right":null,"val":17},"parent":{"$ref":"1"},"right":{"$id":"11","left":null,"parent":{"$ref":"9"},"right":null,"val":20},"val":18},"val":15}</span>
p = <span id="example-input-2-2">15</span>
<strong>Output: </strong><span id="example-output-2">17</span>
</pre>
<p><strong>Example 4:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/02/285_example_34.PNG" style="width: 438px; height: 335px;"/>
<pre><strong>Input: </strong>
root = <span id="example-input-2-1">{"$id":"1","left":{"$id":"2","left":{"$id":"3","left":{"$id":"4","left":null,"parent":{"$ref":"3"},"right":null,"val":2},"parent":{"$ref":"2"},"right":{"$id":"5","left":null,"parent":{"$ref":"3"},"right":null,"val":4},"val":3},"parent":{"$ref":"1"},"right":{"$id":"6","left":null,"parent":{"$ref":"2"},"right":{"$id":"7","left":{"$id":"8","left":null,"parent":{"$ref":"7"},"right":null,"val":9},"parent":{"$ref":"6"},"right":null,"val":13},"val":7},"val":6},"parent":null,"right":{"$id":"9","left":{"$id":"10","left":null,"parent":{"$ref":"9"},"right":null,"val":17},"parent":{"$ref":"1"},"right":{"$id":"11","left":null,"parent":{"$ref":"9"},"right":null,"val":20},"val":18},"val":15}</span>
p = <span id="example-input-2-2">13</span>
<strong>Output: </strong><span id="example-output-2">15</span>
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li>If the given node has no in-order successor in the tree, return <code>null</code>.</li>
<li>It's guaranteed that the values of the tree are unique.</li>
<li>Remember that we are using the <code>Node</code> type instead of <code>TreeNode</code> type so their string representation are different.</li>
</ol>
<p> </p>
<p><strong>Follow up:</strong></p>
<p>Could you solve it without looking up any of the node's values?</p>
</div></div>

### Solution
