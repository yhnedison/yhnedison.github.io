---
layout: post
title: 349. Intersection of Two Arrays
category: [Leetcode]
description: 
keywords: ['Hash Table', 'Two Pointers', 'Binary Search', 'Sort', 'Leetcode', 'Easy']
---
### [349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays)

#### Tags: 'Hash Table', 'Two Pointers', 'Binary Search', 'Sort'

<div class="content__u3I1 question-content__JfgR"><div><p>Given two arrays, write a function to compute their intersection.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong>nums1 = <span id="example-input-1-1">[1,2,2,1]</span>, nums2 = <span id="example-input-1-2">[2,2]</span>
<strong>Output: </strong><span id="example-output-1">[2]</span>
</pre>
<div>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong>nums1 = <span id="example-input-2-1">[4,9,5]</span>, nums2 = <span id="example-input-2-2">[9,4,9,8,4]</span>
<strong>Output: </strong><span id="example-output-2">[9,4]</span></pre>
</div>
<p><b>Note:</b></p>
<ul>
<li>Each element in the result must be unique.</li>
<li>The result can be in any order.</li>
</ul>
<p> </p>
</div></div>

### Solution
Refer to 1213 Intersection of Three Sorted Arrays

Naive solution using map, extra space required
O(N1 + N2) O(N1)
```java
public int[] intersection(int[] nums1, int[] nums2) {
    Map<Integer, Integer> map = new HashMap<>(); // map occurance in nums2
    List<Integer> list = new ArrayList<>();
    for (int i: nums1) {
        map.put(i, 0);
    }
    
    for (int i: nums2) {
        if (map.containsKey(i) && map.get(i) == 0) {
            list.add(i);
            map.put(i, 1);
        }
    }
    int[] result = new int[list.size()];
    int i = 0;
    for (Integer x: list) {
        result[i] = x;
        i++;
    }
    return result;
}
```
Two pointers and sorting
O(nlogn) O(1)
```java
public int[] intersection(int[] nums1, int[] nums2) {
    Set<Integer> set = new HashSet<>();
    Arrays.sort(nums1);
    Arrays.sort(nums2);
    int i = 0;
    int j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            set.add(nums1[i]);
            i++;
            j++;
        }
    }
    int[] result = new int[set.size()];
    int k = 0;
    for (Integer num : set) {
        result[k++] = num;
    }
    return result;
}
```