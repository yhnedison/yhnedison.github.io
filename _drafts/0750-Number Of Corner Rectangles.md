---
layout: post
title: 750. Number Of Corner Rectangles
category: [Leetcode]
description: 
keywords: ['Dynamic Programming', 'Leetcode', 'Medium']
---
### [750. Number Of Corner Rectangles](https://leetcode.com/problems/number-of-corner-rectangles)

#### Tags: 'Dynamic Programming'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a grid where each entry is only 0 or 1, find the number of corner rectangles.</p>
<p>A <em>corner rectangle</em> is 4 distinct 1s on the grid that form an axis-aligned rectangle. Note that only the corners need to have the value 1. Also, all four 1s used must be distinct.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> grid = 
[[1, 0, 0, 1, 0],
 [0, 0, 1, 0, 1],
 [0, 0, 0, 1, 0],
 [1, 0, 1, 0, 1]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> There is only one corner rectangle, with corners grid[1][2], grid[1][4], grid[3][2], grid[3][4].
</pre>
<p> </p>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> grid = 
[[1, 1, 1],
 [1, 1, 1],
 [1, 1, 1]]
<strong>Output:</strong> 9
<strong>Explanation:</strong> There are four 2x2 rectangles, four 2x3 and 3x2 rectangles, and one 3x3 rectangle.
</pre>
<p> </p>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> grid = 
[[1, 1, 1, 1]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Rectangles must have four distinct corners.
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li>The number of rows and columns of <code>grid</code> will each be in the range <code>[1, 200]</code>.</li>
<li>Each <code>grid[i][j]</code> will be either <code>0</code> or <code>1</code>.</li>
<li>The number of <code>1</code>s in the grid will be at most <code>6000</code>.</li>
</ol>
<p> </p>
</div></div>

### Solution
