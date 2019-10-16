---
layout: post
title: 133. Clone Graph
category: [Leetcode]
description: 
keywords: ['Depth-first Search', 'Breadth-first Search', 'Graph', 'Leetcode', 'Medium']
---
### [133. Clone Graph](https://leetcode.com/problems/clone-graph)

#### Tags: 'Depth-first Search', 'Breadth-first Search', 'Graph'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a reference of a node in a <strong><a href="https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph" target="_blank">connected</a></strong> undirected graph, return a <a href="https://en.wikipedia.org/wiki/Object_copying#Deep_copy" target="_blank"><strong>deep copy</strong></a> (clone) of the graph. Each node in the graph contains a val (<code>int</code>) and a list (<code>List[Node]</code>) of its neighbors.</p>
<p> </p>
<p><strong>Example:</strong></p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2019/02/19/113_sample.png" style="width: 200px; height: 149px;"/></p>
<pre><strong>Input:
</strong>{"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}],"val":1}

<strong>Explanation:</strong>
Node 1's value is 1, and it has two neighbors: Node 2 and 4.
Node 2's value is 2, and it has two neighbors: Node 1 and 3.
Node 3's value is 3, and it has two neighbors: Node 2 and 4.
Node 4's value is 4, and it has two neighbors: Node 1 and 3.
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li>The number of nodes will be between 1 and 100.</li>
<li>The undirected graph is a <a href="https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)#Simple_graph" target="_blank">simple graph</a>, which means no repeated edges and no self-loops in the graph.</li>
<li>Since the graph is undirected, if node <em>p</em> has node <em>q</em> as neighbor, then node <em>q</em> must have node <em>p</em> as neighbor too.</li>
<li>You must return the <strong>copy of the given node</strong> as a reference to the cloned graph.</li>
</ol>
</div></div>

### Solution
