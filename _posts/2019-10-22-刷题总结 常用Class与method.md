---
layout: post
title: 刷题总结 常用Class与Medhod
category: [Leetcode]
description: 
keywords: ['总结']
---
# String Character
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

    其中第一个参数是一个正则表达式，表示替换和regex中相匹配的所有字符串。

    区别于replace(),这个方法中传入的两个就是普通的字符串

    ```public String replace(char oldChar,char newChar)```

8. Arrays工具类：将数组转成集合List需要借助Arrays工具类 `Arrays.asList()`. This method acts as bridge between array-based and collection-based APIs, in combination with `Collection.toArray()`.

9.  reverse()方法是StringBuilder的，不是String

    StringBuilder s -> s.toString()

    String s -> new StringBuilder(s)

# Map
1. `map.keySet() map.values() map.enttrySet()`: 循环map
2. `Iterator<Map.Entry<String, String>> itr = gfg.entrySet().iterator(); ` 用 iterator 循环 map
   `while(itr.hasNext()) `