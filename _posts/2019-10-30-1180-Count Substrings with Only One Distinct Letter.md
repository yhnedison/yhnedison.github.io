---
layout: post
title: 1180. Count Substrings with Only One Distinct Letter
category: [Leetcode]
description: 
keywords: ['Math', 'String', 'Leetcode', 'Easy']
---
### [1180. Count Substrings with Only One Distinct Letter](https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter)

#### Tags: 'Math', 'String'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>S</code>, return the number of substrings that have only <strong>one distinct</strong> letter.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> S = "aaaba"
<strong>Output:</strong> 8
<strong>Explanation: </strong>The substrings with one distinct letter are "aaa", "aa", "a", "b".
"aaa" occurs 1 time.
"aa" occurs 2 times.
"a" occurs 4 times.
"b" occurs 1 time.
So the answer is 1 + 2 + 4 + 1 = 8.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> S = "aaaaaaaaaa"
<strong>Output:</strong> 55
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= S.length &lt;= 1000</code></li>
<li><code>S[i]</code> consists of only lowercase English letters.</li>
</ul>
</div></div>

### Solution
Separate by continuous substring, with lenght a1, a2, a3...

$result = f(a1) + f(a2) + f(a3) +...$ where $f(x) = x(x-1)/2$
```java
public int countLetters(String S) {
    if (S == null || S.length() == 0) return 0;
    int count = 1;
    int sum = 0;
    for (int i = 0; i < S.length() - 1; i++) {
        if (S.charAt(i) != S.charAt(i+1)) {
            sum += count * (count + 1) / 2;
            count = 1;
        } else { 
            count++;
        }
    }
    sum += count * (count + 1) / 2; // add last substring
    return sum;
}
```