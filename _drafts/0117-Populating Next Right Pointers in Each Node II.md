---
layout: post
category: Leetcode
description: 
keywords: ['Tree', 'Depth-first Search', 'Leetcode', 'Medium']
---
### [117. Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii)

#### Tags: 'Tree', 'Depth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree</p>
<pre>struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
</pre>
<p>Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to <code>NULL</code>.</p>
<p>Initially, all next pointers are set to <code>NULL</code>.</p>
<p> </p>
<p><strong>Example:</strong></p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2019/02/15/117_sample.png" style="width: 640px; height: 218px;"/></p>
<pre><strong>Input: </strong><span>{"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":null,"next":null,"right":{"$id":"6","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}</span>

<strong>Output: </strong><span>{"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":null,"right":null,"val":7},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"6","left":null,"next":null,"right":{"$ref":"5"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"6"},"val":1}</span>

<strong>Explanation: </strong>Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ul>
<li>You may only use constant extra space.</li>
<li>Recursive approach is fine, implicit stack space does not count as extra space for this problem.</li>
</ul></div></div>

### Solution
