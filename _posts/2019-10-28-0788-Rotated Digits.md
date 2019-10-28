---
layout: post
title: 788. Rotated Digits
category: [Leetcode]
description: 
keywords: ['String', 'Leetcode', 'Easy', 'Dynamic Programming']
---
### [788. Rotated Digits](https://leetcode.com/problems/rotated-digits)

#### Tags: 'String', 'Dynamic Programming'

<div class="content__u3I1 question-content__JfgR"><div><p>X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.  Each digit must be rotated - we cannot choose to leave it alone.</p>
<p>A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.</p>
<p>Now given a positive number <code>N</code>, how many numbers X from <code>1</code> to <code>N</code> are good?</p>
<pre><strong>Example:</strong>
<strong>Input:</strong> 10
<strong>Output:</strong> 4
<strong>Explanation:</strong> 
There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.
</pre>
<p><strong>Note:</strong></p>
<ul>
<li>N  will be in range <code>[1, 10000]</code>.</li>
</ul>
</div></div>

### Solution using Dynamic Programming
O(n) time, O(n) space
```java
public int rotatedDigits(int N) {
    /*
    dp[i] = x
        x = 0: invalid
        x = 1: same;
        x = 2: valid
    State Transition:
        a = num/10 previous number
        b = num%10 last digit to append
        if a or b = 0, reuslt = 0
        if both a and b = 1, result = 1
        if at least one = 2, result = 2
    */ 
    
    int[] dp = new int[N + 1]; // default 0
    int count = 0;
    for (int i = 0; i <= N; i++) {
        if (i < 10) {
            if (i == 0 || i == 1 || i == 8) {
                dp[i] = 1;
            } else if (i == 6 || i == 9 || i ==2 || i == 5) {
                dp[i] = 2;
                count++;
            }
        } else {
            int a = dp[i/10], b = dp[i%10];
            if (a == 0 || b == 0) {
                dp[i] = 0;
            } else if (a == 1 && b == 1) {
                dp[i] = 1;
            } else if (a == 2 || b == 2) {
                dp[i] = 2;
                count++;
            }
        }
    }
    return count;
}
```