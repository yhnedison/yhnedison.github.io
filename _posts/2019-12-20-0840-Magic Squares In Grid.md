---
layout: post
title: 840. Magic Squares In Grid
category: [Leetcode]
description: 
keywords: ['Array', 'Leetcode', 'Easy']
---
### [840. Magic Squares In Grid](https://leetcode.com/problems/magic-squares-in-grid)

#### Tags: 'Array'

<div class="content__u3I1 question-content__JfgR"><div><p>A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers <strong>from 1 to 9</strong> such that each row, column, and both diagonals all have the same sum.</p>
<p>Given an <code>grid</code> of integers, how many 3 x 3 "magic square" subgrids are there?  (Each subgrid is contiguous).</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong>[[4,3,8,4],
        [9,5,1,9],
        [2,7,6,2]]
<strong>Output: </strong>1
<strong>Explanation: </strong>
The following subgrid is a 3 x 3 magic square:
438
951
276

while this one is not:
384
519
762

In total, there is only one magic square inside the given grid.
</pre>
<p><strong>Note:</strong></p>
<ol>
<li><code>1 &lt;= grid.length &lt;= 10</code></li>
<li><code>1 &lt;= grid[0].length &lt;= 10</code></li>
<li><code>0 &lt;= grid[i][j] &lt;= 15</code></li>
</ol>
</div></div>

### Solution
方法1： 直接brute force
```java
class Solution {
    public int numMagicSquaresInside(int[][] grid) {
        if (grid == null || grid.length < 3 || grid[0].length < 3) {
            return 0;
        }
        int count = 0;
        for (int i = 0; i <= grid.length - 3; i++) {
            for (int j = 0; j <= grid[0].length - 3; j++) {
                if (grid[i+1][j+1] != 5) {
                    continue;
                }
                
                if (checkMagic(grid, i, j)) {
                    count++;
                }
            }
        }
        return count;
    }
    
    private boolean checkMagic(int[][] grid, int i, int j) {
        int[] count = new int[16];
        for (int x = i; x <= i+2; x++) {
            for (int y = j; y <= j+2; y++) {
                int val = grid[x][y];
                count[val]++;
            }
        }
        for (int v = 1; v <= 9; v++) {
            if (count[v] != 1) {
                return false;
            }
        }
        
        int sum = grid[i][j] + grid[i][j+1] + grid[i][j+2]; // row 1
        // check row 2, row 3, col1, col2, col3, dia1, dia1
        return ((grid[i+1][j] + grid[i+1][j+1] + grid[i+1][j+2]) == sum) // row2
            && ((grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2]) == sum) // row3
            && ((grid[i][j] + grid[i+1][j] + grid[i+2][j]) == sum) //col1
            && ((grid[i][j+1] + grid[i+1][j+1] + grid[i+2][j+1]) == sum) // col2
            && ((grid[i][j+2] + grid[i+1][j+2] + grid[i+2][j+2]) == sum) // col3
            && ((grid[i][j] + grid[i+1][j+1] + grid[i+2][j+2]) == sum) // dia1
            && ((grid[i+2][j] + grid[i+1][j+1] + grid[i][j+2]) == sum); // dia2
        
        
        
    }
}
```