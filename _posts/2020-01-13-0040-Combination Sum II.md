---
layout: post
title: 40. Combination Sum II
category: [Leetcode]
description: 
keywords: ['Array', 'Backtracking', 'Leetcode', 'Medium']
---
### [40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii)

#### Tags: 'Array', 'Backtracking'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a collection of candidate numbers (<code>candidates</code>) and a target number (<code>target</code>), find all unique combinations in <code>candidates</code> where the candidate numbers sums to <code>target</code>.</p>
<p>Each number in <code>candidates</code> may only be used <strong>once</strong> in the combination.</p>
<p><strong>Note:</strong></p>
<ul>
<li>All numbers (including <code>target</code>) will be positive integers.</li>
<li>The solution set must not contain duplicate combinations.</li>
</ul>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> candidates = <code>[10,1,2,7,6,1,5]</code>, target = <code>8</code>,
<strong>A solution set is:</strong>
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> candidates = [2,5,2,1,2], target = 5,
<strong>A solution set is:</strong>
[
  [1,2,2],
  [5]
]
</pre>
</div></div>

### Solution
```java
public List<List<Integer>> combinationSum2(int[] candidates, int target) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(candidates);
    backtrack(result, new ArrayList<Integer>(), candidates, target, 0);
    return result;
}

private void backtrack(List<List<Integer>> result, List<Integer> temp, int[] nums, int remain, int start) {
    // 结束条件 termination condition
    // 记得最后都要return
    if (remain < 0) {
        return;
    } else if (remain == 0) {
        result.add(new ArrayList<>(temp)); // 要new因为返回后还要取消选择
        return;
    }
    
    for (int i = start; i < nums.length; i++) {
        // 剪枝，比如对于
        if (i > start && nums[i] == nums[i-1]) {
            continue;
        }
        temp.add(nums[i]);
        backtrack(result, temp, nums, remain - nums[i], i+1);
        temp.remove(temp.size() - 1);
    }
}
```
与 [39. Combination Sum](https://leetcode.com/problems/combination-sum/)相比，有两个改动
1. 多了剪枝选项。其中`i > start && nums[i] == nums[i-1]`保证了重复选项必须添加第一项后才能添加后面的重复值，例如`[1,1,1,2] target = 4`, 结果`[1,1,2]`只能出现一次
2. 递归调用时，`i + 1`避免使用自身
