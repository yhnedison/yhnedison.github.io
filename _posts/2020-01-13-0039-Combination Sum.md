---
layout: post
title: 39. Combination Sum
category: [Leetcode]
description: 
keywords: ['Array', 'Backtracking', 'Leetcode', 'Medium']
---
### [39. Combination Sum](https://leetcode.com/problems/combination-sum)

#### Tags: 'Array', 'Backtracking'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a <strong>set</strong> of candidate numbers (<code>candidates</code>) <strong>(without duplicates)</strong> and a target number (<code>target</code>), find all unique combinations in <code>candidates</code> where the candidate numbers sums to <code>target</code>.</p>
<p>The <strong>same</strong> repeated number may be chosen from <code>candidates</code> unlimited number of times.</p>
<p><strong>Note:</strong></p>
<ul>
<li>All numbers (including <code>target</code>) will be positive integers.</li>
<li>The solution set must not contain duplicate combinations.</li>
</ul>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> candidates = <code>[2,3,6,7], </code>target = <code>7</code>,
<strong>A solution set is:</strong>
[
  [7],
  [2,2,3]
]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> candidates = [2,3,5]<code>, </code>target = 8,
<strong>A solution set is:</strong>
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
</pre>
</div></div>

### Solution
backtracking 模板 `67% 100%`
```java
class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(candidates);
        backtrack(result, new ArrayList<Integer>(), candidates, target, 0);
        return result;
    }
    
    private void backtrack(List<List<Integer>> result, List<Integer> temp, int[] nums, int remain, int start) {
        //结束条件 end condition
        if (remain < 0) {
            return;
        } else if (remain == 0) {
            result.add(new ArrayList<>(temp));
            return;
        }
        
        for (int i = start; i < nums.length; i++) {
            temp.add(nums[i]); // 选择
            backtrack(result, temp, nums, remain - nums[i], i); // not i+1 because we can reuse same num
            temp.remove(temp.size() - 1); // 取消选择
        }
    }
}
```
