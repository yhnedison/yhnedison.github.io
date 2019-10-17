---
layout: post
title: 895. Maximum Frequency Stack
category: [Leetcode]
description: 
keywords: ['Hash Table', 'Stack', 'Leetcode', 'Hard']
---
### [895. Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack)

#### Tags: 'Hash Table', 'Stack'

<div class="content__u3I1 question-content__JfgR"><div><p>Implement <code>FreqStack</code>, a class which simulates the operation of a stack-like data structure.</p>
<p><code>FreqStack</code> has two functions:</p>
<ul>
<li><code>push(int x)</code>, which pushes an integer <code>x</code> onto the stack.</li>
<li><code>pop()</code>, which <strong>removes</strong> and returns the most frequent element in the stack.
	<ul>
<li>If there is a tie for most frequent element, the element closest to the top of the stack is removed and returned.</li>
</ul>
</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong>
<span id="example-input-1-1">["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"]</span>,
<span id="example-input-1-2">[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]</span>
<strong>Output: </strong><span id="example-output-1">[null,null,null,null,null,null,null,5,7,5,4]</span>
<strong>Explanation</strong>:
After making six .push operations, the stack is [5,7,5,7,4,5] from bottom to top.  Then:

pop() -&gt; returns 5, as 5 is the most frequent.
The stack becomes [5,7,5,7,4].

pop() -&gt; returns 7, as 5 and 7 is the most frequent, but 7 is closest to the top.
The stack becomes [5,7,5,4].

pop() -&gt; returns 5.
The stack becomes [5,7,4].

pop() -&gt; returns 4.
The stack becomes [5,7].
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ul>
<li>Calls to <code>FreqStack.push(int x)</code> will be such that <code>0 &lt;= x &lt;= 10^9</code>.</li>
<li>It is guaranteed that <code>FreqStack.pop()</code> won't be called if the stack has zero elements.</li>
<li>The total number of <code>FreqStack.push</code> calls will not exceed <code>10000</code> in a single test case.</li>
<li>The total number of <code>FreqStack.pop</code> calls will not exceed <code>10000</code> in a single test case.</li>
<li>The total number of <code>FreqStack.push</code> and <code>FreqStack.pop</code> calls will not exceed <code>150000</code> across all test cases.</li>
</ul>
<div>
<p> </p>
</div>
</div></div>

### Solution