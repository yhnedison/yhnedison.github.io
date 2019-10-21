---
layout: post
title: 19. Remove Nth Node From End of List
category: [Leetcode]
description: 
keywords: ['Linked List', 'Two Pointers', 'Leetcode', 'Medium']
---
### [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list)

#### Tags: 'Linked List', 'Two Pointers'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a linked list, remove the <em>n</em>-th node from the end of list and return its head.</p>
<p><strong>Example:</strong></p>
<pre>Given linked list: <strong>1-&gt;2-&gt;3-&gt;4-&gt;5</strong>, and <strong><em>n</em> = 2</strong>.

After removing the second node from the end, the linked list becomes <strong>1-&gt;2-&gt;3-&gt;5</strong>.
</pre>
<p><strong>Note:</strong></p>
<p>Given <em>n</em> will always be valid.</p>
<p><strong>Follow up:</strong></p>
<p>Could you do this in one pass?</p>
</div></div>

### Solution 1
This is not one pass. Find length first, and increment until pointer before node-to-delete.
注意corner case.
```java
public ListNode removeNthFromEnd(ListNode head, int n) {
    if (head == null) return null;
    
    ListNode dummy = new ListNode(-1);
    dummy.next = head;
    ListNode curr = dummy;

    int length = findLength(head);
    int i = length - n;
    
    while (i > 0) {
        i--;
        curr = curr.next;
    }
    
    // curr should be in front of the node to delete
    curr.next = curr.next.next;
    return dummy.next;
}

private int findLength(ListNode node) {
    if (node == null) return 0;
    int i = 0;
    while (node != null) {
        i++;
        node = node.next;
    }
    return i;
}
```

### Solution 2
This looks like ONE PASS, but actually NOT. Should be the same as Solution 1.
Two pointers, increment fast n + 1 steps, then procede until fast hit `null`
```java
public ListNode removeNthFromEnd(ListNode head, int n) {
    if (head == null) return null;

    ListNode dummy = new ListNode(-1);
    dummy.next = head;
    ListNode slow = dummy, fast = dummy;
    
    for (int i = n; i >= 0; i--) {
        fast = fast.next;
    }
    
    while (fast != null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    slow.next = slow.next.next;
    return dummy.next;
}
```