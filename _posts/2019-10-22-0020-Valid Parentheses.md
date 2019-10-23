---
layout: post
title: 20. Valid Parentheses
category: [Leetcode]
description: 
keywords: ['String', 'Stack', 'Leetcode', 'Easy']
---
### [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses)

#### Tags: 'String', 'Stack'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>
<p>An input string is valid if:</p>
<ol>
<li>Open brackets must be closed by the same type of brackets.</li>
<li>Open brackets must be closed in the correct order.</li>
</ol>
<p>Note that an empty string is also considered valid.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> "()"
<strong>Output:</strong> true
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> "()[]{}"
<strong>Output:</strong> true
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> "(]"
<strong>Output:</strong> false
</pre>
<p><strong>Example 4:</strong></p>
<pre><strong>Input:</strong> "([)]"
<strong>Output:</strong> false
</pre>
<p><strong>Example 5:</strong></p>
<pre><strong>Input:</strong> "{[]}"
<strong>Output:</strong> true
</pre>
</div></div>

### Solution 1
Use a stack to trace left parentheses
```java
public boolean isValid(String s) {
    Map<Character, Character> mappings = new HashMap<Character, Character>();
    mappings.put(')', '(');
    mappings.put('}', '{');
    mappings.put(']', '[');
    
    if (s == null || s.length() == 0) return true;
    if (s.length() % 2 != 0) return false;
    
    Stack<Character> stack = new Stack<>();
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        if (mappings.containsKey(c)) {
            char top = stack.isEmpty() ? '#' : stack.pop();
            if (top != mappings.get(c)) {
                return false;
            }    
        } else {
            stack.push(c);
        }
        
    }
    return stack.isEmpty();
}
```