---
layout: post
title: 804. Unique Morse Code Words
category: [Leetcode]
description: 
keywords: ['String', 'Leetcode', 'Easy']
---
### [804. Unique Morse Code Words](https://leetcode.com/problems/unique-morse-code-words)

#### Tags: 'String'

<div class="content__u3I1 question-content__JfgR"><div><p>International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: <code>"a"</code> maps to <code>".-"</code>, <code>"b"</code> maps to <code>"-..."</code>, <code>"c"</code> maps to <code>"-.-."</code>, and so on.</p>
<p>For convenience, the full table for the 26 letters of the English alphabet is given below:</p>
<pre>[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]</pre>
<p>Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.</p>
<p>Return the number of different transformations among all words we have.</p>
<pre><strong>Example:</strong>
<strong>Input:</strong> words = ["gin", "zen", "gig", "msg"]
<strong>Output:</strong> 2
<strong>Explanation: </strong>
The transformation of each word is:
"gin" -&gt; "--...-."
"zen" -&gt; "--...-."
"gig" -&gt; "--...--."
"msg" -&gt; "--...--."

There are 2 different transformations, "--...-." and "--...--.".
</pre>
<p><strong>Note:</strong></p>
<ul>
<li>The length of <code>words</code> will be at most <code>100</code>.</li>
<li>Each <code>words[i]</code> will have length in range <code>[1, 12]</code>.</li>
<li><code>words[i]</code> will only consist of lowercase letters.</li>
</ul>
</div></div>

### Solution
```java
public int uniqueMorseRepresentations(String[] words) {
    String[] array = new String[] {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
    Set<String> set = new HashSet<>();
    for (String w: words) {
        StringBuilder code = new StringBuilder();
        for (char c: w.toCharArray()) {
            code.append(array[c - 'a']);
        }
        set.add(code.toString());
    }
    return set.size();
}
```