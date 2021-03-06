---
layout: post
title: 757. Set Intersection Size At Least Two
category: [Leetcode]
description: 
keywords: ['Greedy', 'Leetcode', 'Hard']
---
### [757. Set Intersection Size At Least Two](https://leetcode.com/problems/set-intersection-size-at-least-two)

#### Tags: 'Greedy'

<div class="content__u3I1 question-content__JfgR"><div><p>
An integer interval <code>[a, b]</code> (for integers <code>a &lt; b</code>) is a set of all consecutive integers from <code>a</code> to <code>b</code>, including <code>a</code> and <code>b</code>.
</p><p>
Find the minimum size of a set S such that for every integer interval A in <code>intervals</code>, the intersection of S with A has size at least 2.
</p>
<p><b>Example 1:</b><br/>
</p><pre><b>Input:</b> intervals = [[1, 3], [1, 4], [2, 5], [3, 5]]
<b>Output:</b> 3
<b>Explanation:</b>
Consider the set S = {2, 3, 4}.  For each interval, there are at least 2 elements from S in the interval.
Also, there isn't a smaller size set that fulfills the above condition.
Thus, we output the size of this set, which is 3.
</pre>
<p></p>
<p><b>Example 2:</b><br/>
</p><pre><b>Input:</b> intervals = [[1, 2], [2, 3], [2, 4], [4, 5]]
<b>Output:</b> 5
<b>Explanation:</b>
An example of a minimum sized set is {1, 2, 3, 4, 5}.
</pre>
<p></p>
<p><b>Note:</b><br/></p><ol>
<li><code>intervals</code> will have length in range <code>[1, 3000]</code>.</li>
<li><code>intervals[i]</code> will have length <code>2</code>, representing some integer interval.</li>
<li><code>intervals[i][j]</code> will be an integer in <code>[0, 10^8]</code>.</li>
</ol><p></p></div></div>

### Solution
