---
layout: post
title: 1166. Design File System
category: [Leetcode]
description: 
keywords: ['Hash Table', 'Design', 'Leetcode', 'Medium']
---
### [1166. Design File System](https://leetcode.com/problems/design-file-system)

#### Tags: 'Hash Table', 'Design'

<div class="content__u3I1 question-content__JfgR"><div><p>You are asked to design a file system which provides two functions:</p>
<ul>
<li><strong>createPath(path, value):</strong> Creates a new path and associates a value to it if possible and returns <code>True</code>. Returns <code>False</code> if the path already exists or its parent path doesn't exist.</li>
<li><strong>get(path):</strong> Returns the value associated with a path or returns <code>-1</code> if the path doesn't exist.</li>
</ul>
<p>The format of a path is one or more concatenated strings of the form: <code>/</code> followed by one or more lowercase English letters. For example, <code>/leetcode</code> and <code>/leetcode/problems</code> are valid paths while an empty string and <code>/</code> are not.</p>
<p>Implement the two functions.</p>
<p>Please refer to the examples for clarifications.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> 
["FileSystem","createPath","get"]
[[],["/a",1],["/a"]]
<strong>Output:</strong> 
[null,true,1]
<strong>Explanation:</strong> 
FileSystem fileSystem = new FileSystem();

fileSystem.createPath("/a", 1); // return true
fileSystem.get("/a"); // return 1
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> 
["FileSystem","createPath","createPath","get","createPath","get"]
[[],["/leet",1],["/leet/code",2],["/leet/code"],["/c/d",1],["/c"]]
<strong>Output:</strong> 
[null,true,true,2,false,-1]
<strong>Explanation:</strong> 
FileSystem fileSystem = new FileSystem();

fileSystem.createPath("/leet", 1); // return true
fileSystem.createPath("/leet/code", 2); // return true
fileSystem.get("/leet/code"); // return 2
fileSystem.createPath("/c/d", 1); // return false because the parent path "/c" doesn't exist.
fileSystem.get("/c"); // return -1 because this path doesn't exist.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of calls to the two functions is less than or equal to <code>10^4</code> in total.</li>
<li><code>2 &lt;= path.length &lt;= 100</code></li>
<li><code>1 &lt;= value &lt;= 10^9</code></li>
</ul>
<p><strong>NOTE:</strong> create method has been changed on August 29, 2019 to createPath. Please reset to default code definition to get new method signature.</p>
</div></div>

### Solution
