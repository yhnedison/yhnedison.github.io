---
layout: post
title: 75. Sort Colors
category: [Leetcode]
description: 
keywords: ['Array', 'Two Pointers', 'Sort', 'Leetcode', 'Medium']
---
### [75. Sort Colors](https://leetcode.com/problems/sort-colors)

#### Tags: 'Array', 'Two Pointers', 'Sort'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an array with <em>n</em> objects colored red, white or blue, sort them <strong><a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a> </strong>so that objects of the same color are adjacent, with the colors in the order red, white and blue.</p>
<p>Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.</p>
<p><strong>Note:</strong> You are not suppose to use the library's sort function for this problem.</p>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong> [2,0,2,1,1,0]
<strong>Output:</strong> [0,0,1,1,2,2]</pre>
<p><strong>Follow up:</strong></p>
<ul>
<li>A rather straight forward solution is a two-pass algorithm using counting sort.<br/>
	First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.</li>
<li>Could you come up with a one-pass algorithm using only constant space?</li>
</ul>
</div></div>

### Solution