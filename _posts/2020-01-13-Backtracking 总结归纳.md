---
layout: post
title: backtracking 归纳总结 
category: [Leetcode]
keywords: ['Backtracking', 'DFS', 'Combination']
---
# 总结
[参考来源](https://www.v2ex.com/t/633719#reply0)。解决一个回溯问题，其实就是一个决策树遍历过程。

Backtracking 框架：

![](https://raw.githubusercontent.com/fudonglai/pictures/master/backtracking/4.jpg)


```python
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return
    
    for 选择 in 选择列表:
        剪枝（optional）排除选择列表里不符合条件的选择，提前continue
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```
通俗来说： 我们需要在递归之前做出选择，在递归之后撤销刚才的选择。

## 三要素
1. 路径：记录在 temp 中
2. 选择列表：根据题目要求分析
3. 结束条件：根据题目要求，有些没有
## 注意：
1. 每次将temp加入result时，需要new一个新的List（将当前temp的复制加入result），因为temp后续还要移除选项进行下一步循环，最终temp会是一个空集
2. 有重复元素时，先sort(), 剪枝时保证重复元素按顺序获取，保证没有重复结果

# 例子
## [46. Permutations](https://leetcode.com/problems/permutations/) 排列

> Given a collection of distinct integers, return all possible permutations. 注意distinct

```java
public List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> result  = new LinkedList<>();
    backtrack(result，new LinkedList<Integer>(), nums);
    return result;
}

private void backtrack(List<List<Integer>> result, LinkedList<Integer> temp, int[] nums) {
    // 结束条件 termination
    if (track.size() == nums.length ) {
        result.add(new LinkedList(track));
        return;
    }
    
    for (int i = 0; i < nums.length; i++) { // 
        // 剪枝，也可以用Permutations II的方法，额外用一个boolean[] used，效率更高
        if (track.contains(nums[i])) { 
            continue;
        }
        track.add(nums[i]); // 做选择
        backtrack(result, temp, nums); // 进入下一层决策树
        track.removeLast(); // 取消选择
    }
}
```
## [47.Permutations II](https://leetcode.com/problems/permutations-ii/) 排列

> Given a collection of numbers that might contain duplicates, return all possible unique permutations. 注意有重复
> ```
> Input: [1,1,2]
>Output:
>[
>  [1,1,2],
>  [1,2,1],
>  [2,1,1]
>]
> ```

有重复，先sort再查重，保证重复元素必须按顺序获取，这样就保证了不会出现重复排列，例如`[1,1,1]`

```java
public List<List<Integer>> permuteUnique(int[] nums) {
    List<List<Integer>> result = new LinkedList<>();
    Arrays.sort(nums); 
    backtrack(nums, new LinkedList<>(), result, new boolean[nums.length]);
    return result;
}

private void backtrack(int[] nums, List<Integer> temp, List<List<Integer>> result, boolean[] used) {
    if (temp.size() == nums.length) { // 结束条件 termination
        result.add(new ArrayList<>(temp));
        return;
    }
    for (int i = 0; i < nums.length; i++) {
        //剪枝，有重复元素需要保证重复元素按顺序获取， 排除重复排列
        if (used[i] || (i > 0 && nums[i] == nums[i-1] && !used[i-1])) { 
            continue;
        }
        used[i] = true; // 选择从选择列表移除
        temp.add(nums[i]); // 路径.add(选择)
        backtrack(nums, temp, result, used);
        used[i] = false; // 选择加入选择列表
        temp.remove(temp.size() - 1); // 撤销选择
    }
}
```
## [39. Combination Sum](https://leetcode.com/problems/combination-sum/) 组合

>Given a set of candidate numbers (candidates) (***without duplicates***) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target. 无重复
>
>The same ***repeated*** number may be chosen from candidates unlimited number of times. 可用多次

注意：
1. 因为是conbination， 所以每次从start 开始，避免重复组合
2. 因为元素可以重复使用，所以递归时传入 i 而非 i + 1

```java
public List<List<Integer>> combinationSum(int[] candidates, int target) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(result, new ArrayList<Integer>(), candidates, target, 0);
    return result;
}

private void backtrack(List<List<Integer>> result, List<Integer> temp, int[] nums, int remain, int start) {
    //结束条件
    if (remain < 0) {
        return;
    } else if (remain == 0) {
        result.add(new ArrayList<>(temp));
        return;
    }
    
    for (int i = start; i < nums.length; i++) { // conbination start开始
        // 无重复元素，不需要剪枝
        temp.add(nums[i]); // 选择
        backtrack(result, temp, nums, remain - nums[i], i); // 可以重复使用 所以i
        temp.remove(temp.size() - 1); // 取消选择
    }
}
```

## [40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) 组合

> Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target. There may be ***duplicate*** numbers. 有重复
>
> Each number in candidates may only be used ***once*** in the combination. 只能用一次

与39的区别在于，39是无重复元素能重复使用，本题为有重复元素不能重复使用

```java
public List<List<Integer>> combinationSum2(int[] candidates, int target) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(candidates);
    backtrack(result, new ArrayList<Integer>(), candidates, target, 0);
    return result;
}

private void backtrack(List<List<Integer>> result, List<Integer> temp, int[] nums, int remain, int start) {
    // 结束条件 
    if (remain < 0) {
        return;
    } else if (remain == 0) {
        result.add(new ArrayList<>(temp)); 
        return;
    }
    
    for (int i = start; i < nums.length; i++) {
        // 有重复元素需要保证重复元素按顺序获取， 排除重复组合
        if (i > start && nums[i] == nums[i-1]) {
            continue;
        }
        temp.add(nums[i]);
        backtrack(result, temp, nums, remain - nums[i], i+1); // 不能重复使用，所以i+1
        temp.remove(temp.size() - 1);
    }
}
```

## [216. Combination Sum III](https://leetcode.com/problems/combination-sum-iii/) k组合

需要额外满足条件 k-combinations

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

## [377. Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/) 

叫组合，但实际求排列。用backtrack会超时，需要[DP](https://www.cnblogs.com/grandyang/p/5705750.html)

backtrack会TLE, `[4,1,2] 32`，这个结果是 `39882198`

```java
public int combinationSum4(int[] nums, int target) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(result, new ArrayList<>(), nums, target);
    return result.size();
}

private void backtrack(List<List<Integer>> result, List<Integer> temp, int[] nums, int remain) {
    // 结束条件
    if (remain < 0) {
        return;
    } else if (remain == 0) {
        result.add(new ArrayList<>(temp));
        return;
    }
    
    for (int i = 0; i < nums.length; i++) { // sicne different sequence count, start from 0 each time
        temp.add(nums[i]);
        backtrack(result, temp, nums, remain - nums[i]);
        temp.remove(temp.size() - 1);
        
    }
}
```


## [78. Subsets](https://leetcode.com/problems/subsets/) 组合的一种

> Given a set of distinct integers, nums, return all possible subsets (the power set).
>
> Note: The solution set must not contain duplicate subsets.

```java
public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    backtrack(result, new ArrayList<Integer>(), nums, 0);
    return result;
}

private void backtrack(List<List<Integer>> result, List<Integer> temp, int[] nums, int start) {
    // 无结束条件
    result.add(new ArrayList<>(temp));
    
    for (int i = start; i < nums.length; i++) { 
        //没有剪枝
        temp.add(nums[i]);
        backtrack(result, temp, nums, i+1);
        temp.remove(temp.size() - 1);
    }
}
```
## [90. Subsets II](https://leetcode.com/problems/subsets-ii/)

> Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).
>
> Note: The solution set must not contain duplicate subsets.
```
Input: [1,2,2]
Output:
[
  [],
  [1],
  [2],
  [1,2,],
  [2,2],
  [1,2,2]
]
```

```java
public List<List<Integer>> subsetsWithDup(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    backtrack(result, new ArrayList<Integer>(), nums, 0);
    return result;
}

private void backtrack(List<List<Integer>> result, List<Integer> temp, int[] nums, int start) {
    // 没有termination，需要所有subset
    result.add(new ArrayList<>(temp)); 

    for(int i = start; i < nums.length; i++) {
        // 剪枝,保证重复元素按顺序获取
        if (i > start && nums[i] == nums[i-1]) {
            continue; // skip duplicates
        }
        
        temp.add(nums[i]);
        backtrack(result, temp, nums, i+1);
        temp.remove(temp.size() - 1);
    }
}
```
## [131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)

```java
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), s, 0);
        return result;
    }
    
    private void backtrack(List<List<String>> result, List<String> temp, String s, int start) {
        // 结束条件
        if (start == s.length()) {
            result.add(new ArrayList<>(temp));
            return;
        }
        
        for (int i = start; i < s.length(); i++) {
            if (isPalindrome(s, start, i)) { // 剪枝，仅选择符合条件的分支
                temp.add(s.substring(start, i + 1));
                backtrack(result, temp, s, i + 1);
                temp.remove(temp.size() - 1);
            }
        }
    }
    
    private boolean isPalindrome(String s, int l, int r) {
        while (l < r) {
            if (s.charAt(l) != s.charAt(r)) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
```

## [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

回顾backtracking三要素：路径，选择列表， 结束条件

这里每一层的选择列表不同

```java
public List<String> letterCombinations(String digits) {
    String[] mapping = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz",};
    List<String> result = new ArrayList<>();
    if (digits == null || digits.length() == 0) { // edge case
        return result; 
    }
    backtrack(result, new StringBuilder(), digits, mapping, 0);
    return result;
}

void backtrack(List<String> result, StringBuilder temp, String digits, String[] mapping, int index) {
    // termination
    if (index >= digits.length()) {
        result.add(temp.toString());
        return;
    }   
    
    String letters = mapping[digits.charAt(index) - '0']; // 当前层的选择列表
    for (int i = 0; i < letters.length(); i++) {
        temp.append(letters.charAt(i));
        backtrack(result, temp, digits, mapping, index + 1);
        temp.deleteCharAt(temp.length() - 1);
    }
}
```