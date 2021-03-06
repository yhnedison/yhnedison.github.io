---
layout: post
title: 591. Tag Validator
category: [Leetcode]
description: 
keywords: ['String', 'Stack', 'Leetcode', 'Hard']
---
### [591. Tag Validator](https://leetcode.com/problems/tag-validator)

#### Tags: 'String', 'Stack'

<div class="content__u3I1 question-content__JfgR"><div><p>Given a string representing a code snippet, you need to implement a tag validator to parse the code and return whether it is valid. A code snippet is valid if all the following rules hold:</p><p>
</p><ol>
<li>The code must be wrapped in a <b>valid closed tag</b>. Otherwise, the code is invalid.</li>
<li>A <b>closed tag</b> (not necessarily valid) has exactly the following format : <code>&lt;TAG_NAME&gt;TAG_CONTENT&lt;/TAG_NAME&gt;</code>. Among them, <code>&lt;TAG_NAME&gt;</code> is the start tag, and <code>&lt;/TAG_NAME&gt;</code> is the end tag. The TAG_NAME in start and end tags should be the same. A closed tag is <b>valid</b> if and only if the TAG_NAME and TAG_CONTENT are valid.</li>
<li>A <b>valid</b> <code>TAG_NAME</code> only contain <b>upper-case letters</b>, and has length in range [1,9]. Otherwise, the <code>TAG_NAME</code> is <b>invalid</b>.</li>
<li>A <b>valid</b> <code>TAG_CONTENT</code> may contain other <b>valid closed tags</b>, <b>cdata</b> and any characters (see note1) <b>EXCEPT</b> unmatched <code>&lt;</code>, unmatched start and end tag, and unmatched or closed tags with invalid TAG_NAME. Otherwise, the <code>TAG_CONTENT</code> is <b>invalid</b>.</li>
<li>A start tag is unmatched if no end tag exists with the same TAG_NAME, and vice versa. However, you also need to consider the issue of unbalanced when tags are nested.</li>
<li>A <code>&lt;</code> is unmatched if you cannot find a subsequent <code>&gt;</code>. And when you find a <code>&lt;</code> or <code>&lt;/</code>, all the subsequent characters until the next <code>&gt;</code> should be parsed as TAG_NAME  (not necessarily valid).</li>
<li>The cdata has the following format : <code>&lt;![CDATA[CDATA_CONTENT]]&gt;</code>. The range of <code>CDATA_CONTENT</code> is defined as the characters between <code>&lt;![CDATA[</code> and the <b>first subsequent</b> <code>]]&gt;</code>. </li>
<li><code>CDATA_CONTENT</code> may contain <b>any characters</b>. The function of cdata is to forbid the validator to parse <code>CDATA_CONTENT</code>, so even it has some characters that can be parsed as tag (no matter valid or invalid), you should treat it as <b>regular characters</b>. </li>
</ol>
<p><b>Valid Code Examples:</b><br/>
</p><pre><b>Input:</b> "&lt;DIV&gt;This is the first line &lt;![CDATA[&lt;div&gt;]]&gt;&lt;/DIV&gt;"<br/>
<b>Output:</b> True<br/>
<b>Explanation:</b> <br/>
The code is wrapped in a closed tag : &lt;DIV&gt; and &lt;/DIV&gt;. <br/>
The TAG_NAME is valid, the TAG_CONTENT consists of some characters and cdata. <br/>
Although CDATA_CONTENT has unmatched start tag with invalid TAG_NAME, it should be considered as plain text, not parsed as tag.<br/>
So TAG_CONTENT is valid, and then the code is valid. Thus return true.<br/>

<b>Input:</b> "&lt;DIV&gt;&gt;&gt;  ![cdata[]] &lt;![CDATA[&lt;div&gt;]&gt;]]&gt;]]&gt;&gt;]&lt;/DIV&gt;"<br/>
<b>Output:</b> True<br/>
<b>Explanation:</b><br/>
We first separate the code into : start_tag|tag_content|end_tag.<br/>
start_tag -&gt; <b>"&lt;DIV&gt;"</b><br/>
end_tag -&gt; <b>"&lt;/DIV&gt;"</b><br/>
tag_content could also be separated into : text1|cdata|text2.<br/>
text1 -&gt; <b>"&gt;&gt;  ![cdata[]] "</b><br/>
cdata -&gt; <b>"&lt;![CDATA[&lt;div&gt;]&gt;]]&gt;"</b>, where the CDATA_CONTENT is <b>"&lt;div&gt;]&gt;"</b><br/>
text2 -&gt; <b>"]]&gt;&gt;]"</b><br/>

The reason why start_tag is NOT <b>"&lt;DIV&gt;&gt;&gt;"</b> is because of the rule 6.
The reason why cdata is NOT <b>"&lt;![CDATA[&lt;div&gt;]&gt;]]&gt;]]&gt;"</b> is because of the rule 7.
</pre>
<p></p>
<p><b>Invalid Code Examples:</b><br/>
</p><pre><b>Input:</b> "&lt;A&gt;  &lt;B&gt; &lt;/A&gt;   &lt;/B&gt;"
<b>Output:</b> False
<b>Explanation:</b> Unbalanced. If "&lt;A&gt;" is closed, then "&lt;B&gt;" must be unmatched, and vice versa.

<b>Input:</b> "&lt;DIV&gt;  div tag is not closed  &lt;DIV&gt;"
<b>Output:</b> False

<b>Input:</b> "&lt;DIV&gt;  unmatched &lt;  &lt;/DIV&gt;"
<b>Output:</b> False

<b>Input:</b> "&lt;DIV&gt; closed tags with invalid tag name  &lt;b&gt;123&lt;/b&gt; &lt;/DIV&gt;"
<b>Output:</b> False

<b>Input:</b> "&lt;DIV&gt; unmatched tags with invalid tag name  &lt;/1234567890&gt; and &lt;CDATA[[]]&gt;  &lt;/DIV&gt;"
<b>Output:</b> False

<b>Input:</b> "&lt;DIV&gt;  unmatched start tag &lt;B&gt;  and unmatched end tag &lt;/C&gt;  &lt;/DIV&gt;"
<b>Output:</b> False
</pre>
<p></p>
<p><b>Note:</b><br/>
</p><ol>
<li>For simplicity, you could assume the input code (including the <b>any characters</b> mentioned above) only contain <code>letters</code>, <code>digits</code>, <code>'&lt;'</code>,<code>'&gt;'</code>,<code>'/'</code>,<code>'!'</code>,<code>'['</code>,<code>']'</code> and <code>' '</code>.</li>
</ol>
<p></p></div></div>

### Solution
