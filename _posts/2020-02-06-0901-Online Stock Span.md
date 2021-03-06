---
layout: post
title: 901. Online Stock Span
category: [Leetcode]
description: 
keywords: ['Stack', 'Leetcode', 'Medium']
---
### [901. Online Stock Span](https://leetcode.com/problems/online-stock-span)

#### Tags: 'Stack'

<div class="content__u3I1 question-content__JfgR"><div><p>Write a class <code>StockSpanner</code> which collects daily price quotes for some stock, and returns the <em>span</em> of that stock's price for the current day.</p>
<p>The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards) for which the price of the stock was less than or equal to today's price.</p>
<p>For example, if the price of a stock over the next 7 days were <code>[100, 80, 60, 70, 60, 75, 85]</code>, then the stock spans would be <code>[1, 1, 1, 2, 1, 4, 6]</code>.</p>
<p> </p>
<div>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong><span id="example-input-1-1">["StockSpanner","next","next","next","next","next","next","next"]</span>, <span id="example-input-1-2">[[],[100],[80],[60],[70],[60],[75],[85]]</span>
<strong>Output: </strong><span id="example-output-1">[null,1,1,1,2,1,4,6]</span>
<strong>Explanation: </strong>
First, S = StockSpanner() is initialized.  Then:
S.next(100) is called and returns 1,
S.next(80) is called and returns 1,
S.next(60) is called and returns 1,
S.next(70) is called and returns 2,
S.next(60) is called and returns 1,
S.next(75) is called and returns 4,
S.next(85) is called and returns 6.

Note that (for example) S.next(75) returned 4, because the last 4 prices
(including today's price of 75) were less than or equal to today's price.
</pre>
<p> </p>
<p><strong>Note:</strong></p>
<ol>
<li>Calls to <code>StockSpanner.next(int price)</code> will have <code>1 &lt;= price &lt;= 10^5</code>.</li>
<li>There will be at most <code>10000</code> calls to <code>StockSpanner.next</code> per test case.</li>
<li>There will be at most <code>150000</code> calls to <code>StockSpanner.next</code> across all test cases.</li>
<li>The total time limit for this problem has been reduced by 75% for C++, and 50% for all other languages.</li>
</ol>
</div>
</div></div>

### Solution

Monotonic Stack， time O(1) for each price, for each element get push and pop at most once. Space O(n) worst.

```java
class StockSpanner {
    private Stack<Integer> prices;
    private Stack<Integer> spans;
    public StockSpanner() {
        prices = new Stack<>();
        spans = new Stack<>();
    }
    
    public int next(int price) {
        int span = 1; // current element span is always 1
        while (!prices.isEmpty() && price >= prices.peek()) {
            span += spans.pop();
            prices.pop();
        }
        prices.push(price);
        spans.push(span);
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner obj = new StockSpanner();
 * int param_1 = obj.next(price);
 */
```