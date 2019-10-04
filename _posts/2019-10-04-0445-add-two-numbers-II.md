---
layout: post
title: 445. Add Two Numbers II
categories: Leetcode
description: 
keywords: [LinkedList]
---
### [Description]()
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:

What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)

Output: 7 -> 8 -> 0 -> 7

### Solution


```java
// Reversing list is not allowed
// so use stack(extra memory) for reversing
// O(n) O(n) 52% 64%
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        Stack<ListNode> stack1 = new Stack<>();
        Stack<ListNode> stack2 = new Stack<>();
        while(l1 != null) {
            stack1.push(l1);
            l1 = l1.next;
        }
        while (l2 != null) {
            stack2.push(l2);
            l2 = l2.next;
        }
        
        ListNode prev = null;
        int carry = 0;
        while (!stack1.isEmpty() || !stack2.isEmpty() || carry != 0) {
            int sum = carry;
            if (!stack1.isEmpty()) sum += stack1.pop().val;
            if (!stack2.isEmpty()) sum += stack2.pop().val;
            carry = sum / 10;
            sum = sum % 10;
            ListNode curr = new ListNode(sum);
            curr.next = prev;
            prev = curr;
        }
        return prev;
    }
}
```
