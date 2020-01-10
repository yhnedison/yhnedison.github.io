---
layout: post
title: 307. Range Sum Query - Mutable
category: [Leetcode]
description: 
keywords: ['Binary Indexed Tree', 'Segment Tree', 'Leetcode', 'Medium']
---
### [307. Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable)

#### Tags: 'Binary Indexed Tree', 'Segment Tree'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <i>nums</i>, find the sum of the elements between indices <i>i</i> and <i>j</i> (<i>i</i> ≤ <i>j</i>), inclusive.</p>
<p>The <i>update(i, val)</i> function modifies <i>nums</i> by updating the element at index <i>i</i> to <i>val</i>.</p>
<p><b>Example:</b></p>
<pre>Given nums = [1, 3, 5]

sumRange(0, 2) -&gt; 9
update(1, 2)
sumRange(0, 2) -&gt; 8
</pre>
<p><b>Note:</b></p>
<ol>
<li>The array is only modifiable by the <i>update</i> function.</li>
<li>You may assume the number of calls to <i>update</i> and <i>sumRange</i> function is distributed evenly.</li>
</ol>
</div></div>

### Solution
***线段树 Segment Tree*** https://www.jianshu.com/p/91f2c503e62f

有时遇到这种问题：给你一个int[] nums，需要两种操作：
1. update nums[i]
2. 查询某个区间内的最大值（minimum, maximum, sum, greatest common divisor, least common denominator）

一个朴素算法是：对于update，直接`nums[i] = x`, 时间复杂度`O(1)`. 对于aggreation，直接遍历[start, end], 复杂度`O(n)`

缺点：query的最大复杂度`O(N)`，如果有Q个query，`O(QN)`

方法1： TreeNode 实现 Segment Tree, Update 和 Query 都是`O(logN)` `33% 62%`
```java
class NumArray {
    private class SegmentTreeNode {
        private int start, end, sum;
        private SegmentTreeNode left, right;
        private SegmentTreeNode(int start, int end, int sum) {
            this.start = start;
            this.end = end;
            this.sum = sum;
            this.left = null;
            this.right = null;
        }
    }
    
    private SegmentTreeNode root;
    public NumArray(int[] nums) {
        this.root = buildHelper(0, nums.length - 1, nums);
    }
    // recursive build
    private SegmentTreeNode buildHelper(int left, int right, int[] A) {
        if (left > right) return null;

        SegmentTreeNode root = new SegmentTreeNode(left, right, A[left]); // initialize root fields
        if (left == right) return root;
        
        int mid = left + (right - left) / 2;
        root.left = buildHelper(left, mid, A);
        root.right = buildHelper(mid + 1, right, A);
        root.sum = root.left.sum + root.right.sum;
        /*
        如果求区间最大值： root.max = Math.max(root.left.max, root.right.max)
        */
        return root;
    }
    
    public void update(int i, int val) {
        updateHelper(root, i, val);
    }
    
    private void updateHelper(SegmentTreeNode root, int index, int value) {
        if (root.start == root.end && root.start == index) {
            root.sum = value;
            return;
        }
        int mid = (root.start + root.end) / 2; // 判断左区间还是右区间更新
        if (index <= mid) { // 左区间更新
            updateHelper(root.left, index, value);
            root.sum = root.right.sum + root.left.sum;
        } else { // 右区间更新
            updateHelper(root.right, index, value);
            root.sum = root.left.sum + root.right.sum;
        }
        return;
    }
    
    public int sumRange(int i, int j) {
        return sumRangeHelper(this.root, i, j);
    }
    
    private int sumRangeHelper(SegmentTreeNode root, int i, int j) {
        if (i <= root.start && root.end <= j) {
            return root.sum;
        }
        int mid = (root.start + root.end) / 2;
        int ans = 0;
        if (mid >= i) {
            ans = ans + sumRangeHelper(root.left, i, j);
        }
        if (mid + 1 <= j) {
            ans = ans + sumRangeHelper(root.right, i, j);
        }
        return ans;
    }
}
```

方法2： Array实现Segment Tree。 `71% 100%`

Index `i` children are `2i` and `2i + 1`
```java
class NumArray {
    private int[] tree;
    private int n;
    public NumArray(int[] nums) {
        n = nums.length;
        if (n > 0) {
            tree = new int[n * 2];
            
            // populate index n ~ 2n-1 with nums
            for (int i = n, j = 0; i < 2*n; i++, j++) {
                tree[i] = nums[j];
            }
            for (int i = n-1; i > 0; i--) { // populate the rest of tree[]
                tree[i] = tree[i*2] + tree[i*2 + 1];
            }
        }
    }
    
    public void update(int i, int val) {
        i = i + n; // actual position = index + n
        tree[i] = val;
        while (i > 0) { // index 0 is always empty
            int left = i;
            int right = i;
            if (i % 2 == 0) { //even, means left node
                right = i + 1;
            } else { // odd, means right node, update left
                left = i - 1;
            }
            tree[i/2] = tree[left] + tree[right];
            i = i / 2;
        }
    }
    
    public int sumRange(int i, int j) {
        i += n;
        j += n;
        int sum = 0;
        while (i <= j) {
            if ((i%2) == 1) {
                sum += tree[i];
                i++;
            }
            if ((j%2) == 0) {
                sum += tree[j];
                j--;
            }
            i = i/2;
            j = j/2;
        }
        return sum;
    }
}
```

方法3： 可以用