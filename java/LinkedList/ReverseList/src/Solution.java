public class Solution {
    public ListNode reverseList(ListNode head) {
        System.out.println(head);
        if (head == null || head.next == null) return head;

        ListNode current = head;
        ListNode prev = null;
        ListNode next = null;

       while (current != null) {
           next = current.next;
           current.next = prev;
           prev = current;
           current = next;
       }
        return prev;
    }

    public ListNode reverseListRecursive(ListNode head) {
        return recurseAndReverse(null, head);
    }

    public ListNode recurseAndReverse(ListNode prev, ListNode curr) {

        if(curr == null) return prev;

        ListNode newNext = curr.next;
        curr.next = prev;
        prev = curr;

        return recurseAndReverse(prev, newNext);

    }
}
