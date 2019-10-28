---
layout: post
title: 刷题总结 常用Class与Medhod
category: [Leetcode]
description: 
keywords: ['总结']
---
# String Character char
1. `str.split(" ")`:  按照空格将字符串进行划分，得到字符串数组

注：这里使用的是正则表达式，当要将一片空格分开，可以采用str.split("\\s+")或者str.split(" +")

如果split的是一个空串，得到的数组长度还是为1

2. `str.substring(i, j)`: 得到字符串的子串 [ i, j )

3. `str.contains("s1")`: str中是否包含 s1字符串

4. `str.charAt(7)`: str在7位置上的char型字符

5. `str.trim(): 去除str两侧的空格  原字符串不变，要重新赋值给他  String s = str.trim() 应用：山羊拉丁文Goat Latin

6. 在java中防止转义字符是 要使用 `\`

7. replaceAll()：还有就是如果字符串中包含不需要的某几个字符时，可以使用replaceAll()方法去掉

    ```public String replaceAll(String regex, String replacement)```

8. Arrays工具类：将数组转成集合List需要借助Arrays工具类 `Arrays.asList()`. This method acts as bridge between array-based and collection-based APIs, in combination with `Collection.toArray()`.

9.  reverse()方法是StringBuilder的，不是String

    StringBuilder s -> s.toString()

    String s -> new StringBuilder(s)
10. 区分 Substring(3) 和 Subsequence(516)
11. 常用 Character 方法， 判断char
```
Character.isLetter()
Character.isDigit()
Character.isLetterOrDigit()
Character.isLowerCase()
Character.isUpperCase()
Character.isSpace()
Character.isWhitespace()
Character.getNumericValue() // parse char '123' to 123
```
12. `String.valueOf()` 将其他类型转为String， 包括 `boolean, char, char[], int, long, float, double, Object`
13. `Integer.parseInt()` 转化为int， ``

# Map
1. `map.keySet() map.values() map.enttrySet()`: 循环map
2. `Iterator<Map.Entry<String, String>> itr = gfg.entrySet().iterator(); ` 用 iterator 循环 map
   `while(itr.hasNext()) `

# Comparator
>  lambda expressions implement the only abstract function and therefore implement functional interfaces
> 
对比手动Comparator 与 Lambda function

```java
// Old way
Comparator<String> myComp = new Comparator<String>(){
    @Override
    public int compare(String s1, String s2) {
        // customized sorting, return -1 to put s1 before
    }
};
Arrays.sort(logs, myComp);

// Lambda way
Arrays.sort(logs, (s1, s2) -> {
    // the same customized sorting    
});
```

# Stack, Deque, ArrayDeque, LinkedList
`Deque<String> stack = new ArrayDeque<>();` check [here](https://www.techiedelight.com/iterate-over-deque-java-forward-backward/)

`stack.iterator()` will iterate top to bottom

`stack.descendingIterator()` will iterate bottom to top (the nature order)




# Regular Expression (Regex)
check [Here](https://www.vogella.com/tutorials/JavaRegularExpressions/article.html#common-matching-symbols)

# Backtracking 回溯算法
回溯算法说白了就是穷举法。不过回溯算法使用剪枝函数，剪去一些不可能到达最终状态（即答案状态）的节点，从而减少状态空间树节点的生成。
回溯法是一个既带有系统性又带有跳跃性的的搜索算法。它在包含问题的所有解的解空间树中，按照深度优先的策略，从根结点出发搜索解空间树。算法搜索至解空间树的任一结点时，总是先判断该结点是否肯定不包含问题的解。如果肯定不包含，则跳过对以该结点为根的子树的系统搜索，逐层向其祖先结点回溯。否则，进入该子树，继续按深度优先的策略进行搜索。

回溯法在用来求问题的所有解时，要回溯到根，且根结点的所有子树都已被搜索遍才结束。
而回溯法在用来求问题的任一解时，只要搜索到问题的一个解就可以结束。
这种以深度优先的方式系统地搜索问题的解的算法称为回溯法，它适用于解一些组合数较大的问题。
