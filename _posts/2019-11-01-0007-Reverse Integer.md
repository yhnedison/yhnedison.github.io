---
layout: post
title: 7. Reverse Integer
category: [Leetcode]
description: 
keywords: ['Math', 'Leetcode', 'Easy']
---
### [7. Reverse Integer](https://leetcode.com/problems/reverse-integer)

#### Tags: 'Math'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a 32-bit signed integer, reverse digits of an integer.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> 123
<strong>Output:</strong> 321
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> -123
<strong>Output:</strong> -321
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> 120
<strong>Output:</strong> 21
</pre>
<p><strong>Note:</strong><br/>
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2<sup>31</sup>,  2<sup>31 </sup>− 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.</p>
</div></div>

### Solution
5% 5%
```java
public int reverse(int x) {
    int result = 0;
    System.out.println(Integer.MAX_VALUE);
    System.out.println(Integer.MIN_VALUE);
    System.out.println(-3 % 2); // -1
    
    while (x != 0) {
        int pop = x % 10; // pop the last digit
        x /= 10;
        if (result > Integer.MAX_VALUE/10 || (result == Integer.MAX_VALUE/10 && pop > 7)) return 0;
        if (result < Integer.MIN_VALUE/10 || (result == Integer.MIN_VALUE/10 && pop < -8)) return 0;
        result = result * 10 + pop;
    }
    
    return result;
}
```