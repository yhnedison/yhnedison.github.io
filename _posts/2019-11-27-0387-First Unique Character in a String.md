---
layout: post
title: 387. First Unique Character in a String
category: [Leetcode]
description: 
keywords: ['Hash Table', 'String', 'Leetcode', 'Easy']
---
### [387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string)

#### Tags: 'Hash Table', 'String'

<div class="content__u3I1 question-content__JfgR"><div><p>
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
</p>
<p><b>Examples:</b>
</p><pre>s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
</pre>
<p></p>
<p>
<b>Note:</b> You may assume the string contain only lowercase letters.
</p></div></div>

### Solution
方法1： 线性扫描，Naive $O(n) time O(1) space$
```java
public int firstUniqChar(String s) {
    Map<Character, Integer> map = new HashMap<>();
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        if (!map.containsKey(c)) {
            map.put(c, i); // mark index
        } else {
            map.put(c, -1);// repeat, mark as -1
        }
    }
    
    // find the smallest index >= 0
    int min = Integer.MAX_VALUE;
    for (Integer x: map.values()) {
        if (x >= 0 && x < min) {
            min = x;
        }
    }
    return min == Integer.MAX_VALUE ? -1 : min;
}
```