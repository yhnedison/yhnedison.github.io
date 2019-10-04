---
layout: post
title: 25. Reverse Nodes in k-Group
categories: Leetcode
description: 
keywords: [LinkedList]
---
### [Description]()

Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:

Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5

Note:

Only constant extra memory is allowed.

You may not alter the values in the list's nodes, only nodes itself may be changed.

### Solution


```java
// Iterative with constant memory
//O(n) O(1) 100% 24%
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        ListNode curr = dummy;
        
        ListNode end = traverseK(curr, k);
        while (end != null) {
            ListNode first = curr.next;
            ListNode afterEnd = end.next;
            end.next = null;
            
            this.reverseList(first);
            
            curr.next = end;
            first.next = afterEnd;
            curr = first;
            end = traverseK(curr, k);
        }
        return dummy.next;
    }
    
    private ListNode reverseList(ListNode head) {
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
    
    private ListNode traverseK(ListNode node, int k) {
        int count = 0;
        while (node.next != null) {
            node = node.next;
            count++;
            if (count == k) break;
        }
        
        if (count == k) return node;
        else return null;
    }
}
```
