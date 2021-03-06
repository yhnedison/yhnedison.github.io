---
layout: post
title: 771. Jewels and Stones
category: [Leetcode]
description: 
keywords: ['Hash Table', 'Leetcode', 'Easy']
---
### [771. Jewels and Stones](https://leetcode.com/problems/jewels-and-stones)

#### Tags: 'Hash Table'

<div class="content__u3I1 question-content__JfgR"><div><p>You're given strings <code>J</code> representing the types of stones that are jewels, and <code>S</code> representing the stones you have.  Each character in <code>S</code> is a type of stone you have.  You want to know how many of the stones you have are also jewels.</p>
<p>The letters in <code>J</code> are guaranteed distinct, and all characters in <code>J</code> and <code>S</code> are letters. Letters are case sensitive, so <code>"a"</code> is considered a different type of stone from <code>"A"</code>.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> J = "aA", S = "aAAbbbb"
<strong>Output:</strong> 3
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> J = "z", S = "ZZ"
<strong>Output:</strong> 0
</pre>
<p><strong>Note:</strong></p>
<ul>
<li><code>S</code> and <code>J</code> will consist of letters and have length at most 50.</li>
<li>The characters in <code>J</code> are distinct.</li>
</ul>
</div></div>

### Solution
```java
public int numJewelsInStones(String J, String S) {
    Set<Character> set = new HashSet<>();
    for (char c : J.toCharArray()) {
        set.add(c);
    }
    
    int sum = 0;
    for (char c : S.toCharArray()) {
        if (set.contains(c)) sum++;
    }
    return sum;
}
```