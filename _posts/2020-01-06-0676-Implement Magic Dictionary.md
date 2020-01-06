---
layout: post
title: 676. Implement Magic Dictionary
category: [Leetcode]
description: 
keywords: ['Hash Table', 'Trie', 'Leetcode', 'Medium']
---
### [676. Implement Magic Dictionary](https://leetcode.com/problems/implement-magic-dictionary)

#### Tags: 'Hash Table', 'Trie'

<div class="content__u3I1 question-content__JfgR"><div><p>
Implement a magic directory with <code>buildDict</code>, and <code>search</code> methods.
</p>
<p>
For the method <code>buildDict</code>, you'll be given a list of non-repetitive words to build a dictionary.
</p>
<p>
For the method <code>search</code>, you'll be given a word, and judge whether if you modify <b>exactly</b> one character into <b>another</b> character in this word, the modified word is in the dictionary you just built.
</p>
<p><b>Example 1:</b><br/>
</p><pre>Input: buildDict(["hello", "leetcode"]), Output: Null
Input: search("hello"), Output: False
Input: search("hhllo"), Output: True
Input: search("hell"), Output: False
Input: search("leetcoded"), Output: False
</pre>
<p></p>
<p><b>Note:</b><br/>
</p><ol>
<li>You may assume that all the inputs are consist of lowercase letters <code>a-z</code>.</li>
<li>For contest purpose, the test data is rather small by now. You could think about highly efficient algorithm after the contest.</li>
<li>Please remember to <b>RESET</b> your class variables declared in class MagicDictionary, as static/class variables are <b>persisted across multiple test cases</b>. Please see <a href="https://leetcode.com/faq/#different-output">here</a> for more details.</li>
</ol>
<p></p></div></div>

### Solution
方法1 Build a Trie for searching. 把每一位i的字符替换成a-z其他字符，然后搜索，如果搜到了就return true。

假设字典word平均长度为a，搜索字符长度为N. Trie insert search均为 `O(a)`

所以`buildDict()`为`O(字典总长度)`，`search()`为`O(24*a*N)`

`O(a) O(24aN)` `9% 100%` 

```java
class MagicDictionary {
    private Trie trie;
    private class Node {
        private Node[] children;
        private boolean isWord;
        private Node() {
            this.children = new Node[26];
        }
    }
    
    private class Trie {
        private Node root;
        private Trie() {
            this.root = new Node();
        }
        
        private void insert(String word) {
            Node p = root;
            for (int i = 0; i < word.length(); i++) {
                int index = (int)(word.charAt(i) - 'a');
                if (p.children[index] == null) {
                    p.children[index] = new Node();
                }
                p = p.children[index];
            }
            p.isWord = true;
        }
        
        private boolean search(String word) {
            Node p = root;
            for (int i = 0; i < word.length(); i++) {
                int index = (int)(word.charAt(i) - 'a');
                if (p.children[index] == null) {
                    return false;
                }
                p = p.children[index];
            }
            return p != null && p.isWord;
        }
    }
    
    public MagicDictionary() {
         this.trie = new Trie();
    }

    public void buildDict(String[] dict) {
        for (String word: dict) {
            trie.insert(word);
        }
    }
    
    public boolean search(String word) {
        for (int i = 0; i < word.length(); i++) {
            char o = word.charAt(i);
            for (char n = 'a'; n <= 'z'; n++) {
                if (n == o) {
                    continue;
                }
                String newWord = word.substring(0, i) + n + word.substring(i+1);
                if (trie.search(newWord)) {
                    return true;
                }
            }
            
        }
        return false;
    }
}

```

方法2：可以只借鉴前缀树的思路，单纯用一个set存储，search可以降为O(1) 总体search复杂度为O(24*N) `12% 100%`
```java
class MagicDictionary {
    private Set<String> set;
    
    public MagicDictionary() {
         this.set = new HashSet<String>();
    }
    
    public void buildDict(String[] dict) {
        for (String word: dict) {
            set.add(word);
        }
    }
    
    public boolean search(String word) {
        for (int i = 0; i < word.length(); i++) {
            char o = word.charAt(i); // 0 -> old char
            for (char n = 'a'; n <= 'z'; n++) { // n -> new char
                if (n == o) {
                    continue;
                }
                String newWord = word.substring(0, i) + n + word.substring(i+1);
                if (set.contains(newWord)) {
                    return true;
                }
            }
            
        }
        return false;
    }
}
```