---
layout: post
category: Leetcode
description: 
keywords: ['Math', 'Tree', 'Leetcode', 'Medium']
---
### [1104. Path In Zigzag Labelled Binary Tree](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree)

#### Tags: 'Math', 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>In an infinite binary tree where every node has two children, the nodes are labelled in row order.</p>
<p>In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.</p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2019/06/24/tree.png" style="width: 300px; height: 138px;"/></p>
<p>Given the <code>label</code> of a node in this tree, return the labels in the path from the root of the tree to the node with that <code>label</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> label = 14
<strong>Output:</strong> [1,3,4,14]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> label = 26
<strong>Output:</strong> [1,2,6,10,26]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= label &lt;= 10^6</code></li>
</ul>
</div></div>

### Solution
```java
// Draw the graph
// For normal graph, keep dividing label by 2 till 1 will get the sequence
// For zigzag graph, each divide will give you the mirror node of previous level
class Solution {
    public List<Integer> pathInZigZagTree(int label) {
        LinkedList<Integer> result = new LinkedList<>();
        while(label > 0) {
            result.addFirst(label);
            label = findReverseNode(label/2);
        }
        return result;
    }
    
    private int findReverseNode(int n) {
        int i = 1;
        int level = 0;
        while (i <= n) {
            i = i<<1;
            level++;
        }
        return (1<<level) - 1 + (1<<(level-1)) - n;
    }
}
```