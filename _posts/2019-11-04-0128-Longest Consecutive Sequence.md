---
layout: post
title: 128. Longest Consecutive Sequence
category: [Leetcode]
description: 
keywords: ['Array', 'Union Find', 'Leetcode', 'Hard']
---
### [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence)

#### Tags: 'Array', 'Union Find'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an unsorted array of integers, find the length of the longest consecutive elements sequence.</p>
<p>Your algorithm should run in O(<em>n</em>) complexity.</p>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong> [100, 4, 200, 1, 3, 2]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The longest consecutive elements sequence is <code>[1, 2, 3, 4]</code>. Therefore its length is 4.
</pre>
</div></div>

### Solution
Dynamically build string using HashSet
```java
public int longestConsecutive(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num: nums) {
        set.add(num);
    }
    
    int result = 0;
    for (int num: nums) {
        if (!set.contains(num-1)) { // make sure it's start
            int curr = num;
            int currStreak = 1;
            
            while (set.contains(curr + 1)) {
                curr += 1;
                currStreak += 1;
            }
            result = Math.max(result, currStreak);
        }
    }
    return result;
}

```