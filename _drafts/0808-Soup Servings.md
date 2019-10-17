---
layout: post
title: 808. Soup Servings
category: [Leetcode]
description: 
keywords: ['Dynamic Programming', 'Leetcode', 'Medium']
---
### [808. Soup Servings](https://leetcode.com/problems/soup-servings)

#### Tags: 'Dynamic Programming'

<div class="content__u3I1 question-content__JfgR"><div><p>There are two types of soup: type A and type B. Initially we have <code>N</code> ml of each type of soup. There are four kinds of operations:</p>
<ol>
<li>Serve 100 ml of soup A and 0 ml of soup B</li>
<li>Serve 75 ml of soup A and 25 ml of soup B</li>
<li>Serve 50 ml of soup A and 50 ml of soup B</li>
<li>Serve 25 ml of soup A and 75 ml of soup B</li>
</ol>
<p>When we serve some soup, we give it to someone and we no longer have it.  Each turn, we will choose from the four operations with equal probability 0.25. If the remaining volume of soup is not enough to complete the operation, we will serve as much as we can.  We stop once we no longer have some quantity of both types of soup.</p>
<p>Note that we do not have the operation where all 100 ml's of soup B are used first.  </p>
<p>Return the probability that soup A will be empty first, plus half the probability that A and B become empty at the same time.</p>
<p> </p>
<pre><strong>Example:</strong>
<strong>Input:</strong> N = 50
<strong>Output:</strong> 0.625
<strong>Explanation:</strong> 
If we choose the first two operations, A will become empty first. For the third operation, A and B will become empty at the same time. For the fourth operation, B will become empty first. So the total probability of A becoming empty first plus half the probability that A and B become empty at the same time, is 0.25 * (1 + 1 + 0.5 + 0) = 0.625.

</pre>
<p><strong>Notes: </strong></p>
<ul>
<li><code>0 &lt;= N &lt;= 10^9</code>. </li>
<li>Answers within <code>10^-6</code> of the true value will be accepted as correct.</li>
</ul>
</div></div>

### Solution