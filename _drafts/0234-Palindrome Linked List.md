---
layout: post
title: 234. Palindrome Linked List
category: [Leetcode]
description: 
keywords: ['Linked List', 'Two Pointers', 'Leetcode', 'Easy']
---
### [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list)

#### Tags: 'Linked List', 'Two Pointers'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a singly linked list, determine if it is a palindrome.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> 1-&gt;2
<strong>Output:</strong> false</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> 1-&gt;2-&gt;2-&gt;1
<strong>Output:</strong> true</pre>
<p><b>Follow up:</b><br/>
Could you do it in O(n) time and O(1) space?</p>
</div></div>

### Solution
Reverse second half, then compare
```java
class Solution {
    public boolean isPalindrome(ListNode head) {
        // linear time and constant space
        // Reverse second half, compare. Draw a diagram if not clear(odd 3, even 4)
        // 99% 60%
        if (head == null || head.next == null) return true;
        
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        } // slow should be in the middle or begin of second half;
        
        
        slow = reverse(slow);
        
        while(head != null && slow != null) {
            if (head.val != slow.val) return false;
            head = head.next;
            slow = slow.next;
        }
        return true;
        
    }
    
    private ListNode reverse(ListNode head) {
        ListNode pre = null, curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
        }
        return pre;
    }
}
```