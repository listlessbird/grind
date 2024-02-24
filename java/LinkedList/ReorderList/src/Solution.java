import java.util.ArrayList;

public class Solution {

    public void reorderList(ListNode head) {

        if(head == null || head.next == null) return;

        ListNode middle = middle(head);
        ListNode reversed = reverse(middle.next);
        middle.next = null;

//        1 2 3
//          \|\|
//           5 4

        ListNode start = head;
        ListNode currentSecondHalf = reversed;
        ListNode i = null;
        ListNode j = null;

        while (start != null && currentSecondHalf != null) {

            i = start.next;
            j = currentSecondHalf.next;

            start.next = currentSecondHalf;
            currentSecondHalf.next = i;

            start = i;
            currentSecondHalf =j;
        }

    }

    public ListNode middle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return (fast.next != null) ? slow.next: slow;
    }

    public ListNode reverse(ListNode head) {

        if(head == null || head.next == null) return head;

        ListNode current = head;
        ListNode prev = null;
        ListNode fwd = null;

        while (current != null) {
            fwd = current.next;
            current.next = prev;
            prev = current;
            current =fwd;
        }
        return prev;
    }

   public static void main(String[] args) {
        Solution solution = new Solution();

        ListNode head1 = createLinkedList(new int[]{1, 2, 3, 4});
        System.out.println("Original list:");
        printLinkedList(head1);
        solution.reorderList(head1);
        System.out.println("Reordered list:");
        printLinkedList(head1);
        System.out.println();

        ListNode head2 = createLinkedList(new int[]{1, 2, 3, 4, 5});
        System.out.println("Original list:");
        printLinkedList(head2);
        solution.reorderList(head2);
        System.out.println("Reordered list:");
        printLinkedList(head2);
        System.out.println();
    }
    private static ListNode createLinkedList(int[] values) {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;
        for (int val : values) {
            current.next = new ListNode(val);
            current = current.next;
        }
        return dummy.next;
    }

    private static void printLinkedList(ListNode head) {
        ListNode current = head;
        while (current != null) {
            System.out.print(current.val + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }

}
