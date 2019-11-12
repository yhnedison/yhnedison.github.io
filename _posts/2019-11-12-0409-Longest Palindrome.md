---
layout: post
title: 409. Longest Palindrome
category: [Leetcode]
description: 
keywords: ['Hash Table', 'Leetcode', 'Easy']
---
### [409. Longest Palindrome](https://leetcode.com/problems/longest-palindrome)

#### Tags: 'Hash Table'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.</p>
<p>This is case sensitive, for example <code>"Aa"</code> is not considered a palindrome here.</p>
<p><b>Note:</b><br/>
Assume the length of given string will not exceed 1,010.
</p>
<p><b>Example: </b>
</p><pre>Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
</pre>
<p></p></div></div>

### Solution
需要数出每个char的count 
* Even count: result += count
* Odd count: result += count-1
最后，如果有任何Odd count， result++
```java
public int longestPalindrome(String s) {
    // even number: count += curr
    // odd number: count += curr-1
    // Need to know count of each character
    Map<Character, Integer> map = new HashMap<>();
    for (Character c: s.toCharArray()) {
        map.put(c, map.getOrDefault(c, 0) + 1);
    }
    
    int result = 0;
    int countOdd = 0; // allow at most 1 single char
    for (Character c: map.keySet()) {
        int count = map.get(c);
        if (count % 2 == 0) { // even
            result += count;
        }  else if (count % 2 == 1) {// odd
            result += count - 1;
            countOdd++;
        }
    }
    if (countOdd > 0) result++;
    
    return result;
}
```