---
layout: post
title: 3. Longest Substring Without Repeating Characters
category: [Leetcode]
description: 
keywords: ['Hash Table', 'Two Pointers', 'String', 'Sliding Window', 'Leetcode', 'Medium']
---
### [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)

#### Tags: 'Hash Table', 'Two Pointers', 'String', 'Sliding Window'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string, find the length of the <b>longest substring</b> without repeating characters.</p>
<div>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">"abcabcbb"</span>
<strong>Output: </strong><span id="example-output-1">3 
<strong>Explanation:</strong></span> The answer is <code>"abc"</code>, with the length of 3. 
</pre>
<div>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong><span id="example-input-2-1">"bbbbb"</span>
<strong>Output: </strong><span id="example-output-2">1
</span><span id="example-output-1"><strong>Explanation: </strong>T</span>he answer is <code>"b"</code>, with the length of 1.
</pre>
<div>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong><span id="example-input-3-1">"pwwkew"</span>
<strong>Output: </strong><span id="example-output-3">3
</span><span id="example-output-1"><strong>Explanation: </strong></span>The answer is <code>"wke"</code>, with the length of 3. 
             Note that the answer must be a <b>substring</b>, <code>"pwke"</code> is a <i>subsequence</i> and not a substring.
</pre>
</div>
</div>
</div>
</div></div>

### Solution 1 Sliding Window
```java
public int lengthOfLongestSubstring(String s) {
    int n = s.length();
    Set<Character> set = new HashSet<>();
    int result = 0, i = 0, j = 0;
    while (i < n && j < n) {
        if (!set.contains(s.charAt(j))) {
            set.add(s.charAt(j));
            j++;
            result = Math.max(result, j - i);
        } else {
            set.remove(s.charAt(i));
            i++;
        }
    }
    return result;
}
```

```java
// Optimized Sliding Window using HashMap
public int lengthOfLongestSubstring(String s) {
    int n = s.length(), ans = 0;
    Map<Character, Integer> map = new HashMap<>(); // current index of character
    // try to extend the range [i, j]
    for (int j = 0, i = 0; j < n; j++) {
        if (map.containsKey(s.charAt(j))) {
            i = Math.max(map.get(s.charAt(j)), i);
        }
        ans = Math.max(ans, j - i + 1);
        map.put(s.charAt(j), j + 1);
    }
    return ans;
}
```