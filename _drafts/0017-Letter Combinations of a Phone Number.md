---
layout: post
title: 17. Letter Combinations of a Phone Number
category: [Leetcode]
description: 
keywords: ['String', 'Backtracking', 'Leetcode', 'Medium']
---
### [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number)

#### Tags: 'String', 'Backtracking'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string containing digits from <code>2-9</code> inclusive, return all possible letter combinations that the number could represent.</p>
<p>A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.</p>
<p><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png"/></p>
<p><strong>Example:</strong></p>
<pre><strong>Input: </strong>"23"
<strong>Output:</strong> ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
</pre>
<p><strong>Note:</strong></p>
<p>Although the above answer is in lexicographical order, your answer could be in any order you want.</p>
</div></div>

### Solution 
参考https://www.v2ex.com/t/633719#reply0。解决一个回溯问题，其实就是一个决策树遍历过程。

Backtracking 框架：

![](https://raw.githubusercontent.com/fudonglai/pictures/master/backtracking/4.jpg)


```python
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return
    
    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择

# 通俗来说
# 我们只要在递归之前做出选择，在递归之后撤销刚才的选择
for 选择 in 选择列表:
    # 做选择
    将该选择从选择列表移除
    路径.add(选择)
    backtrack(路径, 选择列表)
    # 撤销选择
    路径.remove(选择)
    将该选择再加入选择列表
```

例子：全排列
```java
List<List<Integer>> res = new LinkedList<>();

/* 主函数，输入一组不重复的数字，返回它们的全排列 */
List<List<Integer>> permute(int[] nums) {
    // 记录「路径」
    LinkedList<Integer> track = new LinkedList<>();
    backtrack(nums, track);
    return res;
}

// 路径：记录在 track 中
// 选择列表：nums 中不存在于 track 的那些元素
// 结束条件：nums 中的元素全都在 track 中出现
void backtrack(int[] nums, LinkedList<Integer> track) {
    // 触发结束条件
    if (track.size() == nums.length) {
        res.add(new LinkedList(track));
        return;
    }
    
    for (int i = 0; i < nums.length; i++) {
        // 排除不合法的选择
        if (track.contains(nums[i]))
            continue;
        // 做选择
        track.add(nums[i]);
        // 进入下一层决策树
        backtrack(nums, track);
        // 取消选择
        track.removeLast();
    }
}
```