---
layout: post
category: Leetcode
description: 
keywords: ['Hash Table', 'Design', 'Leetcode', 'Medium']
---
### [288. Unique Word Abbreviation](https://leetcode.com/problems/unique-word-abbreviation)

#### Tags: 'Hash Table', 'Design'

<div class="content__u3I1 question-content__JfgR"><div><p>An abbreviation of a word follows the form &lt;first letter&gt;&lt;number&gt;&lt;last letter&gt;. Below are some examples of word abbreviations:</p>
<pre>a) it                      --&gt; it    (no abbreviation)

     1
     ↓
b) d|o|g                   --&gt; d1g

              1    1  1
     1---5----0----5--8
     ↓   ↓    ↓    ↓  ↓    
c) i|nternationalizatio|n  --&gt; i18n

              1
     1---5----0
     ↓   ↓    ↓
d) l|ocalizatio|n          --&gt; l10n
</pre>
<p>Assume you have a dictionary and given a word, find whether its abbreviation is unique in the dictionary. A word's abbreviation is unique if no <i>other</i> word from the dictionary has the same abbreviation.</p>
<p><strong>Example:</strong></p>
<pre>Given dictionary = [ "deer", "door", "cake", "card" ]

isUnique("dear") -&gt; <code>false</code>
isUnique("cart") -&gt; <code>true</code>
isUnique("cane") -&gt; <code>false</code>
isUnique("make") -&gt; <code>true</code>
</pre>
</div></div>

### Solution
