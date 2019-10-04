---
layout: post
title: 138. Copy List with Random Pointer
categories: Leetcode
description: 
keywords: [LinkedList, Hash Table]
---
### [Description]()
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

### Solution


```java
// Default hashcode() of object is based on memory location(openJDK)
// O(n) O(n) 74% 84%
class Solution {
    public Node copyRandomList(Node head) {        
        if (head == null) return null;
        Map<Node, Node> visited = new HashMap<>();
        
        // create new head
        Node oldNode = head;
        Node newNode = new Node(oldNode.val);
        visited.put(oldNode, newNode);
        
        while(oldNode != null) {
            newNode.random = getClone(oldNode.random, visited);
            newNode.next = getClone(oldNode.next, visited);
            oldNode = oldNode.next;
            newNode = newNode.next;
        }
        return visited.get(head);
    }
    
    private Node getClone(Node node, Map<Node, Node> visited) {
        if (node == null) return null;
        
        if (visited.containsKey(node)) {
            return visited.get(node);
        } else {
            visited.put(node, new Node(node.val, null, null));
            return visited.get(node);
        }
    }
}
```
