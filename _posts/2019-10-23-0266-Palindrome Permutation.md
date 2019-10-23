---
layout: post
title: 266. Palindrome Permutation
category: [Leetcode]
description: 
keywords: ['Hash Table', 'Leetcode', 'Easy']
---
### [266. Palindrome Permutation](https://leetcode.com/problems/palindrome-permutation)

#### Tags: 'Hash Table'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string, determine if a permutation of the string could form a palindrome.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> <code>"code"</code>
<strong>Output:</strong> false</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> <code>"aab"</code>
<strong>Output:</strong> true</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> <code>"carerac"</code>
<strong>Output:</strong> true</pre>
</div></div>

### Solution
65% 100%
```java
public boolean canPermutePalindrome(String s) {
    // have at most 1 single char
    Map<Character, Integer> map = new HashMap<>();
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        if (map.containsKey(c)) {
            map.put(c, map.get(c) + 1);
        } else {
            map.put(c, 1);
        }
    }
    
    int count = 0;
    for (Integer i: map.values()) {
        if (i % 2 != 0) {
            count++;
        }
    }
    return count <= 1;
}
```