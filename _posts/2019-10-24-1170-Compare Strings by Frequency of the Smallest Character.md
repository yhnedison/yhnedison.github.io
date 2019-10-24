---
layout: post
title: 1170. Compare Strings by Frequency of the Smallest Character
category: [Leetcode]
description: 
keywords: ['Array', 'String', 'Leetcode', 'Easy', 'Binary Search']
---
### [1170. Compare Strings by Frequency of the Smallest Character](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character)

#### Tags: 'Array', 'String', 'Binary Search'

<div class="content__u3I1 question-content__JfgR"><div><p>Let's define a function <code>f(s)</code> over a non-empty string <code>s</code>, which calculates the frequency of the smallest character in <code>s</code>. For example, if <code>s = "dcce"</code> then <code>f(s) = 2</code> because the smallest character is <code>"c"</code> and its frequency is 2.</p>
<p>Now, given string arrays <code>queries</code> and <code>words</code>, return an integer array <code>answer</code>, where each <code>answer[i]</code> is the number of words such that <code>f(queries[i])</code> &lt; <code>f(W)</code>, where <code>W</code> is a word in <code>words</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> queries = ["cbd"], words = ["zaaaz"]
<strong>Output:</strong> [1]
<strong>Explanation:</strong> On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") &lt; f("zaaaz").
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> On the first query only f("bbb") &lt; f("aaaa"). On the second query both f("aaa") and f("aaaa") are both &gt; f("cc").
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= queries.length &lt;= 2000</code></li>
<li><code>1 &lt;= words.length &lt;= 2000</code></li>
<li><code>1 &lt;= queries[i].length, words[i].length &lt;= 10</code></li>
<li><code>queries[i][j]</code>, <code>words[i][j]</code> are English lowercase letters.</li>
</ul>
</div></div>

### Solution
63% 100%
``java
public int[] numSmallerByFrequency(String[] queries, String[] words) {
    int[] q = new int[queries.length];
    int[] w = new int[words.length];
    
    // populate q and w
    for (int i = 0; i < queries.length; i++) {
        q[i] = func(queries[i]);
    }
    
    for (int j = 0; j < words.length; j++) {
        w[j] = func(words[j]);
    }
    Arrays.sort(w);
    
    // Binary search to find first element > 
    int[] result = new int[queries.length];
    for (int i = 0; i < q.length; i++) {
        int l = 0, r = w.length - 1;
        while (l <= r) {
            int m = l + (r - l) / 2;
            if (w[m] <= q[i]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        result[i] = w.length - l;
    }
    return result;
}

private int func(String s) {
    if (s == null || s.length() == 0) return -1;
    char min = Character.MAX_VALUE;
    int count = 1;
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        if (c < min) {
            min = c;
            count = 1;
        } else if (c == min) {
            count++;
        }
    }
    return count;
}
```