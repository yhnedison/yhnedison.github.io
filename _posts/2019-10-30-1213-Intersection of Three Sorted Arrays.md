---
layout: post
title: 1213. Intersection of Three Sorted Arrays
category: [Leetcode]
description: 
keywords: ['Hash Table', 'Two Pointers', 'Leetcode', 'Easy']
---
### [1213. Intersection of Three Sorted Arrays](https://leetcode.com/problems/intersection-of-three-sorted-arrays)

#### Tags: 'Hash Table', 'Two Pointers'

<div class="content__u3I1 question-content__JfgR"><div><p>Given three integer arrays <code>arr1</code>, <code>arr2</code> and <code>arr3</code> <strong>sorted</strong> in <strong>strictly increasing</strong> order, return a sorted array of <strong>only</strong> the integers that appeared in <strong>all</strong> three arrays.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
<strong>Output:</strong> [1,5]
<strong>Explanation: </strong>Only 1 and 5 appeared in the three arrays.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= arr1.length, arr2.length, arr3.length &lt;= 1000</code></li>
<li><code>1 &lt;= arr1[i], arr2[i], arr3[i] &lt;= 2000</code></li>
</ul>
</div></div>

### Solution
Naive solution using hashmap to record occurance

O(X+Y+Z) O(length of intersection)
```java
public List<Integer> arraysIntersection(int[] arr1, int[] arr2, int[] arr3) {
    // using hashmap traverse all three. O(X+Y+Z) O(length of intersection)
    Map<Integer, Integer> map = new HashMap<>();
    List<Integer> result = new LinkedList<>();
    
    for (int i: arr1) {
        map.put(i, 1);
    }
    for (int i: arr2) {
        if (map.containsKey(i)) {
            map.put(i, map.get(i) + 1);
        }
    }
    
    for (int i: arr3) {
        if (map.containsKey(i) && map.get(i) == 2) {
            result.add(i);
        }
    }
    return result;
}
```

Three Pointer, increment min pointer 
O(X+Y+Z) O(1 excluding result list)
```java
public List<Integer> arraysIntersection(int[] arr1, int[] arr2, int[] arr3) {
    List<Integer> list = new ArrayList();
    int p1 = 0, p2 = 0, p3 = 0;
    while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
        int min = Math.min(arr1[p1], Math.min(arr2[p2], arr3[p3]));
        if (arr1[p1] == arr2[p2] && arr1[p1] == arr3[p3]) list.add(arr1[p1]);
        if (arr1[p1] == min) p1++;
        if (arr2[p2] == min) p2++;
        if (arr3[p3] == min) p3++;
    }
    return list;
}
```