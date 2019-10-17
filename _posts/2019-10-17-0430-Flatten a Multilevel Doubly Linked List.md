---
layout: post
title: 430. Flatten a Multilevel Doubly Linked List
category: [Leetcode]
description: 
keywords: ['Linked List', 'Depth-first Search', 'Leetcode', 'Medium']
---
### [430. Flatten a Multilevel Doubly Linked List](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list)

#### Tags: 'Linked List', 'Depth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.</p>
<p>Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.</p>
<p> </p>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong>
 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL

<strong>Output:</strong>
1-2-3-7-8-11-12-9-10-4-5-6-NULL
</pre>
<p> </p>
<p><strong>Explanation for the above example:</strong></p>
<p>Given the following multilevel doubly linked list:</p>
<pre><img src="https://assets.leetcode.com/uploads/2018/10/12/multilevellinkedlist.png" style="width: 640px;"/></pre>
<p> </p>
<p>We should return the following flattened doubly linked list:</p>
<pre><img src="https://assets.leetcode.com/uploads/2018/10/12/multilevellinkedlistflattened.png" style="width: 1100px;"/></pre>
</div></div>

### Solution
When meet a node with child, merge child to main list(ignoring sub child, because that will be merged later)
```java
/*
// Definition for a Node.
class Node {
    public int val;
    public Node prev;
    public Node next;
    public Node child;

    public Node() {}

    public Node(int _val,Node _prev,Node _next,Node _child) {
        val = _val;
        prev = _prev;
        next = _next;
        child = _child;
    }
};
*/
class Solution {
    public Node flatten(Node head) {
        if (head == null) return null;
        Node curr = head;
        while (curr != null) {
            if (curr.child == null) { 
                // Case 1: No child
                curr = curr.next;
            } else { 
                // Case 2: Has child. 
                // Iterate through child inoring subchild, connect back to main list
                Node temp = curr.child;
                
                //find tail of child
                while (temp.next != null) {
                    temp = temp.next;
                }
                
                //connect temp with curr.next(if not null)
                temp.next = curr.next;
                if (curr.next != null) curr.next.prev = temp;
                
                //connect curr with child, and remove curr.child
                curr.next = curr.child;
                curr.child.prev = curr;
                curr.child = null;
            }
        }
        return head;
        
    }
}
```