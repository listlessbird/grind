public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {

        int carry = 0;

        ListNode ptr = l1;
        ListNode ptr2 = l2;

        ListNode sumList = new ListNode(0);
        ListNode sumPtr = sumList;

        while (ptr != null || ptr2 != null || carry != 0) {

            int sum = carry;

            if(ptr != null) {
                sum += ptr.val;
                ptr = ptr.next;
            }

            if(ptr2 != null){
                sum += ptr2.val;
                ptr2 = ptr2.next;
            }

            carry = sum / 10;
            sumPtr.next = new ListNode(sum % 10);
            sumPtr = sumPtr.next;
        }

        return sumList.next;

    }

    public ListNode reverse(ListNode head) {

        if(head == null || head.next == null) return head;

        ListNode curr = head;
        ListNode prev = null;
        ListNode next = null;

        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
    private static void printLinkedList(ListNode head) {
        ListNode current = head;
        while (current != null) {
            System.out.print(current.val + " ");
            current = current.next;
        }
        System.out.println();
    }
}
