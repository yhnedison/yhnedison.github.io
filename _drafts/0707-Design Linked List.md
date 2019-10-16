---
layout: post
title: 707. Design Linked List
category: [Leetcode]
description: 
keywords: ['Linked List', 'Design', 'Leetcode', 'Easy']
---
### [707. Design Linked List](https://leetcode.com/problems/design-linked-list)

#### Tags: 'Linked List', 'Design'

<div class="content__u3I1 question-content__JfgR"><div><p>Design your implementation of the linked list. You can choose to use the singly linked list or the doubly linked list. A node in a singly linked list should have two attributes: <code>val</code> and <code>next</code>. <code>val</code> is the value of the current node, and <code>next</code> is a pointer/reference to the next node. If you want to use the doubly linked list, you will need one more attribute <code>prev</code> to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.</p>
<p>Implement these functions in your linked list class:</p>
<ul>
<li>get(index) : Get the value of the <code>index</code>-th node in the linked list. If the index is invalid, return <code>-1</code>.</li>
<li>addAtHead(val) : Add a node of value <code>val</code> before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.</li>
<li>addAtTail(val) : Append a node of value <code>val</code> to the last element of the linked list.</li>
<li>addAtIndex(index, val) : Add a node of value <code>val</code> before the <code>index</code>-th node in the linked list. If <code>index</code> equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. If index is negative, the node will be inserted at the head of the list.</li>
<li>deleteAtIndex(index) : Delete the <code>index</code>-th node in the linked list, if the index is valid.</li>
</ul>
<p><strong>Example:</strong></p>
<pre>MyLinkedList linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);  // linked list becomes 1-&gt;2-&gt;3
linkedList.get(1);            // returns 2
linkedList.deleteAtIndex(1);  // now the linked list is 1-&gt;3
linkedList.get(1);            // returns 3
</pre>
<p><strong>Note:</strong></p>
<ul>
<li>All values will be in the range of <code>[1, 1000]</code>.</li>
<li>The number of operations will be in the range of <code>[1, 1000]</code>.</li>
<li>Please do not use the built-in LinkedList library.</li>
</ul>
</div></div>

### Solution
