---
layout: post
category: Leetcode
description: 
keywords: ['Hash Table', 'Linked List', 'Leetcode', 'Medium']
---
### [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer)

#### Tags: 'Hash Table', 'Linked List'

<div class="content__u3I1 question-content__JfgR"><div><p>A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.</p>
<p>Return a <a href="https://en.wikipedia.org/wiki/Object_copying#Deep_copy" target="_blank"><strong>deep copy</strong></a> of the list.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<p><strong><img alt="" src="https://discuss.leetcode.com/uploads/files/1470150906153-2yxeznm.png" style="width: 375px; height: 129px;"/></strong></p>
<pre><strong>Input:
</strong><span id="example-input-1-1">{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}
</span>
<b>Explanation:
</b>Node 1's value is 1, both of its next and random pointer points to Node 2.
Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li>You must return the <strong>copy of the given head</strong> as a reference to the cloned list.</li>
</ol>
</div></div>

### Solution
