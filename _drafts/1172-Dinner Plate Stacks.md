---
layout: post
title: 1172. Dinner Plate Stacks
category: [Leetcode]
description: 
keywords: ['Design', 'Leetcode', 'Hard']
---
### [1172. Dinner Plate Stacks](https://leetcode.com/problems/dinner-plate-stacks)

#### Tags: 'Design'

<div class="content__u3I1 question-content__JfgR"><div><p>You have an infinite number of stacks arranged in a row and numbered (left to right) from 0, each of the stacks has the same maximum <code>capacity</code>.</p>
<p>Implement the <code>DinnerPlates</code> class:</p>
<ul>
<li><code>DinnerPlates(int capacity)</code> Initializes the object with the maximum <code>capacity</code> of the stacks.</li>
<li><code>void push(int val)</code> pushes the given positive integer <code>val</code> into the leftmost stack with size less than <code>capacity</code>.</li>
<li><code>int pop()</code> returns the value at the top of the rightmost non-empty stack and removes it from that stack, and returns <code>-1</code> if all stacks are empty.</li>
<li><code>int popAtStack(int index)</code> returns the value at the top of the stack with the given <code>index</code> and removes it from that stack, and returns -1 if the stack with that given <code>index</code> is empty.</li>
</ul>
<p><strong>Example:</strong></p>
<pre><b>Input: </b>
["DinnerPlates","push","push","push","push","push","popAtStack","push","push","popAtStack","popAtStack","pop","pop","pop","pop","pop"]
[[2],[1],[2],[3],[4],[5],[0],[20],[21],[0],[2],[],[],[],[],[]]
<b>Output: </b>
[null,null,null,null,null,null,2,null,null,20,21,5,4,3,1,-1]

<b>Explanation: </b>
DinnerPlates D = DinnerPlates(2);  // Initialize with capacity = 2
D.push(1);
D.push(2);
D.push(3);
D.push(4);
D.push(5);         // The stacks are now:  2  4
                                           1  3  5
                                           ﹈ ﹈ ﹈
D.popAtStack(0);   // Returns 2.  The stacks are now:     4
                                                       1  3  5
                                                       ﹈ ﹈ ﹈
D.push(20);        // The stacks are now: 20  4
                                           1  3  5
                                           ﹈ ﹈ ﹈
D.push(21);        // The stacks are now: 20  4 21
                                           1  3  5
                                           ﹈ ﹈ ﹈
D.popAtStack(0);   // Returns 20.  The stacks are now:     4 21
                                                        1  3  5
                                                        ﹈ ﹈ ﹈
D.popAtStack(2);   // Returns 21.  The stacks are now:     4
                                                        1  3  5
                                                        ﹈ ﹈ ﹈ 
D.pop()            // Returns 5.  The stacks are now:      4
                                                        1  3 
                                                        ﹈ ﹈  
D.pop()            // Returns 4.  The stacks are now:   1  3 
                                                        ﹈ ﹈   
D.pop()            // Returns 3.  The stacks are now:   1 
                                                        ﹈   
D.pop()            // Returns 1.  There are no stacks.
D.pop()            // Returns -1.  There are still no stacks.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= capacity &lt;= 20000</code></li>
<li><code>1 &lt;= val &lt;= 20000</code></li>
<li><code>0 &lt;= index &lt;= 100000</code></li>
<li>At most <code>200000</code> calls will be made to <code>push</code>, <code>pop</code>, and <code>popAtStack</code>.</li>
</ul>
</div></div>

### Solution
