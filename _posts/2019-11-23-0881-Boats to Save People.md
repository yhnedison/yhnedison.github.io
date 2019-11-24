---
layout: post
title: 881. Boats to Save People
category: [Leetcode]
description: 
keywords: ['Two Pointers', 'Greedy', 'Leetcode', 'Medium']
---
### [881. Boats to Save People](https://leetcode.com/problems/boats-to-save-people)

#### Tags: 'Two Pointers', 'Greedy'

<div class="content__u3I1 question-content__JfgR"><div><p>The <code>i</code>-th person has weight <code>people[i]</code>, and each boat can carry a maximum weight of <code>limit</code>.</p>
<p>Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most <code>limit</code>.</p>
<p>Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)</p>
<p> </p>
<div>
<p><strong>Example 1:</strong></p>
<pre><strong>Input: </strong>people = <span id="example-input-1-1">[1,2]</span>, limit = <span id="example-input-1-2">3</span>
<strong>Output: </strong><span id="example-output-1">1</span>
<strong>Explanation: </strong>1 boat (1, 2)
</pre>
<div>
<p><strong>Example 2:</strong></p>
<pre><strong>Input: </strong>people = <span id="example-input-2-1">[3,2,2,1]</span>, limit = <span id="example-input-2-2">3</span>
<strong>Output: </strong><span id="example-output-2">3</span>
<strong>Explanation</strong>: 3 boats (1, 2), (2) and (3)
</pre>
<div>
<p><strong>Example 3:</strong></p>
<pre><strong>Input: </strong>people = <span id="example-input-3-1">[3,5,3,4]</span>, limit = <span id="example-input-3-2">5</span>
<strong>Output: </strong><span id="example-output-3">4</span>
<strong>Explanation</strong>: 4 boats (3), (3), (4), (5)</pre>
<p><strong>Note</strong>:</p>
<ul>
<li><code>1 &lt;= people.length &lt;= 50000</code></li>
<li><code>1 &lt;= people[i] &lt;= limit &lt;= 30000</code></li>
</ul>
</div>
</div>
</div>
</div></div>

### Solution

```java
public List<String> subdomainVisits(String[] cpdomains) {
    Map<String, Integer> map = new HashMap<>();
    for (String s: cpdomains) {
        count(s, map);
    }
    
    List<String> result = new ArrayList<>();
    for (String s: map.keySet()) {
        result.add(String.valueOf(map.get(s)) + " " + s);
    }
    return result;
}

private void count(String s, Map<String, Integer> map) {
    String[] split = s.split("\\s+");
    int count = Integer.valueOf(split[0]);
    String[] domains = split[1].split("\\.");
    
    String curr = "";
    for (int i = domains.length - 1; i >= 0; i--) {
        curr = domains[i] + (i == domains.length - 1 ? "" : ".") + curr;
        map.put(curr, map.getOrDefault(curr, 0) + count);
    }
}
```