---
layout: post
title: 125. Valid Palindrome
category: [Leetcode]
description: 
keywords: ['Two Pointers', 'String', 'Leetcode', 'Easy']
---
### [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome)

#### Tags: 'Two Pointers', 'String'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.</p>
<p><strong>Note:</strong> For the purpose of this problem, we define empty string as valid palindrome.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> "A man, a plan, a canal: Panama"
<strong>Output:</strong> true
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> "race a car"
<strong>Output:</strong> false
</pre>
</div></div>

### Solution
O(n) time O(1) space 82% 96%
```java
// BETTER
public boolean isPalindrome(String s) {
    if (s == null || s.length() <= 1) {
        return true;
    }
    int i = 0, j = s.length() - 1;
    while (i < j) {
        if (!Character.isLetterOrDigit(s.charAt(i))) {
            i++;
        } else if (!Character.isLetterOrDigit(s.charAt(j))) {
            j--;
        } else {
            if (Character.toLowerCase(s.charAt(i)) != Character.toLowerCase(s.charAt(j))) {
                return false;
            }
            i++;
            j--;
        }
    }
    
    return true;
}
```
```java
public boolean isPalindrome(String s) {
    if (s == null || s.length() <= 1) {
        return true;
    }
    
    for (int i = 0, j = s.length() - 1; i < j; i++, j--) {
        while (!Character.isLetterOrDigit(s.charAt(i)) && i < j) {
            i++;
        }
        while (!Character.isLetterOrDigit(s.charAt(j)) && j > i) {
            j--;
        }
        
        if (Character.toLowerCase(s.charAt(i)) != Character.toLowerCase(s.charAt(j))) {
            return false;
        }
    }
    
    return true;
}
```