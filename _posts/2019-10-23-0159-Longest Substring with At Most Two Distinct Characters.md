---
layout: post
title: 159. Longest Substring with At Most Two Distinct Characters
category: [Leetcode]
description: 
keywords: ['Hash Table', 'Two Pointers', 'String', 'Sliding Window', 'Leetcode', 'Hard']
---
### [159. Longest Substring with At Most Two Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters)

#### Tags: 'Hash Table', 'Two Pointers', 'String', 'Sliding Window'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <strong><em>s</em></strong> , find the length of the longest substring <strong><em>t  </em></strong>that contains <strong>at most </strong>2 distinct characters.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> "eceba"
<strong>Output: </strong>3
<strong>Explanation: <em>t</em></strong><em> </em>is "ece" which its length is 3.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> "ccaabbb"
<strong>Output: </strong>5
<strong>Explanation: <em>t</em></strong><em> </em>is "aabbb" which its length is 5.
</pre></div></div>

### Solution
Refer to 3. Longest Substring Without Repeating Characters
```java
public int lengthOfLongestSubstringTwoDistinct(String s) {
    int n = s.length();
    if (n < 3) return n;
    
    int left = 0;
    int right = 0;
    // hashmap character -> its rightmost position 
    Map<Character, Integer> map = new HashMap<>();
    int max_len = 2;
    
    while (right < n) {

        map.put(s.charAt(right), right);
        right++;

        
        // then shrink left
        if (map.size() == 3) {
            int del_idx = Collections.min(map.values());
            map.remove(s.charAt(del_idx));
            left = del_idx + 1;
        }
        
        max_len = Math.max(max_len, right - left);
    }
    return max_len;
}
```