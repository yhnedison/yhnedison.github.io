---
layout: post
category: Leetcode
description: 
keywords: ['Binary Indexed Tree', 'Segment Tree', 'Leetcode', 'Hard']
---
### [308. Range Sum Query 2D - Mutable](https://leetcode.com/problems/range-sum-query-2d-mutable)

#### Tags: 'Binary Indexed Tree', 'Segment Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a 2D matrix <i>matrix</i>, find the sum of the elements inside the rectangle defined by its upper left corner (<i>row</i>1, <i>col</i>1) and lower right corner (<i>row</i>2, <i>col</i>2).</p>
<p>
<img alt="Range Sum Query 2D" border="0" src="/static/images/courses/range_sum_query_2d.png"/><br/>
<small>The above rectangle (with the red border) is defined by (row1, col1) = <b>(2, 1)</b> and (row2, col2) = <b>(4, 3)</b>, which contains sum = <b>8</b>.</small>
</p>
<p><b>Example:</b><br/>
</p><pre>Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -&gt; 8
update(3, 2, 2)
sumRegion(2, 1, 4, 3) -&gt; 10
</pre>
<p></p>
<p><b>Note:</b><br/>
</p><ol>
<li>The matrix is only modifiable by the <i>update</i> function.</li>
<li>You may assume the number of calls to <i>update</i> and <i>sumRegion</i> function is distributed evenly.</li>
<li>You may assume that <i>row</i>1 ≤ <i>row</i>2 and <i>col</i>1 ≤ <i>col</i>2.</li>
</ol>
<p></p></div></div>

### Solution
