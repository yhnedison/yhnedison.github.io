---
layout: post
title: 379. Design Phone Directory
category: [Leetcode]
description: 
keywords: ['Linked List', 'Design', 'Leetcode', 'Medium']
---
### [379. Design Phone Directory](https://leetcode.com/problems/design-phone-directory)

#### Tags: 'Linked List', 'Design'

<div class="content__u3I1 question-content__JfgR"><div><p>Design a Phone Directory which supports the following operations:</p>
<p>
</p><ol>
<li><code>get</code>: Provide a number which is not assigned to anyone.</li>
<li><code>check</code>: Check if a number is available or not.</li>
<li><code>release</code>: Recycle or release a number.</li>
</ol>
<p></p>
<p><b>Example:</b>
</p><pre>// Init a phone directory containing a total of 3 numbers: 0, 1, and 2.
PhoneDirectory directory = new PhoneDirectory(3);

// It can return any available phone number. Here we assume it returns 0.
directory.get();

// Assume it returns 1.
directory.get();

// The number 2 is available, so return true.
directory.check(2);

// It returns 2, the only number that is left.
directory.get();

// The number 2 is no longer available, so return false.
directory.check(2);

// Release number 2 back to the pool.
directory.release(2);

// Number 2 is available again, return true.
directory.check(2);
</pre>
<p></p></div></div>

### Solution
```java
class PhoneDirectory {

    Set<Integer> used = new HashSet<Integer>();
    Queue<Integer> available = new LinkedList<Integer>();
    int max;
    public PhoneDirectory(int maxNumbers) {
        max = maxNumbers;
        for (int i = 0; i < maxNumbers; i++) {
            available.offer(i);
        }
    }
    
    public int get() {
        Integer ret = available.poll();
        if (ret == null) {
            return -1;
        }
        used.add(ret);
        return ret;
    }
    
    public boolean check(int number) {
        if (number >= max || number < 0) {
            return false;
        }
        return !used.contains(number);
    }
    
    public void release(int number) {
        if (used.remove(number)) {
            available.offer(number);
        }
    }
}
```