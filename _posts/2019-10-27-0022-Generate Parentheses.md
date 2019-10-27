---
layout: post
title: 22. Generate Parentheses
category: [Leetcode]
description: 
keywords: ['String', 'Backtracking', 'Leetcode', 'Medium']
---
### [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses)

#### Tags: 'String', 'Backtracking'

<div class="content__u3I1 question-content__JfgR"><div><p>
Given <i>n</i> pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
</p>
<p>
For example, given <i>n</i> = 3, a solution set is:
</p>
<pre>[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
</pre></div></div>

### Solution
```java
public List<String> generateParenthesis(int n) {
    List<String> ans = new ArrayList();
    backtrack(ans, "", 0, 0, n);
    return ans;
}

public void backtrack(List<String> ans, String cur, int open, int close, int max){
    if (cur.length() == max * 2) {
        ans.add(cur);
        return;
    }

    if (open < max)
        backtrack(ans, cur+"(", open+1, close, max);
    if (close < open)
        backtrack(ans, cur+")", open, close+1, max);
}
```