---
layout: post
title: 109. Convert Sorted List to Binary Search Tree
category: Leetcode
description: 
keywords: ['Linked List', 'Depth-first Search', 'Leetcode', 'Medium']
---
### [109. Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree)

#### Tags: 'Linked List', 'Depth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.</p>
<p>For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of <em>every</em> node never differ by more than 1.</p>
<p><strong>Example:</strong></p>
<pre>Given the sorted linked list: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
</pre>
</div></div>

### Solution
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
// Refer to leetcode solution 1
// 100% 92%%
class Solution {
    public TreeNode sortedListToBST(ListNode head) {
        if (head == null) return null;
        ListNode mid = findMiddleNode(head);
        
        TreeNode node = new TreeNode(mid.val);
        if (head == mid) return node; // base case, only 1 
        
        node.left = sortedListToBST(head);
        node.right = sortedListToBST(mid.next);
        return node;
    }
    
    private ListNode findMiddleNode(ListNode head) {
        ListNode prev = null, slow = head, fast = head;
        while (fast != null && fast.next != null) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        if (prev != null) { // left part not empty, cut left part off
            prev.next = null;
        }
        return slow;
    }
}
```
