---
layout: post
title: 83. Remove Duplicates from Sorted List
category: [Leetcode]
description: 
keywords: ['Linked List', 'Leetcode', 'Easy']
---
### [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list)

#### Tags: 'Linked List'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a sorted linked list, delete all duplicates such that each element appear only <em>once</em>.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> 1-&gt;1-&gt;2
<strong>Output:</strong> 1-&gt;2
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> 1-&gt;1-&gt;2-&gt;3-&gt;3
<strong>Output:</strong> 1-&gt;2-&gt;3
</pre>
</div></div>

### Solution 
O(n) time O(1) space 28% 96%
```java
public ListNode deleteDuplicates(ListNode head) {
    if (head == null || head.next == null) return head;
    
    ListNode curr = head;
    while (curr != null) {
        ListNode after = curr.next;
        while (after != null && after.val == curr.val) {
            after = after.next;
        }
        curr.next = after;
        curr = curr.next;
    }
    return head;
}
```