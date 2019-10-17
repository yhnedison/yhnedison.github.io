---
layout: post
title: 86. Partition List
category: [Leetcode]
description: 
keywords: ['Linked List', 'Two Pointers', 'Leetcode', 'Medium']
---
### [86. Partition List](https://leetcode.com/problems/partition-list)

#### Tags: 'Linked List', 'Two Pointers'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a linked list and a value <em>x</em>, partition it such that all nodes less than <em>x</em> come before nodes greater than or equal to <em>x</em>.</p>
<p>You should preserve the original relative order of the nodes in each of the two partitions.</p>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong> head = 1-&gt;4-&gt;3-&gt;2-&gt;5-&gt;2, <em>x</em> = 3
<strong>Output:</strong> 1-&gt;2-&gt;2-&gt;4-&gt;3-&gt;5
</pre>
</div></div>

### Solution
1. Use two extra list to store nodes
    * `O(n) O(n) 7% 100% `
    * 初次尝试debug了很久， 用`curr`循环时很容易出错（`l1` 为空或 `l2` 为空) 
```java

public ListNode partition(ListNode head, int x) {
    if (head == null || head.next == null) return head;
    ListNode dummy = new ListNode(-1);
    dummy.next = head;
    
    List<ListNode> l1 = new LinkedList<>();
    List<ListNode> l2 = new LinkedList<>();
    
    // populat l1 and l2
    while (head != null) {
        if (head.val < x) {
            l1.add(head);
        } else {
            l2.add(head);
        }
        head = head.next;
    }
    
    ListNode curr = dummy;

    // Point curr to the next node
    if (!l1.isEmpty()) {
        curr.next = l1.get(0);
        // Loop through l1
        for (int i =0; i < l1.size() - 1; i++) {
            curr = l1.get(i);
            curr.next = l1.get(i + 1);
        }
        curr = l1.get(l1.size() - 1); // point curr to the end
    } 
    
    if (!l2.isEmpty()) {
        curr.next = l2.get(0);
        // loop through l2
        for (int i = 0; i < l2.size() - 1; i++) {
            curr = l2.get(i);
            curr.next = l2.get(i + 1);
        }
        curr = l2.get(l2.size() - 1); // point curr to the end
    }

    if (curr != null)curr.next = null;

    return dummy.next;
}
```

2. (BEST) Two Pointer, one pass using constant space
```java
public ListNode partition(ListNode head, int x) {
    ListNode before_dummy = new ListNode(-1);
    ListNode before = before_dummy;
    ListNode after_dummy = new ListNode(-1);
    ListNode after = after_dummy;
    
    while (head != null) {
        if (head.val < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }
        
        head = head.next;
    }
    after.next = null;
    before.next = after_dummy.next; // connect two list;
    
    return before_dummy.next;
}
```
