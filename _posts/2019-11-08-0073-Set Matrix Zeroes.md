---
layout: post
title: 73. Set Matrix Zeroes
category: [Leetcode]
description: 
keywords: ['Array', 'Leetcode', 'Medium']
---
### [73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes)

#### Tags: 'Array'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a <em>m</em> x <em>n</em> matrix, if an element is 0, set its entire row and column to 0. Do it <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><strong>in-place</strong></a>.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
<strong>Output:</strong> 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
<strong>Output:</strong> 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
</pre>
<p><strong>Follow up:</strong></p>
<ul>
<li>A straight forward solution using O(<em>m</em><em>n</em>) space is probably a bad idea.</li>
<li>A simple improvement uses O(<em>m</em> + <em>n</em>) space, but still not the best solution.</li>
<li>Could you devise a constant space solution?</li>
</ul>
</div></div>

### Solution
方法1
Use extra two arrays to store where a column/ row has 0.

O(m * n) time O(m + n) space
```java

```

方法2
Use row 0 and column 0 to store if current row/column has 0.
Finally iterate through `matrix[i][j]`,  if `matrix[i][0] == 0` `matrix[0][j] == 0`, set `matrix[i][j]` 0.

O(m*n) time linear O(1) space
```java
public void setZeroes(int[][] matrix) {
    final int m = matrix.length;
    final int n = matrix[0].length;
    boolean row_has_zero = false; // 第一行是否存在 0
    boolean col_has_zero = false; // 第一列是否存在 0

    for (int i = 0; i < n; i++)
        if (matrix[0][i] == 0) {
            row_has_zero = true;
            break;
        }

    for (int i = 0; i < m; i++)
        if (matrix[i][0] == 0) {
            col_has_zero = true;
            break;
        }

    for (int i = 1; i < m; i++)
        for (int j = 1; j < n; j++)
            if (matrix[i][j] == 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
    for (int i = 1; i < m; i++)
        for (int j = 1; j < n; j++)
            if (matrix[i][0] == 0 || matrix[0][j] == 0)
                matrix[i][j] = 0;
    if (row_has_zero)
        for (int i = 0; i < n; i++)
            matrix[0][i] = 0;
    if (col_has_zero)
        for (int i = 0; i < m; i++)
            matrix[i][0] = 0;
}
```