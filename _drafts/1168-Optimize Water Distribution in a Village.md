---
layout: post
title: 1168. Optimize Water Distribution in a Village
category: [Leetcode]
description: 
keywords: ['Union Find', 'Graph', 'Leetcode', 'Hard']
---
### [1168. Optimize Water Distribution in a Village](https://leetcode.com/problems/optimize-water-distribution-in-a-village)

#### Tags: 'Union Find', 'Graph'

<div class="content__u3I1 question-content__JfgR"><div><p>There are <code><font face="monospace">n</font></code> houses in a village. We want to supply water for all the houses by building wells and laying pipes.</p>
<p>For each house <code>i</code>, we can either build a well inside it directly with cost <code>wells[i]</code>, or pipe in water from another well to it. The costs to lay pipes between houses are given by the array <code>pipes</code>, where each <code>pipes[i] = [house1, house2, cost]</code> represents the cost to connect <code>house1</code> and <code>house2</code> together using a pipe. Connections are bidirectional.</p>
<p>Find the minimum total cost to supply water to all houses.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2019/05/22/1359_ex1.png" style="width: 189px; height: 196px;"/></strong></p>
<pre><strong>Input:</strong> n = 3, wells = [1,2,2], pipes = [[1,2,1],[2,3,1]]
<strong>Output:</strong> 3
<strong>Explanation: </strong>
The image shows the costs of connecting houses using pipes.
The best strategy is to build a well in the first house with cost 1 and connect the other houses to it with cost 2 so the total cost is 3.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 10000</code></li>
<li><code>wells.length == n</code></li>
<li><code>0 &lt;= wells[i] &lt;= 10^5</code></li>
<li><code>1 &lt;= pipes.length &lt;= 10000</code></li>
<li><code>1 &lt;= pipes[i][0], pipes[i][1] &lt;= n</code></li>
<li><code>0 &lt;= pipes[i][2] &lt;= 10^5</code></li>
<li><code>pipes[i][0] != pipes[i][1]</code></li>
</ul>
</div></div>

### Solution