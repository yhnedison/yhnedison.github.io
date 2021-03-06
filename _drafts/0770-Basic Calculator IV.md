---
layout: post
title: 770. Basic Calculator IV
category: [Leetcode]
description: 
keywords: ['Hash Table', 'String', 'Stack', 'Leetcode', 'Hard']
---
### [770. Basic Calculator IV](https://leetcode.com/problems/basic-calculator-iv)

#### Tags: 'Hash Table', 'String', 'Stack'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an <code>expression</code> such as <code>expression = "e + 8 - a + 5"</code> and an evaluation map such as <code>{"e": 1}</code> (given in terms of <code>evalvars = ["e"]</code> and <code>evalints = [1]</code>), return a list of tokens representing the simplified expression, such as <code>["-1*a","14"]</code></p>
<ul>
<li>An expression alternates chunks and symbols, with a space separating each chunk and symbol.</li>
<li>A chunk is either an expression in parentheses, a variable, or a non-negative integer.</li>
<li>A variable is a string of lowercase letters (not including digits.) Note that variables can be multiple letters, and note that variables never have a leading coefficient or unary operator like <code>"2x"</code> or <code>"-x"</code>.</li>
</ul>
<p>Expressions are evaluated in the usual order: brackets first, then multiplication, then addition and subtraction. For example, <code>expression = "1 + 2 * 3"</code> has an answer of <code>["7"]</code>.</p>
<p>The format of the output is as follows:</p>
<ul>
<li>For each term of free variables with non-zero coefficient, we write the free variables within a term in sorted order lexicographically. For example, we would never write a term like <code>"b*a*c"</code>, only <code>"a*b*c"</code>.</li>
<li>Terms have degree equal to the number of free variables being multiplied, counting multiplicity. (For example, <code>"a*a*b*c"</code> has degree 4.) We write the largest degree terms of our answer first, breaking ties by lexicographic order ignoring the leading coefficient of the term.</li>
<li>The leading coefficient of the term is placed directly to the left with an asterisk separating it from the variables (if they exist.)  A leading coefficient of 1 is still printed.</li>
<li>An example of a well formatted answer is <code>["-2*a*a*a", "3*a*a*b", "3*b*b", "4*a", "5*c", "-6"]</code> </li>
<li>Terms (including constant terms) with coefficient 0 are not included.  For example, an expression of "0" has an output of [].</li>
</ul>
<p><strong>Examples:</strong></p>
<pre><strong>Input:</strong> expression = "e + 8 - a + 5", evalvars = ["e"], evalints = [1]
<strong>Output:</strong> ["-1*a","14"]

<strong>Input:</strong> expression = "e - 8 + temperature - pressure",
evalvars = ["e", "temperature"], evalints = [1, 12]
<strong>Output:</strong> ["-1*pressure","5"]

<strong>Input:</strong> expression = "(e + 8) * (e - 8)", evalvars = [], evalints = []
<strong>Output:</strong> ["1*e*e","-64"]

<strong>Input:</strong> expression = "7 - 7", evalvars = [], evalints = []
<strong>Output:</strong> []

<strong>Input:</strong> expression = "a * b * c + b * a * c * 4", evalvars = [], evalints = []
<strong>Output:</strong> ["5*a*b*c"]

<strong>Input:</strong> expression = "((a - b) * (b - c) + (c - a)) * ((a - b) + (b - c) * (c - a))",
evalvars = [], evalints = []
<strong>Output:</strong> ["-1*a*a*b*b","2*a*a*b*c","-1*a*a*c*c","1*a*b*b*b","-1*a*b*b*c","-1*a*b*c*c","1*a*c*c*c","-1*b*b*b*c","2*b*b*c*c","-1*b*c*c*c","2*a*a*b","-2*a*a*c","-2*a*b*b","2*a*c*c","1*b*b*b","-1*b*b*c","1*b*c*c","-1*c*c*c","-1*a*a","1*a*b","1*a*c","-1*b*c"]
</pre>
<p><strong>Note:</strong></p>
<ol>
<li><code>expression</code> will have length in range <code>[1, 250]</code>.</li>
<li><code>evalvars, evalints</code> will have equal lengths in range <code>[0, 100]</code>.</li>
</ol>
</div></div>

### Solution
