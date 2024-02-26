import java.util.HashMap;

public class Solution {
    public Node copyRandomList(Node head) {

        HashMap<Node, Node> map = new HashMap<>();

//        store the nodes in a hashmap with hash of nodes

        Node k = head;
        while (k != null) {
            Node curr = new Node(k.val);
            map.put(k,curr);
            k = k.next;
        }
//    retrieve the nodes
        Node l = head;
        while(l != null){
            Node copy = map.get(l);
            copy.next = map.get(l.next);
            copy.random = map.get(l.random);
            l = l.next;
        }

        return map.get(head);

   }
}
