---
layout: post
title: 968. Binary Tree Cameras
category: [Leetcode]
description: 
keywords: ['Dynamic Programming', 'Tree', 'Depth-first Search', 'Leetcode', 'Hard']
---
### [968. Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras)

#### Tags: 'Dynamic Programming', 'Tree', 'Depth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, we install cameras on the nodes of the tree. </p>
<p>Each camera at a node can monitor <strong>its parent, itself, and its immediate children</strong>.</p>
<p>Calculate the minimum number of cameras needed to monitor all nodes of the tree.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/29/bst_cameras_01.png" style="width: 138px; height: 163px;"/>
<div>
<pre><strong>Input: </strong><span id="example-input-1-1">[0,0,null,0,0]</span>
<strong>Output: </strong><span id="example-output-1">1</span>
<strong>Explanation: </strong>One camera is enough to monitor all nodes if placed as shown.
</pre>
<div>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/29/bst_cameras_02.png" style="width: 139px; height: 312px;"/>
<pre><strong>Input: </strong><span id="example-input-2-1">[0,0,null,0,null,0,null,null,0]</span>
<strong>Output: </strong><span id="example-output-2">2
<strong>Explanation:</strong> At least two cameras are needed to monitor all nodes of the tree. The above image shows one of the valid configurations of camera placement.</span>
</pre>
<p><br/>
<strong>Note:</strong></p>
<ol>
<li>The number of nodes in the given tree will be in the range <code>[1, 1000]</code>.</li>
<li><strong>Every</strong> node has value 0.</li>
</ol>
</div>
</div>
</div></div>

### Solution
