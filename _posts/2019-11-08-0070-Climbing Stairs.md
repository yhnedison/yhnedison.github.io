---
layout: post
title: 70. Climbing Stairs
category: [Leetcode]
description: 
keywords: ['Dynamic Programming', 'Leetcode', 'Easy']
---
### [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs)

#### Tags: 'Dynamic Programming'

<div class="content__u3I1 question-content__JfgR"><div><p>You are climbing a stair case. It takes <em>n</em> steps to reach to the top.</p>
<p>Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?</p>
<p><strong>Note:</strong> Given <em>n</em> will be a positive integer.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
</pre>
</div></div>

### Solution
DP的启蒙题(拥有非常明显的重叠子结构) 


方法1： Recursion Top-Down, 超时 O(2^n) time O(n)space(stack size is n)
```java
public int climbStairs(int n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    
    return climbStairs(n-1) + climbStairs(n-2);
}
```

方法2： Recursive Top-Down with memo
```java
public int climbStairs(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;
    
    int[] memo = new int[n+1];
    for (int i = 0; i < memo.length; i++) memo[i] = -1;
    memo[0] = 0;
    memo[1] = 1;
    memo[2] = 2;

    return dp(n, memo);
}

private int dp(int n, int[] memo) {
    if (memo[n] == -1) {
        memo[n] = dp(n-1, memo) + dp(n-2, memo);
    } 
    return memo[n];
}
```
方法3：Bottom-Up with memo
```java
public int climbStairs(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;

    int[] memo = new int[n+1];
    for (int i = 0; i < memo.length; i++) memo[i] = 0;
    memo[0] = 0;
    memo[1] = 1;
    memo[2] = 2;
    
    for (int i = 3; i <= n; i++) {
        memo[i] = memo[i-1] + memo[i-2];
    }
    return memo[n];
}
```

方法3：Botton-Up witn constant space
```java
public int climbStairs(int n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    
    int a = 1, b = 2;
    for (int i = 3; i <= n; i++) {
        int temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
```
