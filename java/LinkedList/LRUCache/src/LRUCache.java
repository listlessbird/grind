import java.util.HashMap;
import java.util.List;

public class LRUCache {

    class ListNode {
        int key;
        int val;
        ListNode next;
        ListNode prev;

        ListNode(int key, int val) {
            this.val = val;
            this.key = key;
        }
    }

    HashMap<Integer, ListNode> cache;
    int capacity;
    int count;
    ListNode head, tail;
// tail has the most recent
// head has the least recent

    void insert(ListNode node) {

        node.prev = tail.prev;
        tail.prev.next = node;
        tail.prev = node;
        node.next = tail;
    }

    void remove(ListNode node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    public LRUCache(int capacity) {
        this.count = 0;
        this.capacity = capacity;
        this.cache = new HashMap<>(capacity);


        this.head = new ListNode(0,0);
        this.tail = new ListNode(0,0);

        head.next = tail;
        tail.prev = head;
    }

    public void put(int key, int value) {
        if(cache.containsKey(key)) {
            ListNode hit = cache.get(key);
            remove(hit);
            cache.remove(key);
        } else if (cache.size() >= capacity) {
            cache.remove(head.next.key);
            remove(head.next);
        }

        ListNode newNode = new ListNode(key, value);
        cache.put(key, newNode);
        insert(newNode);
    }

    public int get(int key) {
        if(cache.containsKey(key)) {
            ListNode hit = cache.get(key);
//            move it to most used node aka to tail
           remove(hit);
           insert(hit);

            return hit.val;
        }
        return -1;
    }
}
