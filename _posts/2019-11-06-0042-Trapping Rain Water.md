---
layout: post
title: 42. Trapping Rain Water
category: [Leetcode]
description: 
keywords: ['Array', 'Two Pointers', 'Stack', 'Leetcode', 'Hard']
---
### [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water)

#### Tags: 'Array', 'Two Pointers', 'Stack'

<div class="content__u3I1 question-content__JfgR"><div><p>Given <em>n</em> non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.</p>
<p><img src="https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png" style="width: 412px; height: 161px;"/><br/>
<small>The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. <strong>Thanks Marcos</strong> for contributing this image!</small></p>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong> [0,1,0,2,1,0,1,3,2,1,2,1]
<strong>Output:</strong> 6</pre>
</div></div>

### Solution
* 方法1：对于每个i， 当前位置能装的水为 $min(max_left, max_right) - current_height$ 所以每个i左右扫描一遍，$O(n^2) O(1)$


* 方法2： 1有重复搜索，用两个array做memo，分别存储i位置左侧和右侧最大值。只需要扫描两遍。$O(n) O(n)$ 
```java
public int trap(int[] height) {
    int[] left = new int[height.length];
    int[] right = new int[height.length];
            
    // left to right swipe
    int currLeftMax = Integer.MIN_VALUE;
    for (int i = 0; i < height.length; i++) {
        if (height[i] > currLeftMax) currLeftMax = height[i];
        left[i] = currLeftMax;
    }
    
    // right to left swipt
    int currRightMax = Integer.MIN_VALUE;
    for (int i = height.length - 1; i >= 0; i--) {
        if (height[i] > currRightMax) currRightMax = height[i];
        right[i] = currRightMax;
    }
    
    int result = 0;
    for (int i = 0; i < height.length; i++) {
        if (Math.min(left[i], right[i]) > height[i]) {
            result += Math.min(left[i], right[i]) - height[i];
        }
    }
    return result;
}
```
* 方法3: two pointer $O(n) O(1)$ 无法理解。。。下次再说