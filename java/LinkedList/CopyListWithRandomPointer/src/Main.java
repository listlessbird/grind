
public class Main {
    public static void main(String[] args) {
        int[][] list1 = {{7, -1}, {13, 0}, {11, 4}, {10, 2}, {1, 0}};
        int[][] list2 = {{1, 1}, {2, 1}};
        int[][] list3 = {{3, -1}, {3, 0}, {3, -1}};

        Node head1 = createList(list1);
        Node head2 = createList(list2);
        Node head3 = createList(list3);

        Solution soln = new Solution();

        Node k = soln.copyRandomList2(head1);

    }

    private static Node createList(int[][] arr) {
        if (arr == null || arr.length == 0) return null;

        Node[] nodes = new Node[arr.length];
        for (int i = 0; i < arr.length; i++) {
            nodes[i] = new Node(arr[i][0]);
        }

        for (int i = 0; i < arr.length; i++) {
            if (arr[i][1] != -1) {
                nodes[i].random = nodes[arr[i][1]];
            }
            if (i < arr.length - 1) {
                nodes[i].next = nodes[i + 1];
            }
        }

        return nodes[0];
    }

    private static void printList(Node head) {
        Node current = head;
        while (current != null) {
            System.out.print("(" + current.val + ", ");
            if (current.random != null)
                System.out.print(current.random.val);
            else
                System.out.print("null");
            System.out.print(") -> ");
            current = current.next;
        }
        System.out.println("null");
    }
}
