---
layout: post
title: 239. Sliding Window Maximum
category: [Leetcode]
description: 
keywords: ['Heap', 'Sliding Window', 'Leetcode', 'Hard', 'Monotonic Queue']
---
### [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum)

#### Tags: 'Heap', 'Sliding Window'

<div class="content__u3I1 question-content__JfgR"><div><p>Given an array <em>nums</em>, there is a sliding window of size <em>k</em> which is moving from the very left of the array to the very right. You can only see the <em>k</em> numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.</p>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong> <em>nums</em> = <code>[1,3,-1,-3,5,3,6,7]</code>, and <em>k</em> = 3
<strong>Output: </strong><code>[3,3,5,5,6,7] 
<strong>Explanation: 
</strong></code>
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       <strong>3</strong>
 1 [3  -1  -3] 5  3  6  7       <strong>3</strong>
 1  3 [-1  -3  5] 3  6  7      <strong> 5</strong>
 1  3  -1 [-3  5  3] 6  7       <strong>5</strong>
 1  3  -1  -3 [5  3  6] 7       <strong>6</strong>
 1  3  -1  -3  5 [3  6  7]      <strong>7</strong>
</pre>
<p><strong>Note: </strong><br/>
You may assume <em>k</em> is always valid, 1 ≤ k ≤ input array's size for non-empty array.</p>
<p><strong>Follow up:</strong><br/>
Could you solve it in linear time?</p></div></div>

### Solution

Brute force：length of out put is n-k+1,  `Time O((n-k+1)*k)  O(nk) Space O(1)`

```java
public int[] maxSlidingWindow(int[] nums, int k) {
    if (k == 0) return new int[0];
    
    int[] result = new int[nums.length - k + 1];
    for (int i = k - 1; i < nums.length; i++) {
        int max = nums[i];
        for (int j = 1; j < k; j++) { // 
            if (nums[i - j] > max) max = nums[i - j];
        }
        result[i - (k - 1)] = max;
    } 
    return result;
}
```

MaxHeap Solution. Since we know each time which number to add/remove, just maintain a MaxHeap of size k. `Time O(nlogk) Space O(k)`
```java
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (k == 0) return new int[0];
        
        int[] result = new int[nums.length - k + 1];
        PriorityQueue<Integer> heap = new PriorityQueue<Integer>(new Comparator<Integer>() { // Max heap
            @Override
            public int compare(Integer x, Integer y) {
                return Integer.compare(y, x);
            }
        });
        
        for (int i = 0; i < k; i++) {
            heap.add(nums[i]);
        }
        result[0] = heap.peek();
        
        for (int i = k; i < nums.length; i++) {
            heap.remove(nums[i - k]);
            heap.add(nums[i]);
            result[i - k + 1] = heap.peek();
        }
        return result;
    }
}
```

Solution 3, best. Using Monotonic Queue ![](https://zxi.mytechroad.com/blog/wp-content/uploads/2018/01/239-ep159-2.png)

`Time O(n) Space O(k)`

```java
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (k == 0) return new int[0];
        
        int[] result = new int[nums.length - k + 1];
        Deque<Integer> mono = new LinkedList<>(); // storing index
        for (int i = 0; i < nums.length; i++) {
            while (mono.size() > 0 && nums[i] > mono.getLast()) {
                mono.removeLast();
            }
            mono.addLast(i);
            if (i - k + 1 >= 0) { // can be add to result
                result[i - k + 1] = nums[mono.getFirst()];
            }
            if (i - k + 1 >= mono.getFirst()) { // remove first if size reach limit k
                mono.removeFirst();
            }
        }
        return result;
    }
}
```