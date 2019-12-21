---
layout: post
title: 720. Longest Word in Dictionary
category: [Leetcode]
description: 
keywords: ['Hash Table', 'Trie', 'Leetcode', 'Easy']
---
### [720. Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary)

#### Tags: 'Hash Table', 'Trie'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a list of strings <code>words</code> representing an English Dictionary, find the longest word in <code>words</code> that can be built one character at a time by other words in <code>words</code>.  If there is more than one possible answer, return the longest word with the smallest lexicographical order.</p>  If there is no answer, return the empty string.

<p><b>Example 1:</b><br/>
</p><pre><b>Input:</b> 
words = ["w","wo","wor","worl", "world"]
<b>Output:</b> "world"
<b>Explanation:</b> 
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
</pre>
<p></p>
<p><b>Example 2:</b><br/>
</p><pre><b>Input:</b> 
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
<b>Output:</b> "apple"
<b>Explanation:</b> 
Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
</pre>
<p></p>
<p><b>Note:</b>
</p><li>All the strings in the input will only contain lowercase letters.</li>
<li>The length of <code>words</code> will be in the range <code>[1, 1000]</code>.</li>
<li>The length of <code>words[i]</code> will be in the range <code>[1, 30]</code>.</li>
<p></p></div></div>

### Solution
方法1： Build a trie in the normal way, then do a dfs to find the longest `continuous` downward path from the root
解法并不难，要从中发现这类题的一般解法 `82% 81%`
```java
class Solution {
    public String longestWord(String[] words) {
        Trie trie = new Trie();
        for (String word: words) {
            trie.insert(word);
        }
        
        return trie.findLongestWordBFS();
    }
    
    private class Node {
        private Node[] children;
        private boolean isWord;
        private String word;
        private Node() {
            children = new Node[26];
        }
    }
    
    private class Trie {
        private Node root;
        private Trie() {
            root = new Node();
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
            p.word = word;
        }
        
        private String findLongestWordBFS() {
            String result = null;
            Queue<Node> queue = new LinkedList<>();
            queue.offer(root);
            while (!queue.isEmpty()) {
                int size = queue.size();
                for (int i = 0; i < size; i++) {
                    Node node = queue.poll();
                    for (int j = 25; j >= 0; j--) { // start from end, so that if there are two with same length, we get the one with the smallest lexicographical order.
                        if (node.children[j] != null && node.children[j].isWord) {
                            result = node.children[j].word;
                            queue.offer(node.children[j]);
                        }
                    }
                }
            }
            return result;
        }
    }
    
}
```