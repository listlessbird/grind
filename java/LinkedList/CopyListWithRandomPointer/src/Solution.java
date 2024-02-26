import java.util.HashMap;

public class Solution {


    public void printLL(Node head) {
        Node v = head;

        while(v != null) {
            System.out.print(v.val + " -> ");
            v = v.next;
        }
        System.out.println("null");
    }

//    without extra memory space soln
    public Node copyRandomList2(Node head) {

        Node ptr = head;

        while (ptr != null) {
            Node newNode = new Node(ptr.val);
            newNode.next = ptr.next;
            ptr.next = newNode;
            ptr = ptr.next.next;
        }

        ptr = head;

        while (ptr != null) {
            if(ptr.random != null) {
                ptr.next.random = ptr.random.next;
            }
            ptr = ptr.next.next;
        }


//        take out the list from the original

        Node dummy = new Node(0);
        Node temp = dummy;

        ptr = head;

        Node qk;

        while (ptr != null) {
            qk = ptr.next.next;
            temp.next = ptr.next;
            ptr.next = qk;
            temp = temp.next;
            ptr = qk;
        }

        return dummy.next;

    }


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
