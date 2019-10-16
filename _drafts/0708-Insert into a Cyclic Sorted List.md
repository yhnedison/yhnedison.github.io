---
layout: post
title: 708. Insert into a Cyclic Sorted List
category: [Leetcode]
description: 
keywords: ['Linked List', 'Leetcode', 'Medium']
---
### [708. Insert into a Cyclic Sorted List](https://leetcode.com/problems/insert-into-a-cyclic-sorted-list)

#### Tags: 'Linked List'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a node from a cyclic linked list which is sorted in ascending order, write a function to insert a value into the list such that it remains a cyclic sorted list. The given node can be a reference to <em>any</em> single node in the list, and may not be necessarily the smallest value in the cyclic list.</p>
<p>If there are multiple suitable places for insertion, you may choose any place to insert the new value. After the insertion, the cyclic list should remain sorted.</p>
<p>If the list is empty (i.e., given node is <code>null</code>), you should create a new single cyclic list and return the reference to that single node. Otherwise, you should return the original given node.</p>
<p>The following example may help you understand the problem better:</p>
<p> </p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2019/01/19/example_1_before_65p.jpg" style="width: 250px; height: 149px;"/><br/>
<br/>
<small>In the figure above, there is a cyclic sorted list of three elements. You are given a reference to the node with value 3, and we need to insert 2 into the list.</small></p>
<p> </p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2019/01/19/example_1_after_65p.jpg" style="width: 250px; height: 149px;"/><br/>
<br/>
<small>The new node should insert between node 1 and node 3. After the insertion, the list should look like this, and we should still return node 3.</small></p>
</div></div>

### Solution
