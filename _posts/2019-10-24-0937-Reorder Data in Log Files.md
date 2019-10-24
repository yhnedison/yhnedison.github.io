---
layout: post
title: 937. Reorder Data in Log Files
category: [Leetcode]
description: 
keywords: ['String', 'Leetcode', 'Easy', 'Sort']
---
### [937. Reorder Data in Log Files](https://leetcode.com/problems/reorder-data-in-log-files)

#### Tags: 'String' 'Sort'

<div class="content__u3I1 question-content__JfgR"><div><p>You have an array of <code>logs</code>.  Each log is a space delimited string of words.</p>
<p>For each log, the first word in each log is an alphanumeric <em>identifier</em>.  Then, either:</p>
<ul>
<li>Each word after the identifier will consist only of lowercase letters, or;</li>
<li>Each word after the identifier will consist only of digits.</li>
</ul>
<p>We will call these two varieties of logs <em>letter-logs</em> and <em>digit-logs</em>.  It is guaranteed that each log has at least one word after its identifier.</p>
<p>Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.</p>
<p>Return the final order of the logs.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
<strong>Output:</strong> ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ol>
<li><code>0 &lt;= logs.length &lt;= 100</code></li>
<li><code>3 &lt;= logs[i].length &lt;= 100</code></li>
<li><code>logs[i]</code> is guaranteed to have an identifier, and a word after the identifier.</li>
</ol>
</div></div>

### Solution
Use Lambda function
```java
public String[] reorderLogFiles(String[] logs) {
    Arrays.sort(logs, (s1, s2) -> {
        String[] split1 = s1.split(" ", 2);
        String[] split2 = s2.split(" ", 2);

        boolean isDigit1 = Character.isDigit(split1[1].charAt(0));
        boolean isDigit2 = Character.isDigit(split2[1].charAt(0));

        if(!isDigit1 && !isDigit2) {
            // both letter-logs. 
            int comp = split1[1].compareTo(split2[1]);
            if (comp == 0) return split1[0].compareTo(split2[0]);
            else return comp;
        } else if (isDigit1 && isDigit2) {
            // both digit-logs. So keep them in original order
            return 0; 
        } else if (isDigit1 && !isDigit2) {
            // first is digit, second is letter. bring letter to forward.
            return 1;
        } else {
            //first is letter, second is digit. keep them in this order.
            return -1; 
        }
    });
    return logs;
}
```

```java
public String[] reorderLogFiles(String[] logs) {
    Comparator<String> myComp = new Comparator<String>(){
        @Override
        public int compare(String s1, String s2) {
            String[] split1 = s1.split(" ", 2);
            String[] split2 = s2.split(" ", 2);
            
            boolean isDigit1 = Character.isDigit(split1[1].charAt(0));
            boolean isDigit2 = Character.isDigit(split2[1].charAt(0));
            
            if (!isDigit1 && !isDigit2) {
                int comp = split1[1].compareTo(split2[1]);
                if (comp == 0) {
                    comp = split1[0].compareTo(split2[0]);
                }
                return comp;
            } else if (isDigit1 && isDigit2) {
                return 0; // both are digits, keep original order
            } else if (isDigit1) {
                return 1; // s1 is digit, put behand
            } else {
                return -1;
            }
        }
    };
    
    Arrays.sort(logs, myComp);
    return logs;
}
```