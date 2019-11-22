---
layout: post
title: 88. Merge Sorted Array
category: [Leetcode]
description: 
keywords: ['Array', 'Two Pointers', 'Leetcode', 'Easy']
---
### [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array)

#### Tags: 'Array', 'Two Pointers'

<div class="content__u3I1 question-content__JfgR"><div><p>Given two sorted integer arrays <em>nums1</em> and <em>nums2</em>, merge <em>nums2</em> into <em>nums1</em> as one sorted array.</p>
<p><strong>Note:</strong></p>
<ul>
<li>The number of elements initialized in <em>nums1</em> and <em>nums2</em> are <em>m</em> and <em>n</em> respectively.</li>
<li>You may assume that <em>nums1</em> has enough space (size that is greater or equal to <em>m</em> + <em>n</em>) to hold additional elements from <em>nums2</em>.</li>
</ul>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong>
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

<strong>Output:</strong> [1,2,2,3,5,6]
</pre>
</div></div>

### Solution
方法1： 从后往前merge，可以避免用额外空间 做到O(1)
```java
public void merge(int[] nums1, int m, int[] nums2, int n) {
    int i = m - 1, j = n - 1, p = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[p--] = nums1[i--];
        } else {
            nums1[p--] = nums2[j--];
        }
    }
    while (j >= 0) {
        nums1[p--] = nums2[j--];
    }
}
```