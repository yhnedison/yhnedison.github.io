---
layout: post
title: 797. All Paths From Source to Target
category: [Leetcode]
description: 
keywords: ['Leetcode', 'Medium']
---
### [797. All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target)

#### Tags: 

<div class="content__u3I1 question-content__JfgR"><div><p>Given a directed, acyclic graph of <code>N</code> nodes.  Find all possible paths from node <code>0</code> to node <code>N-1</code>, and return them in any order.</p>
<p>The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.</p>
<pre><strong>Example:</strong>
<strong>Input:</strong> [[1,2], [3], [3], []] 
<strong>Output:</strong> [[0,1,3],[0,2,3]] 
<strong>Explanation:</strong> The graph looks like this:
0---&gt;1
|    |
v    v
2---&gt;3
There are two paths: 0 -&gt; 1 -&gt; 3 and 0 -&gt; 2 -&gt; 3.
</pre>
<p><strong>Note:</strong></p>
<ul>
<li>The number of nodes in the graph will be in the range <code>[2, 15]</code>.</li>
<li>You can print different paths in any order, but you should keep the order of nodes inside one path.</li>
</ul></div></div>

### Solution
