---
layout: post
title: 157. Read N Characters Given Read4
category: [Leetcode]
description: 
keywords: ['String', 'Leetcode', 'Easy']
---
### [157. Read N Characters Given Read4](https://leetcode.com/problems/read-n-characters-given-read4)

#### Tags: 'String'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a file and assume that you can only read the file using a given method <code>read4</code>, implement a method to read <em>n</em> characters.</p>
<p> </p>
<p><b>Method read4: </b></p>
<p>The API <code>read4</code> reads 4 consecutive characters from the file, then writes those characters into the buffer array <code>buf</code>.</p>
<p>The return value is the number of actual characters read.</p>
<p>Note that <code>read4()</code> has its own file pointer, much like <code>FILE *fp</code> in C.</p>
<p><b>Definition of read4:</b></p>
<pre>    Parameter:  char[] buf
    Returns:    int

Note: buf[] is destination not source, the results from read4 will be copied to buf[]
</pre>
<p>Below is a high level example of how <code>read4</code> works:</p>
<pre><code>File file("abcdefghijk"); // File is "abcdefghijk", initially file pointer (fp) points to 'a'
char[] buf = new char[4]; // Create buffer with enough space to store characters
read4(buf); // read4 returns 4. Now buf = "abcd", fp points to 'e'
read4(buf); // read4 returns 4. Now buf = "efgh", fp points to 'i'
read4(buf); // read4 returns 3. Now buf = "ijk", fp points to end of file</code>
</pre>
<p> </p>
<p><strong>Method read:</strong></p>
<p>By using the <code>read4</code> method, implement the method <code>read</code> that reads <i>n</i> characters from the file and store it in the buffer array <code>buf</code>. Consider that you <strong>cannot</strong> manipulate the file directly.</p>
<p>The return value is the number of actual characters read.</p>
<p><b>Definition of read: </b></p>
<pre>    Parameters:	char[] buf, int n
    Returns:	int

Note: buf[] is destination not source, you will need to write the results to buf[]
</pre>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong>file = "abc", n = 4
<strong>Output: </strong>3
<strong>Explanation:</strong> After calling your read method, buf should contain "abc". We read a total of 3 characters from the file, so return 3. Note that "abc" is the file's content, not buf. buf is the destination buffer that you will have to write the results to.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong>file = "abcde", n = 5
<strong>Output: </strong>5
<strong>Explanation: </strong>After calling your read method, buf should contain "abcde". We read a total of 5 characters from the file, so return 5.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong>file = "abcdABCD1234", n = 12
<strong>Output: </strong>12
<strong>Explanation: </strong>After calling your read method, buf should contain "abcdABCD1234". We read a total of 12 characters from the file, so return 12.
</pre>
<p><strong>Example 4:</strong></p>
<pre><strong>Input: </strong>file = "leetcode", n = 5
<strong>Output: </strong>5
<strong>Explanation: </strong>After calling your read method, buf should contain "leetc". We read a total of 5 characters from the file, so return 5.
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li>Consider that you <strong>cannot</strong> manipulate the file directly, the file is only accesible for <code>read4</code> but <strong>not</strong> for <code>read</code>.</li>
<li>The <code>read</code> function will only be called once for each test case.</li>
<li>You may assume the destination buffer array, <code>buf</code>, is guaranteed to have enough space for storing <em>n</em> characters.</li>
</ol>
</div></div>

### Solution
