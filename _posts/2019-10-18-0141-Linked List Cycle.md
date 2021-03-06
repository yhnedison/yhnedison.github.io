---
layout: post
title: 141. Linked List Cycle
category: [Leetcode]
description: 
keywords: ['Linked List', 'Two Pointers', 'Leetcode', 'Easy']
---
### [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle)

#### Tags: 'Linked List', 'Two Pointers'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a linked list, determine if it has a cycle in it.</p>
<p>To represent a cycle in the given linked list, we use an integer <code>pos</code> which represents the position (0-indexed) in the linked list where tail connects to. If <code>pos</code> is <code>-1</code>, then there is no cycle in the linked list.</p>
<p> </p>
<div>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong>head = <span id="example-input-1-1">[3,2,0,-4]</span>, pos = <span id="example-input-1-2">1</span>
<strong>Output: </strong><span id="example-output-1">true
<strong>Explanation:</strong> There is a cycle in the linked list, where tail connects to the second node.</span>
</pre>
</div>
<div>
<p><span><img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png" style="width: 300px; height: 97px; margin-top: 8px; margin-bottom: 8px;"/></span></p>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong>head = <span id="example-input-1-1">[1,2]</span>, pos = <span id="example-input-1-2">0</span>
<strong>Output: </strong><span id="example-output-1">true
<strong>Explanation:</strong> There is a cycle in the linked list, where tail connects to the first node.</span>
</pre>
</div>
<div>
<p><span><img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png" style="width: 141px; height: 74px;"/></span></p>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong>head = <span id="example-input-1-1">[1]</span>, pos = <span id="example-input-1-2">-1</span>
<strong>Output: </strong><span id="example-output-1">false
<strong>Explanation:</strong> There is no cycle in the linked list.</span>
</pre>
</div>
<p><span><img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png" style="width: 45px; height: 45px;"/></span></p>
<p> </p>
<p><strong>Follow up:</strong></p>
<p>Can you solve it using <em>O(1)</em> (i.e. constant) memory?</p>
</div></div>

### Solution
1. Using Hashtable. O(n) time O(n) space.
2. Two pointers
```java
// 100% 84%
public boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) {
        return false; // deal with corner case FIRST
    }
    ListNode slow = head, fast = head.next;
    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
} 

// Reverse condition, same performance
public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false; // deal with corner case FIRST
        }
        ListNode slow = head, fast = head.next;
        while (fast != null && fast.next != null) {
            if (slow == fast) {
                return true;
            }
            slow = slow.next;
            fast = fast.next.next;
        }
        return false;
    }

```