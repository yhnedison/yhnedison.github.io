---
layout: post
title: 651. 4 Keys Keyboard
category: [Leetcode]
description: 
keywords: ['Math', 'Dynamic Programming', 'Greedy', 'Leetcode', 'Medium']
---
### [651. 4 Keys Keyboard](https://leetcode.com/problems/4-keys-keyboard)

#### Tags: 'Math', 'Dynamic Programming', 'Greedy'

<div class="content__u3I1 question-content__JfgR"><div><p>Imagine you have a special keyboard with the following keys: </p>
<p><code>Key 1: (A)</code>:  Print one 'A' on screen.</p>
<p><code>Key 2: (Ctrl-A)</code>: Select the whole screen.</p>
<p><code>Key 3: (Ctrl-C)</code>: Copy selection to buffer.</p>
<p><code>Key 4: (Ctrl-V)</code>: Print buffer on screen appending it after what has already been printed. </p>
<p>Now, you can only press the keyboard for <b>N</b> times (with the above four keys), find out the maximum numbers of 'A' you can print on screen.</p>
<p><b>Example 1:</b><br/>
</p><pre><b>Input:</b> N = 3
<b>Output:</b> 3
<b>Explanation:</b> 
We can at most get 3 A's on screen by pressing following key sequence:
A, A, A
</pre>
<p></p>
<p><b>Example 2:</b><br/>
</p><pre><b>Input:</b> N = 7
<b>Output:</b> 9
<b>Explanation:</b> 
We can at most get 9 A's on screen by pressing following key sequence:
A, A, A, Ctrl A, Ctrl C, Ctrl V, Ctrl V
</pre>
<p></p>
<p><b>Note:</b><br/>
</p><ol>
<li>1 &lt;= N &lt;= 50 </li>
<li>Answers will be in the range of 32-bit signed integer.</li>
</ol>
<p></p>
</div></div>

### Solution
