---
layout: post
title: 31. Next Permutation
category: [Leetcode]
description: 
keywords: ['Array', 'Leetcode', 'Medium']
---
### [31. Next Permutation](https://leetcode.com/problems/next-permutation)

#### Tags: 'Array'

<div class="content__u3I1 question-content__JfgR"><div><p>Implement <strong>next permutation</strong>, which rearranges numbers into the lexicographically next greater permutation of numbers.</p>
<p>If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).</p>
<p>The replacement must be <strong><a href="http://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a></strong> and use only constant extra memory.</p>
<p>Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.</p>
<p><code>1,2,3</code> → <code>1,3,2</code><br/>
<code>3,2,1</code> → <code>1,2,3</code><br/>
<code>1,1,5</code> → <code>1,5,1</code></p>
</div></div>

### Solution
如果每一个digit 都大于下一个digit e.g. $9876543$ 他就是最大的permutation. 

如果有任何一个digit x 小于下一个digit，e.g.$9837654$, 我们要发现他之后rightmost近并且大于他的digit，并且交换.

然后Reverse after x.

$O(n) O(1)$
![图解](https://soulmachine.gitbooks.io/algorithm-essentials/java/images/next-permutation.png)
```java
public void nextPermutation(int[] nums) {
    if (nums == null || nums.length == 0) return;
    
    int i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i+1]) {
        i--;
    }
    
    if (i >= 0) { // if not entirely descending(no larger permutation)
        int j = nums.length - 1;
        while(nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }
    reverse(nums, i+1, nums.length - 1);
}

private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

private void reverse(int[] nums, int i, int j) {
    while (i < j) {
        swap(nums, i++, j--);
    }
}
```