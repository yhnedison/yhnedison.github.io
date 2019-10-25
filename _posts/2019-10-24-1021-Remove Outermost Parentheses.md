---
layout: post
title: 1021. Remove Outermost Parentheses
category: [Leetcode]
description: 
keywords: ['Stack', 'Leetcode', 'Easy']
---
### [1021. Remove Outermost Parentheses](https://leetcode.com/problems/remove-outermost-parentheses)

#### Tags: 'Stack'

<div class="content__u3I1 question-content__JfgR"><div><p>A valid parentheses string is either empty <code>("")</code>, <code>"(" + A + ")"</code>, or <code>A + B</code>, where <code>A</code> and <code>B</code> are valid parentheses strings, and <code>+</code> represents string concatenation.  For example, <code>""</code>, <code>"()"</code>, <code>"(())()"</code>, and <code>"(()(()))"</code> are all valid parentheses strings.</p>
<p>A valid parentheses string <code>S</code> is <strong>primitive</strong> if it is nonempty, and there does not exist a way to split it into <code>S = A+B</code>, with <code>A</code> and <code>B</code> nonempty valid parentheses strings.</p>
<p>Given a valid parentheses string <code>S</code>, consider its primitive decomposition: <code>S = P_1 + P_2 + ... + P_k</code>, where <code>P_i</code> are primitive valid parentheses strings.</p>
<p>Return <code>S</code> after removing the outermost parentheses of every primitive string in the primitive decomposition of <code>S</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">"(()())(())"</span>
<strong>Output: </strong><span id="example-output-1">"()()()"</span>
<strong>Explanation: </strong>
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
</pre>
<div>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong><span id="example-input-2-1">"(()())(())(()(()))"</span>
<strong>Output: </strong><span id="example-output-2">"()()()()(())"</span>
<strong>Explanation: </strong>
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
</pre>
<div>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong><span id="example-input-3-1">"()()"</span>
<strong>Output: </strong><span id="example-output-3">""</span>
<strong>Explanation: </strong>
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
</pre>
<p> </p>
</div>
</div>
<p><strong>Note:</strong></p>
<ol>
<li><code>S.length &lt;= 10000</code></li>
<li><code>S[i]</code> is <code>"("</code> or <code>")"</code></li>
<li><code>S</code> is a valid parentheses string</li>
</ol>
<div>
<div>
<div> </div>
</div>
</div></div></div>

### Solution
Refer to 20.Valid Parenthesis
```java
public String removeOuterParentheses(String S) {
    Deque<Character> stack = new LinkedList<>();
    List<String> list = new ArrayList<>();
    int currentIndex = 0;
    for (int i = 0; i < S.length(); i++) {
        char c = S.charAt(i);
        if (c == '(') {
            stack.push(c);
        } else if (c == ')' && !stack.isEmpty()) {
            stack.pop();
        }
        
        if (stack.isEmpty()) {
            // found a primitive
            list.add(S.substring(currentIndex, i + 1));
            currentIndex = i + 1;
        }
    }
    
    String result = "";
    for (String s: list) {
        result += s.substring(1, s.length() - 1);
    }
    return result;
}
```