---
layout: post
category: Leetcode
description: 
keywords: ['Depth-first Search', 'Breadth-first Search', 'Graph', 'Topological Sort', 'Leetcode', 'Medium']
---
### [207. Course Schedule](https://leetcode.com/problems/course-schedule)

#### Tags: 'Depth-first Search', 'Breadth-first Search', 'Graph', 'Topological Sort'

<div class="content__u3I1 question-content__JfgR"><div><p>There are a total of <i>n</i> courses you have to take, labeled from <code>0</code> to <code>n-1</code>.</p>
<p>Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: <code>[0,1]</code></p>
<p>Given the total number of courses and a list of prerequisite <b>pairs</b>, is it possible for you to finish all courses?</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> 2, [[1,0]] 
<strong>Output: </strong>true
<strong>Explanation:</strong> There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> 2, [[1,0],[0,1]]
<strong>Output: </strong>false
<strong>Explanation:</strong> There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
</pre>
<p><b>Note:</b></p>
<ol>
<li>The input prerequisites is a graph represented by <b>a list of edges</b>, not adjacency matrices. Read more about <a href="https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs" target="_blank">how a graph is represented</a>.</li>
<li>You may assume that there are no duplicate edges in the input prerequisites.</li>
</ol>
</div></div>

### Solution
