---
layout: post
title: 60. Permutation Sequence
category: [Leetcode]
description: 
keywords: ['Math', 'Backtracking', 'Leetcode', 'Medium']
---
### [60. Permutation Sequence](https://leetcode.com/problems/permutation-sequence)

#### Tags: 'Math', 'Backtracking'

<div class="content__u3I1 question-content__JfgR"><div><p>The set <code>[1,2,3,...,<em>n</em>]</code> contains a total of <em>n</em>! unique permutations.</p>
<p>By listing and labeling all of the permutations in order, we get the following sequence for <em>n</em> = 3:</p>
<ol>
<li><code>"123"</code></li>
<li><code>"132"</code></li>
<li><code>"213"</code></li>
<li><code>"231"</code></li>
<li><code>"312"</code></li>
<li><code>"321"</code></li>
</ol>
<p>Given <em>n</em> and <em>k</em>, return the <em>k</em><sup>th</sup> permutation sequence.</p>
<p><strong>Note:</strong></p>
<ul>
<li>Given <em>n</em> will be between 1 and 9 inclusive.</li>
<li>Given <em>k</em> will be between 1 and <em>n</em>! inclusive.</li>
</ul>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 3, k = 3
<strong>Output:</strong> "213"
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 4, k = 9
<strong>Output:</strong> "2314"
</pre>
</div></div>

### Solution
方法1： 暴力，next permutation 执行k次， $O(nk) O()$

方法2：“康托算法”  [leetcode 解释](https://leetcode.com/problems/permutation-sequence/discuss/22507/%22Explain-like-I'm-five%22-Java-Solution-in-O(n))


注意 k = k-1 来处理 $k\%(n-1)! = 0$ 的情况
```java
public String getPermutation(int n, int k) {
    StringBuilder sb = new StringBuilder();
    List<Integer> nums = new ArrayList<>(); // for number loop up
    int factorial = 1;
    for (int i = 1; i <=n; i++) {
        factorial = factorial * i;
        nums.add(i);
    }
    
    k = k-1; // starting index of 0
    for (int i = 0; i < n; i++) {
        factorial = factorial/(n - i); // current grouping size
        int index = k / factorial;     // k / factorial
        sb.append(nums.remove(index)); // remove and append to sb
        k = k - index * factorial; // residual, which is k % factorial
    }
    
    return sb.toString();
}
```