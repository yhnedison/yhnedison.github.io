---
layout: post
category: Leetcode
description: 
keywords: ['Dynamic Programming', 'Tree', 'Leetcode', 'Medium']
---
### [96. Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees)

#### Tags: 'Dynamic Programming', 'Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>Given <em>n</em>, how many structurally unique <strong>BST's</strong> (binary search trees) that store values 1 ... <em>n</em>?</p>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong> 3
<strong>Output:</strong> 5
<strong>Explanation:
</strong>Given <em>n</em> = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
</pre>
</div></div>

### Solution
```java
// DP
// Suppose f(n) = counts for n 
// f(n) = f(0)*f(n-1) + f(1)*f(n-2) + ... + f(n-2)*f(1) + f(n-1)*f(0)
class Solution {
    public int numTrees(int n) {
        int[] C = new int[n+1];
        C[0] = 1;
        C[1] = 1;
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                C[i] += C[j-1] * C[i-j] ;
            }
        }
        return C[n];
    }
}
```