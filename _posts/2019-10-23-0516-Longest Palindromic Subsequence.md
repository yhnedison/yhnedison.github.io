---
layout: post
title: 516. Longest Palindromic Subsequence
category: [Leetcode]
description: 
keywords: ['Dynamic Programming', 'String', 'Leetcode', 'Medium']
---
### [516. Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence)

#### Tags: 'Dynamic Programming'

<div class="content__u3I1 question-content__JfgR"><div><p>
Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.
</p>
<p><b>Example 1:</b><br/>
Input: 
</p><pre>"bbbab"
</pre>
Output: 
<pre>4
</pre>
One possible longest palindromic subsequence is "bbbb".
<p></p>
<p><b>Example 2:</b><br/>
Input:
</p><pre>"cbbd"
</pre>
Output:
<pre>2
</pre>
One possible longest palindromic subsequence is "bb".
<p></p></div></div>

### Solution Iterative
$O(n^2)$ time $O(n^2)$ space

`dp[i][j]`: the longest palindromic subsequence's length of `substring(i, j)` where `i`, `j` represent left, right indexes in the string

State transition:
    
if `s.charAt(i) == s.charAt(j)` `dp[i][j] = dp[i+1][j-1] + 2`

otherwise `dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])`

Initialization: `dp[i][i] = 1`
```java
public int longestPalindromeSubseq(String s) {
    int[][] dp = new int[s.length()][s.length()];
    
    for (int i = s.length() - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (int j = i + 1; j < s.length(); j++) {
            if (s.charAt(i) == s.charAt(j)) {
                dp[i][j] = dp[i+1][j-1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
            }
        }
    }
    return dp[0][s.length() - 1];
}
```
### Solution recursive
```java
public int longestPalindromeSubseq(String s) {
    return helper(s, 0, s.length()-1, new Integer[s.length()][s.length()]);
}

private int helper(String s, int i, int j, Integer[][] memo) {
    if (memo[i][j] != null) return memo[i][j];
    if (i > j) return 0;
    if (i == j) return 1;
    
    if (s.charAt(i) == s.charAt(j)) {
        memo[i][j] = helper(s, i+1, j-1, memo) + 2;
    } else {
        memo[i][j] = Math.max(helper(s, i+1, j, memo), helper(s, i, j-1, memo));
    }
    return memo[i][j];
}
```