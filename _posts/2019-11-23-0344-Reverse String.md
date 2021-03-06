---
layout: post
title: 344. Reverse String
category: [Leetcode]
description: 
keywords: ['Two Pointers', 'String', 'Leetcode', 'Easy']
---
### [344. Reverse String](https://leetcode.com/problems/reverse-string)

#### Tags: 'Two Pointers', 'String'

<div class="content__u3I1 question-content__JfgR"><div><p>Write a function that reverses a string. The input string is given as an array of characters <code>char[]</code>.</p>
<p>Do not allocate extra space for another array, you must do this by <strong>modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a></strong> with O(1) extra memory.</p>
<p>You may assume all the characters consist of <a href="https://en.wikipedia.org/wiki/ASCII#Printable_characters" target="_blank">printable ascii characters</a>.</p>
<p> </p>
<div>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">["h","e","l","l","o"]</span>
<strong>Output: </strong><span id="example-output-1">["o","l","l","e","h"]</span>
</pre>
<div>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong><span id="example-input-2-1">["H","a","n","n","a","h"]</span>
<strong>Output: </strong><span id="example-output-2">["h","a","n","n","a","H"]</span>
</pre>
</div>
</div>
</div></div>

### Solution
```java
public void reverseString(char[] s) {
    int i = 0, j = s.length - 1;
    while (i < j) {
        char temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
}
```