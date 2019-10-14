---
layout: post
category: Leetcode
description: 
keywords: ['Dynamic Programming', 'Depth-first Search', 'Leetcode', 'Hard']
---
### [546. Remove Boxes](https://leetcode.com/problems/remove-boxes)

#### Tags: 'Dynamic Programming', 'Depth-first Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Given several boxes with different colors represented by different positive numbers. <br/>
You may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (composed of k boxes, k &gt;= 1), remove them and get <code>k*k</code> points.<br/>
Find the maximum points you can get.
</p>
<p><b>Example 1:</b><br/>
Input: 
</p><pre>[1, 3, 2, 2, 2, 3, 4, 3, 1]
</pre>
Output:
<pre>23
</pre>
Explanation: 
<pre>[1, 3, 2, 2, 2, 3, 4, 3, 1] 
----&gt; [1, 3, 3, 4, 3, 1] (3*3=9 points) 
----&gt; [1, 3, 3, 3, 1] (1*1=1 points) 
----&gt; [1, 1] (3*3=9 points) 
----&gt; [] (2*2=4 points)
</pre>
<p></p>
<p><b>Note:</b>
The number of boxes <code>n</code> would not exceed 100.
</p>
</div></div>

### Solution
