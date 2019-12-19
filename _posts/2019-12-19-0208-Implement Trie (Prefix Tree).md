---
layout: post
title: 208. Implement Trie (Prefix Tree)
category: [Leetcode]
description: 
keywords: ['Design', 'Trie', 'Leetcode', 'Medium']
---
### [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree)

#### Tags: 'Design', 'Trie'

<div class="content__u3I1 question-content__JfgR"><div><p>Implement a trie with <code>insert</code>, <code>search</code>, and <code>startsWith</code> methods.</p>
<p><b>Example:</b></p>
<pre>Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
</pre>
<p><b>Note:</b></p>
<ul>
<li>You may assume that all inputs are consist of lowercase letters <code>a-z</code>.</li>
<li>All inputs are guaranteed to be non-empty strings.</li>
</ul>
</div></div>

### Solution
方法1: Array存储指针 `81% 98%`

注意： root是空node，只存了指针array，指向的下一个node才是真正的char Node
```java
class Trie {
    private class TrieNode {
        private boolean isWord;
        private TrieNode[] children;
        private TrieNode() {
            children = new TrieNode[26];
            isWord = false;
        }
    }
    
    private TrieNode root;
    
    /** Initialize your data structure here. */
    public Trie() {
        root = new TrieNode();
    }
    
    /** Inserts a word into the trie. */
    public void insert(String word) {
        TrieNode p = root; // get a temp pointer
        for (int i = 0; i < word.length(); i++) {
            int index = (int)(word.charAt(i) - 'a');
            if (p.children[index] == null) {
                p.children[index] = new TrieNode();
            }
            
            p = p.children[index];
        }
        p.isWord = true;
    }
    
    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        TrieNode node = find(word);
        return node != null && node.isWord;
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        TrieNode node = find(prefix);
        return node != null;
    }
    
    // helper function
    // return next node or null
    private TrieNode find(String prefix) {
        TrieNode p = root;
        for (int i = 0; i < prefix.length(); i++) {
            int index = (int)(prefix.charAt(i) - 'a');
            if (p.children[index] == null) {
                return null;
            }
            p = p.children[index];
        }
        return p;
    }
}
```

方法2： use HashMap instead of Array, 原理相同 `64% 100%`
```java
class Trie {
    private class TrieNode {
        private boolean isWord;
        private HashMap<Character, TrieNode> children;
        private char c;
        
        private TrieNode(char c) {
            children = new HashMap<>();
            isWord = false;
            this.c = c;
        }
    }
    
    private TrieNode root;
    
    /** Initialize your data structure here. */
    public Trie() {
        root = new TrieNode('0');
    }
    
    /** Inserts a word into the trie. */
    public void insert(String word) {
        TrieNode p = root; // get a temp pointer
        for (char c: word.toCharArray()) {
            p.children.putIfAbsent(c, new TrieNode(c));
            p = p.children.get(c);
        }
        p.isWord = true;
    }
    
    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        TrieNode node = find(word);
        return node != null && node.isWord;
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        TrieNode node = find(prefix);
        return node != null;
    }
    
    // helper function
    // return next node or null
    private TrieNode find(String prefix) {
        TrieNode p = root;
        for (char c: prefix.toCharArray()) {
            if (!p.children.containsKey(c)) {
                return null;
            }
            p = p.children.get(c);
        }
        return p;
    }
}
```