---
layout: post
title: 759. Employee Free Time
category: [Leetcode]
description: 
keywords: ['Heap', 'Greedy', 'Leetcode', 'Hard']
---
### [759. Employee Free Time](https://leetcode.com/problems/employee-free-time)

#### Tags: 'Heap', 'Greedy'

<div class="content__u3I1 question-content__JfgR"><div><p>We are given a list <code>schedule</code> of employees, which represents the working time for each employee.</p>
<p>Each employee has a list of non-overlapping <code>Intervals</code>, and these intervals are in sorted order.</p>
<p>Return the list of finite intervals representing <b>common, positive-length free time</b> for <i>all</i> employees, also in sorted order.</p>
<p><b>Example 1:</b></p>
<pre><b>Input:</b> schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
<b>Output:</b> [[3,4]]
<b>Explanation:</b>
There are a total of three employees, and all common
free time intervals would be [-inf, 1], [3, 4], [10, inf].
We discard any intervals that contain inf as they aren't finite.
</pre>
<p> </p>
<p><b>Example 2:</b></p>
<pre><b>Input:</b> schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
<b>Output:</b> [[5,6],[7,9]]
</pre>
<p> </p>
<p>(Even though we are representing <code>Intervals</code> in the form <code>[x, y]</code>, the objects inside are <code>Intervals</code>, not lists or arrays. For example, <code>schedule[0][0].start = 1, schedule[0][0].end = 2</code>, and <code>schedule[0][0][0]</code> is not defined.)</p>
<p>Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.</p>
<p><b>Note:</b></p>
<ol>
<li><code>schedule</code> and <code>schedule[i]</code> are lists with lengths in range <code>[1, 50]</code>.</li>
<li><code>0 &lt;= schedule[i].start &lt; schedule[i].end &lt;= 10^8</code>.</li>
</ol>
<p><strong>NOTE:</strong> input types have been changed on June 17, 2019. Please reset to default code definition to get new method signature.</p>
<p> </p>
</div></div>

### Solution
