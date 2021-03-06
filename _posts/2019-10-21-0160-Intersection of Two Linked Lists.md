---
layout: post
title: 160. Intersection of Two Linked Lists
category: [Leetcode]
description: 
keywords: ['Linked List', 'Leetcode', 'Easy']
---
### [160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists)

#### Tags: 'Linked List'

<div class="content__u3I1 question-content__JfgR"><div><p>Write a program to find the node at which the intersection of two singly linked lists begins.</p>
<p>For example, the following two linked lists:</p>
<a href="https://assets.leetcode.com/uploads/2018/12/13/160_statement.png" target="_blank"><img alt="" src="https://assets.leetcode.com/uploads/2018/12/13/160_statement.png" style="margin-top: 10px; margin-bottom: 10px; width: 400px; height: 130px;"/></a>
<p>begin to intersect at node c1.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<a href="https://assets.leetcode.com/uploads/2018/12/13/160_example_1.png" target="_blank"><img alt="" src="https://assets.leetcode.com/uploads/2018/12/13/160_example_1.png" style="margin-top: 10px; margin-bottom: 10px; width: 400px; height: 130px;"/></a>
<pre><strong>Input: </strong>intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
<strong>Output:</strong> Reference of the node with value = 8
<strong>Input Explanation:</strong> The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.</pre>
<p> </p>
<p><strong>Example 2:</strong></p>
<a href="https://assets.leetcode.com/uploads/2018/12/13/160_example_2.png" target="_blank"><img alt="" src="https://assets.leetcode.com/uploads/2018/12/13/160_example_2.png" style="margin-top: 10px; margin-bottom: 10px; width: 350px; height: 136px;"/></a>
<pre><strong>Input: </strong>intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
<strong>Output:</strong> Reference of the node with value = 2
<strong>Input Explanation:</strong> The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [0,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
</pre>
<p> </p>
<p><strong>Example 3:</strong></p>
<a href="https://assets.leetcode.com/uploads/2018/12/13/160_example_3.png" target="_blank"><img alt="" src="https://assets.leetcode.com/uploads/2018/12/13/160_example_3.png" style="margin-top: 10px; margin-bottom: 10px; width: 200px; height: 126px;"/></a>
<pre><strong>Input: </strong>intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
<strong>Output:</strong> null
<strong>Input Explanation:</strong> From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
<strong>Explanation:</strong> The two lists do not intersect, so return null.
</pre>
<p> </p>
<p><b>Notes:</b></p>
<ul>
<li>If the two linked lists have no intersection at all, return <code>null</code>.</li>
<li>The linked lists must retain their original structure after the function returns.</li>
<li>You may assume there are no cycles anywhere in the entire linked structure.</li>
<li>Your code should preferably run in O(n) time and use only O(1) memory.</li>
</ul>
</div></div>

### Solution 1
Find length first, make two pointer at same position, then traverse at the same time.
```java
public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    if (headA == null || headB == null) return null;
    int l = length(headA);
    int m = length(headB);
    while (l > m) {
        headA = headA.next;
        l--;
    }
    while (m > l) {
        headB = headB.next;
        m--;
    }
    // now A and B are at same position
    while (headA != null && headB != null) {
        if (headA == headB) return headA;
        headA = headA.next;
        headB = headB.next;
    }
    
    return null;
    
}

private int length(ListNode node) {
    if (node == null) return 0;
    
    int n = 0;
    while (node != null) {
        n = n + 1;
        node = node.next;
    }
    return n;
}
```