---
layout: post
title: 1134. Armstrong Number
category: [Leetcode]
description: 
keywords: ['Math', 'Leetcode', 'Easy']
---
### [1134. Armstrong Number](https://leetcode.com/problems/armstrong-number)

#### Tags: 'Math'

<div class="content__u3I1 question-content__JfgR"><div><p>The k-digit number <code>N</code> is an Armstrong number if and only if the k-th power of each digit sums to N.</p>
<p>Given a positive integer <code>N</code>, return true if and only if it is an Armstrong number.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">153</span>
<strong>Output: </strong><span id="example-output-1">true</span>
<strong>Explanation: </strong>
153 is a 3-digit number, and 153 = 1^3 + 5^3 + 3^3.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong><span id="example-input-2-1">123</span>
<strong>Output: </strong><span id="example-output-2">false</span>
<strong>Explanation: </strong>
123 is a 3-digit number, and 123 != 1^3 + 2^3 + 3^3 = 36.
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li><code>1 &lt;= N &lt;= 10^8</code></li>
</ol>
</div></div>

### Solution
```java
// To traverse integer, convert to string
public boolean isArmstrong(int N) {
    String str = String.valueOf(N);
    int n = str.length();
    int curr = 0;
    for(char c : str.toCharArray()) {
        curr += (int) Math.pow(c-'0', n);
    }
    return curr == N;
}

// normal mathematical way
public boolean isArmstrong(int N) {
    int sum = 0;
    int curr = N;
    int l = String.valueOf(curr).length();
    while (curr != 0) {
        int quotient = curr / 10;
        int remainder = curr % 10;
        sum += Math.pow(remainder, l);
        curr = quotient;
    }
    return N == sum;
}
```

