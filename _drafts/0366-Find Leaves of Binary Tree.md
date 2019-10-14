---
layout: post
category: Leetcode
description: 
keywords: ['Tree', 'Depth-first Search', 'Leetcode', 'Medium']
---
### [366. Find Leaves of Binary Tree](https://leetcode.com/problems/find-leaves-of-binary-tree)

#### Tags: 'Tree', 'Depth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.</p>
<p> </p>
<p><strong>Example:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">[1,2,3,4,5]
  
          </span>1
         / \
        2   3
       / \     
      4   5    

<strong>Output: </strong><span id="example-output-1">[[4,5,3],[2],[1]]</span>
</pre>
<p> </p>
<p><strong>Explanation:</strong></p>
<p>1. Removing the leaves <code>[4,5,3]</code> would result in this tree:</p>
<pre>          1
         / 
        2          
</pre>
<p> </p>
<p>2. Now removing the leaf <code>[2]</code> would result in this tree:</p>
<pre>          1          
</pre>
<p> </p>
<p>3. Now removing the leaf <code>[1]</code> would result in the empty tree:</p>
<pre>          []         
</pre></div></div>

### Solution
