---
layout: post
title: 216. Combination Sum III
category: [Leetcode]
description: 
keywords: ['Array', 'Backtracking', 'Leetcode', 'Medium']
---
### [216. Combination Sum III](https://leetcode.com/problems/combination-sum-iii)

#### Tags: 'Array', 'Backtracking'

<div class="content__u3I1 question-content__JfgR"><div><div>
<p>Find all possible combinations of <i><b>k</b></i> numbers that add up to a number <i><b>n</b></i>, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.</p>
<p><strong>Note:</strong></p>
<ul>
<li>All numbers will be positive integers.</li>
<li>The solution set must not contain duplicate combinations.</li>
</ul>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> <i><b>k</b></i> = 3, <i><b>n</b></i> = 7
<strong>Output:</strong> [[1,2,4]]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> <i><b>k</b></i> = 3, <i><b>n</b></i> = 9
<strong>Output:</strong> [[1,2,6], [1,3,5], [2,3,4]]
</pre>
</div></div></div>

### Solution
backtracking 模板 `59% 6%`
```java
public List<List<Integer>> combinationSum3(int k, int n) {
    int[] nums = {1,2,3,4,5,6,7,8,9};
    List<List<Integer>> result = new ArrayList<>();
    backtrack(result, new ArrayList<Integer>(), nums, k, n, 0);
    return result;
}

private void backtrack(List<List<Integer>> result, List<Integer> temp, int[] nums, int countRemain, int remain, int start) {
    // 结束条件
    if (countRemain == 0 && remain == 0) {
        result.add(new ArrayList<>(temp));
        return;
    } else if (remain < 0 || remain < 0) {
        return;
    }
    
    for (int i = start; i < nums.length; i++) {
        temp.add(nums[i]);
        backtrack(result, temp, nums, countRemain - 1, remain - nums[i], i + 1);
        temp.remove(temp.size() - 1);
    }
}
```

方法2，可以不用`nums`  `59% 6%`
```java
public List<List<Integer>> combinationSum3(int k, int n) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(result, new ArrayList<Integer>(), k, n, 1);
    return result;
}

private void backtrack(List<List<Integer>> result, List<Integer> temp, int countRemain, int remain, int start) {
    // 结束条件
    if (countRemain == 0 && remain == 0) {
        result.add(new ArrayList<>(temp));
        return;
    } else if (remain < 0 || remain < 0) {
        return;
    }
    
    for (int i = start; i <= 9; i++) {
        temp.add(i);
        backtrack(result, temp, countRemain - 1, remain - i, i + 1);
        temp.remove(temp.size() - 1);
    }
}
```