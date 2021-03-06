---
layout: post
title: 497. Random Point in Non-overlapping Rectangles
category: [Leetcode]
description: 
keywords: ['Binary Search', 'Random', 'Leetcode', 'Medium']
---
### [497. Random Point in Non-overlapping Rectangles](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles)

#### Tags: 'Binary Search', 'Random'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a list of <strong>non-overlapping</strong> axis-aligned rectangles <code>rects</code>, write a function <code>pick</code> which randomly and uniformily picks an <strong>integer point</strong> in the space covered by the rectangles.</p>
<p>Note:</p>
<ol>
<li>An <strong>integer point</strong> is a point that has integer coordinates. </li>
<li>A point on the perimeter of a rectangle is <strong>included</strong> in the space covered by the rectangles. </li>
<li><code>i</code>th rectangle = <code>rects[i]</code> = <code>[x1,y1,x2,y2]</code>, where <code>[x1, y1]</code> are the integer coordinates of the bottom-left corner, and <code>[x2, y2]</code> are the integer coordinates of the top-right corner.</li>
<li>length and width of each rectangle does not exceed <code>2000</code>.</li>
<li><code>1 &lt;= rects.length &lt;= 100</code></li>
<li><code>pick</code> return a point as an array of integer coordinates <code>[p_x, p_y]</code></li>
<li><code>pick</code> is called at most <code>10000</code> times.</li>
</ol>
<div>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: 
</strong><span id="example-input-1-1">["Solution","pick","pick","pick"]
</span><span id="example-input-1-2">[[[[1,1,5,5]]],[],[],[]]</span>
<strong>Output: 
</strong><span id="example-output-1">[null,[4,1],[4,1],[3,3]]</span>
</pre>
<div>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: 
</strong><span id="example-input-2-1">["Solution","pick","pick","pick","pick","pick"]
</span><span id="example-input-2-2">[[[[-2,-2,-1,-1],[1,0,3,0]]],[],[],[],[],[]]</span>
<strong>Output: 
</strong><span id="example-output-2">[null,[-1,-2],[2,0],[-2,-1],[3,0],[-2,-2]]</span></pre>
</div>
<div>
<p><strong>Explanation of Input Syntax:</strong></p>
<p>The input is two lists: the subroutines called and their arguments. <code>Solution</code>'s constructor has one argument, the array of rectangles <code>rects</code>. <code>pick</code> has no arguments. Arguments are always wrapped with a list, even if there aren't any.</p>
</div>
</div>
<div>
<div> </div>
</div>
</div></div>

### Solution
