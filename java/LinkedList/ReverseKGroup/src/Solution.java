public class Solution {

    public ListNode reverseKGroup(ListNode head, int k) {

        ListNode temp = head;
        ListNode nextNode = null;
        ListNode prevNode = null;

        while (temp != null) {
            ListNode kthNode = getKthNode(temp, k);

            if (kthNode == null) {
                if(prevNode != null) {
                    prevNode.next = temp;
                }
                break;
            }

            nextNode = kthNode.next;

            kthNode.next = null;

            ListNode reversed = reverse(temp);

            if (temp == head) {
                head = reversed;
            } else {
                prevNode.next = reversed;
            }

            temp.next = nextNode;

            prevNode = temp;

            temp = nextNode;

        }
        return head;
    }

    public ListNode getKthNode(ListNode head, int k) {

        k -= 1;

        while (k > 0 && head != null) {
            k--;
            head = head.next;
        }
        return head;
    }

    public ListNode reverse(ListNode head) {
        if (head.next == null || head == null) return head;

        ListNode next = null;
        ListNode curr = head;
        ListNode prev = null;

        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

}
