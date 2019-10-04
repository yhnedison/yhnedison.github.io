---
layout: post
title: 92. Reverse Linked List II
categories: Leetcode
description: 
keywords: [LinkedList]
---
### [Description]()

Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4

Output: 1->4->3->2->5->NULL

### Solution


```java
// draw a example with 12345
// 100% 100%
class Solution {
    public ListNode reverseBetween(ListNode head, int m, int n) {
        if (m == n) return head;
        
        ListNode dummy = new ListNode(-1);
        ListNode curr = head;
        dummy.next = curr;
        ListNode prev = dummy;
        int i = 1;
        while (i < m) {
            prev = curr;
            curr = curr.next;
            i++;
        }
        ListNode before = prev;
        ListNode first = curr;
        
        prev = curr;
        curr = curr.next;
        i++;

        while (i <= n) {
            ListNode after = curr.next;
            curr.next = prev;
            prev = curr;
            curr = after;
            i++;
        }
        before.next = prev;
        first.next = curr;
        
        return dummy.next;
        
    }
}
```
