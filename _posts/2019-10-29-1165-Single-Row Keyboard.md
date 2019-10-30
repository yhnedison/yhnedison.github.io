---
layout: post
title: 1165. Single-Row Keyboard
category: [Leetcode]
description: 
keywords: ['String', 'Leetcode', 'Easy']
---
### [1165. Single-Row Keyboard](https://leetcode.com/problems/single-row-keyboard)

#### Tags: 'String'

<div class="content__u3I1 question-content__JfgR"><div><p>There is a special keyboard with <strong>all keys in a single row</strong>.</p>
<p>Given a string <code>keyboard</code> of length 26 indicating the layout of the keyboard (indexed from 0 to 25), initially your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index <code>i</code> to index <code>j</code> is <code>|i - j|</code>.</p>
<p>You want to type a string <code>word</code>. Write a function to calculate how much time it takes to type it with one finger.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
<strong>Output:</strong> 4
<strong>Explanation: </strong>The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
Total time = 2 + 1 + 1 = 4. 
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
<strong>Output:</strong> 73
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>keyboard.length == 26</code></li>
<li><code><font face="monospace">keyboard</font></code> contains each English lowercase letter exactly once in some order.</li>
<li><code>1 &lt;= word.length &lt;= 10^4</code></li>
<li><code>word[i]</code> is an English lowercase letter.</li>
</ul>
</div></div>

### Solution
For alphabatic characters, we can use array instead of Map to store data
```java
//use array
public int calculateTime(String keyboard, String word) {
    int[] index = new int[26];
    for (int i = 0; i < keyboard.length(); i++) {
        index[keyboard.charAt(i) - 'a'] = i;
    }
    
    int pre = 0;
    int result = 0;
    for (int i = 0; i < word.length(); i++) {
        result += Math.abs(pre - index[word.charAt(i) - 'a']);
        pre = index[word.charAt(i) - 'a'];
        System.out.println(result);
    }
    return result;
}

//15% 100%
public int calculateTime(String keyboard, String word) {
    Map<Character, Integer> map = new HashMap<>();
    for (int i = 0; i < keyboard.length(); i++) {
        map.put(keyboard.charAt(i), i);
    }
    
    int result = 0;
    for (int i = 1; i < word.length(); i++) {
        result += Math.abs(map.get(word.charAt(i-1)) - map.get(word.charAt(i)));
    }
    return result + map.get(word.charAt(0));
}
```