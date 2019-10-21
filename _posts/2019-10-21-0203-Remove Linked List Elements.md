---
layout: post
title: 203. Remove Linked List Elements
category: [Leetcode]
description: 
keywords: ['Linked List', 'Leetcode', 'Easy']
---
### [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements)

#### Tags: 'Linked List'

<div class="content__u3I1 question-content__JfgR"><div><p>Remove all elements from a linked list of integers that have value <b><i>val</i></b>.</p>
<p><b>Example:</b></p>
<pre><b>Input:</b>  1-&gt;2-&gt;6-&gt;3-&gt;4-&gt;5-&gt;6, <em><b>val</b></em> = 6
<b>Output:</b> 1-&gt;2-&gt;3-&gt;4-&gt;5
</pre>
</div></div>

### Solution
Mind corner cases.
遇事不决画个图
```java
public ListNode removeElements(ListNode head, int val) {
    if (head == null) return null;
    ListNode dummy = new ListNode(-1);
    dummy.next = head;
    
    ListNode curr = head, prev = dummy;
    while (curr != null) {
        if (curr.val == val) {
            prev.next = curr.next;
            curr = curr.next;
        } else {
            prev = prev.next;
            curr = curr.next;
        }
    }
    return dummy.next;
}
```