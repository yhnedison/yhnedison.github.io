---
layout: post
title: 47. Permutations II
category: [Leetcode]
description: 
keywords: ['Backtracking', 'Leetcode', 'Medium']
---
### [47. Permutations II](https://leetcode.com/problems/permutations-ii)

#### Tags: 'Backtracking'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a collection of numbers that might contain duplicates, return all possible unique permutations.</p>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong> [1,1,2]
<strong>Output:</strong>
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
</pre>
</div></div>

### Solution
标准的backtracking 模板
```java
public List<List<Integer>> permuteUnique(int[] nums) {
    List<List<Integer>> result = new LinkedList<>();
    Arrays.sort(nums);
    backtrack(nums, new LinkedList<>(), result, new boolean[nums.length]);
    return result;
}

private void backtrack(int[] nums, List<Integer> temp, List<List<Integer>> result, boolean[] used) {
    if (temp.size() == nums.length) {
        result.add(new ArrayList<>(temp));
        return;
    }
    for (int i = 0; i < nums.length; i++) {
        //剪枝 after sort only use first appearance
        if (used[i] || (i > 0 && nums[i] == nums[i-1] && !used[i-1])) { 
            continue;
        }
        used[i] = true;
        temp.add(nums[i]);
        
        backtrack(nums, temp, result, used);
        
        used[i] = false;
        temp.remove(temp.size() - 1);
    }
}
```