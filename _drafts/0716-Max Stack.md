---
layout: post
title: 716. Max Stack
category: [Leetcode]
description: 
keywords: ['Design', 'Leetcode', 'Easy']
---
### [716. Max Stack](https://leetcode.com/problems/max-stack)

#### Tags: 'Design'

<div class="content__u3I1 question-content__JfgR"><div><p>Design a max stack that supports push, pop, top, peekMax and popMax.</p>
<p>
</p><ol>
<li>push(x) -- Push element x onto stack.</li>
<li>pop() -- Remove the element on top of the stack and return it.</li>
<li>top() -- Get the element on the top.</li>
<li>peekMax() -- Retrieve the maximum element in the stack.</li>
<li>popMax() -- Retrieve the maximum element in the stack, and remove it. If you find more than one maximum elements, only remove the top-most one.</li>
</ol>
<p></p>
<p><b>Example 1:</b><br/>
</p><pre>MaxStack stack = new MaxStack();
stack.push(5); 
stack.push(1);
stack.push(5);
stack.top(); -&gt; 5
stack.popMax(); -&gt; 5
stack.top(); -&gt; 1
stack.peekMax(); -&gt; 5
stack.pop(); -&gt; 1
stack.top(); -&gt; 5
</pre>
<p></p>
<p><b>Note:</b><br/>
</p><ol>
<li>-1e7 &lt;= x &lt;= 1e7</li>
<li>Number of operations won't exceed 10000.</li>
<li>The last four operations won't be called when stack is empty.</li>
</ol>
<p></p></div></div>

### Solution
