---
layout: post
title: 14. Longest Common Prefix
category: [Leetcode]
description: 
keywords: ['String', 'Leetcode', 'Easy']
---
### [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix)

#### Tags: 'String'

<div class="content__u3I1 question-content__JfgR"><div><p>Write a function to find the longest common prefix string amongst an array of strings.</p>
<p>If there is no common prefix, return an empty string <code>""</code>.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong>["flower","flow","flight"]
<strong>Output:</strong> "fl"
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong>["dog","racecar","car"]
<strong>Output:</strong> ""
<strong>Explanation:</strong> There is no common prefix among the input strings.
</pre>
<p><strong>Note:</strong></p>
<p>All given inputs are in lowercase letters <code>a-z</code>.</p>
</div></div>

### Solution
方法1：Vertical Scanning. Naive solution. 对每个index i 检查所有string，直到i超过某个string长度

`O(M*N) O(1) 74% 80%`

```java
public String longestCommonPrefix(String[] strs) {
    if (strs == null || strs.length == 0) return "";
    for (int i = 0; i < strs[0].length(); i++) {
        char c = strs[0].charAt(i);
        for (int j = 1; j < strs.length; j++) {
            if (i >= strs[j].length() || strs[j].charAt(i) != c) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
}
```

方法2: Horizontal Scanning

`LCP(S1...Sn) = LCP...(LCP(LCP(S1, S2), S3)...Sn)`

`O(M*N) O(1)`

```java
public String longestCommonPrefix(String[] strs) {
    if (strs == null || strs.length == 0) return "";
    String prefix = strs[0];
    for (int i = 1; i < strs.length; i++) {
        // keep shrinking prefix until match
        // if shrink to 0, return
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length() - 1);
            if (prefix.length() == 0) {
                return "";
            }
        }
    }
    return prefix;
}
```

方法3： binary search

方法4： divide and conqur

