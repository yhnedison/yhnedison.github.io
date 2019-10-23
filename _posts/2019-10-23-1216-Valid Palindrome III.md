---
layout: post
title: 1216. Valid Palindrome III
category: [Leetcode]
description: 
keywords: ['String', 'Dynamic Programming', 'Leetcode', 'Hard']
---
### [1216. Valid Palindrome III](https://leetcode.com/problems/valid-palindrome-iii)

#### Tags: 'String', 'Dynamic Programming'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>s</code> and an integer <code>k</code>, find out if the given string is a <em>K-Palindrome</em> or not.</p>
<p>A string is K-Palindrome if it can be transformed into a palindrome by removing at most <code>k</code> characters from it.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "abcdeca", k = 2
<strong>Output:</strong> true
<strong>Explanation: </strong>Remove 'b' and 'e' characters.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 1000</code></li>
<li><code>s</code> has only lowercase English letters.</li>
<li><code>1 &lt;= k &lt;= s.length</code></li>
</ul>
</div></div>

### Solution
Refer to [516. Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)

if `k >= s.length() - lps` then true

```java
public boolean isValidPalindrome(String s, int k) {
    int lps = longestPalindromeSubseq(s);
    if (k >= s.length() - lps) return true;
    else return false;
}

private int longestPalindromeSubseq(String s) {
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