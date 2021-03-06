---
layout: post
title: 121. Best Time to Buy and Sell Stock
category: [Leetcode]
description: 
keywords: ['Array', 'Dynamic Programming', 'Leetcode', 'Easy']
---
### [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)

#### Tags: 'Array', 'Dynamic Programming'

<div class="content__u3I1 question-content__JfgR"><div><p>Say you have an array for which the <em>i</em><sup>th</sup> element is the price of a given stock on day <em>i</em>.</p>
<p>If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.</p>
<p>Note that you cannot sell a stock before you buy one.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> [7,1,5,3,6,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> In this case, no transaction is done, i.e. max profit = 0.
</pre>
</div></div>

### Solution
```java
public int maxProfit(int[] prices) {
    // One pass while maintaining two variable
    // minPrice: currently recorded min price 
    // maxProfit: currently recorded max profit
    
    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;
    for (int p: prices) {
        if (p < minPrice) {
            minPrice = p;
        } else if (p - minPrice > maxProfit) {
            maxProfit = p - minPrice;
        }
    }
    return maxProfit;
}
```