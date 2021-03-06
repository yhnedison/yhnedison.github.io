---
layout: post
title: 190. Reverse Bits
category: [Leetcode]
description: 
keywords: ['Bit Manipulation', 'Leetcode', 'Easy']
---
### [190. Reverse Bits](https://leetcode.com/problems/reverse-bits)

#### Tags: 'Bit Manipulation'

<div class="content__u3I1 question-content__JfgR"><div><p>Reverse bits of a given 32 bits unsigned integer.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> 00000010100101000001111010011100
<strong>Output:</strong> 00111001011110000010100101000000
<strong>Explanation: </strong>The input binary string <b>00000010100101000001111010011100</b> represents the unsigned integer 43261596, so return 964176192 which its binary representation is <b>00111001011110000010100101000000</b>.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> 11111111111111111111111111111101
<strong>Output:</strong> 10111111111111111111111111111111
<strong>Explanation: </strong>The input binary string <strong>11111111111111111111111111111101</strong> represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is <strong>10101111110010110010011101101001</strong>.</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ul>
<li>Note that in some languages such as Java, there is no unsigned integer type. In this case, both input and output will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.</li>
<li>In Java, the compiler represents the signed integers using <a href="https://en.wikipedia.org/wiki/Two%27s_complement" target="_blank">2's complement notation</a>. Therefore, in <strong>Example 2</strong> above the input represents the signed integer <code>-3</code> and the output represents the signed integer <code>-1073741825</code>.</li>
</ul>
<p> </p>
<p><b>Follow up</b>:</p>
<p>If this function is called many times, how would you optimize it?</p>
</div></div>

### Solution
