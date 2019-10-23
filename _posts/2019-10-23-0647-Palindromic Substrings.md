---
layout: post
title: 647. Palindromic Substrings
category: [Leetcode]
description: 
keywords: ['String', 'Dynamic Programming', 'Leetcode', 'Medium']
---
### [647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings)

#### Tags: 'String', 'Dynamic Programming'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string, your task is to count how many palindromic substrings in this string.</p>
<p>The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.</p>
<p><b>Example 1:</b></p>
<pre><b>Input:</b> "abc"
<b>Output:</b> 3
<b>Explanation:</b> Three palindromic strings: "a", "b", "c".
</pre>
<p> </p>
<p><b>Example 2:</b></p>
<pre><b>Input:</b> "aaa"
<b>Output:</b> 6
<b>Explanation:</b> Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
</pre>
<p> </p>
<p><b>Note:</b></p>
<ol>
<li>The input string length won't exceed 1000.</li>
</ol>
<p> </p></div></div>

### Solution 1 DP
$O(n^2)$ time $O(n^2)$ space 23% 45%

Refer to 5.Longest Parlindromic Substring
```java
public int countSubstrings(String s) {
    if (s == null) return 0;
    
    int n = s.length(), count = 0;
    boolean[][] dp = new boolean[n][n];
    for (int i = n - 1; i >= 0; i--) {
        for (int j = i; j < n; j++) {
            if (j - i <= 2) {
                dp[i][j] = s.charAt(i) == s.charAt(j);
            } else {
                dp[i][j] = s.charAt(i) == s.charAt(j) && dp[i+1][j-1];
            }

            if (dp[i][j]) count++;
        }
    }
    return count;
}
```

### Solution 2 Expand around center
```java
public int countSubstrings(String s) {
    int count = 0;
    for(int i=0; i<s.length(); i++){
        count += extractPalindrome(s,i,i);//odd length
        count + =extractPalindrome(s,i,i+1);//even length
    }
    return count;
}
public int extractPalindrome(String s, int left, int right){
    int count=0;
    while(left >= 0 && right < s.length() && (s.charAt(left) == s.charAt(right))){
        left--;
        right++;
        count++;
    }
    return count;
}
```