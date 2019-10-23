---
layout: post
title: 5. Longest Palindromic Substring
category: [Leetcode]
description: 
keywords: ['String', 'Dynamic Programming', 'Leetcode', 'Medium']
---
### [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring)

#### Tags: 'String', 'Dynamic Programming'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <strong>s</strong>, find the longest palindromic substring in <strong>s</strong>. You may assume that the maximum length of <strong>s</strong> is 1000.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> "babad"
<strong>Output:</strong> "bab"
<strong>Note:</strong> "aba" is also a valid answer.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> "cbbd"
<strong>Output:</strong> "bb"
</pre>
</div></div>

### Solution 1 DP
$O(n^2)$ time $O(n^2)$ space

只考虑图的右上半， 所以`i`递减，`j`递加
- Memorization: `dp[i][j]` -> if `substring(1, j)` is parlindromic
- State transition: 
  - if `j - i <= 2` then 

    ```dp[i][j] = s.charAt(i) == s.charAt(j)```

  - else 

    ```dp[i][j] = (s.charAt(i) == s.charAt(j)) && dp[i + 1][j - 1]```

```java
public String longestPalindrome(String s) {
    String result = "";
    boolean[][] dp = new boolean[s.length()][s.length()];
    
    for (int i = s.length() - 1; i >= 0; i--) {
        for (int j = i; j < s.length(); j++) {
            if (j - i <= 2) { // 
                dp[i][j] = (s.charAt(i) == s.charAt(j));
            } else {
                dp[i][j] = (s.charAt(i) == s.charAt(j)) && dp[i + 1][j - 1];
            }
            
            if (dp[i][j] && (result == null || j - i + 1 > result.length())) {
                result = s.substring(i, j + 1);
            }
        }
    }
    return result;
}
```

### Solution 2 Expand Around Center
$O(n^2)$ time $O(1)$ space 87% 100%
```java
public String longestPalindrome(String s) {
    if (s == null || s.length() < 1) return "";
    int start = 0, end = 0;
    for (int i = 0; i < s.length(); i++) {
        int len1 = expandAroundCenter(s, i, i);
        int len2 = expandAroundCenter(s, i, i + 1);
        int len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return s.substring(start, end + 1);
}

private int expandAroundCenter(String s, int left, int right) {
    int L = left, R = right;
    while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {
        L--;
        R++;
    }
    return R - L - 1;
}
```