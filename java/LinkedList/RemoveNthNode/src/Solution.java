public class Solution {
    public ListNode removeNthNodeFromEnd(ListNode head, int n) {

        ListNode slow = head;
        ListNode fast = head;

        ListNode dummy = new ListNode(0);
        dummy.next = head;


        int k = 1;
        while (k <= n) {
            fast = fast.next;
            k++;
        }

        if(fast == null) return head.next;

        while(fast.next != null) {
            slow = slow.next;
            fast = fast.next;
        }

        ListNode removed = slow.next;
        slow.next = slow.next.next;
        removed.next = null;

        return dummy.next;

    }
}
