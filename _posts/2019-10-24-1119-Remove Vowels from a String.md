---
layout: post
title: 1119. Remove Vowels from a String
category: [Leetcode]
description: 
keywords: ['String', 'Leetcode', 'Easy']
---
### [1119. Remove Vowels from a String](https://leetcode.com/problems/remove-vowels-from-a-string)

#### Tags: 'String'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>S</code>, remove the vowels <code>'a'</code>, <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, and <code>'u'</code> from it, and return the new string.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">"leetcodeisacommunityforcoders"</span>
<strong>Output: </strong><span id="example-output-1">"ltcdscmmntyfrcdrs"</span>
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong><span id="example-input-2-1">"aeiou"</span>
<strong>Output: </strong><span id="example-output-2">""</span>
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li><code>S</code> consists of lowercase English letters only.</li>
<li><code>1 &lt;= S.length &lt;= 1000</code></li>
</ol>
</div></div>

### Solution
```java
public String removeVowels(String S) {
    Set<Character> set = new HashSet<>();
    set.add('a');
    set.add('e');
    set.add('i');
    set.add('o');
    set.add('u');
    set.add('A');
    set.add('E');
    set.add('I');
    set.add('O');
    set.add('U');
    
    StringBuilder sb = new StringBuilder();
    for (char c: S.toCharArray()) {
        if (!set.contains(c)) {
            sb.append(c);
        }
    }
    return sb.toString();
}
```