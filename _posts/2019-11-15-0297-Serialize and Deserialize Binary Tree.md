---
layout: post
title: 297. Serialize and Deserialize Binary Tree
category: [Leetcode]
description: 
keywords: ['Tree', 'Design', 'Leetcode', 'Hard']
---
### [297. Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree)

#### Tags: 'Tree', 'Design'

<div class="content__u3I1 question-content__JfgR"><div><p>Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.</p>
<p>Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.</p>
<p><strong>Example: </strong></p>
<pre>You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as <code>"[1,2,3,null,null,4,5]"</code>
</pre>
<p><strong>Clarification:</strong> The above format is the same as <a href="/faq/#binary-tree">how LeetCode serializes a binary tree</a>. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.</p>
<p><strong>Note: </strong>Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.</p>
</div></div>

### Solution
方法1： 来自九章，BFS Iterative + Queue序列化和反序列化
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        // BFS using queue
        if (root == null) {
            return "{}";
        }
        
        List<TreeNode> queue = new ArrayList<>();
        queue.add(root);
        
        // iterate using index while adding elements
        for (int i = 0; i < queue.size(); i++) {
            TreeNode node = queue.get(i);
            if (node == null) {
                continue;
            }
            queue.add(node.left);
            queue.add(node.right);
        }
        
        // remove trailing nulls
        while(queue.get(queue.size() - 1) == null) {
            queue.remove(queue.size() - 1);
        }
        
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        sb.append(queue.get(0).val); // must have first 1
        for (int i = 1; i < queue.size(); i++) {
            if (queue.get(i) == null) {
                sb.append(",#");
            } else {
                sb.append(",");
                sb.append(queue.get(i).val);
            }
        }
        sb.append("}");
        return sb.toString();
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if (data == null || data.equals("{}")) {
            return null;
        }
        String[] vals = data.substring(1, data.length() - 1).split(",");
        List<TreeNode> queue = new ArrayList<>();
        TreeNode root = new TreeNode(Integer.parseInt(vals[0]));
        queue.add(root);
        
        int index = 0; // current parent to append
        boolean isLeft = true;
        for (int i = 1; i < vals.length; i++) {
            if (!vals[i].equals("#")) {
                TreeNode node = new TreeNode(Integer.parseInt(vals[i]));
                if (isLeft) {
                    queue.get(index).left = node;
                } else {
                    queue.get(index).right = node;
                }
                queue.add(node);
            }
            if (!isLeft) {
                index++; // increment index when two times
            }
            isLeft = !isLeft; // flip every time
        }
        return root;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
```

方法2：[leetcode](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/discuss/74253/Easy-to-understand-Java-Solution)
DFS + Recursive
```java
public class Codec {
    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        return serialize(root, sb).toString();
    }
    
    private StringBuilder serialize(TreeNode root, StringBuilder sb) {
        if (root == null) { // end case
            sb.append("#");
            return sb;
        }
        sb.append(root.val).append(",");
        serialize(root.left, sb).append(",");
        serialize(root.right, sb);
        return sb;
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        Queue<String> queue = new LinkedList<>();
        queue.addAll(Arrays.asList(data.split(",")));
        return deserialize(queue);
    }
    
    private TreeNode deserialize(Queue<String> queue) {
        String val = queue.poll();
        if ("#".equals(val)) {
            return null;
        }
        TreeNode root = new TreeNode(Integer.valueOf(val));
        root.left = deserialize(queue);
        root.right = deserialize(queue);
        return root;
    }
}

```
