---
layout: post
title: 206. Reverse Linked List
categories: Leetcode
description: 
keywords: [LinkedList]
---
### [Description]()
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL

Output: 5->4->3->2->1->NULL

Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

### Solution


```java
// 100% 98%
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
```
