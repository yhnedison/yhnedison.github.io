---
layout: post
title: 636. Exclusive Time of Functions
category: [Leetcode]
description: 
keywords: ['Stack', 'Leetcode', 'Medium']
---
### [636. Exclusive Time of Functions](https://leetcode.com/problems/exclusive-time-of-functions)

#### Tags: 'Stack'

<div class="content__u3I1 question-content__JfgR"><div><p>On a <strong>single threaded</strong> CPU, we execute some functions.  Each function has a unique id between <code>0</code> and <code>N-1</code>.</p>
<p>We store logs in timestamp order that describe when a function is entered or exited.</p>
<p>Each log is a string with this format: <code>"{function_id}:{"start" | "end"}:{timestamp}"</code>.  For example, <code>"0:start:3"</code> means the function with id <code>0</code> <strong>started at the beginning</strong> of timestamp <code>3</code>.  <code>"1:end:2"</code> means the function with id <code>1</code> <strong>ended at the end</strong> of timestamp <code>2</code>.</p>
<p>A function's <em>exclusive time</em> is the number of units of time spent in this function.  Note that this does <strong>not</strong> include any recursive calls to child functions.</p>
<p>The CPU is <strong>single threaded</strong> which means that only one function is being executed at a given time unit.</p>
<p>Return the exclusive time of each function, sorted by their function id.</p>
<p> </p>
<p><b>Example 1:</b></p>
<p><b><img alt="" src="https://assets.leetcode.com/uploads/2019/04/05/diag1b.png" style="width: 500px; height: 218px;"/></b></p>
<pre><b>Input:</b>
n = 2
logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
<b>Output: </b>[3, 4]
<b>Explanation:</b>
Function 0 starts at the beginning of time 0, then it executes 2 units of time and reaches the end of time 1.
Now function 1 starts at the beginning of time 2, executes 4 units of time and ends at time 5.
Function 0 is running again at the beginning of time 6, and also ends at the end of time 6, thus executing for 1 unit of time. 
So function 0 spends 2 + 1 = 3 units of total time executing, and function 1 spends 4 units of total time executing.
</pre>
<p> </p>
<p><b>Note:</b></p>
<ol>
<li><code>1 &lt;= n &lt;= 100</code></li>
<li>Two functions won't start or end at the same time.</li>
<li>Functions will always log when they exit.</li>
</ol>
<p> </p>
</div></div>

### Solution
