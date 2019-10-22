---
layout: post
title: 680. Valid Palindrome II
category: [Leetcode]
description: 
keywords: ['String', 'Leetcode', 'Easy', 'Greedy']
---
### [680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii)

#### Tags: 'String'

<div class="content__u3I1 question-content__JfgR"><div><p>
Given a non-empty string <code>s</code>, you may delete <b>at most</b> one character.  Judge whether you can make it a palindrome.
</p>
<p><b>Example 1:</b><br/>
</p><pre><b>Input:</b> "aba"
<b>Output:</b> True
</pre>
<p></p>
<p><b>Example 2:</b><br/>
</p><pre><b>Input:</b> "abca"
<b>Output:</b> True
<b>Explanation:</b> You could delete the character 'c'.
</pre>
<p></p>
<p><b>Note:</b><br/>
</p><ol>
<li>The string will only contain lowercase characters a-z.
The maximum length of the string is 50000.</li>
</ol>
<p></p></div></div>

### Solution
Gr
```java
public boolean validPalindrome(String s) {
    for (int i = 0; i < s.length() / 2; i++) {
        int j = s.length() - 1 - i;
        if (s.charAt(i) != s.charAt(j)) {
            return (isPalindrome(s, i+1, j) ||
                    isPalindrome(s, i, j-1));
        }
    }
    return true;
}

private boolean isPalindrome(String s, int i, int j) {
    for (int k = i; k <= i + (j - i)/2; k++) {
        if (s.charAt(k) != s.charAt(j - k + i)) return false;
    }
    return true;
}
```
