---
layout: post
title: 82. Remove Duplicates from Sorted List II
category: [Leetcode]
description: 
keywords: ['Linked List', 'Leetcode', 'Medium']
---
### [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii)

#### Tags: 'Linked List'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only <em>distinct</em> numbers from the original list.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> 1-&gt;2-&gt;3-&gt;3-&gt;4-&gt;4-&gt;5
<strong>Output:</strong> 1-&gt;2-&gt;5
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> 1-&gt;1-&gt;1-&gt;2-&gt;3
<strong>Output:</strong> 2-&gt;3
</pre>
</div></div>

### Solution
Similar to 83, this time we need dummy node .
Also when no duplicate, `prev` shouldn't increment
```java
//Better. no need for after pointer
public ListNode deleteDuplicates(ListNode head) {
        // need a dummy node this time for corner cases
        if (head == null || head.next == null) return head;
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        ListNode prev = dummy, curr = head;
        while (curr != null) {
            while (curr.next != null && curr.next.val == curr.val) {
                curr = curr.next;
            }
            
            if (prev.next == curr) { // no duplicate, increment both
                prev = prev.next;
            } else {
                prev.next = curr.next;
            }
            curr = curr.next;
        }
        return dummy.next;
    }
```
```java
public ListNode deleteDuplicates(ListNode head) {
    // need a dummy node this time for corner cases
    if (head == null || head.next == null) return head;
    ListNode dummy = new ListNode(-1);
    dummy.next = head;
    ListNode prev = dummy, curr = head;
    while (curr != null) {
        ListNode after = curr.next;
        while (after != null && after.val == curr.val) {
            after = after.next;
        }
        if (curr.next == after) { // no duplicates, just increment both
            prev = prev.next;
            curr = curr.next;
        } else { // delete duplicate, and set curr to after
            prev.next = after;
            curr = after;
        }
    }
    return dummy.next;
}
```