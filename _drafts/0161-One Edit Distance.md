---
layout: post
category: Leetcode
description: 
keywords: ['String', 'Leetcode', 'Medium']
---
### [161. One Edit Distance](https://leetcode.com/problems/one-edit-distance)

#### Tags: 'String'

<div class="content__u3I1 question-content__JfgR"><div><p>Given two strings <b><i>s</i></b> and <b><i>t</i></b>, determine if they are both one edit distance apart.</p>
<p><strong>Note:</strong> </p>
<p>There are 3 possiblities to satisify one edit distance apart:</p>
<ol>
<li>Insert a character into <strong><em>s</em></strong> to get <strong><em>t</em></strong></li>
<li>Delete a character from <strong><em>s</em></strong> to get <strong><em>t</em></strong></li>
<li>Replace a character of <strong><em>s</em></strong> to get <strong><em>t</em></strong></li>
</ol>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> <strong><em>s</em></strong> = "ab", <strong><em>t</em></strong> = "acb"
<strong>Output:</strong> true
<strong>Explanation:</strong> We can insert 'c' into <strong><em>s</em></strong> to get <strong><em>t.</em></strong>
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> <strong><em>s</em></strong> = "cab", <strong><em>t</em></strong> = "ad"
<strong>Output:</strong> false
<strong>Explanation:</strong> We cannot get <strong><em>t </em></strong>from <strong><em>s </em></strong>by only one step.</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> <strong><em>s</em></strong> = "1203", <strong><em>t</em></strong> = "1213"
<strong>Output:</strong> true
<strong>Explanation:</strong> We can replace '0' with '1' to get <strong><em>t.</em></strong></pre>
</div></div>

### Solution
