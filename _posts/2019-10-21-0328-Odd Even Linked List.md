---
layout: post
title: 328. Odd Even Linked List
category: [Leetcode]
description: 
keywords: ['Linked List', 'Leetcode', 'Medium']
---
### [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list)

#### Tags: 'Linked List'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.</p>
<p>You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.</p>
<p><b>Example 1:</b></p>
<pre><strong>Input: </strong><code>1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL</code>
<strong>Output: </strong><code>1-&gt;3-&gt;5-&gt;2-&gt;4-&gt;NULL</code>
</pre>
<p><b>Example 2:</b></p>
<pre><strong>Input: </strong>2<code>-&gt;1-&gt;3-&gt;5-&gt;6-&gt;4-&gt;7-&gt;NULL</code>
<strong>Output: </strong><code>2-&gt;3-&gt;6-&gt;7-&gt;1-&gt;5-&gt;4-&gt;NULL</code>
</pre>
<p><b>Note:</b></p>
<ul>
<li>The relative order inside both the even and odd groups should remain as it was in the input.</li>
<li>The first node is considered odd, the second node even and so on ...</li>
</ul>
</div></div>

### Solution 1
Common error for Linked List problems(memory limit exceeded):
**After rearrange nodes, remember to end the list with `NULL`**
O(n) time O(1) space 100% 100%
```java
public ListNode oddEvenList(ListNode head) {
    if (head == null || head.next == null) return head;
    
    ListNode d1 = new ListNode(-1);
    ListNode d2 = new ListNode(-1);
    ListNode c1 = d1, c2 = d2;
    
    int l = 0;
    while (head != null) {
        l++;
        if (l % 2 == 0) {
            c2.next = head;
            c2 = c2.next;
        } else {
            c1.next = head;
            c1 = c1.next;
        }
        head = head.next;
    }
    
    c1.next = d2.next;
    c2.next = null; // !!!!!!!!!!!!!!!!!!!!!!!!!
    return d1.next;
}
```